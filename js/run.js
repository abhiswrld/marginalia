/* =========================================================
   run.js — executing user code, safely
   · JavaScript: sandboxed Web Worker, 3s watchdog
   · Python: Pyodide (CPython compiled to WASM) in its own
     worker, lazily fetched from a CDN on the first Python
     run and cached by the browser afterwards
   ========================================================= */

/* ---------- LeetCode-style bridge ----------
   If the user's code defines `class Solution`, the runner calls
   its first method, feeding input values by parameter name.
   Plain `input` + `return` code is untouched (a top-level return
   preempts the bridge). */

const JS_BRIDGE_SRC = `
;
{
  const __sol = (typeof Solution === 'function') ? Solution : null;
  if (__sol) {
    const __s = new __sol();
    const __methods = Object.getOwnPropertyNames(Object.getPrototypeOf(__s))
      .filter(function(m){ return m !== 'constructor' && typeof __s[m] === 'function'; });
    if (__methods.length) {
      const __fn = __s[__methods[0]];
      const __src = String(__fn);
      const __m = /\\(([^)]*)\\)/.exec(__src);
      const __ps = (__m && __m[1])
        ? __m[1].split(',').map(function(s){ return s.trim().split(/[:=\\s]/)[0]; }).filter(Boolean)
        : [];
      const __missing = __ps.filter(function(p){ return !(p in input); });
      if (__missing.length) throw new Error('input is missing keys the solution needs: ' + __missing.join(', '));
      return __fn.apply(__s, __ps.map(function(p){ return input[p]; }));
    }
  }
}`;
const wrapJS = c => c + '\n' + JS_BRIDGE_SRC;

/* ---------- JavaScript ---------- */
function runSync(code, input) {
    const logs = [];
    const fmt = v => { if (typeof v === 'string') return v; try { return JSON.stringify(v) } catch (e) { return String(v) } };
    const cons = { log: (...a) => logs.push(a.map(fmt).join(' ')), warn: (...a) => logs.push('[warn] ' + a.map(fmt).join(' ')), error: (...a) => logs.push('[err] ' + a.map(fmt).join(' ')) };
    let result, err = null; const t0 = performance.now();
    try { result = new Function('input', 'console', wrapJS(code))(input, cons); } catch (ex) { err = String((ex && ex.message) || ex); }
    return { result, err, logs, ms: Math.max(1, Math.round(performance.now() - t0)) };
}
function runJS(code, input) {
    return new Promise(resolve => {
        let w;
        try {
            const src = `self.onmessage=function(e){
        var logs=[];
        function fmt(v){ if(typeof v==='string')return v; try{return JSON.stringify(v)}catch(_){return String(v)} }
        var cons={log:function(){logs.push(Array.prototype.map.call(arguments,fmt).join(' '))},
                  warn:function(){logs.push('[warn] '+Array.prototype.map.call(arguments,fmt).join(' '))},
                  error:function(){logs.push('[err] '+Array.prototype.map.call(arguments,fmt).join(' '))}};
        var result,err=null,t0=Date.now();
        try{ result=new Function('input','console',${JSON.stringify(wrapJS(code))})(e.data.input,cons); }
        catch(ex){ err=String((ex&&ex.message)||ex); }
        var out;
        try{ out=(result===undefined)?undefined:JSON.parse(JSON.stringify(result)); }catch(_){ out=String(result); }
        self.postMessage({result:out,err:err,logs:logs,ms:Date.now()-t0});
      };`;
            w = new Worker(URL.createObjectURL(new Blob([src], { type: 'application/javascript' })));
        } catch (e) { resolve(runSync(code, input)); return; }
        const to = setTimeout(() => { w.terminate(); resolve({ timeout: true }); }, 3000);
        w.onmessage = ev => { clearTimeout(to); resolve(ev.data); try { w.terminate(); } catch (e) { } };
        w.onerror = ev => { clearTimeout(to); try { w.terminate(); } catch (e) { } resolve({ err: (ev && ev.message) || 'worker error' }); };
        w.postMessage({ input });
    });
}

