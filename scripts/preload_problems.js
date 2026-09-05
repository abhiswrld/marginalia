const fs = require('fs');
const path = require('path');

// Extract problems from curricula.js using regex
const curriculaCode = fs.readFileSync(path.join(__dirname, '../js/curricula.js'), 'utf8');
const problemsMatches = [...curriculaCode.matchAll(/\['([^']+)',\s*\d+,\s*'([^']+)'/g)];

const problems = [];
const seenSlugs = new Set();
for (const match of problemsMatches) {
    const slug = match[1];
    const title = match[2];
    if (!seenSlugs.has(slug)) {
        seenSlugs.add(slug);
        problems.push({ slug, title });
    }
}

console.log(`Found ${problems.length} unique problems.`);

const PRELOAD_FILE = path.join(__dirname, '../js/preload.js');
let preloaded = {};

// Load existing progress if script was stopped and restarted
if (fs.existsSync(PRELOAD_FILE)) {
    const content = fs.readFileSync(PRELOAD_FILE, 'utf8');
    try {
        const jsonStr = content.replace('window.PRELOADED_PROBLEMS = ', '').replace(/;\s*$/, '');
        preloaded = JSON.parse(jsonStr);
        console.log(`Loaded ${Object.keys(preloaded).length} existing problems from preload.js`);
    } catch (e) {
        console.log("Could not parse existing preload.js, starting fresh.");
    }
}

async function fetchFromGemini(title, apiKey) {
    const prompt = 
        `You are an expert coding instructor. I am building a study notebook and I need you to generate the full problem details for the LeetCode problem "${title}".
        
        Return ONLY valid JSON matching this exact structure:
        {
            "statement": "The full problem description.",
            "given": "A short phrase describing the input (e.g. 'an array of integers nums')",
            "ret": "A short phrase describing the output (e.g. 'the indices of the two numbers')",
            "summary": "A 1-2 sentence intuition of how to solve it optimally.",
            "starter": "Starter code template in JavaScript.",
            "tests": [
                {
                    "label": "example 1",
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
                    "code": "complete JavaScript code for this approach...",
                    "steps": []
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
        - Include 2-3 standard test cases.
        - Include at least the brute force and optimal approaches.`;

    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const jsonStr = text.replace(/```json|```/g, '').trim();
    return JSON.parse(jsonStr);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("Error: Please set the GEMINI_API_KEY environment variable.");
        process.exit(1);
    }

    let processed = 0;
    for (const { slug, title } of problems) {
        if (preloaded[slug]) {
            console.log(`[Skipping] ${title} (Already preloaded)`);
            continue;
        }

        console.log(`[Fetching] ${title}...`);
        try {
            const data = await fetchFromGemini(title, apiKey);
            preloaded[slug] = data;
            
            // Save after every successful fetch
            fs.writeFileSync(PRELOAD_FILE, `window.PRELOADED_PROBLEMS = ${JSON.stringify(preloaded, null, 2)};\n`);
            processed++;
            console.log(`  -> Success! Saved to preload.js`);
            
            console.log(`  -> Sleeping for 30 seconds to respect rate limits...`);
            await sleep(30000);
        } catch (e) {
            console.error(`  -> Failed: ${e.message}`);
            console.log(`  -> Sleeping for 30 seconds before continuing...`);
            await sleep(30000);
        }
    }
    console.log(`Finished processing. Total fetched this run: ${processed}.`);
}

run();
