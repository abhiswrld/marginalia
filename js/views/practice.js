/* =========================================================
   views/practice.js — the practice room
   pick a problem, solve it against the clock, run the tests,
   then the solved overlay with the attempt diff.
   ========================================================= */

function viewPractice() {
    if (!session) return practiceSetup();
    return practiceActive();
}

/* ---------- the picker ---------- */
function practiceSetup() {
    const P = store.problems.filter(p => p.tests.length);
    return `<div class="sheet">
    <div class="page">
      <a class="crumbs" onclick="go('#library')"><i data-lucide="arrow-left"></i>back to the index</a>
      <h1 class="p-title"><span>the practice room</span>${svgSquiggle(190, 9, 'swg tswg')}</h1>
      ${P.length ? `
      <div class="pick-list">${P.map(pickRow).join('')}</div>
      <div class="f-actions">
        <button class="btn" onclick="randomPractice()"><i data-lucide="shuffle"></i>surprise me</button>
      </div>`:
            `<p class="marg">no pages with tests yet — <a onclick="go('#new')">write the first one</a>.</p>`}
    </div>
  </div>`;
}
function pickRow(p) {
    const n = (p.attempts || []).length;
    const meta = n ? `${n} attempt${n !== 1 ? 's' : ''} · fastest ${fmtDur(Math.min(...p.attempts.map(a => a.duration)))} · last ${fmtAgo(p.attempts[n - 1].ts)}` : 'not attempted yet';
    return `<div class="pick-row" tabindex="0" onclick="begin('${p.id}')">
    <span class="idx-no">p.${String(store.problems.indexOf(p) + 1).padStart(2, '0')}</span>
    <span class="idx-title">${esc(p.title)}</span>
    <span class="idx-dots"></span>
    <span class="pick-meta"><span class="stamp sm ${p.difficulty}">${p.difficulty}</span><span class="langchip">${langName(p.lang)}</span><span>${meta}</span></span>
    <span class="pick-go"><i data-lucide="arrow-right"></i></span>
  </div>`;
}
function begin(id) { startPractice(id); go('#practice/' + id); }
function randomPractice() {
    const P = store.problems.filter(p => p.tests.length);
    if (P.length) begin(P[Math.floor(Math.random() * P.length)].id);
}

/* ---------- the session ---------- */
function starterFor(p) {
    if (p.starter && p.starter.trim()) return p.starter + '\n';
    const shape = p.tests[0] ? fmtVal(p.tests[0].input) : '{}';
    if (p.lang === 'py') {
        return `# ${p.title} — input shape: ${shape}\n# print(...) traces to the panel below; return the answer\n\nreturn None\n`;
    }
    return `// ${p.title} — input shape: ${shape}\n// console.log(...) traces to the panel below; return the answer\n\nreturn null;\n`;
}
/* pull a function signature out of a pasted LeetCode description,
   so the starter can be leetcode-shaped (class Solution, params) */
function extractSignature(statement) {
    if (!statement) return null;
    let m = String(statement).match(/def\s+(\w+)\s*\(\s*self\s*,\s*([^)]*)\)/);
    if (m) {
        const params = m[2] ? m[2].split(',').map(s => s.trim().split(/[:=]/)[0].trim()).filter(Boolean) : [];
        return { name: m[1], params };
    }
    m = String(statement).match(/(?:var|let|const)\s+(\w+)\s*=\s*function\s*\(([^)]*)\)/)
        || String(statement).match(/function\s+(\w+)\s*\(([^)]*)\)/);
    if (m) {
        const params = m[2] ? m[2].split(',').map(s => s.trim().split(/[:=]/)[0].trim()).filter(Boolean) : [];
        return { name: m[1], params };
    }
    return null;
}

