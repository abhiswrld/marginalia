/* =========================================================
   views/problem.js — a single notebook page
   the view (statement, contract, summary, approaches with
   their flow walkthroughs, scratchpad, attempts) and all the
   behaviour that gets wired up after render.
   ========================================================= */

function viewProblem(p) {
    if (!p) return viewLibrary();
    const idx = store.problems.indexOf(p);
    return `<div class="sheet">
    <span class="pageno">p.${String(idx + 1).padStart(2, '0')}</span>
    <div class="page">
      <div class="p-top">
        <a class="crumbs" onclick="go('#library')"><i data-lucide="arrow-left"></i>back to the index</a>
        <div class="p-actions">
          <button class="btn ghost sm" onclick="go('#practice/${p.id}')"><i data-lucide="play"></i>practice this</button>
          <button class="btn ghost sm" onclick="go('#edit/${p.id}')"><i data-lucide="pencil"></i>edit</button>
          <button class="btn ghost sm danger" title="tear out this page" onclick="askDelete('${p.id}')"><i data-lucide="trash-2"></i></button>
        </div>
      </div>
      <h1 class="p-title"><span>${esc(p.title)}</span>${svgSquiggle(300, 9, 'swg tswg')}</h1>
      <div class="p-sub"><span class="stamp ${p.difficulty}">${p.difficulty}</span><span class="langchip">${langName(p.lang)}</span><span class="ptags">${p.tags.map(t => esc(t)).join(' · ')}</span></div>
      <p class="statement">${esc(p.statement)}</p>
      ${p.link ? `<p class="marg sm" style="margin:-10px 0 0"><a href="${esc(p.link)}" target="_blank" style="color:var(--red)">open the problem on LeetCode ↗</a></p>` : ''}
      ${grHTML(p)}
      ${summaryHTML(p)}
      ${/* no "approaches" header — the approaches sit directly under
           the summary, which keeps the page tight */''}
      ${p.approaches.length ? p.approaches.map((a, i) => apSection(p, a, i)).join('')
            : `<p class="marg">nothing noted yet — <a onclick="go('#edit/${p.id}')">add an approach</a>.</p>`}
      <h2 class="sec"><span>scratchpad</span>${svgSquiggle(64, 8, 'swg sec-swg')}</h2>
      ${padHTML()}
      <h2 class="sec"><span>attempts &amp; progress</span>${svgSquiggle(64, 8, 'swg sec-swg')}</h2>
      ${attSection(p)}
    </div>
  </div>`;
}

/* ---------- the given -> return contract ---------- */
function grHTML(p) {
    if (!p.given && !p.ret) return '';
    return `<div class="gr-wrap">
    <div class="cap">the contract</div>
    <div class="gr">
      <div class="gr-item"><span class="gr-label">given</span>${esc(p.given)}</div>
      ${svgArrowH('gr-arr')}
      <div class="gr-item"><span class="gr-label">return</span>${esc(p.ret)}</div>
    </div>
  </div>`;
}
function summaryHTML(p) {
    if (!p.summary) return '';
    return `<div class="summary">
    <span class="tape t1"></span><span class="tape t2"></span>
    <h3>how to solve it</h3>
    <p>${esc(p.summary)}</p>
  </div>`;
}
function stampHTML(a) {
    let h = '';
    if (a.time) h += `<span class="cstamp">time ${esc(a.time)}</span>`;
    if (a.space) h += `<span class="cstamp s2">space ${esc(a.space)}</span>`;
    return h;
}
function apSection(p, a, ai) {
    return `<section class="approach">
    <div class="ap-head">
      <span class="ap-no">${ai + 1})</span>
      <span class="ap-name">${esc(a.name)}</span>
      <span class="stamps">${stampHTML(a)}</span>
    </div>
    ${a.idea ? `<p class="ap-idea">${esc(a.idea)}</p>` : ''}
    ${codeSheetHTML(p, a, ai)}
    ${(a.steps && a.steps.length) ? flowHTML(a, ai) : ''}
    ${tryHTML(p)}
  </section>`;
}
function codeSheetHTML(p, a, ai) {
    const lines = a.code.split('\n');
    return `<div class="code-sheet" data-code="${ai}">
    <span class="tape t1"></span><span class="tape t2"></span>
    ${lines.map((ln, i) => `<div class="cl" data-line="${i + 1}"><span class="ln">${i + 1}</span><span>${hl(ln, p.lang) || ' '}</span></div>`).join('')}
  </div>`;
}

