/* =========================================================
   parse.js — the problem-statement parser
   Paste a LeetCode-style description, get a prefilled page:
   language, signature, tests, given/return, title guess,
   and a LeetCode-style starter — with the examples and
   constraints stripped out of the statement itself.
   Pure regex heuristics — no network, no AI, always free.
   ========================================================= */

/* ---- the signature: language + method + params ---- */
function parseSignature(text) {
    const t = String(text || '');
    // The actual starter code is almost always at the end of the pasted text.
    // Searching only the last 1500 characters prevents matching example text.
    const chunk = t.slice(-1500);
    
    let m = chunk.match(/def\s+(\w+)\s*\(\s*self\s*(?:,\s*([^)]*))?\)/);
    if (m) {
        const params = m[2] ? m[2].split(',').map(s => s.trim().split(/[:=]/)[0].trim()).filter(Boolean) : [];
        return { lang: 'py', name: m[1], params };
    }
    m = chunk.match(/(?:var|let|const)\s+(\w+)\s*=\s*function\s*\(([^)]*)\)/)
        || chunk.match(/function\s+(\w+)\s*\(([^)]*)\)/)
        || chunk.match(/([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)\s*\{/); // general method signature in a class
    
    if (m) {
        // filter out keywords that might look like methods (e.g. if, for, while, catch)
        if (/^(if|for|while|switch|catch)$/.test(m[1])) return null;
        const params = m[2] ? m[2].split(',').map(s => s.trim().split(/[:=]/)[0].trim()).filter(Boolean) : [];
        return { lang: 'js', name: m[1], params };
    }
    return null;
}

/* ---- "nums = [2,7,11,15], target = 9" → {nums:[...], target:9} ---- */
function parseAssignments(line) {
    const out = {}; let i = 0;
    const src = String(line);
    while (i < src.length) {
        const keyM = src.slice(i).match(/^\s*([A-Za-z_$][\w$]*)\s*=\s*/);
        if (!keyM) break;
        const key = keyM[1];
        i += keyM[0].length;
        let depth = 0, j = i, inQ = null;
        for (; j < src.length; j++) {
            const ch = src[j];
            if (inQ) { if (ch === inQ && src[j - 1] !== '\\') inQ = null; continue; }
            if (ch === '"' || ch === "'") inQ = ch;
            else if (ch === '[' || ch === '{') depth++;
            else if (ch === ']' || ch === '}') depth--;
            else if ((ch === ',' || ch === '\n') && depth === 0) {
                const nxt = src.slice(j + 1).match(/^\s*[A-Za-z_$][\w$]*\s*=/);
                if (nxt) break;
            }
        }
        let val = src.slice(i, j).trim();
        i = j + 1;
        let parsed;
        try { parsed = JSON.parse(val.replace(/'/g, '"')); }
        catch (e) {
            if (/^-?\d+(\.\d+)?$/.test(val)) parsed = Number(val);
            else if (/^(true|false|null)$/i.test(val)) parsed = JSON.parse(val.toLowerCase());
            else parsed = String(val.replace(/^["']|["']$/g, ''));
        }
        out[key] = parsed;
    }
    return out;
}

/* ---- every Input:/Output: pair → a test ---- */
function parseTests(text) {
    const tests = [];
    // Split by "Input:" but keep the whole string for the block
    const blocks = String(text || '').split(/(?=Input:)/gi);
    
    for (const block of blocks) {
        if (!/^Input:/i.test(block)) continue;
        
        const outIdx = block.search(/\n\s*Output:/i);
        if (outIdx === -1) continue;
        
        const inputStr = block.substring(6, outIdx).trim();
        const remainder = block.substring(outIdx);
        // Find everything after Output: up until Explanation, Example, Constraints, Follow up, or end of string
        const outMatch = remainder.match(/Output:\s*([\s\S]*?)(?=\n\s*(?:Explanation|Example|Constraints|Follow up):|$)/i);
        
        if (outMatch) {
            try {
                const input = parseAssignments(inputStr);
                if (!Object.keys(input).length) continue;
                const outStr = outMatch[1].trim().replace(/'/g, '"');
                const expected = JSON.parse(outStr);
                tests.push({ input, expected });
            } catch (e) { /* malformed pair — skipped, reviewer fills it */ }
        }
    }
    return tests;
}

/* ---- the core statement: everything BEFORE the examples ----
   the examples and constraints get parsed into tests / dropped,
   so the statement field stays clean for the practice page */
function parseCoreStatement(text) {
    let t = String(text || '');
    const cut = t.search(/\n\s*(Example 1:|Example\s*:|Examples:|Follow up:|Constraints:)/i);
    if (cut > 0) t = t.slice(0, cut);
    return t.trim();
}

/* ---- given / return from the statement's own words ---- */
function parseGivenReturn(text) {
    const t = String(text || '').replace(/\s+/g, ' ').trim();
    let given = '', ret = '';
    const gm = t.match(/you are given\s+(.+?)(?:[,.]\s*(?:return|find|determine|give|you\s+may)|$)/i)
        || t.match(/given\s+(.+?)(?:[,.]\s*(?:return|find|determine)|$)/i);
    if (gm) given = gm[1].trim().replace(/^(a|an|the)\s+/i, '');
    const rm = t.match(/(?:^|[,.!?]\s*)(?:return|returns)\s+(.+?)(?:[,.!]|$)/i)
        || t.match(/(?:find|determine|compute)\s+(.+?)(?:[,.!]|$)/i);
    if (rm) ret = rm[1].trim();
    return { given, ret };
}

/* ---- title guess from the signature: twoSum → "Two Sum" ---- */
function titleFromSignature(sig) {
    if (!sig || !sig.name) return '';
    const words = String(sig.name)
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')   // camelCase → spaced
        .replace(/[_-]+/g, ' ')
        .trim()
        .split(/\s+/);
    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/* ---- LeetCode-style starter, built at parse time so it's
   visible and editable in the form ---- */
function starterFromSignature(sig, lang) {
    if (!sig || !sig.params.length) return '';
    if (lang === 'py') {
        return `class Solution:\n    def ${sig.name}(self, ${sig.params.join(', ')}):\n        pass  # <- replace with your solution\n`;
    }
    return `class Solution {\n  ${sig.name}(${sig.params.join(', ')}) {\n    return null; // <- replace with your solution\n  }\n}\n`;
}

/* ---- everything at once ---- */
function parseProblemText(text) {
    const sig = parseSignature(text);
    const tests = parseTests(text);
    const core = parseCoreStatement(text);
    const { given, ret } = parseGivenReturn(core);
    return {
        lang: sig ? sig.lang : null,
        signature: sig,
        tests,
        core,
        given, ret,
        titleGuess: sig ? titleFromSignature(sig) : '',
        starter: sig ? starterFromSignature(sig, sig.lang) : '',
    };
}