function starterFor(p) {
    if (p.starter && p.starter.trim()) return p.starter + '\n';
    const sig = extractSignature(p.statement);
    if (sig && sig.params.length) {
        const keys = JSON.stringify(sig.params);
        if (p.lang === 'py') {
            return `# input arrives as a dict with keys: ${keys}\n# the runner calls this method for you — input values arrive as arguments\n# note: complex types (trees, linked lists) arrive as plain arrays\nclass Solution:\n    def ${sig.name}(self, ${sig.params.join(', ')}):\n        pass  # <- replace with your solution\n`;
        }
        return `// input arrives as an object with keys: ${keys}\n// the runner calls this method for you — input values arrive as arguments\n// note: complex types (trees, linked lists) arrive as plain arrays\nclass Solution {\n  ${sig.name}(${sig.params.join(', ')}) {\n    return null; // <- replace with your solution\n  }\n}\n`;
    }
    const shape = p.tests[0] ? fmtVal(p.tests[0].input) : '{}';
    if (p.lang === 'py') {
        return `# ${p.title} — input shape: ${shape}\n# print(...) traces to the panel below; return the answer\n\nreturn None\n`;
    }
    return `// ${p.title} — input shape: ${shape}\n// console.log(...) traces to the panel below; return the answer\n\nreturn null;\n`;
}

function startPractice(pid) {
    const p = store.byId(pid); if (!p) { session = null; return; }
    session = { pid, start: Date.now(), revealed: false, done: false, code: starterFor(p) };
}
function practiceActive() {
    const p = store.byId(session.pid);
    if (!p) { session = null; return practiceSetup(); }
    return `<div class="sheet">
    <div class="page">
      <div class="prac-top">
        <div class="crumbs">practice room<span style="opacity:.5">/</span>${esc(p.title)}</div>
        <div style="display:flex;gap:14px;align-items:center">
          <div class="clock"><span class="clock-l"><i data-lucide="timer"></i>on the clock</span><span class="ptimer" id="pt-timer">0:00</span></div>
          <button class="btn ghost sm" id="btn-quit"><i data-lucide="log-out"></i>leave</button>
        </div>
      </div>
      <div class="prac-grid ${session.expanded ? 'expanded' : ''}">
        <div class="prac-left">
          <h1 class="p-title sm"><span>${esc(p.title)}</span>${svgSquiggle(200, 8, 'swg tswg')}</h1>
          <div class="p-sub"><span class="stamp ${p.difficulty}">${p.difficulty}</span><span class="langchip">${langName(p.lang)}</span><span class="ptags">${p.tags.map(t => esc(t)).join(' · ')}</span></div>
          <p class="statement">${esc(p.statement)}</p>
          ${grHTML(p)}
          <div class="pexamples">
            <span class="f-lbl">examples</span>
            ${p.tests.map(t => `<div class="ex"><span class="ex-in">${esc(t.label || fmtVal(t.input))}</span><span class="ex-exp">→ ${esc(fmtVal(t.expected))}</span></div>`).join('')}
          </div>
          <div class="prac-actions">
            <button class="btn red" id="btn-run"><i data-lucide="play"></i>run all ${p.tests.length} tests</button>
          </div>
          <p class="hint">${p.lang === 'py' ? 'print(...)' : 'console.log(...)'} prints a trace under the editor — watch your variables move.</p>
        </div>
        <div class="prac-right">
          <div class="ed-head">
            <i data-lucide="pencil"></i>your editor —
            <select class="sel ed-lang" id="ed-lang">
              ${['js', 'py'].map(l => `<option value="${l}" ${p.lang === l ? 'selected' : ''}>${langName(l)}</option>`).join('')}
            </select>
            · <code>input</code> in scope, <code>return</code> the answer — or leetcode-style <code>class Solution</code>
            <span class="flex1"></span>
            <button class="btn ghost xs btn-expand ${session.expanded ? 'on' : ''}" id="btn-expand">
              <i data-lucide="maximize-2" class="ic-exp"></i><i data-lucide="minimize-2" class="ic-shr"></i>
              <span class="exp-lbl">${session.expanded ? 'shrink' : 'expand'}</span>
            </button>
          </div>
          <div class="editor">
            <div class="ed-gut" id="ed-gut"></div>
            <div class="ed-stack">
              <pre class="ed-hl" id="ed-hl"><code id="ed-code"></code></pre>
              <textarea class="ed-ta" id="ed-ta" wrap="off" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>
            </div>
          </div>
          <div class="tres" id="tres"><p class="runmsg">write your solution, then run the tests — the diff happens after they all pass.</p></div>
          ${revealHTML(p)}
        </div>
      </div>
      ${session.done ? successHTML(p) : ''}
    </div>
  </div>`;
}