/* ---------- flow walkthrough ---------- */
function chipHTML(s, i) {
    const hasBranch = s.yes || s.no;
    return `<div class="fstep" data-i="${i}">
    <div class="fchip">${hasBranch ? '<span class="q">?</span>' : ''}${esc(s.label)}</div>
    ${hasBranch ? `<div class="fbr">${s.yes ? `<span class="yes">yes → ${esc(s.yes)}</span>` : ''}${s.no ? `<span class="no">no → ${esc(s.no)}</span>` : ''}</div>` : ''}
  </div>`;
}
function flowHTML(a, ai) {
    const n = a.steps.length;
    return `<div class="flow" data-flow="${ai}">
    <div class="flow-rail">
      ${a.steps.map((s, i) => chipHTML(s, i) + (i < n - 1 ? svgArrowH('farrow') : '')).join('')}
    </div>
    <div class="flow-nar"><i data-lucide="asterisk"></i><span class="nar-txt"></span></div>
    <div class="flow-ctl">
      <button class="fbtn" data-act="reset" title="back to the start"><i data-lucide="rotate-ccw"></i></button>
      <button class="fbtn" data-act="prev" title="previous step"><i data-lucide="chevron-left"></i></button>
      <button class="fbtn main" data-act="play"><i data-lucide="play" class="ic-play"></i><i data-lucide="pause" class="ic-pause"></i><span class="playlbl">walk through</span></button>
      <button class="fbtn" data-act="next" title="next step"><i data-lucide="chevron-right"></i></button>
      <span class="flow-pos"></span>
    </div>
  </div>`;
}

/* grow a textarea to fit its content (capped so a huge paste
   doesn't take over the page) */
function autoGrow(ta) {
    ta.style.height = 'auto';
    ta.style.height = Math.min(320, Math.max(80, ta.scrollHeight + 2)) + 'px';
}

function tryHTML(p) {
    return `<div class="try">
    <div class="try-row">
      <span class="try-lbl">try it →</span>
      <div class="dd">
        <button class="dd-btn" type="button">
          <span class="dd-lbl">${esc(p.tests[0] ? (p.tests[0].label || 'test 1') : 'test 1')}</span>
          <i data-lucide="chevron-down"></i>
        </button>
        <div class="dd-menu" hidden>
          ${p.tests.map((t, i) => `<button class="dd-item" type="button" data-dd-val="${i}">${esc(t.label || ('test ' + (i + 1)))}</button>`).join('')}
          <button class="dd-item" type="button" data-dd-val="custom">custom input…</button>
        </div>
      </div>
      <button class="btn sm try-run"><i data-lucide="play"></i>run</button>
      <span class="try-note">the saved ${langName(p.lang)} runs with <code>input</code> in scope — edit the page to change it</span>
    </div>
    <textarea class="try-json" hidden spellcheck="false"></textarea>
    <div class="try-out" hidden></div>
  </div>`;
}

/* ---------- scratchpad ---------- */
function padHTML() {
    return `<div class="pad" id="pad">
    <div class="pad-bar">
      <button class="tool on" data-tool="ink" title="ink pen"><i data-lucide="pen"></i></button>
      <button class="tool red" data-tool="red" title="red pen"><i data-lucide="pen-line"></i></button>
      <button class="tool" data-tool="hl" title="highlighter"><i data-lucide="highlighter"></i></button>
      <button class="tool" data-tool="erase" title="eraser"><i data-lucide="eraser"></i></button>
      <span class="pad-sep"></span>
      <button class="tool" data-pad-act="undo" title="undo"><i data-lucide="undo-2"></i></button>
      <button class="tool" data-pad-act="clear" title="clear page"><i data-lucide="trash-2"></i></button>
      <span class="pad-hint">sketch arrays, arrows, whatever — saved to this page automatically</span>
    </div>
    <div class="pad-wrap"><canvas class="pad-c"></canvas></div>
  </div>`;
}

