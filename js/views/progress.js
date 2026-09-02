/* =========================================================
   views/progress.js — the journey page
   hero (title + streak, top-right), github-style heatmap
   with month labels, weekday labels, tooltips and a year
   selector, then the curriculum lists.
   ========================================================= */

var PREFILL_DRAFT = false;   // set by startFromCurriculum, consumed by route() in app.js
var HEATMAP_YEAR = null;     // null = rolling last year; a number = that calendar year

function viewProgress() {
    const streak = computeStreak();
    return `<div class="sheet">
    <div class="page">
      <a class="crumbs" onclick="go('#library')"><i data-lucide="arrow-left"></i>back to the index</a>
      <div class="prog-hero">
        <h1 class="p-title"><span>the journey</span>${svgSquiggle(160, 9, 'swg tswg')}</h1>
        ${streakCard(streak)}
      </div>
      ${heatmapHTML()}
      <div class="prog-lists">
        ${CURRICULA.map(c => curriculumSection(c)).join('')}
      </div>
    </div>
  </div>`;
}

/* ---------- streak card (sits top-right of the hero) ---------- */
function streakCard({ current, best }) {
    return `<div class="streak-card">
    <i data-lucide="flame" class="streak-flame ${current > 0 ? 'lit' : ''}"></i>
    <div class="streak-nums">
      <span class="streak-cur">${current}</span>
      <span class="streak-lbl">day streak</span>
    </div>
    <div class="streak-sep"></div>
    <div class="streak-nums">
      <span class="streak-cur dim">${best}</span>
      <span class="streak-lbl">best</span>
    </div>
  </div>`;
}

/* ---------- heatmap helpers ---------- */
/* which years have any attempts (current year always listed) */
function getYearsWithData() {
    const yrs = new Set();
    yrs.add(new Date().getFullYear());
    for (const p of store.problems) for (const a of (p.attempts || [])) yrs.add(new Date(a.ts).getFullYear());
    return [...yrs].sort();
}
function attemptsSince(fromTs) {
    let n = 0;
    for (const p of store.problems) for (const a of (p.attempts || [])) if (a.ts >= fromTs) n++;
    return n;
}
/* rolling 52 weeks (Sunday-aligned), or a full calendar year */
function heatmapRange() {
    const today = new Date(); today.setHours(23, 59, 59, 999);
    if (HEATMAP_YEAR === null) {
        const start = new Date(today); start.setHours(0, 0, 0, 0);
        start.setDate(start.getDate() - 364);
        start.setDate(start.getDate() - start.getDay());   // back to Sunday
        return { start, label: 'the last year', countFrom: today.getTime() - 365 * 864e5 };
    }
    const y = HEATMAP_YEAR;
    const start = new Date(y, 0, 1); start.setDate(start.getDate() - start.getDay());
    return { start, label: String(y), countFrom: new Date(y, 0, 1).getTime() };
}
function setHeatmapYear(y) { HEATMAP_YEAR = y; render(); }