/* ---------- Python (Pyodide) ---------- */
const PY_BASE = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
const PY = { w: null, ready: false, cur: null, watch: null, queue: [] };
function pyWorkerSrc() {
    return `
importScripts('${PY_BASE}pyodide.js');
let pyodide=null, booting=null;
function boot(){
  if(pyodide) return Promise.resolve(pyodide);
  if(!booting) booting = loadPyodide({indexURL:'${PY_BASE}'}).then(function(p){ pyodide=p; self.postMessage({type:'ready'}); return p; });
  return booting;
}
self.onmessage = async function(e){
  if(!e.data || e.data.type!=='run') return;
  try{ await boot(); }
  catch(err){ self.postMessage({type:'run-done', result:{err:'could not load the Python runtime — check the connection'}}); return; }
  const t0=Date.now();
  let out=null;
  try{ out = await pyodide.runPythonAsync(e.data.code); }
  catch(err){ self.postMessage({type:'run-done', result:{err:String((err&&err.message)||err), ms:Math.max(1,Date.now()-t0)}}); return; }
  let res;
  try{ res = JSON.parse(out); }
  catch(_){ res = {err:'internal: unreadable Python result'}; }
  res.ms = Math.max(1, Date.now()-t0);
  self.postMessage({type:'run-done', result:res});
};`;
}

/* The wrapper is what makes notebook-style Python work:
   the user's code is indented INTO __mn_solve(input), so a
   top-level `return` behaves like the JS runner, `input`
   arrives as a plain dict, and print() output is captured.

   THIS WAS THE BUG: the body used to be indented only 4
   spaces — the same depth as the `def` itself — so Python
   saw an empty function body and every run died with
   "IndentationError: expected an indented block". The body
   now sits 8 spaces in, one level deeper than the def.

   PY_PREFIX_LINES must equal the number of prefix lines, so
   error messages can be translated back to the user's own
   line numbers. Count them below — it's 8. */
const PY_PREFIX_LINES = 8;

function buildPyWrapper(code, input) {
    // 1. normalise line endings and tabs, then find the code's overall
    //    indentation (handles code pasted in already-indented — we strip
    //    the common prefix so the wrapper can re-indent cleanly)
    const lines = String(code).replace(/\r\n?/g, '\n').replace(/\t/g, '    ').split('\n');
    let min = Infinity;
    for (const l of lines) {
        if (l.trim() === '') continue;                    // blank lines don't count
        min = Math.min(min, l.match(/^ */)[0].length);
    }
    if (!isFinite(min)) min = 0;

    // 2. every non-blank line, re-indented to sit inside __mn_solve()
    const body = lines
        .map(l => (l.trim() === '' ? '' : '        ' + l.slice(min)))
        .join('\n');

    // 3. the input arrives as JSON, parsed into a plain dict
    const inputLiteral = JSON.stringify(JSON.stringify(input ?? {}));

    // prefix: 8 lines, then the user's code, then the suffix.
    // (keep PY_PREFIX_LINES in sync if you touch the prefix!)
    const prefix = [
        'import json, sys, io, traceback',                     // 1
        'def __mn_run():',                                     // 2
        '    _buf = io.StringIO()',                            // 3
        '    _old = sys.stdout',                               // 4
        '    sys.stdout = _buf',                               // 5
        '    _in = json.loads(' + inputLiteral + ')',          // 6
        '    _res = {"result": None, "err": None}',            // 7
        '    def __mn_solve(input):',                          // 8  ← user code starts on line 9
    ];
    const suffix = [
        '        pass',                       // keeps the def valid if the body is empty
        '    try:',
        '        _res["result"] = __mn_solve(_in)',
        '    except SystemExit:',
        '        pass',
        '    except BaseException:',
        '        _res["err"] = traceback.format_exc().strip().splitlines()[-1]',
        '    sys.stdout = _old',
        '    _res["logs"] = _buf.getvalue()',
        '    return json.dumps(_res, default=str)',
        '__mn_run()',
    ];
    const PY_BRIDGE = [
        "        # leetcode-style bridge: if the code defines class Solution,",
        "        # call its first method, passing input values by parameter name",
        "        _cls = locals().get('Solution')",
        "        if _cls is not None:",
        "            import inspect as _ins",
        "            _inst = _cls()",
        "            _ms = [(n, f) for n, f in vars(_cls).items() if callable(f) and not n.startswith('_')]",
        "            if _ms:",
        "                _n, _f = _ms[0]",
        "                _ps = list(_ins.signature(_f).parameters)[1:]",
        "                _missing = [q for q in _ps if q not in input]",
        "                if _missing:",
        "                    raise KeyError('input is missing keys the solution needs: ' + ', '.join(_missing))",
        "                return _f(_inst, *[input[q] for q in _ps])",
    ];
    return [...prefix, body, ...PY_BRIDGE, ...suffix].join('\n');
}