/* ---------- attempts & diff ---------- */
function attSection(p) {
    if (!p.attempts.length)
        return `<p class="marg">no attempts logged yet — <a onclick="go('#practice/${p.id}')">take it to the practice room</a> and the clock starts.</p>`;
    const n = p.attempts.length;
    const opts = p.attempts.map((a, i) => `<option value="${i}">#${i + 1} — ${fmtAgo(a.ts)}</option>`).join('');
    const best = Math.min(...p.attempts.map(a => a.duration));
    return `
  <p class="stats-line">${n} attempt${n > 1 ? 's' : ''} · fastest solve ${fmtDur(best)} · ${p.attempts.filter(a => a.passed).length} passed</p>
  <div class="att-head">
    <div class="att-pick">
      <label class="f-lbl">then</label><select class="sel" id="diff-a">${opts}</select>
      <span class="att-vs">vs</span>
      <label class="f-lbl">now</label><select class="sel" id="diff-b">${opts}</select>
    </div>
    <div class="spark-wrap">${n > 1 ? sparkSVG(p.attempts) + '<span class="spark-lbl">solve time per attempt — downhill is good</span>' : ''}</div>
  </div>
  <ul class="att-list">
    ${p.attempts.map((a, i) => `<li class="att-row">
      <span class="att-no">#${i + 1}</span><span class="att-when">${fmtAgo(a.ts)}</span>
      <span class="att-dur">${fmtDur(a.duration)}</span><span class="att-lines">${a.lines} lines</span>
      <span class="att-flag ${a.passed ? 'ok' : 'bad'}">${a.passed ? 'solved' : 'failed'}</span>
      ${a.revealed ? '<span class="att-flag warn">peeked</span>' : ''}
    </li>`).join('')}
  </ul>
  <div id="diff-view"></div>`;
}

/* ---------- wiring it all up after render ---------- */
function mountProblem() {
    const p = curProblem(); if (!p) return;
    p.approaches.forEach((a, ai) => {
        if (a.steps && a.steps.length) mountFlow(p, ai);
        mountTry(p, ai);
    });
    mountPad(p);
    mountAttempts(p);
    const ga = document.querySelector('.gr-arr path');
    if (ga) {
        const L = ga.getTotalLength();
        ga.style.strokeDasharray = L; ga.style.strokeDashoffset = L;
        requestAnimationFrame(() => { ga.style.transition = 'stroke-dashoffset .7s ease .25s'; ga.style.strokeDashoffset = '0'; });
    }
}

/* flow walkthrough: chips + arrows + synced code highlight */
function mountFlow(p, ai) {
    const root = document.querySelector(`[data-flow="${ai}"]`); if (!root) return;
    const steps = p.approaches[ai].steps;
    const chips = $$('.fstep', root);
    const arrows = $$('.farrow path', root);
    arrows.forEach(pa => {
        const L = pa.getTotalLength();
        pa.dataset.len = L; pa.dataset.on = '';
        pa.style.strokeDasharray = L; pa.style.strokeDashoffset = '0'; pa.style.stroke = '#c6ba9e';
    });
    const codeSheet = document.querySelector(`[data-code="${ai}"]`);
    FLOW[ai] = { i: -1, steps, chips, arrows, codeSheet, root, timer: null };
    $$('.fbtn', root).forEach(b => b.addEventListener('click', () => flowAct(ai, b.dataset.act)));
    setStep(ai, 0);
}
function flowAct(ai, act) {
    const F = FLOW[ai]; if (!F) return;
    if (act === 'next') setStep(ai, F.i + 1, true);
    else if (act === 'prev') setStep(ai, F.i - 1, true);
    else if (act === 'reset') { stopPlay(ai); setStep(ai, 0, true); }
    else if (act === 'play') { F.root.classList.contains('playing') ? stopPlay(ai) : startPlay(ai); }
}
function startPlay(ai) {
    const F = FLOW[ai]; if (!F) return;
    if (F.i >= F.steps.length - 1) setStep(ai, 0, true);
    F.root.classList.add('playing');
    const l = F.root.querySelector('.playlbl'); if (l) l.textContent = 'pause';
    F.timer = setInterval(() => {
        if (F.i >= F.steps.length - 1) { stopPlay(ai); return; }
        setStep(ai, F.i + 1, true);
    }, 1600);
}
function stopPlay(ai) {
    const F = FLOW[ai]; if (!F) return;
    clearInterval(F.timer); F.timer = null;
    F.root.classList.remove('playing');
    const l = F.root.querySelector('.playlbl');
    if (l) l.textContent = (F.i >= F.steps.length - 1) ? 'replay' : 'walk through';
}

