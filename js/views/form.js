/* =========================================================
   views/form.js — write / edit a problem page
   New pages open with a paste box: paste the problem, hit
   "set the table", and the parser (parse.js) pre-fills the
   form. Whatever it can't read stays empty for the human.
   ========================================================= */

function blankProblem() {
    return {
        id: 'p' + Date.now().toString(36) + Math.floor(Math.random() * 99),
        title: '', difficulty: 'easy', lang: 'py', tagsStr: '', statement: '', given: '', ret: '', summary: '', starter: '',
        link: '',
        tests: [{ label: '', inputStr: '', expectedStr: '' }], approaches: [], attempts: [], sketch: null, createdAt: 0
    };
}
function draftFromProblem(p) {
    return {
        id: p.id, title: p.title, difficulty: p.difficulty, lang: p.lang || 'py', tagsStr: p.tags.join(', '),
        statement: p.statement, given: p.given, ret: p.ret, summary: p.summary, starter: p.starter || '',
        link: p.link || '',
        tests: p.tests.map(t => ({ label: t.label, inputStr: JSON.stringify(t.input), expectedStr: JSON.stringify(t.expected) })),
        approaches: p.approaches.map(a => ({
            name: a.name, time: a.time, space: a.space, idea: a.idea, code: a.code,
            steps: (a.steps || []).map(s => ({ label: s.label, note: s.note || '', from: s.lines ? s.lines[0] : '', to: s.lines ? s.lines[1] : '', yes: s.yes || '', no: s.no || '' }))
        })),
        attempts: p.attempts, sketch: p.sketch, createdAt: p.createdAt || Date.now()
    };
}

/* small input factories */
function fField(lbl, attr, val = '', ph = '') {
    return `<div class="f-field"><label class="f-lbl">${lbl}</label><input class="fin" data-f="${attr}" value="${esc(val)}" placeholder="${esc(ph)}" autocomplete="off"></div>`;
}
function fSel(lbl, attr, opts, cur) {
    return `<div class="f-field"><label class="f-lbl">${lbl}</label><select class="fin" data-f="${attr}">${opts.map(o => `<option ${o === cur ? 'selected' : ''}>${o}</option>`).join('')}</select></div>`;
}
function fTa(lbl, attr, val = '', ph = '', rows = 3, cls = '') {
    return `<div class="f-field"><label class="f-lbl">${lbl}</label><textarea class="fin ta ${cls}" data-f="${attr}" rows="${rows}" placeholder="${esc(ph)}">${esc(val)}</textarea></div>`;
}

/* the paste-first entry — only on brand-new pages, never on edit */
function pasteBoxHTML() {
    if (store.problems.some(x => x.id === draft.id)) return '';
    const hasKey = !!brand.geminiKey;
    const aiBox = draft.title ? `
    <div class="ai-gen-box" style="margin-bottom: 24px; padding: 16px; background: rgba(var(--red-rgb), 0.05); border: 1px dashed var(--red); border-radius: 8px;">
      <p class="marg sm" style="margin-top:0"><strong>Auto-generate this page</strong>: Let AI write the statement, standard test cases, and approaches for <em>${esc(draft.title)}</em>.</p>
      <button class="btn" id="ai-gen-btn" ${hasKey ? '' : 'disabled'}><i data-lucide="sparkles"></i>generate with AI</button>
      ${hasKey ? '' : '<span class="paste-hint">add a Gemini API key in settings to use this feature</span>'}
    </div>
    ` : '';

    return `<div class="pastebox">
    ${aiBox}
    <label class="f-lbl">${draft.title ? 'or paste the problem manually' : 'paste the problem — from LeetCode or anywhere'}</label>
    <textarea class="fin ta code paste-ta" id="paste-ta" rows="7"
      placeholder="paste the full description here — statement, examples, constraints, function signature…"></textarea>
    <div class="paste-actions">
      <button class="btn" id="parse-btn"><i data-lucide="wand-2"></i>set the table</button>
      <span class="paste-hint">everything we can read gets filled in — you review before saving</span>
    </div>
  </div>`;
}

