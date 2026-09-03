/* =========================================================
   views/library.js — the index page:
   stat tally boxes + the table of contents
   ========================================================= */

function viewLibrary() {
    const P = store.problems;
    return `<div class="sheet">
    <div class="page">
      <div class="lib-head">
        <div>
          <h2 class="lib-title"><span>the index</span></h2>
          ${svgSquiggle(140, 8, 'swg lswg')}
        </div>
        <button class="btn" onclick="go('#new')"><i data-lucide="plus"></i>write a new page</button>
      </div>
      ${statbarHTML()}
      ${P.length ? `<ul class="idx">${P.map((p, i) => idxRow(p, i)).join('')}</ul>`
            : `<div class="empty"><p class="marg">the notebook is empty — time to write the first page.</p>
           <button class="btn" onclick="go('#new')"><i data-lucide="plus"></i>write it</button></div>`}
    </div>
  </div>`;
}

/* the five tally boxes — each flexes to an equal share of the row,
   so together they span the full page width */
function statbarHTML() {
    const P = store.problems;
    const attempts = P.reduce((s, p) => s + (p.attempts || []).length, 0);
    const appr = P.reduce((s, p) => s + (p.approaches || []).length, 0);
    const solved = P.filter(p => (p.attempts || []).some(a => a.passed)).length;
    const total = P.reduce((s, p) => s + (p.attempts || []).reduce((x, a) => x + a.duration, 0), 0);
    const stats = [
        [P.length, 'pages', 'book-open'],
        [appr, 'approaches', 'git-branch'],
        [attempts, 'attempts logged', 'pencil-line'],
        [solved, 'solved at least once', 'check'],
        [fmtDur(total), 'time on the clock', 'timer'],
    ];
    return `<div class="statbar">${stats.map(([v, l, ic]) => `
    <div class="stat">
      <i data-lucide="${ic}"></i>
      <span class="stat-v">${v}</span>
      <span class="stat-l">${l}</span>
    </div>`).join('')}</div>`;
}

function idxRow(p, i) {
    const n = (p.attempts || []).length;
    let meta = `<span class="stamp sm ${p.difficulty}">${p.difficulty}</span><span class="langchip">${langName(p.lang)}</span><span>${p.approaches.length} approach${p.approaches.length !== 1 ? 'es' : ''}</span>`;
    meta += n ? `<span>${n} attempt${n !== 1 ? 's' : ''} · fastest ${fmtDur(Math.min(...p.attempts.map(a => a.duration)))}</span>` : '<span>not attempted yet</span>';
    return `<li class="idx-row" tabindex="0" onclick="go('#p/${p.id}')">
    <span class="idx-no">p.${String(i + 1).padStart(2, '0')}</span>
    <span class="idx-title">${esc(p.title)}</span>
    <span class="idx-dots"></span>
    <span class="idx-meta">${meta}</span>
  </li>`;
}