/* =========================================================
   curricula.js — the journey maps
   Blind 75 and NeetCode 150 (transcribed from the live lists),
   plus matching logic that auto-links notebook pages by title.
   Problem shape: [slug, leetcode#, title, category, difficulty]
   Must load after data.js, before the views.
   ========================================================= */

const LEETCODE_URL = slug => `https://leetcode.com/problems/${slug}/`;
const normTitle = s => String(s).toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();

const CURRICULA = [
    {
        id: 'blind75', name: 'Blind 75',
        desc: 'the classic list — 75 problems that cover the fundamentals',
        color: '#c2402a',
        problems: [
            ['two-sum', 1, 'Two Sum', 'Arrays & Hashing', 'easy'],
            ['contains-duplicate', 217, 'Contains Duplicate', 'Arrays & Hashing', 'easy'],
            ['valid-anagram', 242, 'Valid Anagram', 'Arrays & Hashing', 'easy'],
            ['product-of-array-except-self', 238, 'Product of Array Except Self', 'Arrays & Hashing', 'medium'],
            ['top-k-frequent-elements', 347, 'Top K Frequent Elements', 'Arrays & Hashing', 'medium'],
            ['group-anagrams', 49, 'Group Anagrams', 'Arrays & Hashing', 'medium'],
            ['encode-and-decode-strings', 271, 'Encode and Decode Strings', 'Arrays & Hashing', 'medium'],
            ['longest-consecutive-sequence', 128, 'Longest Consecutive Sequence', 'Arrays & Hashing', 'medium'],
            ['valid-palindrome', 125, 'Valid Palindrome', 'Two Pointers', 'easy'],
            ['3sum', 15, '3Sum', 'Two Pointers', 'medium'],
            ['container-with-most-water', 11, 'Container With Most Water', 'Two Pointers', 'medium'],
            ['best-time-to-buy-and-sell-stock', 121, 'Best Time to Buy and Sell Stock', 'Sliding Window', 'easy'],
            ['longest-substring-without-repeating-characters', 3, 'Longest Substring Without Repeating Characters', 'Sliding Window', 'medium'],
            ['longest-repeating-character-replacement', 424, 'Longest Repeating Character Replacement', 'Sliding Window', 'medium'],
            ['minimum-window-substring', 76, 'Minimum Window Substring', 'Sliding Window', 'hard'],
            ['valid-parentheses', 20, 'Valid Parentheses', 'Stack', 'easy'],
            ['find-minimum-in-rotated-sorted-array', 153, 'Find Minimum in Rotated Sorted Array', 'Binary Search', 'medium'],
            ['search-in-rotated-sorted-array', 33, 'Search in Rotated Sorted Array', 'Binary Search', 'medium'],
            ['reverse-linked-list', 206, 'Reverse Linked List', 'Linked List', 'easy'],
            ['merge-two-sorted-lists', 21, 'Merge Two Sorted Lists', 'Linked List', 'easy'],
            ['linked-list-cycle', 141, 'Linked List Cycle', 'Linked List', 'easy'],
            ['reorder-list', 143, 'Reorder List', 'Linked List', 'medium'],
            ['remove-nth-node-from-end-of-list', 19, 'Remove Nth Node From End of List', 'Linked List', 'medium'],
            ['merge-k-sorted-lists', 23, 'Merge k Sorted Lists', 'Linked List', 'hard'],
            ['invert-binary-tree', 226, 'Invert Binary Tree', 'Trees', 'easy'],
            ['maximum-depth-of-binary-tree', 104, 'Maximum Depth of Binary Tree', 'Trees', 'easy'],
            ['same-tree', 100, 'Same Tree', 'Trees', 'easy'],
            ['subtree-of-another-tree', 572, 'Subtree of Another Tree', 'Trees', 'easy'],
            ['lowest-common-ancestor-of-a-binary-search-tree', 235, 'Lowest Common Ancestor of a Binary Search Tree', 'Trees', 'medium'],
            ['validate-binary-search-tree', 98, 'Validate Binary Search Tree', 'Trees', 'medium'],
            ['kth-smallest-element-in-a-bst', 230, 'Kth Smallest Element in a BST', 'Trees', 'medium'],
            ['construct-binary-tree-from-preorder-and-inorder-traversal', 105, 'Construct Binary Tree from Preorder and Inorder Traversal', 'Trees', 'medium'],
            ['binary-tree-level-order-traversal', 102, 'Binary Tree Level Order Traversal', 'Trees', 'medium'],
            ['binary-tree-maximum-path-sum', 124, 'Binary Tree Maximum Path Sum', 'Trees', 'hard'],
            ['serialize-and-deserialize-binary-tree', 297, 'Serialize and Deserialize Binary Tree', 'Trees', 'hard'],
            ['implement-trie-prefix-tree', 208, 'Implement Trie (Prefix Tree)', 'Tries', 'medium'],
            ['design-add-and-search-words-data-structure', 211, 'Design Add and Search Words Data Structure', 'Tries', 'medium'],
            ['word-search-ii', 212, 'Word Search II', 'Tries', 'hard'],
            ['find-median-from-data-stream', 295, 'Find Median from Data Stream', 'Heap', 'hard'],
            ['combination-sum', 39, 'Combination Sum', 'Backtracking', 'medium'],
            ['word-search', 79, 'Word Search', 'Backtracking', 'medium'],
            ['clone-graph', 133, 'Clone Graph', 'Graphs', 'medium'],
            ['course-schedule', 207, 'Course Schedule', 'Graphs', 'medium'],
            ['number-of-islands', 200, 'Number of Islands', 'Graphs', 'medium'],
            ['number-of-connected-components-in-an-undirected-graph', 323, 'Number of Connected Components in an Undirected Graph', 'Graphs', 'medium'],
            ['graph-valid-tree', 261, 'Graph Valid Tree', 'Graphs', 'medium'],
            ['pacific-atlantic-water-flow', 417, 'Pacific Atlantic Water Flow', 'Graphs', 'medium'],
            ['alien-dictionary', 269, 'Alien Dictionary', 'Graphs', 'hard'],
            ['climbing-stairs', 70, 'Climbing Stairs', 'DP', 'easy'],
            ['house-robber', 198, 'House Robber', 'DP', 'medium'],
            ['house-robber-ii', 213, 'House Robber II', 'DP', 'medium'],
            ['longest-palindromic-substring', 5, 'Longest Palindromic Substring', 'DP', 'medium'],
            ['palindromic-substrings', 647, 'Palindromic Substrings', 'DP', 'medium'],
            ['decode-ways', 91, 'Decode Ways', 'DP', 'medium'],
            ['coin-change', 322, 'Coin Change', 'DP', 'medium'],
            ['maximum-product-subarray', 152, 'Maximum Product Subarray', 'DP', 'medium'],
            ['word-break', 139, 'Word Break', 'DP', 'medium'],
            ['longest-increasing-subsequence', 300, 'Longest Increasing Subsequence', 'DP', 'medium'],
            ['unique-paths', 62, 'Unique Paths', 'DP', 'medium'],
            ['longest-common-subsequence', 1143, 'Longest Common Subsequence', 'DP', 'medium'],
            ['insert-interval', 57, 'Insert Interval', 'Intervals', 'medium'],
            ['merge-intervals', 56, 'Merge Intervals', 'Intervals', 'medium'],
            ['non-overlapping-intervals', 435, 'Non-overlapping Intervals', 'Intervals', 'medium'],
            ['meeting-rooms', 252, 'Meeting Rooms', 'Intervals', 'easy'],
            ['meeting-rooms-ii', 253, 'Meeting Rooms II', 'Intervals', 'medium'],
            ['maximum-subarray', 53, 'Maximum Subarray', 'Greedy', 'medium'],
            ['jump-game', 55, 'Jump Game', 'Greedy', 'medium'],
            ['rotate-image', 48, 'Rotate Image', 'Math & Geometry', 'medium'],
            ['spiral-matrix', 54, 'Spiral Matrix', 'Math & Geometry', 'medium'],
            ['set-matrix-zeroes', 73, 'Set Matrix Zeroes', 'Math & Geometry', 'medium'],
            ['reverse-bits', 190, 'Reverse Bits', 'Bit Manipulation', 'easy'],
            ['number-of-1-bits', 191, 'Number of 1 Bits', 'Bit Manipulation', 'easy'],
            ['counting-bits', 338, 'Counting Bits', 'Bit Manipulation', 'easy'],
            ['missing-number', 268, 'Missing Number', 'Bit Manipulation', 'easy'],
            ['sum-of-two-integers', 371, 'Sum of Two Integers', 'Bit Manipulation', 'medium'],
        ]
    },

    {
        id: 'neetcode150', name: 'NeetCode 150',
        desc: 'the expanded roadmap — 150 problems across every core pattern',
        color: '#2b5ea7',
        problems: [
            ['contains-duplicate', 217, 'Contains Duplicate', 'Arrays & Hashing', 'easy'],
            ['valid-anagram', 242, 'Valid Anagram', 'Arrays & Hashing', 'easy'],
            ['two-sum', 1, 'Two Sum', 'Arrays & Hashing', 'easy'],
            ['product-of-array-except-self', 238, 'Product of Array Except Self', 'Arrays & Hashing', 'medium'],
            ['top-k-frequent-elements', 347, 'Top K Frequent Elements', 'Arrays & Hashing', 'medium'],
            ['encode-and-decode-strings', 271, 'Encode and Decode Strings', 'Arrays & Hashing', 'medium'],
            ['valid-sudoku', 36, 'Valid Sudoku', 'Arrays & Hashing', 'medium'],
            ['longest-consecutive-sequence', 128, 'Longest Consecutive Sequence', 'Arrays & Hashing', 'medium'],
            ['group-anagrams', 49, 'Group Anagrams', 'Arrays & Hashing', 'medium'],
            ['valid-palindrome', 125, 'Valid Palindrome', 'Two Pointers', 'easy'],
            ['two-sum-ii-input-array-is-sorted', 167, 'Two Sum II Input Array Is Sorted', 'Two Pointers', 'medium'],
            ['3sum', 15, '3Sum', 'Two Pointers', 'medium'],
            ['container-with-most-water', 11, 'Container With Most Water', 'Two Pointers', 'medium'],
            ['trapping-rain-water', 42, 'Trapping Rain Water', 'Two Pointers', 'hard'],
            ['best-time-to-buy-and-sell-stock', 121, 'Best Time to Buy and Sell Stock', 'Sliding Window', 'easy'],
            ['longest-substring-without-repeating-characters', 3, 'Longest Substring Without Repeating Characters', 'Sliding Window', 'medium'],
            ['longest-repeating-character-replacement', 424, 'Longest Repeating Character Replacement', 'Sliding Window', 'medium'],
            ['permutation-in-string', 567, 'Permutation in String', 'Sliding Window', 'medium'],
            ['minimum-window-substring', 76, 'Minimum Window Substring', 'Sliding Window', 'hard'],
            ['sliding-window-maximum', 239, 'Sliding Window Maximum', 'Sliding Window', 'hard'],
            ['valid-parentheses', 20, 'Valid Parentheses', 'Stack', 'easy'],
            ['min-stack', 155, 'Min Stack', 'Stack', 'medium'],
            ['evaluate-reverse-polish-notation', 150, 'Evaluate Reverse Polish Notation', 'Stack', 'medium'],
            ['generate-parentheses', 22, 'Generate Parentheses', 'Stack', 'medium'],
            ['daily-temperatures', 739, 'Daily Temperatures', 'Stack', 'medium'],
            ['car-fleet', 853, 'Car Fleet', 'Stack', 'medium'],
            ['largest-rectangle-in-histogram', 84, 'Largest Rectangle in Histogram', 'Stack', 'hard'],
            ['binary-search', 704, 'Binary Search', 'Binary Search', 'easy'],
            ['search-a-2d-matrix', 74, 'Search a 2D Matrix', 'Binary Search', 'medium'],
            ['koko-eating-bananas', 875, 'Koko Eating Bananas', 'Binary Search', 'medium'],
            ['find-minimum-in-rotated-sorted-array', 153, 'Find Minimum in Rotated Sorted Array', 'Binary Search', 'medium'],
            ['search-in-rotated-sorted-array', 33, 'Search in Rotated Sorted Array', 'Binary Search', 'medium'],
            ['time-based-key-value-store', 981, 'Time Based Key Value Store', 'Binary Search', 'medium'],
            ['median-of-two-sorted-arrays', 4, 'Median of Two Sorted Arrays', 'Binary Search', 'hard'],
            ['reverse-linked-list', 206, 'Reverse Linked List', 'Linked List', 'easy'],
            ['merge-two-sorted-lists', 21, 'Merge Two Sorted Lists', 'Linked List', 'easy'],
            ['linked-list-cycle', 141, 'Linked List Cycle', 'Linked List', 'easy'],
            ['reorder-list', 143, 'Reorder List', 'Linked List', 'medium'],
            ['remove-nth-node-from-end-of-list', 19, 'Remove Nth Node From End of List', 'Linked List', 'medium'],
            ['copy-list-with-random-pointer', 138, 'Copy List with Random Pointer', 'Linked List', 'medium'],
            ['add-two-numbers', 2, 'Add Two Numbers', 'Linked List', 'medium'],
            ['find-the-duplicate-number', 287, 'Find the Duplicate Number', 'Linked List', 'medium'],
            ['lru-cache', 146, 'LRU Cache', 'Linked List', 'medium'],
            ['merge-k-sorted-lists', 23, 'Merge k Sorted Lists', 'Linked List', 'hard'],
            ['reverse-nodes-in-k-group', 25, 'Reverse Nodes in k Group', 'Linked List', 'hard'],
            ['invert-binary-tree', 226, 'Invert Binary Tree', 'Trees', 'easy'],
            ['maximum-depth-of-binary-tree', 104, 'Maximum Depth of Binary Tree', 'Trees', 'easy'],
            ['diameter-of-binary-tree', 543, 'Diameter of Binary Tree', 'Trees', 'easy'],
            ['balanced-binary-tree', 110, 'Balanced Binary Tree', 'Trees', 'easy'],
            ['same-tree', 100, 'Same Tree', 'Trees', 'easy'],
            ['subtree-of-another-tree', 572, 'Subtree of Another Tree', 'Trees', 'easy'],
            ['lowest-common-ancestor-of-a-binary-search-tree', 235, 'Lowest Common Ancestor of a Binary Search Tree', 'Trees', 'medium'],
            ['validate-binary-search-tree', 98, 'Validate Binary Search Tree', 'Trees', 'medium'],
            ['kth-smallest-element-in-a-bst', 230, 'Kth Smallest Element in a BST', 'Trees', 'medium'],
            ['construct-binary-tree-from-preorder-and-inorder-traversal', 105, 'Construct Binary Tree from Preorder and Inorder Traversal', 'Trees', 'medium'],
            ['binary-tree-level-order-traversal', 102, 'Binary Tree Level Order Traversal', 'Trees', 'medium'],
            ['binary-tree-right-side-view', 199, 'Binary Tree Right Side View', 'Trees', 'medium'],
            ['count-good-nodes-in-binary-tree', 1448, 'Count Good Nodes in Binary Tree', 'Trees', 'medium'],
            ['binary-tree-maximum-path-sum', 124, 'Binary Tree Maximum Path Sum', 'Trees', 'hard'],
            ['serialize-and-deserialize-binary-tree', 297, 'Serialize and Deserialize Binary Tree', 'Trees', 'hard'],
            ['implement-trie-prefix-tree', 208, 'Implement Trie (Prefix Tree)', 'Tries', 'medium'],
            ['design-add-and-search-words-data-structure', 211, 'Design Add and Search Words Data Structure', 'Tries', 'medium'],
            ['word-search-ii', 212, 'Word Search II', 'Tries', 'hard'],
            ['kth-largest-element-in-a-stream', 703, 'Kth Largest Element in a Stream', 'Heap', 'easy'],
            ['last-stone-weight', 1046, 'Last Stone Weight', 'Heap', 'easy'],
            ['k-closest-points-to-origin', 973, 'K Closest Points to Origin', 'Heap', 'medium'],
            ['kth-largest-element-in-an-array', 215, 'Kth Largest Element in an Array', 'Heap', 'medium'],
            ['task-scheduler', 621, 'Task Scheduler', 'Heap', 'medium'],
            ['design-twitter', 355, 'Design Twitter', 'Heap', 'medium'],
            ['find-median-from-data-stream', 295, 'Find Median from Data Stream', 'Heap', 'hard'],
            ['subsets', 78, 'Subsets', 'Backtracking', 'medium'],
            ['combination-sum', 39, 'Combination Sum', 'Backtracking', 'medium'],
            ['permutations', 46, 'Permutations', 'Backtracking', 'medium'],
            ['subsets-ii', 90, 'Subsets II', 'Backtracking', 'medium'],
            ['combination-sum-ii', 40, 'Combination Sum II', 'Backtracking', 'medium'],
            ['word-search', 79, 'Word Search', 'Backtracking', 'medium'],
            ['palindrome-partitioning', 131, 'Palindrome Partitioning', 'Backtracking', 'medium'],
            ['letter-combinations-of-a-phone-number', 17, 'Letter Combinations of a Phone Number', 'Backtracking', 'medium'],
            ['n-queens', 51, 'N-Queens', 'Backtracking', 'hard'],
            ['number-of-islands', 200, 'Number of Islands', 'Graphs', 'medium'],
            ['clone-graph', 133, 'Clone Graph', 'Graphs', 'medium'],
            ['max-area-of-island', 695, 'Max Area of Island', 'Graphs', 'medium'],
            ['pacific-atlantic-water-flow', 417, 'Pacific Atlantic Water Flow', 'Graphs', 'medium'],
            ['surrounded-regions', 130, 'Surrounded Regions', 'Graphs', 'medium'],
            ['rotting-oranges', 994, 'Rotting Oranges', 'Graphs', 'medium'],
            ['walls-and-gates', 286, 'Walls and Gates', 'Graphs', 'medium'],
            ['course-schedule', 207, 'Course Schedule', 'Graphs', 'medium'],
            ['course-schedule-ii', 210, 'Course Schedule II', 'Graphs', 'medium'],
            ['redundant-connection', 684, 'Redundant Connection', 'Graphs', 'medium'],
            ['number-of-connected-components-in-an-undirected-graph', 323, 'Number of Connected Components in an Undirected Graph', 'Graphs', 'medium'],
            ['graph-valid-tree', 261, 'Graph Valid Tree', 'Graphs', 'medium'],
            ['word-ladder', 127, 'Word Ladder', 'Graphs', 'hard'],
            ['alien-dictionary', 269, 'Alien Dictionary', 'Advanced Graphs', 'hard'],
            ['network-delay-time', 743, 'Network Delay Time', 'Advanced Graphs', 'medium'],
            ['min-cost-to-connect-all-points', 1584, 'Min Cost to Connect All Points', 'Advanced Graphs', 'medium'],
            ['reconstruct-itinerary', 332, 'Reconstruct Itinerary', 'Advanced Graphs', 'hard'],
            ['swim-in-rising-water', 778, 'Swim in Rising Water', 'Advanced Graphs', 'hard'],
            ['cheapest-flights-within-k-stops', 787, 'Cheapest Flights Within K Stops', 'Advanced Graphs', 'medium'],
            ['climbing-stairs', 70, 'Climbing Stairs', '1-D DP', 'easy'],
            ['min-cost-climbing-stairs', 746, 'Min Cost Climbing Stairs', '1-D DP', 'easy'],
            ['house-robber', 198, 'House Robber', '1-D DP', 'medium'],
            ['house-robber-ii', 213, 'House Robber II', '1-D DP', 'medium'],
            ['longest-palindromic-substring', 5, 'Longest Palindromic Substring', '1-D DP', 'medium'],
            ['palindromic-substrings', 647, 'Palindromic Substrings', '1-D DP', 'medium'],
            ['decode-ways', 91, 'Decode Ways', '1-D DP', 'medium'],
            ['coin-change', 322, 'Coin Change', '1-D DP', 'medium'],
            ['maximum-product-subarray', 152, 'Maximum Product Subarray', '1-D DP', 'medium'],
            ['word-break', 139, 'Word Break', '1-D DP', 'medium'],
            ['longest-increasing-subsequence', 300, 'Longest Increasing Subsequence', '1-D DP', 'medium'],
            ['partition-equal-subset-sum', 416, 'Partition Equal Subset Sum', '1-D DP', 'medium'],
            ['unique-paths', 62, 'Unique Paths', '2-D DP', 'medium'],
            ['longest-common-subsequence', 1143, 'Longest Common Subsequence', '2-D DP', 'medium'],
            ['best-time-to-buy-and-sell-stock-with-cooldown', 309, 'Best Time to Buy and Sell Stock with Cooldown', '2-D DP', 'medium'],
            ['coin-change-ii', 518, 'Coin Change II', '2-D DP', 'medium'],
            ['target-sum', 494, 'Target Sum', '2-D DP', 'medium'],
            ['interleaving-string', 97, 'Interleaving String', '2-D DP', 'medium'],
            ['longest-increasing-path-in-a-matrix', 329, 'Longest Increasing Path in a Matrix', '2-D DP', 'hard'],
            ['distinct-subsequences', 115, 'Distinct Subsequences', '2-D DP', 'hard'],
            ['edit-distance', 72, 'Edit Distance', '2-D DP', 'medium'],
            ['burst-balloons', 312, 'Burst Balloons', '2-D DP', 'hard'],
            ['regular-expression-matching', 10, 'Regular Expression Matching', '2-D DP', 'hard'],
            ['maximum-subarray', 53, 'Maximum Subarray', 'Greedy', 'medium'],
            ['jump-game', 55, 'Jump Game', 'Greedy', 'medium'],
            ['jump-game-ii', 45, 'Jump Game II', 'Greedy', 'medium'],
            ['gas-station', 134, 'Gas Station', 'Greedy', 'medium'],
            ['hand-of-straights', 846, 'Hand of Straights', 'Greedy', 'medium'],
            ['merge-triplets-to-form-target-triplet', 1899, 'Merge Triplets to Form Target Triplet', 'Greedy', 'medium'],
            ['partition-labels', 763, 'Partition Labels', 'Greedy', 'medium'],
            ['valid-parenthesis-string', 678, 'Valid Parenthesis String', 'Greedy', 'medium'],
            ['insert-interval', 57, 'Insert Interval', 'Intervals', 'medium'],
            ['merge-intervals', 56, 'Merge Intervals', 'Intervals', 'medium'],
            ['non-overlapping-intervals', 435, 'Non-overlapping Intervals', 'Intervals', 'medium'],
            ['meeting-rooms', 252, 'Meeting Rooms', 'Intervals', 'easy'],
            ['meeting-rooms-ii', 253, 'Meeting Rooms II', 'Intervals', 'medium'],
            ['minimum-interval-to-include-each-query', 1851, 'Minimum Interval to Include Each Query', 'Intervals', 'hard'],
            ['rotate-image', 48, 'Rotate Image', 'Math & Geometry', 'medium'],
            ['spiral-matrix', 54, 'Spiral Matrix', 'Math & Geometry', 'medium'],
            ['set-matrix-zeroes', 73, 'Set Matrix Zeroes', 'Math & Geometry', 'medium'],
            ['happy-number', 202, 'Happy Number', 'Math & Geometry', 'easy'],
            ['plus-one', 66, 'Plus One', 'Math & Geometry', 'easy'],
            ['pow-x-n', 50, 'Pow x n', 'Math & Geometry', 'medium'],
            ['multiply-strings', 43, 'Multiply Strings', 'Math & Geometry', 'medium'],
            ['detect-squares', 2013, 'Detect Squares', 'Math & Geometry', 'medium'],
            ['single-number', 136, 'Single Number', 'Bit Manipulation', 'easy'],
            ['number-of-1-bits', 191, 'Number of 1 Bits', 'Bit Manipulation', 'easy'],
            ['counting-bits', 338, 'Counting Bits', 'Bit Manipulation', 'easy'],
            ['reverse-bits', 190, 'Reverse Bits', 'Bit Manipulation', 'easy'],
            ['missing-number', 268, 'Missing Number', 'Bit Manipulation', 'easy'],
            ['sum-of-two-integers', 371, 'Sum of Two Integers', 'Bit Manipulation', 'medium'],
            ['reverse-integer', 7, 'Reverse Integer', 'Bit Manipulation', 'medium'],
        ]
    },
];