function viewForm() {
    const d = draft;
    const exists = store.problems.some(x => x.id === d.id);
    const py = d.lang === 'py';
    return `<div class="sheet">
    <div class="page">
      <div class="p-top">
        <a class="crumbs" onclick="go('#library')"><i data-lucide="arrow-left"></i>back to the index</a>
      </div>
      <h1 class="p-title"><span>${exists ? 'edit a page' : 'write a new page'}</span>${svgSquiggle(230, 9, 'swg tswg')}</h1>
      <p class="marg">the more honestly this gets filled in, the better practice gets — future-you is reading.</p>
      ${pasteBoxHTML()}
      <div id="f-errs"></div>
      <div class="f-sec">
        <div class="f-row3">
          ${fField('title', 'f-title', d.title, 'contains duplicate')}
          ${fSel('difficulty', 'f-diff', ['easy', 'medium', 'hard'], d.difficulty)}
          ${fSel('language', 'f-lang', ['JavaScript', 'Python'], langName(d.lang))}
        </div>
        ${fField('tags (comma separated)', 'f-tags', d.tagsStr, 'arrays & hashing')}
        ${fTa('the question — full statement', 'f-statement', d.statement, d.link ? 'paste the problem statement from LeetCode →' : 'given an integer array nums, return true if…', 4)}
        ${d.link ? `<p class="marg sm" style="margin:-6px 0 14px"><a href="${esc(d.link)}" target="_blank" style="color:var(--red)">open the problem on LeetCode ↗</a> — copy the description and paste it above (or into the paste box)</p>` : ''}
        <div class="f-row2">
          ${fField('given', 'f-given', d.given, 'an integer array nums')}
          ${fField('return', 'f-return', d.ret, 'true if any value appears twice')}
        </div>
        ${fTa('how to solve it — the summary box', 'f-summary', d.summary, 'the whole trick in a sentence or two…', 3)}
        ${fTa('starter code for practice (optional)', 'f-starter', d.starter, py ? '# leave empty and a LeetCode-style starter is generated from the signature' : '// leave empty and a LeetCode-style starter is generated from the signature', 4, 'code')}
      </div>
      <h2 class="sec"><span>tests</span>${svgSquiggle(64, 8, 'swg sec-swg')}</h2>
      <p class="marg sm">practice runs your code against these. input is a JSON object passed in as <code>input</code> — a dict in Python, an object in JavaScript; expected is JSON compared to what you return.</p>
      <div class="rep-tests">${d.tests.map((t, i) => testRep(t, i)).join('')}</div>
      <button class="btn ghost sm" onclick="formAddTest()"><i data-lucide="plus"></i>add a test</button>
      <h2 class="sec"><span>approaches</span>${svgSquiggle(64, 8, 'swg sec-swg')}</h2>
      <div class="rep-approaches">${d.approaches.length ? d.approaches.map((a, i) => apRep(a, i)).join('')
            : '<p class="marg sm">no approaches yet — the page can be saved now and filled in later.</p>'}</div>
      <button class="btn ghost sm" onclick="formAddAp()"><i data-lucide="plus"></i>add an approach</button>
      <div class="f-actions">
        <button class="btn" onclick="formSave()"><i data-lucide="check"></i>save this page</button>
        <button class="btn ghost" id="btn-polish"><i data-lucide="sparkles"></i>AI polish</button>
        <button class="btn ghost" onclick="go('${exists ? '#p/' + d.id : '#library'}')">discard</button>
      </div>
    </div>
  </div>`;
}
function testRep(t, i) {
    return `<div class="rep rep-item">
    <div class="rep-head"><span class="rep-tag">test ${i + 1}</span><span class="flex1"></span>
      <button class="rep-del" title="remove" onclick="formDelTest(${i})"><i data-lucide="x"></i></button></div>
    <div class="f-row2">
      ${fField('label (shown in practice)', 't-label', t.label, 'nums = [1,2,3,1]')}
      ${fField('expected (JSON)', 't-expected', t.expectedStr, 'true')}
    </div>
    ${fTa('input (JSON object)', 't-input', t.inputStr, '{"nums":[1,2,3,1]}', 2, 'code')}
  </div>`;
}
function apRep(a, ai) {
    const py = draft.lang === 'py';
    return `<div class="rep rep-ap">
    <div class="rep-head"><span class="rep-tag">approach ${ai + 1}</span><span class="flex1"></span>
      <button class="rep-del" title="remove" onclick="formDelAp(${ai})"><i data-lucide="x"></i></button></div>
    <div class="f-row3">
      ${fField('name', 'a-name', a.name, 'hash set')}
      ${fField('time', 'a-time', a.time, 'O(n)')}
      ${fField('space', 'a-space', a.space, 'O(n)')}
    </div>
    ${fTa('the idea', 'a-idea', a.idea, 'walk the array once, remember what you’ve seen…', 3)}
    ${fTa('code (runs with input in scope; return the answer)', 'a-code', a.code, py ? 'seen = set()' : 'const seen = new Set();', 9, 'code')}
    <div class="rep-steps">
      <div class="steps-lbl">
        <label class="f-lbl" style="margin:0">flow steps — the walkthrough arrows</label>
        <button class="btn ghost xs" onclick="formAddStep(${ai})"><i data-lucide="plus"></i>step</button>
      </div>
      ${a.steps.length ? `<div class="step-legend"><span>step</span><span>walkthrough note</span><span>code lines</span><span>branches (optional)</span><span></span></div>
      ${a.steps.map((s, si) => stepRep(ai, si, s)).join('')}` : '<p class="marg sm" style="margin:6px 0">no steps — this approach will show without a walkthrough.</p>'}
    </div>
  </div>`;
}
function stepRep(ai, si, s) {
    return `<div class="step-rep">
    <span class="step-idx">${si + 1}</span>
    <input class="fin sm" data-f="s-label" value="${esc(s.label)}" placeholder="create a set">
    <input class="fin sm" data-f="s-note" value="${esc(s.note)}" placeholder="what happens here…">
    <div class="f-lns">
      <input class="fin xs num" data-f="s-from" value="${esc(s.from)}" placeholder="L1" title="code line from">
      <input class="fin xs num" data-f="s-to" value="${esc(s.to)}" placeholder="L2" title="code line to">
    </div>
    <div class="f-br2">
      <input class="fin xs" data-f="s-yes" value="${esc(s.yes)}" placeholder="if yes →" title="yes branch">
      <input class="fin xs" data-f="s-no" value="${esc(s.no)}" placeholder="if no →" title="no branch">
    </div>
    <button class="rep-del" title="remove" onclick="formDelStep(${ai},${si})"><i data-lucide="x"></i></button>
  </div>`;
}