/* Python reports line numbers for the *wrapper*; shift them back so
   "line 12" means line 12 of what the user actually wrote. */
function remapPyError(err) {
    return String(err).replace(/line (\d+)/g, (m, n) => {
        const ln = parseInt(n, 10);
        return ln > PY_PREFIX_LINES ? 'line ' + (ln - PY_PREFIX_LINES) : m;
    });
}

/* An expander shown under Python errors: the exact program that was
   sent to the interpreter, numbered. No guessing what "line 8" was. */
function pyDebugHTML(r) {
    if (!r || !r.err || !r.wrapper) return '';
    const lines = r.wrapper.split('\n');
    return `<details class="wrapdet"><summary>see exactly what ran</summary><pre>${lines.map((l, i) => `<span class="wd-ln">${i + 1}</span>${esc(l)}`).join('\n')
        }</pre></details>`;
}

/* one python job runs at a time; the worker is reused between runs
   (the 60s watchdog also covers the very first pyodide download) */
function runPython(wrapper) {
    return new Promise(resolve => { PY.queue.push({ wrapper, resolve }); pyPump(); });
}
function pyPump() {
    if (PY.cur || !PY.queue.length) return;
    const job = PY.queue.shift();
    if (!PY.w) {
        try {
            PY.w = new Worker(URL.createObjectURL(new Blob([pyWorkerSrc()], { type: 'text/javascript' })));
            PY.w.onmessage = ev => {
                const d = ev.data || {};
                if (d.type === 'ready') { PY.ready = true; return; }
                if (d.type === 'run-done' && PY.cur) {
                    clearTimeout(PY.watch);
                    const res = d.result || {};
                    if (typeof res.logs === 'string') res.logs = res.logs.split('\n').filter(x => x !== '');
                    else if (!Array.isArray(res.logs)) res.logs = [];
                    if (res.err) res.err = remapPyError(res.err);
                    res.wrapper = PY.cur.wrapper;    // kept for the error expander
                    const fin = PY.cur; PY.cur = null;
                    fin.resolve(res);
                    pyPump();
                }
            };
            PY.w.onerror = () => {
                clearTimeout(PY.watch);
                try { PY.w && PY.w.terminate(); } catch (_) { }
                PY.w = null; PY.ready = false;
                if (PY.cur) { const fin = PY.cur; PY.cur = null; fin.resolve({ err: 'the Python runtime failed to load — check the connection' }); }
                pyPump();
            };
        } catch (e) { job.resolve({ err: 'could not start the Python runtime' }); return; }
    }
    PY.cur = job;
    PY.watch = setTimeout(() => {
        try { PY.w && PY.w.terminate(); } catch (_) { }
        PY.w = null; PY.ready = false;
        if (PY.cur) { const fin = PY.cur; PY.cur = null; fin.resolve({ timeout: true }); }
        pyPump();
    }, 60000);
    PY.w.postMessage({ type: 'run', code: job.wrapper });
}

/* the one entry point both the try-it box and the practice room use */
function runCode(code, input, lang = 'js') {
    if (lang === 'py') return runPython(buildPyWrapper(code, input));
    return runJS(code, input);
}
const pyLoadMsg = () => (PY.ready ? 'running…' : 'loading the Python runtime — one-time download (~10 MB), then it’s cached…');