/* the sticky note guarding the solutions */
function revealHTML(p) {
    if (!session.revealed) {
        return `<div class="sticky" id="sticky">
      <span class="tape"></span>
      <i data-lucide="eye-off"></i>
      <p>the solutions live down here.<br><b>no peeking</b> until you’ve given it an honest shot.</p>
      <span class="sticky-cta">tap to peek anyway</span>
    </div>`;
    }
    return `<div class="revealed">
    <p class="marg">solutions, from your own notes:</p>
    ${p.approaches.length ? p.approaches.map((a, i) => `
      <div class="rv-ap">
        <div class="ap-head"><span class="ap-no">${i + 1})</span><span class="ap-name">${esc(a.name)}</span><span class="stamps">${stampHTML(a)}</span></div>
        ${a.idea ? `<p class="ap-idea">${esc(a.idea)}</p>` : ''}
        <details class="rv-code"><summary>show the code</summary>
          <div class="code-sheet"><pre class="cs-pre">${hl(a.code, p.lang)}</pre></div>
        </details>
      </div>`).join('') : '<p class="marg">…although this page has no approaches noted yet.</p>'}
  </div>`;
}

/* the little coach note on the solved overlay */
function improveNote(prev, cur) {
    if (!prev) return 'first solve logged — this becomes the baseline every future attempt gets diffed against.';
    const dl = prev.lines - cur.lines, dt = prev.duration - cur.duration;
    const bits = [];
    if (dt > 5) bits.push(fmtDur(dt) + ' faster'); else if (dt < -5) bits.push(fmtDur(-dt) + ' slower');
    if (dl > 0) bits.push(dl + ' fewer line' + (dl !== 1 ? 's' : '')); else if (dl < 0) bits.push((-dl) + ' more line' + (dl !== 1 ? 's' : ''));
    if (!bits.length) return `solved in ${fmtDur(cur.duration)} — same pace, same shape. steady hands.`;
    const tone = (dt > 5 ? 1 : dt < -5 ? -1 : 0) + (dl > 0 ? 1 : dl < 0 ? -1 : 0);
    let s = `solved in ${fmtDur(cur.duration)} — ${bits.join(', ')}`;
    if (tone > 0) s += ' — you’re sharpening up.';
    else if (tone < 0) s += ' — peek at the diff below to see what drifted.';
    else s += '.';
    return s;
}
function successHTML(p) {
    const cur = p.attempts[p.attempts.length - 1];
    const prev = p.attempts.length > 1 ? p.attempts[p.attempts.length - 2] : null;
    const d = prev ? diffHTML(prev.code, cur.code) : null;
    return `<div class="succ">
    <svg id="bigcheck" viewBox="0 0 120 84" width="100" height="70" aria-hidden="true">
      <path d="${checkPathD()}" fill="none" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>
    </svg>
    <div class="solved-stamp">SOLVED</div>
    <h2 class="succ-h">${esc(p.title)} — all ${p.tests.length} tests passing</h2>
    <p class="marg big">${esc(improveNote(prev, cur))}</p>
    <div class="succ-stats">
      <div><span class="ss-v">${fmtDur(cur.duration)}</span><span class="ss-l">on the clock</span></div>
      <div><span class="ss-v">${cur.lines}</span><span class="ss-l">lines</span></div>
      <div><span class="ss-v">${p.attempts.length}</span><span class="ss-l">attempts logged</span></div>
      ${cur.revealed ? '<div><span class="ss-v amber">peeked</span><span class="ss-l">solutions first</span></div>' : ''}
    </div>
    <h3 class="sec"><span>then vs now</span>${svgSquiggle(64, 8, 'swg sec-swg')}</h3>
    ${d ? `<p class="dstat">${esc(d.stat)}</p>${d.html}`
            : '<p class="marg">this is your baseline attempt — the next solve gets diffed against it automatically.</p>'}
    <div class="succ-actions">
      <button class="btn" onclick="go('#p/${p.id}')"><i data-lucide="book-open"></i>open the page</button>
      <button class="btn ghost" onclick="succAnother()"><i data-lucide="shuffle"></i>practice another</button>
    </div>
  </div>`;
}
function succAnother() { session = null; go('#practice'); }