/* ---------- progress store ----------
   keyed by SLAG, not by list — "two-sum" is one journey entry that
   appears in both Blind 75 and NeetCode 150, so checking it or
   solving it counts everywhere it appears. */
const LS_PROGRESS = 'marginalia-progress-v1';
let progress = { checked: {}, linked: {} };
function loadProgress() {
    try {
        const r = localStorage.getItem(LS_PROGRESS);
        if (r) {
            progress = JSON.parse(r);
            /* migrate: older keys looked like "blind75:two-sum" — strip the
               list prefix so existing checkmarks carry over and sync */
            for (const k of ['checked', 'linked']) {
                const src = progress[k] || {}, out = {};
                for (const key in src) {
                    const slug = key.includes(':') ? key.slice(key.indexOf(':') + 1) : key;
                    if (!(slug in out)) out[slug] = src[key];
                }
                progress[k] = out;
            }
        }
    } catch (e) { }
}
function saveProgress() { try { localStorage.setItem(LS_PROGRESS, JSON.stringify(progress)); } catch (e) { } }

/* ---------- auto-link notebook pages to curriculum items ---------- */
function linkCurriculumMatches() {
    let changed = false;
    for (const list of CURRICULA) {
        for (const [slug] of list.problems) {
            if (progress.linked[slug]) continue;
            const page = store.problems.find(p => normTitle(p.title) === normTitle(slug.replace(/-/g, ' ')));
            if (page) { progress.linked[slug] = page.id; changed = true; }
        }
    }
    if (changed) saveProgress();
}

