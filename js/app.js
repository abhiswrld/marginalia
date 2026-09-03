/* =========================================================
   app.js — the spine
   ui state, the hash router, the render loop, masthead,
   settings modal, toast & modal helpers — and the boot
   calls at the very bottom. This is the ONLY file that
   executes anything at load time.
   ========================================================= */

let ui = { view: 'library', pid: null };
let session = null;    // active practice-room session
let draft = null;      // problem being created / edited
let tickId = null;     // practice-room clock interval
let FLOW = {};         // walkthrough state, per approach

/* ---------- router ---------- */
function go(h) { if (location.hash === h) { route(); } else { location.hash = h; } }
window.addEventListener('hashchange', route);

/* hash → view:
   #library · #p/<id> · #new · #edit/<id> · #practice · #practice/<id> */
function route() {
    const h = (location.hash || '#library').slice(1);
    const parts = h.split('/'), a = parts[0], b = parts[1];
    clearInterval(tickId); tickId = null; FLOW = {};
    if (a === 'p' && store.byId(b)) { ui = { view: 'problem', pid: b }; }
    else if (a === 'new') {
        if (!PREFILL_DRAFT) draft = blankProblem();   // keep the pre-filled draft from a curriculum row
        PREFILL_DRAFT = false;
        ui = { view: 'form' };
    }
    else if (a === 'edit' && store.byId(b)) { draft = draftFromProblem(store.byId(b)); ui = { view: 'form' }; }
    else if (a === 'practice') {
        if (b && store.byId(b) && (!session || session.pid !== b || session.done)) startPractice(b);
        if (!b && session && session.done) session = null;
        ui = { view: 'practice' };
    }
    else if (a === 'progress') { ui = { view: 'progress' }; }
    else { session = null; ui = { view: 'library' }; }
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); }
    render();
}

function curProblem() { return store.byId(ui.pid); }

/* ---------- masthead ---------- */
function mastheadHTML() {
    const on = v => (v.includes(ui.view) ? 'on' : '');
    return `<header class="mast">
    <div class="brand" onclick="go('#library')">
      <h1><span class="bnm">${esc(brand.name)}</span></h1>${svgSquiggle(238, 8, 'swg bswg')}
      ${brand.tag ? `<p class="sub">${esc(brand.tag)}</p>` : ''}
    </div>
    <nav class="nav">
      <button class="${on(['library', 'problem', 'form'])}" onclick="go('#library')">notebook ${svgSquiggle(60, 7, 'swg nswg')}</button>
      <button class="${on(['practice'])}" onclick="go('#practice')">practice ${svgSquiggle(60, 7, 'swg nswg')}</button>
      <button class="${on(['progress'])}" onclick="go('#progress')">progress ${svgSquiggle(64, 7, 'swg nswg')}</button>
      <button class="setbtn" onclick="openSettings()" title="customize the notebook" aria-label="customize the notebook"><i data-lucide="sliders-horizontal"></i></button>
    </nav>
  </header>`;
}

/* ---------- render ---------- */
function render() {
    clearInterval(tickId); tickId = null;
    const app = $('#app');
    let view = '';
    if (ui.view === 'library') view = viewLibrary();
    else if (ui.view === 'problem') view = viewProblem(curProblem());
    else if (ui.view === 'form') view = viewForm();
    else if (ui.view === 'practice') view = viewPractice();
    else if (ui.view === 'progress') view = viewProgress();
    app.innerHTML = mastheadHTML() + view;
    try { if (ui.view === 'problem') mountProblem(); } catch (e) { console.error('mountProblem:', e); }
    try { if (ui.view === 'practice') mountPractice(); } catch (e) { console.error('mountPractice:', e); }
    icons();
    fitSquiggles();
}

/* re-measure the two squiggles that must match their text's width */
function fitSquiggles() {
    const fit = (el, swg, min = 90, max = 460) => {
        if (!el || !swg) return;
        let w = el.offsetWidth; if (!w || w < 10) return;
        w = Math.max(min, Math.min(max, Math.round(w)));
        const h = Math.max(6, Math.round(swg.getBoundingClientRect().height) || 8);
        swg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        swg.style.width = w + 'px';
        const p = swg.querySelector('path'); if (p) p.setAttribute('d', squiggleD(w, h));
    };
    fit($('.brand .bnm'), $('.brand .bswg'));
    fit($('.lib-title span'), $('.lib-head .lswg'));
}