/* ---------- wiring ---------- */
function mountPractice() {
    if (!session) return;
    const p = store.byId(session.pid);
    mountEditor();
    const t = $('#pt-timer');
    if (t) t.textContent = fmtDur(Math.floor((Date.now() - session.start) / 1000));
    if (!session.done) {
        clearInterval(tickId);
        tickId = setInterval(() => {
            const el = $('#pt-timer');
            if (el && session && !session.done) el.textContent = fmtDur(Math.floor((Date.now() - session.start) / 1000));
        }, 1000);
    }
    const run = $('#btn-run'); run && run.addEventListener('click', runTests);
    const quit = $('#btn-quit');
    quit && quit.addEventListener('click', () => modal({
        title: 'leave the practice room?',
        body: 'the clock stops and this code won\u2019t be saved unless every test passed.',
        actions: [{ label: 'stay', ghost: true }, { label: 'leave', danger: true, icon: 'log-out', fn: () => { session = null; go('#library'); } }]
    }));
    const stick = $('#sticky');
    stick && stick.addEventListener('click', () => modal({
        title: 'peek at the solutions?',
        body: 'the approaches from your notes will appear below the editor. finish the solve anyway — it just gets flagged as \u201cpeeked\u201d.',
        actions: [{ label: 'keep trying', ghost: true }, {
            label: 'show me', icon: 'eye', fn: () => {
                const ta = $('#ed-ta'); if (ta) session.code = ta.value;
                session.revealed = true; render();
            }
        }]
    }));

    /* expand / shrink the editor */
    const exp = $('#btn-expand');
    exp && exp.addEventListener('click', () => {
        session.expanded = !session.expanded;
        const grid = document.querySelector('.prac-grid');
        if (grid) grid.classList.toggle('expanded', session.expanded);
        exp.classList.toggle('on', session.expanded);
        const lbl = exp.querySelector('.exp-lbl');
        if (lbl) lbl.textContent = session.expanded ? 'shrink' : 'expand';
    });

    /* switch language mid-practice */
    const langSel = $('#ed-lang');
    langSel && langSel.addEventListener('change', () => {
        const newLang = langSel.value;
        if (!p || newLang === p.lang) return;
        modal({
            title: 'switch language?',
            body: `your current ${langName(p.lang)} code will be replaced with a ${langName(newLang)} starter. the attempt will be recorded as ${langName(newLang)}.`,
            actions: [
                { label: 'keep ' + langName(p.lang), ghost: true, fn: () => { langSel.value = p.lang; } },
                {
                    label: 'switch', icon: 'repeat', fn: () => {
                        const ta = $('#ed-ta');
                        if (ta) session.code = ta.value;
                        p.lang = newLang;
                        store.save();
                        session.code = starterFor(p);
                        render();
                    }
                }
            ]
        });
    });

    if (session.done) mountSuccess();
}