/* listId is kept for the call sites, but the state itself is slug-keyed */
function isCurriculumDone(listId, slug) {
    if (progress.checked[slug]) return true;
    const pageId = progress.linked[slug];
    if (pageId) {
        const page = store.byId(pageId);
        if (page && (page.attempts || []).some(a => a.passed)) return true;
    }
    return false;
}

function curriculumProgress(listId) {
    const list = CURRICULA.find(l => l.id === listId);
    if (!list) return { done: 0, total: 0, pct: 0 };
    const done = list.problems.filter(([slug]) => isCurriculumDone(listId, slug)).length;
    return { done, total: list.problems.length, pct: Math.round(done / list.problems.length * 100) };
}

/* ---------- streak & heatmap (derived from attempt timestamps) ---------- */
function getAttemptDays() {
    const days = {};
    for (const p of store.problems) {
        for (const a of (p.attempts || [])) {
            const d = new Date(a.ts).toDateString();
            days[d] = (days[d] || 0) + 1;
        }
    }
    return days;
}
function computeStreak() {
    const days = Object.keys(getAttemptDays());
    if (!days.length) return { current: 0, best: 0 };
    const set = new Set(days);
    let current = 0;
    const today = new Date(); const yest = new Date(today); yest.setDate(yest.getDate() - 1);
    let ptr = set.has(today.toDateString()) ? new Date(today) : (set.has(yest.toDateString()) ? new Date(yest) : null);
    while (ptr && set.has(ptr.toDateString())) { current++; ptr.setDate(ptr.getDate() - 1); }
    const sorted = [...set].map(d => new Date(d).getTime()).sort((a, b) => a - b);
    let best = 1, run = 1;
    for (let i = 1; i < sorted.length; i++) {
        const diff = (sorted[i] - sorted[i - 1]) / 86400000;
        if (diff === 1) { run++; best = Math.max(best, run); } else run = 1;
    }
    return { current, best: Math.max(best, current) };
}