/* ---------- the heatmap itself ---------- */
function heatmapHTML() {
    const days = getAttemptDays();
    const { start, label, countFrom } = heatmapRange();
    const today = new Date();
    const total = attemptsSince(countFrom);
    const years = getYearsWithData();

    /* grid ends at the Saturday of the week containing today (rolling)
       or Dec 31 of the selected year */
    const gridEnd = new Date(); gridEnd.setHours(23, 59, 59, 999);
    if (HEATMAP_YEAR !== null) gridEnd.setFullYear(HEATMAP_YEAR, 11, 31);

    const cols = [], months = [];
    let lastM = -1;
    const cur = new Date(start);
    while (cur <= gridEnd) {
        /* month label lands on the first column of a new month */
        let ml = '';
        if (cur.getDate() <= 7 && cur.getMonth() !== lastM) {
            ml = cur.toLocaleDateString(undefined, { month: 'short' });
            lastM = cur.getMonth();
        }
        months.push(`<span class="hm-mcell">${ml}</span>`);
        let cells = '';
        for (let d = 0; d < 7; d++) {
            const day = new Date(cur); day.setDate(cur.getDate() + d);
            if (day > today) { cells += `<span class="hm-dot future"></span>`; continue; }
            const n = days[day.toDateString()] || 0;
            const lvl = n === 0 ? '' : n === 1 ? 'l1' : n === 2 ? 'l2' : 'l3';
            const tip = n > 0 ? `${n} attempt${n !== 1 ? 's' : ''} on ${day.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}` : '';
            cells += `<span class="hm-dot ${lvl}"${tip ? ` title="${esc(tip)}"` : ''}></span>`;
        }
        cols.push(`<span class="hm-col">${cells}</span>`);
        cur.setDate(cur.getDate() + 7);
    }

    /* weekday labels down the left — Mon/Wed/Fri, github-style sparse */
    const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const wdcol = wd.map((w, i) => `<span class="hm-wd">${(i === 1 || i === 3 || i === 5) ? w : ''}</span>`).join('');

    const totalLine = total > 0
        ? `<b>${total}</b> attempt${total !== 1 ? 's' : ''} in ${label}`
        : `no attempts in ${label} yet — the ink shows up as you practice`;

    return `<div class="hm-card">
    <div class="hm-head">
      <span class="hm-total">${totalLine}</span>
      <div class="hm-years">
        <button class="hm-year${HEATMAP_YEAR === null ? ' on' : ''}" onclick="setHeatmapYear(null)">last year</button>
        ${years.map(y => `<button class="hm-year${HEATMAP_YEAR === y ? ' on' : ''}" onclick="setHeatmapYear(${y})">${y}</button>`).join('')}
      </div>
    </div>
    <div class="hm-scroll">
      <div class="hm-monthrow"><span class="hm-corner"></span>${months.join('')}</div>
      <div class="hm-body"><span class="hm-wdcol">${wdcol}</span>${cols.join('')}</div>
    </div>
    <div class="hm-legend">
      <span class="hm-dot"></span><span class="hm-dot l1"></span><span class="hm-dot l2"></span><span class="hm-dot l3"></span>
      <span class="hm-legend-lbl">less → more</span>
    </div>
  </div>`;
}

function curriculumSection(list) {
    const prog = curriculumProgress(list.id);
    const byCat = {};
    for (const [slug, num, title, cat, diff] of list.problems) {
        if (!byCat[cat]) byCat[cat] = [];
        byCat[cat].push([slug, num, title, cat, diff]);
    }
    const cats = Object.keys(byCat);
    return `<section class="curr-section">
    <div class="curr-head" onclick="toggleCurr('${list.id}')">
      <h2 class="curr-name" style="color:${list.color}">${esc(list.name)}</h2>
      <span class="curr-desc">${esc(list.desc)}</span>
      <span class="flex1"></span>
      <span class="curr-count" id="currcount-${list.id}">${prog.done} / ${prog.total}</span>
    </div>
    <div id="currbar-${list.id}">${progressBarHTML(prog, list.color)}</div>
    <div class="curr-list" id="curr-${list.id}" ${list.id === 'blind75' ? '' : 'hidden'}>
      ${cats.map(cat => `
        <div class="curr-cat">
          <span class="curr-cat-name">${esc(cat)}</span>
          <span class="curr-cat-line"></span>
        </div>
        ${byCat[cat].map(([slug, , title, , diff]) => currRow(list, slug, title, diff)).join('')}
      `).join('')}
    </div>
  </section>`;
}

function toggleCurr(id) {
    const el = document.getElementById('curr-' + id);
    if (el) el.hidden = !el.hidden;
}