/* scrollTo is false on the initial mount (from mountFlow) — otherwise
   scrollIntoView drags a freshly-opened page down to the first flow
   chip. User-driven steps pass true so the active chip stays visible. */
function setStep(ai, i, scrollTo) {
    const F = FLOW[ai]; if (!F) return;
    i = Math.max(0, Math.min(F.steps.length - 1, i)); F.i = i;
    F.chips.forEach((c, k) => { c.classList.toggle('done', k < i); c.classList.toggle('act', k === i); });
    $$('.scribble', F.root).forEach(s => s.remove());
    addScribble($('.fchip', F.chips[i]));
    F.arrows.forEach((pa, k) => {
        const on = k < i, was = pa.dataset.on === '1';
        if (on && !was) {
            pa.dataset.on = '1';
            pa.style.transition = 'none'; pa.style.stroke = 'var(--red)';
            pa.style.strokeDashoffset = pa.dataset.len;
            pa.getBoundingClientRect();
            pa.style.transition = 'stroke-dashoffset .4s ease';
            pa.style.strokeDashoffset = '0';
        } else if (!on && was) {
            pa.dataset.on = ''; pa.style.stroke = '#c6ba9e'; pa.style.strokeDashoffset = '0';
        }
    });
    const s = F.steps[i];
    const nar = F.root.querySelector('.nar-txt'); if (nar) nar.textContent = s.note || s.label;
    const pos = F.root.querySelector('.flow-pos'); if (pos) pos.textContent = `step ${i + 1} / ${F.steps.length}`;
    if (F.codeSheet) {
        $$('.cl', F.codeSheet).forEach(cl => cl.classList.remove('hot'));
        if (s.lines) {
            for (let ln = s.lines[0]; ln <= s.lines[1]; ln++) {
                const el = F.codeSheet.querySelector(`.cl[data-line="${ln}"]`);
                if (el) el.classList.add('hot');
            }
        }
        if (scrollTo) {
            const hot = $('.cl.hot', F.codeSheet);
            if (hot) hot.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    if (scrollTo) {
        try { F.chips[i].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' }); } catch (e) { }
    }
}

/* try-it: run the saved approach code against a test or custom input */
function mountTry(p, ai) {
    const box = document.querySelectorAll('.try')[ai]; if (!box) return;
    const btn = box.querySelector('.dd-btn'), lbl = box.querySelector('.dd-lbl'),
        menu = box.querySelector('.dd-menu'),
        ta = box.querySelector('.try-json'), out = box.querySelector('.try-out'),
        run = box.querySelector('.try-run');
    let val = '0';
    btn.addEventListener('click', e => {
        e.stopPropagation();
        menu.hidden = !menu.hidden;
    });
    menu.addEventListener('click', e => {
        const item = e.target.closest('.dd-item'); if (!item) return;
        e.stopPropagation();
        val = item.dataset.ddVal;
        lbl.textContent = item.textContent.trim();
        menu.hidden = true;
        const custom = val === 'custom';
        ta.hidden = !custom;
        if (custom) {
            if (!ta.value.trim()) ta.value = JSON.stringify(p.tests[0] ? p.tests[0].input : {}, null, 1);
            autoGrow(ta);
            ta.focus();
        }
    });
    ta.addEventListener('input', () => autoGrow(ta));
    run.addEventListener('click', async () => {
        out.hidden = false;
        out.innerHTML = `<span class="runmsg">${p.lang === 'py' ? pyLoadMsg() : 'running…'}</span>`;
        let input;
        if (val === 'custom') {
            try { input = JSON.parse(ta.value); }
            catch (e) { out.innerHTML = '<span class="err">custom input isn\u2019t valid JSON</span>'; return; }
        } else input = p.tests[+val].input;
        const a = p.approaches[ai];
        const r = await runCode(a.code, input, p.lang);
        if (r.timeout) { out.innerHTML = `<span class="err">${p.lang === 'py' ? 'timed out (60s) — the Python runtime was reset' : 'timed out after 3s'} — is there an infinite loop?</span>`; return; }
        let h = '';
        if (r.err) h += `<span class="err">error: ${esc(r.err)}</span>${pyDebugHTML(r)}`;
        else {
            const res = fmtVal(r.result);
            if (val !== 'custom') {
                const t = p.tests[+val];
                const ok = deepEqual(r.result, t.expected);
                h += ok ? `<div class="vline ok"><i data-lucide="check"></i>returns ${esc(res)} — matches, ${r.ms}ms</div>`
                    : `<div class="vline bad"><i data-lucide="x"></i>returns ${esc(res)} — expected ${esc(fmtVal(t.expected))}</div>`;
            } else h += `<div class="vline ok2">returned ${esc(res)} in ${r.ms}ms</div>`;
        }
        if (r.logs && r.logs.length) h += `<div class="logs">${r.logs.map(l => `<div class="logln">${esc(l)}</div>`).join('')}</div>`;
        out.innerHTML = h; icons();
    });
}

/* attempt picker → diff view */
function mountAttempts(p) {
    if (!p.attempts.length) return;
    const a = $('#diff-a'), b = $('#diff-b'); if (!a || !b) return;
    a.value = String(Math.max(0, p.attempts.length - 2));
    b.value = String(p.attempts.length - 1);
    const upd = () => renderDiffView(p, +a.value, +b.value);
    a.addEventListener('change', upd); b.addEventListener('change', upd);
    upd();
}
function renderDiffView(p, ai, bi) {
    const host = $('#diff-view'); if (!host) return;
    if (p.attempts.length < 2) { host.innerHTML = '<p class="marg sm">one attempt on record — the diff starts at solve #2.</p>'; return; }
    if (ai === bi) { host.innerHTML = '<p class="marg sm">pick two different attempts to compare.</p>'; return; }
    if (ai > bi) { const t = ai; ai = bi; bi = t; }
    const A = p.attempts[ai], B = p.attempts[bi];
    /* cross-language guard — AFTER A and B exist */
    if (A.lang && B.lang && A.lang !== B.lang) {
        host.innerHTML = `<p class="marg sm">attempt #${ai + 1} was ${langName(A.lang)} and attempt #${bi + 1} was ${langName(B.lang)} — a diff between different languages wouldn't be meaningful.</p>`;
        return;
    }
    const d = diffHTML(A.code, B.code);
    host.innerHTML = `
    <p class="dstat">${esc(d.stat)} — attempt #${ai + 1} → attempt #${bi + 1}</p>
    <p class="dsub">${fmtAgo(A.ts)} (${fmtDur(A.duration)}) → ${fmtAgo(B.ts)} (${fmtDur(B.duration)})</p>
    ${d.html}`;
}

/* the scratchpad: ink / red pen / highlighter / eraser, with undo */
function mountPad(p) {
    const host = $('#pad'); if (!host) return;
    const cv = host.querySelector('canvas'); if (!cv) return;
    const ctx = cv.getContext('2d');
    cv.width = 1400; cv.height = 700;
    const st = { tool: 'ink', drawing: false, last: null, snap: [] };
    if (p.sketch) {
        const im = new Image();
        im.onload = () => ctx.drawImage(im, 0, 0, cv.width, cv.height);
        im.src = p.sketch;
    }
    $$('.tool[data-tool]', host).forEach(b => b.addEventListener('click', () => {
        st.tool = b.dataset.tool;
        $$('.tool[data-tool]', host).forEach(x => x.classList.toggle('on', x === b));
    }));
    const clearBtn = host.querySelector('[data-pad-act="clear"]');
    clearBtn && clearBtn.addEventListener('click', () => modal({
        title: 'clear the scratchpad?',
        body: 'the doodles on this page will be wiped.',
        actions: [{ label: 'keep them', ghost: true }, { label: 'wipe it', danger: true, icon: 'trash-2', fn: () => { pushSnap(); ctx.clearRect(0, 0, cv.width, cv.height); savePad(); } }]
    }));
    const undoBtn = host.querySelector('[data-pad-act="undo"]');
    undoBtn && undoBtn.addEventListener('click', undoPad);
    function pos(e) {
        const r = cv.getBoundingClientRect();
        return { x: (e.clientX - r.left) * cv.width / r.width, y: (e.clientY - r.top) * cv.height / r.height };
    }
    function conf() {
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (st.tool === 'erase') { ctx.globalCompositeOperation = 'destination-out'; ctx.lineWidth = 30; ctx.strokeStyle = 'rgba(0,0,0,1)'; }
        else if (st.tool === 'hl') { ctx.globalCompositeOperation = 'multiply'; ctx.strokeStyle = 'rgba(246,223,107,.45)'; ctx.lineWidth = 18; }
        else if (st.tool === 'red') { ctx.globalCompositeOperation = 'source-over'; ctx.strokeStyle = brand.ink || '#c2402a'; ctx.lineWidth = 2.6; }
        else { ctx.globalCompositeOperation = 'source-over'; ctx.strokeStyle = '#28221a'; ctx.lineWidth = 2.6; }
    }
    function dot(pt) { conf(); ctx.beginPath(); ctx.arc(pt.x, pt.y, ctx.lineWidth / 2, 0, 7); ctx.fillStyle = ctx.strokeStyle; ctx.fill(); }
    function pushSnap() { try { st.snap.push(cv.toDataURL()); if (st.snap.length > 15) st.snap.shift(); } catch (e) { } }
    function undoPad() {
        ctx.globalCompositeOperation = 'source-over';
        const d = st.snap.pop();
        if (!d) { ctx.clearRect(0, 0, cv.width, cv.height); savePad(); return; }
        const im = new Image();
        im.onload = () => { ctx.clearRect(0, 0, cv.width, cv.height); ctx.drawImage(im, 0, 0, cv.width, cv.height); savePad(); };
        im.src = d;
    }
    let saveT = null;
    function savePad() {
        clearTimeout(saveT);
        saveT = setTimeout(() => { try { p.sketch = cv.toDataURL('image/png'); store.save(); } catch (e) { } }, 500);
    }
    cv.addEventListener('pointerdown', e => {
        cv.setPointerCapture(e.pointerId);
        st.drawing = true; pushSnap();
        const pt = pos(e); st.last = pt; dot(pt);
    });
    cv.addEventListener('pointermove', e => {
        if (!st.drawing) return;
        const pt = pos(e);
        conf();
        ctx.beginPath(); ctx.moveTo(st.last.x, st.last.y); ctx.lineTo(pt.x, pt.y); ctx.stroke();
        st.last = pt;
    });
    const up = () => { if (!st.drawing) return; st.drawing = false; savePad(); };
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);
}

/* tear out a page */
function askDelete(id) {
    const p = store.byId(id); if (!p) return;
    modal({
        title: 'tear out this page?',
        body: `“${esc(p.title)}” and its ${p.attempts.length} logged attempt${p.attempts.length !== 1 ? 's' : ''} will be gone for good.`,
        actions: [
            { label: 'keep it', ghost: true },
            {
                label: 'tear it out', danger: true, icon: 'trash-2', fn: () => {
                    store.remove(id); store.save();
                    toast('page removed', 'trash-2');
                    if (ui.view === 'problem' && ui.pid === id) go('#library'); else render();
                }
            }
        ]
    });
}