/* editor = transparent textarea over a highlighted <pre> */
function mountEditor() {
    const ta = $('#ed-ta'); if (!ta) return;
    const p = store.byId(session.pid);
    const lang = p ? (p.lang || 'js') : 'js';
    const code = $('#ed-code'), gut = $('#ed-gut'), pre = $('#ed-hl');
    ta.value = session.code;
    /* keep the highlight layer glued to the textarea — on every
       input AND scroll, not just scroll (typing at the bottom used
       to leave the overlay behind) */
    const sync = () => {
        pre.scrollTop = ta.scrollTop; pre.scrollLeft = ta.scrollLeft;
        gut.scrollTop = ta.scrollTop;
    };
    const paint = () => {
        code.innerHTML = hl(ta.value, lang) + '\n';
        const n = ta.value.split('\n').length;
        gut.innerHTML = Array.from({ length: n }, (_, i) => i + 1).join('<br>');
        sync();
    };
    paint();
    ta.addEventListener('input', () => { paint(); session.code = ta.value; });
    ta.addEventListener('scroll', sync);
    ta.addEventListener('keydown', e => {
        if (e.key === 'Tab') {
            e.preventDefault();
            ta.setRangeText(lang === 'py' ? '    ' : '  ', ta.selectionStart, ta.selectionEnd, 'end');
            paint(); session.code = ta.value;
        }
    });
}

/* run every test; all-pass → save the attempt + show the overlay */
async function runTests() {
    if (!session || session.done) return;
    const ta = $('#ed-ta'); if (ta) session.code = ta.value;
    const p = store.byId(session.pid); if (!p) return;
    const out = $('#tres');
    out.innerHTML = `<p class="runmsg">${p.lang === 'py' ? pyLoadMsg() : `running against ${p.tests.length} test${p.tests.length !== 1 ? 's' : ''}…`}</p>`;
    const rows = []; let all = true;
    for (const t of p.tests) {
        const r = await runCode(session.code, t.input, p.lang);
        let ok = false;
        if (r.timeout || r.err) { ok = false; }
        else ok = deepEqual(r.result, t.expected);
        if (!ok) all = false;
        rows.push({ t, r, ok });
    }
    out.innerHTML = rows.map(o => {
        const { t, r, ok } = o;
        let right;
        if (r.timeout) right = `<span class="tr-exp">${p.lang === 'py' ? 'timed out (60s) — runtime reset' : 'timed out (3s)'}</span>`;
        else if (r.err) right = `<span class="tr-exp">error: ${esc(r.err)}</span>${pyDebugHTML(r)}`;
        else right = `<span class="tr-got">got ${esc(fmtVal(r.result))}</span>${ok ? '' : `<span class="tr-exp">expected ${esc(fmtVal(t.expected))}</span>`}<span class="tr-ms">${r.ms ?? '—'}ms</span>`;
        return `<div class="tr-row ${ok ? 'ok' : 'no'}"><i data-lucide="${ok ? 'check' : 'x'}"></i><span class="tr-l">${esc(t.label || fmtVal(t.input))}</span>${right}</div>`;
    }).join('') + (all ? '' : `<p class="marg sm">not quite — ${rows.filter(r => r.ok).length} of ${rows.length} passing. keep iterating.</p>`);
    icons();
    if (all) passSession();
}
function passSession() {
    if (session.done) return;
    session.done = true;
    clearInterval(tickId);
    const p = store.byId(session.pid);
    const duration = Math.max(1, Math.round((Date.now() - session.start) / 1000));
    const attempt = {
        ts: Date.now(), duration, passed: true, revealed: session.revealed,
        lines: session.code.split('\n').length, code: session.code, lang: p.lang
    };
    p.attempts.push(attempt);
    store.save();
    render();
    toast('solved — attempt #' + p.attempts.length + ' saved', 'check');
}
function mountSuccess() {
    const path = $('#bigcheck path');
    if (path) {
        const L = path.getTotalLength();
        path.style.strokeDasharray = L; path.style.strokeDashoffset = L;
        requestAnimationFrame(() => { path.style.transition = 'stroke-dashoffset .8s ease .15s'; path.style.strokeDashoffset = '0'; });
    }
}