function progressBarHTML(prog, color) {
    /* SVG stretches to 100% with preserveAspectRatio="none" — but
       text gets squished vertically by that, so the % label lives
       outside the SVG as a plain HTML span instead. */
    const VW = 1000, h = 14, pad = 2;
    const filled = Math.round(VW * prog.pct / 100);
    const d = roughLine(pad, h / 2, VW - pad, h / 2, 6, 1.5);
    const df = filled > 4 ? roughLine(pad, h / 2, filled, h / 2, 6, 1.2) : '';
    return `<div class="curr-bar-wrap">
    <svg class="curr-bar" viewBox="0 0 ${VW} ${h}" preserveAspectRatio="none">
      <path d="${d}" fill="none" stroke="#d8cdb2" stroke-width="6" stroke-linecap="round"/>
      ${df ? `<path d="${df}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round"/>` : ''}
    </svg>
    <span class="curr-bar-pct">${prog.pct}%</span>
  </div>`;
}

function currRow(list, slug, title, diff) {
    const done = isCurriculumDone(list.id, slug);
    const pageId = progress.linked[slug];
    const page = pageId ? store.byId(pageId) : null;
    const num = (list.problems.find(p => p[0] === slug) || [])[1];
    return `<div class="curr-row ${done ? 'done' : ''}" data-slug="${slug}">
    <button class="curr-check ${done ? 'on' : ''}" onclick="toggleCurrCheck('${list.id}','${slug}')" title="${done ? 'mark as not done' : 'mark as done'}">
      ${done ? svgCheck() : ''}
    </button>
    <span class="curr-num">${num ? num + '.' : ''}</span>
    <span class="curr-title">${esc(title)}</span>
    <span class="stamp sm ${diff}">${diff}</span>
    <span class="flex1"></span>
    ${page
            ? `<a class="curr-link" onclick="go('#p/${page.id}')"><i data-lucide="book-open"></i>open page</a>`
            : `<a class="curr-link start" onclick="startFromCurriculum('${list.id}','${slug}')"><i data-lucide="plus"></i>write a page</a>`
        }
    <a href="${LEETCODE_URL(slug)}" target="_blank" class="curr-leetcode" title="open on LeetCode"><i data-lucide="external-link"></i></a>
  </div>`;
}

function svgCheck() {
    return `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7 L6 11 L12 3" fill="none" stroke="var(--green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function toggleCurrCheck(listId, slug) {
    if (progress.checked[slug]) delete progress.checked[slug];
    else progress.checked[slug] = true;
    saveProgress();
    updateProgressDOM();   // in place — no full re-render, no collapse reset
}

/* patch counts, bars and rows directly — ticking a box never
   re-renders the page, and both lists update simultaneously
   because the state is slug-keyed */
function updateProgressDOM() {
    for (const list of CURRICULA) {
        const prog = curriculumProgress(list.id);
        const c = document.getElementById('currcount-' + list.id);
        if (c) c.textContent = `${prog.done} / ${prog.total}`;
        const b = document.getElementById('currbar-' + list.id);
        if (b) b.innerHTML = progressBarHTML(prog, list.color);
        const section = document.getElementById('curr-' + list.id);
        if (!section) continue;
        for (const [slug] of list.problems) {
            const row = section.querySelector(`.curr-row[data-slug="${slug}"]`);
            if (!row) continue;
            const done = isCurriculumDone(list.id, slug);
            row.classList.toggle('done', done);
            const btn = row.querySelector('.curr-check');
            if (btn) {
                btn.classList.toggle('on', done);
                btn.innerHTML = done ? svgCheck() : '';
                btn.title = done ? 'mark as not done' : 'mark as done';
            }
        }
    }
}

function startFromCurriculum(listId, slug) {
    const list = CURRICULA.find(l => l.id === listId);
    if (!list) return;
    const item = list.problems.find(p => p[0] === slug);
    if (!item) return;
    const [s, title, cat, diff] = item;
    draft = {
        id: 'p' + Date.now().toString(36) + Math.floor(Math.random() * 99),
        title: title, difficulty: diff, lang: 'js',
        tagsStr: cat.toLowerCase() + (listId === 'blind75' ? ', blind 75' : ', neetcode 150'),
        link: LEETCODE_URL(slug),
        statement: '', given: '', ret: '', summary: '', starter: '',
        tests: [{ label: '', inputStr: '', expectedStr: '' }],
        approaches: [], attempts: [], sketch: null, createdAt: 0,
    };
    PREFILL_DRAFT = true;
    go('#new');
}