/* read the whole form back into the draft (called before any
   structural change re-renders, so nothing typed gets lost) */
function dv(name, root = document) { const el = root.querySelector(`[data-f="${name}"]`); return el ? el.value : ''; }
function harvest() {
    draft.title = dv('f-title'); draft.difficulty = dv('f-diff');
    draft.lang = dv('f-lang') === 'Python' ? 'py' : 'js';
    draft.tagsStr = dv('f-tags');
    draft.statement = dv('f-statement'); draft.given = dv('f-given'); draft.ret = dv('f-return');
    draft.summary = dv('f-summary'); draft.starter = dv('f-starter');
    /* draft.link is NOT harvested — it isn't a form input, it
       rides along from the curriculum row until save */
    draft.tests = $$('.rep-tests .rep-item').map(el => ({ label: dv('t-label', el), inputStr: dv('t-input', el), expectedStr: dv('t-expected', el) }));
    draft.approaches = $$('.rep-approaches .rep-ap').map(el => ({
        name: dv('a-name', el), time: dv('a-time', el), space: dv('a-space', el),
        idea: dv('a-idea', el), code: dv('a-code', el),
        steps: $$('.rep-steps .step-rep', el).map(s => ({
            label: dv('s-label', s), note: dv('s-note', s),
            from: dv('s-from', s), to: dv('s-to', s), yes: dv('s-yes', s), no: dv('s-no', s)
        }))
    }));
}
function formAddTest() { harvest(); draft.tests.push({ label: '', inputStr: '', expectedStr: '' }); render(); }
function formDelTest(i) { harvest(); draft.tests.splice(i, 1); render(); }
function formAddAp() { harvest(); draft.approaches.push({ name: '', time: '', space: '', idea: '', code: '', steps: [] }); render(); }
function formDelAp(i) { harvest(); draft.approaches.splice(i, 1); render(); }
function formAddStep(ai) { harvest(); draft.approaches[ai].steps.push({ label: '', note: '', from: '', to: '', yes: '', no: '' }); render(); }
function formDelStep(ai, si) { harvest(); draft.approaches[ai].steps.splice(si, 1); render(); }