/* ---------- customize (the settings modal) ---------- */
function openSettings() {
    const w = document.createElement('div');
    w.className = 'mo-wrap';
    w.innerHTML = `<div class="mo mo-set">
    <h3>make it yours</h3>
    <p>the name on the cover, the line under it, and the ink it’s written in.</p>
    <label class="f-lbl" for="set-name">notebook name</label>
    <input class="fin" id="set-name" maxlength="42" value="${esc(brand.name)}" autocomplete="off" placeholder="Marginalia">
    <label class="f-lbl" for="set-tag">tagline</label>
    <input class="fin" id="set-tag" maxlength="96" value="${esc(brand.tag)}" autocomplete="off" placeholder="a line under the title…">
    <label class="f-lbl">ink</label>
    <div class="set-inks">${INKS.map(([c, n]) => `<button class="set-ink${c === brand.ink ? ' on' : ''}" data-ink="${c}" title="${n}" aria-label="${n}" style="background:${c}"></button>`).join('')}</div>
    <div class="set-zone">
      <button class="btn ghost xs" id="set-clear"><i data-lucide="trash-2"></i>clear every page</button>
      <button class="btn ghost xs" id="set-restore"><i data-lucide="rotate-ccw"></i>restore sample pages</button>
    </div>
    <div class="mo-actions">
      <button class="btn ghost" id="set-cancel">cancel</button>
      <button class="btn" id="set-save"><i data-lucide="check"></i>save</button>
    </div>
  </div>`;
    document.body.appendChild(w); icons();
    let ink = brand.ink;
    $$('.set-ink', w).forEach(b => b.addEventListener('click', () => {
        ink = b.dataset.ink;
        $$('.set-ink', w).forEach(x => x.classList.toggle('on', x === b));
    }));
    const close = () => w.remove();
    w.addEventListener('click', e => { if (e.target === w) close(); });
    $('#set-cancel', w).addEventListener('click', close);
    $('#set-save', w).addEventListener('click', () => {
        brand.name = $('#set-name', w).value.trim() || 'Marginalia';
        brand.tag = $('#set-tag', w).value.trim();
        brand.ink = ink;
        saveBrand(); applyBrand(); close();
        render(); toast('notebook updated', 'check');
    });
    $('#set-clear', w).addEventListener('click', () => {
        close(); modal({
            title: 'clear every page?',
            body: 'every problem, attempt and doodle goes — the cover stays yours.',
            actions: [
                { label: 'keep them', ghost: true },
                {
                    label: 'clear it all', danger: true, icon: 'trash-2', fn: () => {
                        store.problems = []; store.save(); session = null;
                        toast('notebook emptied', 'trash-2'); go('#library');
                    }
                }
            ]
        });
    });
    $('#set-restore', w).addEventListener('click', () => {
        close(); modal({
            title: 'restore the sample pages?',
            body: 'replaces whatever is in the notebook with the original three sample pages.',
            actions: [
                { label: 'keep mine', ghost: true },
                {
                    label: 'restore samples', icon: 'rotate-ccw', fn: () => {
                        localStorage.removeItem(LS_KEY);
                        store.problems = seed(); store.save(); session = null;
                        toast('samples restored', 'rotate-ccw'); go('#library');
                    }
                }
            ]
        });
    });
}

/* ---------- toast & modal ---------- */
function toast(msg, icon = 'check') {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i data-lucide="${icon}"></i><span>${esc(msg)}</span>`;
    document.body.appendChild(t); icons();
    requestAnimationFrame(() => t.classList.add('on'));
    setTimeout(() => { t.classList.remove('on'); setTimeout(() => t.remove(), 350); }, 2400);
}
function modal(opts) {
    const w = document.createElement('div');
    w.className = 'mo-wrap';
    w.innerHTML = `<div class="mo"><h3>${esc(opts.title)}</h3><p>${opts.body}</p><div class="mo-actions"></div></div>`;
    const act = $('.mo-actions', w);
    opts.actions.forEach(a => {
        const b = document.createElement('button');
        b.className = 'btn' + (a.ghost ? ' ghost' : '') + (a.danger ? ' red' : '');
        b.innerHTML = `${a.icon ? `<i data-lucide="${a.icon}"></i>` : ''}<span>${esc(a.label)}</span>`;
        b.addEventListener('click', () => { w.remove(); a.fn && a.fn(); });
        act.appendChild(b);
    });
    document.body.appendChild(w); icons();
}

/* ---------- boot ---------- */
loadBrand(); applyBrand();
loadProgress();
store.load();
linkCurriculumMatches();
route();
document.addEventListener('click', () => { $$('.dd-menu').forEach(m => { m.hidden = true; }); });