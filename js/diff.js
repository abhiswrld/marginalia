/* =========================================================
   diff.js — the line diff (classic LCS)
   powers "then vs now": every attempt gets compared
   against a previous one, line by line.
   ========================================================= */

function diffOps(a, b) {
    const A = a.split('\n'), B = b.split('\n'), m = A.length, n = B.length;
    const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--)
        dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const ops = []; let i = 0, j = 0;
    while (i < m && j < n) {
        if (A[i] === B[j]) { ops.push({ t: '=', s: A[i] }); i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push({ t: '-', s: A[i] }); i++; }
        else { ops.push({ t: '+', s: B[j] }); j++; }
    }
    while (i < m) { ops.push({ t: '-', s: A[i++] }); }
    while (j < n) { ops.push({ t: '+', s: B[j++] }); }
    return ops;
}
function diffHTML(a, b) {
    const ops = diffOps(a, b);
    let add = 0, rem = 0, eq = 0;
    ops.forEach(o => { o.t === '+' ? add++ : o.t === '-' ? rem++ : eq++; });
    const sim = Math.round(eq / Math.max(1, a.split('\n').length, b.split('\n').length) * 100);
    const rowOf = o => `<div class="dl ${o.t === '=' ? '' : o.t}"><span class="m">${o.t === '=' ? '' : o.t === '-' ? '−' : '+'}</span><span class="c">${esc(o.s) || ' '}</span></div>`;
    /* collapse long runs of unchanged lines so the diff stays readable */
    const rows = []; let run = [];
    const flush = () => {
        if (!run.length) return;
        if (run.length > 8) { rows.push(...run.slice(0, 3).map(rowOf), `<div class="dl sep">··· ${run.length - 6} unchanged lines ···</div>`, ...run.slice(-3).map(rowOf)); }
        else rows.push(...run.map(rowOf));
        run = [];
    };
    ops.forEach(o => { if (o.t === '=') run.push(o); else { flush(); rows.push(rowOf(o)); } });
    flush();
    return {
        html: `<div class="diff">${rows.join('')}</div>`,
        stat: `${add} line${add !== 1 ? 's' : ''} added · ${rem} removed · ${sim}% identical`
    };
}