/* ---------- the paste box: parse → prefill → review ----------
   the parser only ever fills EMPTY fields — nothing typed is
   overwritten, so clicking it twice is harmless. the statement
   gets the core description only; examples and constraints
   became tests, so the practice page stays clean. */
function mountPasteBox() {
    const btn = $('#parse-btn'); if (!btn) return;
    const ta = $('#paste-ta'); if (!ta) return;
    btn.addEventListener('click', () => {
        const text = ta.value;
        if (!text.trim()) { toast('paste the problem description first', 'pencil'); return; }
        const parsed = parseProblemText(text);
        harvest();   // keep anything already typed

        if (parsed.lang) draft.lang = parsed.lang;   // the signature is the strongest signal
        if (!draft.statement.trim()) draft.statement = parsed.core || text.trim();
        if (parsed.given && !draft.given.trim()) draft.given = parsed.given;
        if (parsed.ret && !draft.ret.trim()) draft.ret = parsed.ret;
        if (parsed.titleGuess && !draft.title.trim()) draft.title = parsed.titleGuess;
        if (parsed.starter && !draft.starter.trim()) draft.starter = parsed.starter;
        if (parsed.tests.length && !draft.tests.some(t => t.inputStr.trim())) {
            draft.tests = parsed.tests.map((t, i) => ({
                label: 'example ' + (i + 1),
                inputStr: JSON.stringify(t.input),
                expectedStr: JSON.stringify(t.expected),
            }));
        }

        const got = [], missed = [];
        if (parsed.lang) got.push('language'); else missed.push('language');
        if (parsed.tests.length) got.push('tests'); else missed.push('tests');
        if (parsed.given) got.push('given'); else missed.push('given');
        if (parsed.ret) got.push('return'); else missed.push('return');
        if (parsed.titleGuess) got.push('title'); else missed.push('title');
        if (parsed.starter) got.push('starter'); else missed.push('starter');
        let msg = got.length ? 'filled in: ' + got.join(', ') : 'couldn\u2019t read much — fields left for you';
        if (missed.length) msg += ' \u00b7 left for you: ' + missed.join(', ');
        render();
        toast(msg, got.length ? 'check' : 'pencil');
    });
}

function mountAiGen() {
    const btn = $('#ai-gen-btn'); if (!btn) return;
    btn.addEventListener('click', async () => {
        if (!draft.title) return;
        harvest();
        btn.disabled = true;
        btn.innerHTML = '<i data-lucide="loader-2"></i>thinking\u2026'; icons();
        
        const r = await aiGenerateProblem(draft.title, draft.lang);
        
        btn.disabled = false;
        btn.innerHTML = '<i data-lucide="sparkles"></i>generate with AI'; icons();
        
        if (r.err) { toast(r.err, 'pencil'); return; }
        
        if (r.statement) draft.statement = r.statement;
        if (r.given) draft.given = r.given;
        if (r.ret) draft.ret = r.ret;
        if (r.summary) draft.summary = r.summary;
        if (r.starter) draft.starter = r.starter;
        
        if (r.tests && r.tests.length) {
            draft.tests = r.tests.map((t, i) => ({
                label: t.label || ('example ' + (i + 1)),
                inputStr: typeof t.inputStr === 'string' ? t.inputStr : JSON.stringify(t.inputStr),
                expectedStr: typeof t.expectedStr === 'string' ? t.expectedStr : JSON.stringify(t.expectedStr)
            }));
        }
        
        if (r.approaches && r.approaches.length) {
            draft.approaches = r.approaches.map(a => ({
                name: a.name || '', time: a.time || '', space: a.space || '',
                idea: a.idea || '', code: a.code || '', steps: a.steps || []
            }));
        }
        
        render();
        toast('page generated! review and save when ready.', 'sparkles');
    });
}

