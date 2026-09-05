/* =========================================================
   data.js — the notebook's contents
   the one worked example page, the localStorage store, and
   the per-visitor branding (name, tagline, ink, and the
   optional gemini key for AI polish).
   ========================================================= */

/* ---------- the example page (fresh visitors get one
   worked example so every feature is demonstrable) ---------- */
function seed() {
    const now = Date.now();
    return [
        {
            id: 'pContains', title: 'contains duplicate', difficulty: 'easy', lang: 'py',
            tags: ['arrays & hashing', 'example'],
            link: 'https://leetcode.com/problems/contains-duplicate/',
            statement: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
            given: 'an integer array nums',
            ret: 'true if any value shows up twice or more, false if every element is distinct',
            summary: 'The question is really “how do I notice a repeat?” — compare every pair (slow), sort so duplicates become neighbours, or walk once and remember what I’ve seen in a set. The set wins: one pass, O(1) lookups, and I can bail out the moment a value repeats.',
            starter: '',
            tests: [
                { label: 'nums = [1,2,3,1]', input: { nums: [1, 2, 3, 1] }, expected: true },
                { label: 'nums = [1,2,3,4]', input: { nums: [1, 2, 3, 4] }, expected: false },
                { label: 'nums = [1,1,1,3,3,4,3,2,4,2]', input: { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] }, expected: true }
            ],
            approaches: [
                {
                    name: 'brute force', time: 'O(n²)', space: 'O(1)',
                    idea: 'Check every pair (i, j). If any two are equal, there’s a duplicate. Simple to write, painful to run — n² comparisons in the worst case.',
                    code:
                        `nums = input["nums"]

# check every pair (i, j)
for i in range(len(nums)):
    for j in range(i + 1, len(nums)):
        if nums[i] == nums[j]:
            return True    # found a repeat

return False               # every pair was distinct`,
                    steps: [
                        { label: 'read nums', note: 'grab the array once so the loops stay readable', lines: [1, 1] },
                        { label: 'lock i', note: 'fix the first element of the pair', lines: [4, 4] },
                        { label: 'scan j = i+1 …', note: 'compare against everything after i — earlier pairs were already checked', lines: [5, 5] },
                        { label: 'nums[i] == nums[j] ?', yes: 'return True', no: 'keep scanning', note: 'the comparison itself — O(n²) of these in the worst case', lines: [6, 6] },
                        { label: 'loops finish', note: 'no pair matched → every element is distinct', lines: [9, 9] }
                    ]
                },
                {
                    name: 'sort first', time: 'O(n log n)', space: 'O(1)*',
                    idea: 'Sort a copy, and equal values become neighbours — then one linear scan of adjacent pairs finds any duplicate. The comparing is cheap; the sort is the cost. (*ignoring the copy / sort stack).',
                    code:
                        `nums = sorted(input["nums"])

# equal values become neighbours
for i in range(1, len(nums)):
    if nums[i] == nums[i - 1]:
        return True    # neighbours match -> duplicate

return False           # no adjacent pair matched`,
                    steps: [
                        { label: 'sort a copy', note: 'the O(n log n) price is paid right here — everything after is cheap', lines: [1, 1] },
                        { label: 'walk from i = 1', note: 'each element only needs to meet its left neighbour', lines: [4, 4] },
                        { label: 'neighbours equal ?', yes: 'return True', no: 'keep walking', note: 'after sorting, any duplicate must sit directly next to its twin', lines: [5, 5] },
                        { label: 'scan ends', note: 'no adjacent match → all distinct', lines: [8, 8] }
                    ]
                },
                {
                    name: 'hash set', time: 'O(n)', space: 'O(n)',
                    idea: 'Walk the array once and remember every value in a set. Before adding each number, ask the set if it’s already inside — set lookups are O(1). The moment it says yes, return True. Memory is the trade: up to n stored values.',
                    code:
                        `nums = input["nums"]
seen = set()   # remembers what we walk past

for num in nums:
    if num in seen:
        return True    # seen before -> duplicate!
    seen.add(num)

return False           # whole array walked, all unique`,
                    steps: [
                        { label: 'create a set', note: 'a set only holds unique values and answers “in” in O(1) — that is the whole trick', lines: [1, 2] },
                        { label: 'for each num', note: 'one clean left-to-right pass over the array', lines: [4, 4] },
                        { label: 'num in seen ?', yes: 'return True', no: 'add it to the set', note: 'the million-dollar question, answered in constant time', lines: [5, 6] },
                        { label: 'seen.add(num)', note: 'remember this value for the rest of the walk', lines: [7, 7] },
                        { label: 'pass ends', note: 'every number was added and none matched → no duplicates anywhere', lines: [10, 10] }
                    ]
                }
            ],
            attempts: [], sketch: null, createdAt: now
        }
    ];
}

/* ---------- the store ---------- */
const LS_KEY = 'marginalia-v2';
const store = {
    problems: [],
    load() {
        try {
            const raw = localStorage.getItem(LS_KEY);
            if (raw) { this.problems = JSON.parse(raw); this.problems.forEach(p => { if (!p.lang) p.lang = 'js'; }); }
            else { this.problems = seed(); this.save(); }
        } catch (e) { this.problems = seed(); }
    },
    save() { try { localStorage.setItem(LS_KEY, JSON.stringify(this.problems)); } catch (e) { } },
    byId(id) { return this.problems.find(p => p.id === id); },
    upsert(p) { const i = this.problems.findIndex(x => x.id === p.id); if (i >= 0) this.problems[i] = p; else this.problems.push(p); },
    remove(id) { this.problems = this.problems.filter(p => p.id !== id); }
};

/* ---------- branding (per visitor, set in the settings modal) ----------
   geminiKey is optional: powers the AI polish button, stored in
   this browser only, and the call goes browser → Google direct. */
const LS_BRAND = 'marginalia-brand-v1';
const INKS = [['#c2402a', 'red ink'], ['#2b5ea7', 'blue ink'], ['#1d6f6f', 'teal ink'], ['#8a3d7a', 'plum ink'], ['#9c5a1e', 'sepia ink']];
let brand = {
    name: 'Marginalia',
    tag: 'practice makes perfect',
    ink: '#c2402a',
    geminiKey: ''
};
function loadBrand() {
    try {
        let r = localStorage.getItem(LS_BRAND);
        if (!r) r = localStorage.getItem('margin-notes-brand-v1');   // old key, one-time carry-over
        if (r) brand = Object.assign(brand, JSON.parse(r));
    } catch (e) { }
}
function saveBrand() { try { localStorage.setItem(LS_BRAND, JSON.stringify(brand)); } catch (e) { } }
function applyBrand() {
    document.documentElement.style.setProperty('--red', brand.ink || '#c2402a');
    document.title = (brand.name || 'Marginalia') + ' — a practice notebook';
}