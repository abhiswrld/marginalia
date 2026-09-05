/* =========================================================
   ai.js — optional AI polish (BYO gemini key)
   The key lives in brand.geminiKey (localStorage, this browser
   only). Calls go browser → Google directly — never to this
   site. No key = feature off, everything else works.

   The rule: AI fills metadata (given/return phrasing), never
   thinking — the "how to solve it" summary stays human.
   ========================================================= */
async function aiPolish(problem) {
    const key = brand.geminiKey;
    if (!key) return { err: 'no key set — add one in settings (optional)' };
    const prompt =
        `You are helping fill in a study notebook. Given this coding problem, write two short phrases:
1. "given": what is provided, lowercase and clean (e.g. "an integer array nums and an integer target").
2. "ret": what to output (e.g. "the indices of the two numbers that add up to target").
Do NOT write a solution, a summary, or an explanation — only the two phrases.
Return ONLY valid JSON: {"given":"...","ret":"..."}

Problem:
 ${problem.statement}`;
    try {
        const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': key,
            },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        });
        if (!r.ok) return { err: 'gemini said ' + r.status + ' — check the key' };
        const data = await r.json();
        const text = data && data.candidates && data.candidates[0] && data.candidates[0].content
            && data.candidates[0].content.parts && data.candidates[0].content.parts[0]
            ? data.candidates[0].content.parts[0].text : '';
        const json = JSON.parse(text.replace(/```json|```/g, '').trim());
        return { given: String(json.given || ''), ret: String(json.ret || '') };
    } catch (e) {
        return { err: 'the call failed — ' + ((e && e.message) || e) };
    }
}

/* =========================================================
   Generate a full problem from a title
   ========================================================= */
async function aiGenerateProblem(title, language = 'py') {
    const key = brand.geminiKey;
    if (!key) return { err: 'no key set — add one in settings' };
    
    const langStr = language === 'py' ? 'Python' : 'JavaScript';
    const prompt = 
        `You are an expert coding instructor. I am building a study notebook and I need you to generate the full problem details for the LeetCode problem "${title}".
        
        Return ONLY valid JSON matching this exact structure:
        {
            "statement": "The full problem description.",
            "given": "A short phrase describing the input (e.g. 'an array of integers nums')",
            "ret": "A short phrase describing the output (e.g. 'the indices of the two numbers')",
            "summary": "A 1-2 sentence intuition of how to solve it optimally.",
            "starter": "Starter code template in ${langStr}.",
            "tests": [
                {
                    "label": "nums = [1,2], target = 3",
                    "inputStr": "JSON object of inputs, e.g. {\\"nums\\": [1,2], \\"target\\": 3}",
                    "expectedStr": "JSON of expected output, e.g. [0,1]"
                }
            ],
            "approaches": [
                {
                    "name": "brute force",
                    "time": "O(n^2)",
                    "space": "O(1)",
                    "idea": "explain the intuition...",
                    "code": "complete ${langStr} code for this approach...",
                    "steps": [
                        {
                            "label": "short action name (e.g. 'init pointers')",
                            "note": "what happens here and why",
                            "from": 1,
                            "to": 2,
                            "yes": "optional text if this branch is taken",
                            "no": "optional text if this branch is NOT taken"
                        }
                    ]
                },
                {
                    "name": "optimal approach",
                    "time": "...",
                    "space": "...",
                    "idea": "...",
                    "code": "...",
                    "steps": []
                }
            ]
        }
        
        Rules:
        - Do not wrap the JSON in markdown code blocks.
        - Ensure JSON is valid.
        - Include 2-3 standard test cases. The label MUST be formatted as 'var = [1,2], var2 = 3' based on the input. Do NOT output 'example 1'.
        - Include at least the brute force and optimal approaches.
        - For EVERY approach, provide 3-7 detailed flow steps in the \`steps\` array that trace through the code logic line by line.`;

    try {
        const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': key,
            },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        });
        if (!r.ok) return { err: 'gemini said ' + r.status + ' — check the key' };
        
        const data = await r.json();
        const text = data && data.candidates && data.candidates[0] && data.candidates[0].content
            && data.candidates[0].content.parts && data.candidates[0].content.parts[0]
            ? data.candidates[0].content.parts[0].text : '';
            
        const json = JSON.parse(text.replace(/```json|```/g, '').trim());
        return json;
    } catch (e) {
        return { err: 'the call failed — ' + ((e && e.message) || e) };
    }
}