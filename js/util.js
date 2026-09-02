/* =========================================================
   util.js — small shared helpers
   dom shorthands, formatting, the hand-drawn SVG builders,
   and the little syntax highlighter (js + python).
   ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rnd = (n = 2) => +(Math.random() * 2 * n - n).toFixed(1);   // small wobble for hand-drawn lines
const icons = () => { try { window.lucide && lucide.createIcons(); } catch (e) { } };
const fmtVal = v => { if (v === undefined) return 'undefined'; if (typeof v === 'string') return JSON.stringify(v); try { return JSON.stringify(v); } catch (e) { return String(v); } };
const langName = l => l === 'py' ? 'Python' : 'JavaScript';

function fmtDur(s) {
    s = Math.max(0, Math.floor(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return h ? `${h}:${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}` : `${m}:${String(x).padStart(2, '0')}`;
}
function fmtAgo(ts) {
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s / 60) + 'm ago';
    if (s < 86400) return Math.floor(s / 3600) + 'h ago'; if (s < 604800) return Math.floor(s / 86400) + 'd ago';
    return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return Number.isNaN(a) && Number.isNaN(b);
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    const ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    return ka.every(k => deepEqual(a[k], b[k]));
}

/* ---------- hand-drawn SVG builders ----------
   everything wobbly on this site is a path with random jitter,
   so it looks pencilled rather than plotted. */
const NS = 'http://www.w3.org/2000/svg';
function roughLine(x1, y1, x2, y2, seg = 3, j = 2) {
    let d = `M ${+(x1 + rnd(j * .5)).toFixed(1)} ${+(y1 + rnd(j * .5)).toFixed(1)}`;
    for (let k = 1; k < seg; k++) {
        const t = k / seg;
        d += ` L ${+(x1 + (x2 - x1) * t + rnd(j)).toFixed(1)} ${+(y1 + (y2 - y1) * t + rnd(j)).toFixed(1)}`;
    }
    d += ` L ${x2} ${y2}`;
    return d;
}
function svgArrowH(cls) {
    const d = roughLine(4, 13, 44, 13) + ` M 44 13 L ${33 + rnd(2)} ${6 + rnd(2)} M 44 13 L ${32 + rnd(2)} ${19 + rnd(2)}`;
    return `<svg class="${cls}" width="52" height="26" viewBox="0 0 52 26" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
}
function squiggleD(w = 300, h = 9) {
    let d = `M 2 ${(h / 2).toFixed(1)}`, x = 2;
    while (x < w - 6) {
        const nx = x + 9;
        d += ` Q ${(x + nx) / 2} ${+(h / 2 + rnd(3)).toFixed(1)} ${nx} ${+(h / 2 + rnd(1.2)).toFixed(1)}`; x = nx;
    }
    return d;
}
function svgSquiggle(w = 300, h = 9, cls = 'swg') {
    return `<svg class="${cls}" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><path d="${squiggleD(w, h)}" fill="none" stroke="var(--red)" stroke-width="2.2" stroke-linecap="round" opacity=".8"/></svg>`;
}
function checkPathD() { return roughLine(14, 50, 48, 72, 3, 2.5) + ' ' + roughLine(48, 72, 104, 16, 3, 2.5); }
function scribblePathD(w, h) {
    const cx = w / 2, cy = h / 2, rx = Math.max(6, w / 2 - 8), ry = Math.max(4, h / 2 - 8);
    const pt = (deg, j = 2) => {
        const a = deg * Math.PI / 180;
        return [+(cx + Math.cos(a) * rx + rnd(j)).toFixed(1), +(cy + Math.sin(a) * ry + rnd(j)).toFixed(1)];
    };
    const p0 = pt(-80);
    let d = `M ${p0[0]} ${p0[1]}`;
    for (let a = -50; a <= -80 + 684; a += 30) {
        const c = pt(a - 15, 3), e = pt(a, 2.5);
        d += ` Q ${c[0]} ${c[1]} ${e[0]} ${e[1]}`;
    }
    return d;
}
/* draws an animated ellipse around the active flow chip */
function addScribble(chip) {
    const w = chip.offsetWidth, h = chip.offsetHeight;
    if (!w || !h) return;
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'scribble');
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', scribblePathD(w, h));
    path.setAttribute('fill', 'none'); path.setAttribute('stroke', 'var(--red)');
    path.setAttribute('stroke-width', '2'); path.setAttribute('stroke-linecap', 'round');
    svg.appendChild(path); chip.appendChild(svg);
    const L = path.getTotalLength();
    path.style.strokeDasharray = L; path.style.strokeDashoffset = L;
    requestAnimationFrame(() => { path.style.transition = 'stroke-dashoffset .5s ease'; path.style.strokeDashoffset = '0'; });
}
function sparkSVG(atts) {
    const vals = atts.map(a => a.duration), w = 210, h = 44, pad = 8;
    if (vals.length < 2) return '';
    const max = Math.max(...vals), min = Math.min(...vals), span = (max - min) || 1;
    const pts = vals.map((v, i) => [+(pad + i * (w - 2 * pad) / (vals.length - 1)).toFixed(1), +(h - pad - ((v - min) / span) * (h - 2 * pad - 6) + rnd(1.5)).toFixed(1)]);
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    pts.slice(1).forEach(p => { d += ` L ${p[0]} ${+ (p[1] + rnd(1.5)).toFixed(1)}`; });
    const dots = pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="2.6" fill="var(--red)"/>`).join('');
    return `<svg class="spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><path d="${d}" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>${dots}</svg>`;
}

/* ---------- pen-colored syntax highlighter ---------- */
const KJ = new Set('const let var function return if else for while do of in new class extends break continue typeof true false null undefined switch case default try catch throw async await'.split(' '));
const KP = new Set('def return if elif else for while in not and or is None True False import from as with try except finally raise lambda pass break continue class global nonlocal yield del assert match case async await'.split(' '));
function hl(code, lang = 'js') {
    const cm = lang === 'py' ? /#[^\n]*/.source
        : /\/\/[^\n]*|\/\*[\s\S]*?\*\//.source;
    const st = lang === 'py'
        ? /'''[\s\S]*?'''|"""[\s\S]*?"""|'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/.source
        : /`(?:[^`\\]|\\.)*`|'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"/.source;
    const re = new RegExp(`(${cm})|(${st})|(\\b\\d[\\d_]*(?:\\.\\d+)?\\b)|([A-Za-z_$][\\w$]*)`, 'g');
    const KW = lang === 'py' ? KP : KJ;
    let out = '', last = 0, m;
    while ((m = re.exec(code))) {
        out += esc(code.slice(last, m.index));
        const full = m[0];
        if (m[1]) out += `<span class="tk-c">${esc(full)}</span>`;
        else if (m[2]) out += `<span class="tk-s">${esc(full)}</span>`;
        else if (m[3]) out += `<span class="tk-n">${esc(full)}</span>`;
        else if (KW.has(full)) out += `<span class="tk-k">${esc(full)}</span>`;
        else if (code[m.index + full.length] === '(') out += `<span class="tk-f">${esc(full)}</span>`;
        else out += esc(full);
        last = m.index + full.length;
    }
    out += esc(code.slice(last));
    return out;
}