/* ---------- the AI polish button ----------
   metadata only: given/return phrasing. the "how to solve it"
   summary box stays human — that's the notebook's whole soul */
function mountPolish() {
    const b = $('#btn-polish'); if (!b) return;
    b.addEventListener('click', async () => {
        harvest();
        if (!draft.statement.trim()) { toast('paste or type the statement first', 'pencil'); return; }
        if (!brand.geminiKey) { toast('add a gemini key in settings (optional) — or phrase given/return yourself', 'pencil'); return; }
        b.disabled = true;
        b.innerHTML = '<i data-lucide="loader-2"></i>thinking\u2026'; icons();
        const r = await aiPolish({ statement: draft.statement });
        b.disabled = false;
        b.innerHTML = '<i data-lucide="sparkles"></i>AI polish'; icons();
        if (r.err) { toast(r.err, 'pencil'); return; }
        if (r.given && !draft.given.trim()) draft.given = r.given;
        if (r.ret && !draft.ret.trim()) draft.ret = r.ret;
        render();
        toast('given & return polished — the summary stays yours to write', 'check');
    });
}

function formSave() {
    harvest();
    const errs = [];
    if (!draft.title.trim()) errs.push('a title, at the very least');
    if (!draft.statement.trim()) errs.push('the question statement');
    if (!draft.tests.length) errs.push('at least one test');
    const tests = [];
    draft.tests.forEach((t, i) => {
        let input, expected;
        try { input = JSON.parse(t.inputStr); } catch (e) { errs.push(`test ${i + 1}: input isn’t valid JSON`); return; }
        try { expected = JSON.parse(t.expectedStr); } catch (e) { errs.push(`test ${i + 1}: expected isn’t valid JSON`); return; }
        if (typeof input !== 'object' || input === null || Array.isArray(input))
            errs.push(`test ${i + 1}: input should be a JSON object, like {"nums":[1,2,3,1]}`);
        tests.push({ label: t.label.trim() || fmtVal(input), input, expected });
    });
    if (errs.length) {
        $('#f-errs').innerHTML = `<div class="ferrbox"><i data-lucide="pencil"></i><span>${errs.map(esc).join('<br>')}</span></div>`;
        icons(); toast('a few gaps to fill in', 'pencil');
        return;
    }
    const approaches = draft.approaches.map((a, i) => {
        const steps = a.steps.map(s => {
            let lines = null;
            const f = String(s.from).trim(), t = String(s.to).trim();
            if (f !== '' || t !== '') {
                const from = Math.max(1, parseInt(f) || 1);
                const to = Math.max(from, parseInt(t) || from);
                lines = [from, to];
            }
            return { label: s.label.trim(), note: s.note.trim(), lines, yes: s.yes.trim(), no: s.no.trim() };
        }).filter(s => s.label);
        return {
            name: a.name.trim() || ('approach ' + (i + 1)), time: a.time.trim(), space: a.space.trim(),
            idea: a.idea.trim(), code: a.code, steps
        };
    });
    const p = {
        id: draft.id, title: draft.title.trim(), difficulty: draft.difficulty, lang: draft.lang,
        tags: draft.tagsStr.split(',').map(t => t.trim()).filter(Boolean),
        statement: draft.statement.trim(), given: draft.given.trim(), ret: draft.ret.trim(),
        summary: draft.summary.trim(), starter: draft.starter.trim(),
        link: draft.link || '',
        tests, approaches, attempts: draft.attempts || [], sketch: draft.sketch || null,
        createdAt: draft.createdAt || Date.now()
    };
    store.upsert(p); store.save();
    linkCurriculumMatches();   // auto-link the saved page to its curriculum item by title
    toast('page saved to the notebook', 'check');
    go('#p/' + p.id);
}