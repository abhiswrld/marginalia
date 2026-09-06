window.PRELOADED_PROBLEMS = {
  "two-sum": {
    "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    "given": "an array of integers nums and an integer target",
    "ret": "indices of the two numbers that sum to target",
    "summary": "Use a hash map to store each number and its index as you iterate. For each number, check if target - num already exists in the map.",
    "starter": "class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        pass",
    "tests": [
      {
        "label": "nums = [2, 7, 11, 15], target = 9",
        "inputStr": "{\"nums\": [2, 7, 11, 15], \"target\": 9}",
        "expectedStr": "[0, 1]"
      },
      {
        "label": "nums = [3, 2, 4], target = 6",
        "inputStr": "{\"nums\": [3, 2, 4], \"target\": 6}",
        "expectedStr": "[1, 2]"
      },
      {
        "label": "nums = [3, 3], target = 6",
        "inputStr": "{\"nums\": [3, 3], \"target\": 6}",
        "expectedStr": "[0, 1]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Loop through every pair of elements and check if their sum equals the target.",
        "code": "class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        n = len(nums)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[i] + nums[j] == target:\n                    return [i, j]\n        return []",
        "steps": [
          {
            "label": "Get length",
            "note": "Store total length of input array nums",
            "from": 1,
            "to": 2
          },
          {
            "label": "Outer loop",
            "note": "Iterate variable i from 0 to n - 1",
            "from": 2,
            "to": 3
          },
          {
            "label": "Inner loop",
            "note": "Iterate variable j from i + 1 to n - 1",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check target sum",
            "note": "Check if nums[i] + nums[j] equals target",
            "from": 4,
            "to": 5,
            "yes": "Match found, return indices [i, j]",
            "no": "Continue checking next pair"
          },
          {
            "label": "Return empty array",
            "note": "Fallback return if no solution found",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "one-pass hash map",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Traverse the list once while building a hash map of seen numbers mapped to their indices. Check if complement exists in the map.",
        "code": "class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        seen = {}\n        for i, num in enumerate(nums):\n            diff = target - num\n            if diff in seen:\n                return [seen[diff], i]\n            seen[num] = i\n        return []",
        "steps": [
          {
            "label": "Init hash map",
            "note": "Create empty hash map 'seen' to hold number to index mapping",
            "from": 1,
            "to": 2
          },
          {
            "label": "Iterate array",
            "note": "Iterate through nums receiving current index i and value num",
            "from": 2,
            "to": 3
          },
          {
            "label": "Calculate complement",
            "note": "Compute target - current number",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check map for complement",
            "note": "Check if calculated diff exists in seen hash map",
            "from": 4,
            "to": 5,
            "yes": "Return [seen[diff], i]",
            "no": "Proceed to add current number to map"
          },
          {
            "label": "Store element index",
            "note": "Record seen[num] = i in hash map for future complement lookups",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "contains-duplicate": {
    "statement": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "given": "an array of integers nums",
    "ret": "true if any element appears twice, false otherwise",
    "summary": "Use a hash set to store elements as you iterate. If an element is already present in the set, a duplicate exists.",
    "starter": "class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        pass",
    "tests": [
      {
        "label": "nums = [1, 2, 3, 1]",
        "inputStr": "{\"nums\": [1, 2, 3, 1]}",
        "expectedStr": "true"
      },
      {
        "label": "nums = [1, 2, 3, 4]",
        "inputStr": "{\"nums\": [1, 2, 3, 4]}",
        "expectedStr": "false"
      },
      {
        "label": "nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]",
        "inputStr": "{\"nums\": [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]}",
        "expectedStr": "true"
      }
    ],
    "approaches": [
      {
        "name": "sorting",
        "time": "O(n log n)",
        "space": "O(1)",
        "idea": "Sort the array in ascending order. Any duplicate numbers will sit adjacent to each other after sorting.",
        "code": "class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        nums.sort()\n        for i in range(1, len(nums)):\n            if nums[i] == nums[i - 1]:\n                return True\n        return False",
        "steps": [
          {
            "label": "Sort array",
            "note": "Sort nums array in-place",
            "from": 1,
            "to": 2
          },
          {
            "label": "Iterate adjacent elements",
            "note": "Loop through array starting at index 1 to len(nums) - 1",
            "from": 2,
            "to": 3
          },
          {
            "label": "Compare adjacent elements",
            "note": "Check if current element equals the element before it",
            "from": 3,
            "to": 4,
            "yes": "Duplicate found, return True",
            "no": "Continue checking remaining elements"
          },
          {
            "label": "Return false",
            "note": "All elements checked and unique, return False",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "hash set",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Use a hash set to keep track of elements we have already encountered. Lookups and insertions take O(1) time.",
        "code": "class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        seen = set()\n        for num in nums:\n            if num in seen:\n                return True\n            seen.add(num)\n        return False",
        "steps": [
          {
            "label": "Init hash set",
            "note": "Initialize empty set 'seen' to keep track of traversed numbers",
            "from": 1,
            "to": 2
          },
          {
            "label": "Loop array",
            "note": "Iterate through each number num in nums",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check presence in set",
            "note": "Check if num already exists in seen set",
            "from": 3,
            "to": 4,
            "yes": "Return True immediately",
            "no": "Add num to seen set"
          },
          {
            "label": "Add to set",
            "note": "Insert num into 'seen'",
            "from": 4,
            "to": 5
          },
          {
            "label": "Return false",
            "note": "End of loop reached with no duplicates, return False",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "valid-anagram": {
    "statement": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "given": "two strings s and t",
    "ret": "true if t is an anagram of s, false otherwise",
    "summary": "Count character occurrences of both strings using a frequency counter or compare sorted versions of both strings.",
    "starter": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        pass",
    "tests": [
      {
        "label": "s = \"anagram\", t = \"nagaram\"",
        "inputStr": "{\"s\": \"anagram\", \"t\": \"nagaram\"}",
        "expectedStr": "true"
      },
      {
        "label": "s = \"rat\", t = \"car\"",
        "inputStr": "{\"s\": \"rat\", \"t\": \"car\"}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "sorting",
        "time": "O(n log n)",
        "space": "O(n)",
        "idea": "Sort characters in both strings. If the sorted strings are equal, then t is an anagram of s.",
        "code": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        return sorted(s) == sorted(t)",
        "steps": [
          {
            "label": "Sort s",
            "note": "Sort characters of s into a list",
            "from": 1,
            "to": 1
          },
          {
            "label": "Sort t",
            "note": "Sort characters of t into a list",
            "from": 1,
            "to": 1
          },
          {
            "label": "Compare lists",
            "note": "Return comparison result of sorted lists sorted(s) == sorted(t)",
            "from": 1,
            "to": 1
          }
        ]
      },
      {
        "name": "frequency counter",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Count frequency of each character in s, then subtract counts using characters in t. If all counts reach zero and lengths match, they are anagrams.",
        "code": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n        count = {}\n        for char in s:\n            count[char] = count.get(char, 0) + 1\n        for char in t:\n            if char not in count or count[char] == 0:\n                return False\n            count[char] -= 1\n        return True",
        "steps": [
          {
            "label": "Check length guard",
            "note": "Check if length of s equals length of t",
            "from": 1,
            "to": 2,
            "yes": "Proceed to count characters",
            "no": "Return False immediately"
          },
          {
            "label": "Init count map",
            "note": "Initialize empty hash map count for storing character counts",
            "from": 2,
            "to": 3
          },
          {
            "label": "Count s frequencies",
            "note": "Iterate through s and increment count[char]",
            "from": 3,
            "to": 4
          },
          {
            "label": "Verify t frequencies",
            "note": "Iterate through t and check if character count exists and > 0",
            "from": 4,
            "to": 5,
            "yes": "Decrement count[char]",
            "no": "Return False"
          },
          {
            "label": "Decrement count",
            "note": "Subtract 1 from count[char]",
            "from": 5,
            "to": 6
          },
          {
            "label": "Return true",
            "note": "All frequencies matched, return True",
            "from": 6,
            "to": 7
          }
        ]
      }
    ]
  },
  "reverse-linked-list": {
    "statement": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "given": "the head of a singly linked list",
    "ret": "the head of the reversed singly linked list",
    "summary": "Iterate through the list maintaining pointers to the previous and current nodes to flip each pointer in-place, or recursively reverse the tail.",
    "starter": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nclass Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        pass",
    "tests": [
      {
        "label": "head = [1,2,3,4,5]",
        "inputStr": "{\"head\": [1,2,3,4,5]}",
        "expectedStr": "[5,4,3,2,1]"
      },
      {
        "label": "head = [1,2]",
        "inputStr": "{\"head\": [1,2]}",
        "expectedStr": "[2,1]"
      },
      {
        "label": "head = []",
        "inputStr": "{\"head\": []}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "array representation / brute force",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Traverse the linked list and copy all node values into an array. Reverse the array, then recreate a new linked list from the reversed values.",
        "code": "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head:\n            return None\n        vals = []\n        curr = head\n        while curr:\n            vals.append(curr.val)\n            curr = curr.next\n        vals.reverse()\n        dummy = ListNode(0)\n        curr = dummy\n        for val in vals:\n            curr.next = ListNode(val)\n            curr = curr.next\n        return dummy.next",
        "steps": [
          {
            "label": "check empty list",
            "note": "If head is None, return None immediately",
            "from": 2,
            "to": 4,
            "yes": "Return None if empty",
            "no": "Continue to gather values"
          },
          {
            "label": "collect values",
            "note": "Traverse linked list and append values to 'vals' list",
            "from": 5,
            "to": 8
          },
          {
            "label": "reverse array",
            "note": "Reverse the 'vals' list in place",
            "from": 9,
            "to": 9
          },
          {
            "label": "reconstruct list",
            "note": "Iterate through reversed values and create new ListNode objects",
            "from": 10,
            "to": 14
          },
          {
            "label": "return new head",
            "note": "Return dummy.next, which points to the head of the newly created list",
            "from": 15,
            "to": 15
          }
        ]
      },
      {
        "name": "in-place iterative reversal",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Maintain two pointers, prev and curr. Reassign curr.next to prev at each step, moving both pointers forward until reaching the end.",
        "code": "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        prev = None\n        curr = head\n        while curr:\n            nxt = curr.next\n            curr.next = prev\n            prev = curr\n            curr = nxt\n        return prev",
        "steps": [
          {
            "label": "initialize pointers",
            "note": "Set prev to None and curr to head",
            "from": 2,
            "to": 3
          },
          {
            "label": "loop condition",
            "note": "Check if curr pointer is not None",
            "from": 4,
            "to": 4,
            "yes": "Process current node",
            "no": "Reached end, return prev"
          },
          {
            "label": "store next node",
            "note": "Save reference to curr.next before breaking the link",
            "from": 5,
            "to": 5
          },
          {
            "label": "reverse pointer",
            "note": "Set curr.next to point backward to prev",
            "from": 6,
            "to": 6
          },
          {
            "label": "advance prev",
            "note": "Move prev forward to curr",
            "from": 7,
            "to": 7
          },
          {
            "label": "advance curr",
            "note": "Move curr forward to nxt",
            "from": 8,
            "to": 8
          },
          {
            "label": "return result",
            "note": "Return prev as the new head of the reversed list",
            "from": 9,
            "to": 9
          }
        ]
      }
    ]
  },
  "merge-two-sorted-lists": {
    "statement": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    "given": "the heads of two sorted linked lists list1 and list2",
    "ret": "the head of the merged sorted linked list",
    "summary": "Use a dummy node to build the new list by iteratively comparing the heads of both lists and linking the smaller element.",
    "starter": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nclass Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        pass",
    "tests": [
      {
        "label": "list1 = [1,2,4], list2 = [1,3,4]",
        "inputStr": "{\"list1\": [1,2,4], \"list2\": [1,3,4]}",
        "expectedStr": "[1,1,2,3,4,4]"
      },
      {
        "label": "list1 = [], list2 = []",
        "inputStr": "{\"list1\": [], \"list2\": []}",
        "expectedStr": "[]"
      },
      {
        "label": "list1 = [], list2 = [0]",
        "inputStr": "{\"list1\": [], \"list2\": [0]}",
        "expectedStr": "[0]"
      }
    ],
    "approaches": [
      {
        "name": "extract, sort, build list",
        "time": "O((n+m) log(n+m))",
        "space": "O(n+m)",
        "idea": "Extract all values from both lists into a single Python list, sort the combined values, and construct a new linked list.",
        "code": "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        vals = []\n        while list1:\n            vals.append(list1.val)\n            list1 = list1.next\n        while list2:\n            vals.append(list2.val)\n            list2 = list2.next\n        vals.sort()\n        dummy = ListNode(0)\n        curr = dummy\n        for val in vals:\n            curr.next = ListNode(val)\n            curr = curr.next\n        return dummy.next",
        "steps": [
          {
            "label": "collect list1 values",
            "note": "Traverse list1 and append node values to 'vals'",
            "from": 3,
            "to": 6
          },
          {
            "label": "collect list2 values",
            "note": "Traverse list2 and append node values to 'vals'",
            "from": 7,
            "to": 10
          },
          {
            "label": "sort values",
            "note": "Sort all elements in 'vals' in ascending order",
            "from": 11,
            "to": 11
          },
          {
            "label": "build merged list",
            "note": "Iterate through sorted values and create new nodes",
            "from": 12,
            "to": 16
          },
          {
            "label": "return result",
            "note": "Return dummy.next as head of merged list",
            "from": 17,
            "to": 17
          }
        ]
      },
      {
        "name": "iterative two pointer",
        "time": "O(n+m)",
        "space": "O(1)",
        "idea": "Iterate through both lists simultaneously using a dummy head node. Compare current nodes, splice the smaller node onto the output list, and attach any remaining nodes at the end.",
        "code": "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(0)\n        curr = dummy\n        while list1 and list2:\n            if list1.val <= list2.val:\n                curr.next = list1\n                list1 = list1.next\n            else:\n                curr.next = list2\n                list2 = list2.next\n            curr = curr.next\n        curr.next = list1 if list1 else list2\n        return dummy.next",
        "steps": [
          {
            "label": "init dummy node",
            "note": "Create dummy start node and tracking pointer curr",
            "from": 2,
            "to": 3
          },
          {
            "label": "compare head values",
            "note": "Loop while both list1 and list2 are non-empty",
            "from": 4,
            "to": 4,
            "yes": "Compare values",
            "no": "Attach remaining nodes"
          },
          {
            "label": "attach smaller (list1)",
            "note": "If list1.val <= list2.val, attach list1 and move list1 pointer",
            "from": 5,
            "to": 7,
            "yes": "list1 value is smaller or equal"
          },
          {
            "label": "attach smaller (list2)",
            "note": "If list2.val < list1.val, attach list2 and move list2 pointer",
            "from": 8,
            "to": 10,
            "no": "list2 value is smaller"
          },
          {
            "label": "advance merged pointer",
            "note": "Move curr to curr.next",
            "from": 11,
            "to": 11
          },
          {
            "label": "append remainder",
            "note": "Attach remaining portion of non-empty list",
            "from": 12,
            "to": 12
          },
          {
            "label": "return list head",
            "note": "Return dummy.next, skipping dummy node",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "linked-list-cycle": {
    "statement": "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Return true if there is a cycle in the linked list. Otherwise, return false.",
    "given": "the head of a linked list",
    "ret": "true if there is a cycle, false otherwise",
    "summary": "Use Floyd's Cycle Finding Algorithm (two pointers moving at different speeds); if they meet, a cycle exists.",
    "starter": "class ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        pass",
    "tests": [
      {
        "label": "head = [3,2,0,-4], pos = 1",
        "inputStr": "{\"head\": [3,2,0,-4], \"pos\": 1}",
        "expectedStr": "true"
      },
      {
        "label": "head = [1,2], pos = 0",
        "inputStr": "{\"head\": [1,2], \"pos\": 0}",
        "expectedStr": "true"
      },
      {
        "label": "head = [1], pos = -1",
        "inputStr": "{\"head\": [1], \"pos\": -1}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "hash set lookup",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Traverse the linked list while storing visited node objects in a set. If a node is encountered that is already in the set, a cycle is present.",
        "code": "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        visited = set()\n        curr = head\n        while curr:\n            if curr in visited:\n                return True\n            visited.add(curr)\n            curr = curr.next\n        return False",
        "steps": [
          {
            "label": "init set and pointer",
            "note": "Create set 'visited' and set curr to head",
            "from": 2,
            "to": 3
          },
          {
            "label": "loop nodes",
            "note": "Traverse while curr is not None",
            "from": 4,
            "to": 4,
            "yes": "Check current node",
            "no": "End of list reached, return False"
          },
          {
            "label": "check cycle condition",
            "note": "Check if curr object exists in set",
            "from": 5,
            "to": 6,
            "yes": "Cycle detected, return True",
            "no": "Node not seen before"
          },
          {
            "label": "add node to set",
            "note": "Add reference of curr to 'visited'",
            "from": 7,
            "to": 7
          },
          {
            "label": "advance pointer",
            "note": "Move curr to curr.next",
            "from": 8,
            "to": 8
          },
          {
            "label": "no cycle found",
            "note": "Reached end of list, return False",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "Floyd's fast and slow pointers",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Use a slow pointer that moves one step at a time and a fast pointer that moves two steps. If a cycle exists, the fast pointer will eventually catch up to the slow pointer.",
        "code": "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow = head\n        fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast:\n                return True\n        return False",
        "steps": [
          {
            "label": "initialize pointers",
            "note": "Set both slow and fast pointers to head",
            "from": 2,
            "to": 3
          },
          {
            "label": "check bounds",
            "note": "Check if fast and fast.next are non-null",
            "from": 4,
            "to": 4,
            "yes": "Can step fast pointer",
            "no": "Reached end of list, no cycle"
          },
          {
            "label": "move slow pointer",
            "note": "Advance slow by 1 step",
            "from": 5,
            "to": 5
          },
          {
            "label": "move fast pointer",
            "note": "Advance fast by 2 steps",
            "from": 6,
            "to": 6
          },
          {
            "label": "check overlap",
            "note": "Check if slow and fast point to the same node",
            "from": 7,
            "to": 8,
            "yes": "Pointers met, cycle exists",
            "no": "Continue traversal"
          },
          {
            "label": "return false",
            "note": "Fast pointer reached end, list is linear",
            "from": 9,
            "to": 9
          }
        ]
      }
    ]
  },
  "invert-binary-tree": {
    "statement": "Given the root of a binary tree, invert the tree, and return its root.",
    "given": "the root of a binary tree",
    "ret": "the root of the inverted binary tree",
    "summary": "Recursively swap the left and right pointers of every node in the tree.",
    "starter": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        pass",
    "tests": [
      {
        "label": "root = [4,2,7,1,3,6,9]",
        "inputStr": "{\"root\": [4,2,7,1,3,6,9]}",
        "expectedStr": "[4,7,2,9,6,3,1]"
      },
      {
        "label": "root = [2,1,3]",
        "inputStr": "{\"root\": [2,1,3]}",
        "expectedStr": "[2,3,1]"
      },
      {
        "label": "root = []",
        "inputStr": "{\"root\": []}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "Iterative BFS",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Use a queue to process nodes level-by-level, swapping left and right child pointers at each node.",
        "code": "from collections import deque\n\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root:\n            return None\n        queue = deque([root])\n        while queue:\n            node = queue.popleft()\n            node.left, node.right = node.right, node.left\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        return root",
        "steps": [
          {
            "label": "check null root",
            "note": "If root is None, return immediately.",
            "from": 5,
            "to": 6,
            "yes": "Return None",
            "no": "Proceed to initialize queue"
          },
          {
            "label": "initialize queue",
            "note": "Add the root node to the double-ended queue.",
            "from": 7,
            "to": 7
          },
          {
            "label": "pop node",
            "note": "Dequeue the front node for processing.",
            "from": 8,
            "to": 9
          },
          {
            "label": "swap children",
            "note": "Swap left and right child references of current node.",
            "from": 10,
            "to": 10
          },
          {
            "label": "enqueue children",
            "note": "Push existing children to the queue for future processing.",
            "from": 11,
            "to": 14
          },
          {
            "label": "return root",
            "note": "Return the original root pointer after full traversal.",
            "from": 15,
            "to": 15
          }
        ]
      },
      {
        "name": "Recursive DFS",
        "time": "O(n)",
        "space": "O(h)",
        "idea": "Recursively invert the left and right subtrees, then swap the pointers at the current node.",
        "code": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root:\n            return None\n        root.left, root.right = root.right, root.left\n        self.invertTree(root.left)\n        self.invertTree(root.right)\n        return root",
        "steps": [
          {
            "label": "base case check",
            "note": "If current node is None, stop recursion.",
            "from": 3,
            "to": 4,
            "yes": "Return None",
            "no": "Continue to swap"
          },
          {
            "label": "swap child pointers",
            "note": "Swap left and right child references at the current node.",
            "from": 5,
            "to": 5
          },
          {
            "label": "recurse left child",
            "note": "Call invertTree on the new left child (originally right).",
            "from": 6,
            "to": 6
          },
          {
            "label": "recurse right child",
            "note": "Call invertTree on the new right child (originally left).",
            "from": 7,
            "to": 7
          },
          {
            "label": "return node",
            "note": "Return the modified node pointer back to caller.",
            "from": 8,
            "to": 8
          }
        ]
      }
    ]
  },
  "maximum-depth-of-binary-tree": {
    "statement": "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "given": "the root of a binary tree",
    "ret": "an integer representing the maximum depth",
    "summary": "Calculate depth by taking 1 plus the maximum depth between left and right child subtrees.",
    "starter": "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        pass",
    "tests": [
      {
        "label": "root = [3,9,20,null,null,15,7]",
        "inputStr": "{\"root\": [3,9,20,null,null,15,7]}",
        "expectedStr": "3"
      },
      {
        "label": "root = [1,null,2]",
        "inputStr": "{\"root\": [1,null,2]}",
        "expectedStr": "2"
      }
    ],
    "approaches": [
      {
        "name": "Iterative BFS",
        "time": "O(n)",
        "space": "O(w)",
        "idea": "Traverse tree level by level using a queue, incrementing depth counter after processing each entire level.",
        "code": "from collections import deque\n\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n        queue = deque([root])\n        depth = 0\n        while queue:\n            depth += 1\n            for _ in range(len(queue)):\n                node = queue.popleft()\n                if node.left:\n                    queue.append(node.left)\n                if node.right:\n                    queue.append(node.right)\n        return depth",
        "steps": [
          {
            "label": "check empty tree",
            "note": "If root is None, return depth of 0.",
            "from": 5,
            "to": 6,
            "yes": "Return 0",
            "no": "Initialize queue"
          },
          {
            "label": "initialize depth & queue",
            "note": "Set depth counter to 0 and push root into queue.",
            "from": 7,
            "to": 8
          },
          {
            "label": "increment depth",
            "note": "Increment level counter for current tree level.",
            "from": 9,
            "to": 10
          },
          {
            "label": "process current level",
            "note": "Iterate over all nodes currently in queue for this level.",
            "from": 11,
            "to": 16
          },
          {
            "label": "return depth",
            "note": "Return accumulated total depth count after queue is empty.",
            "from": 17,
            "to": 17
          }
        ]
      },
      {
        "name": "Recursive DFS",
        "time": "O(n)",
        "space": "O(h)",
        "idea": "Recursively compute max depth of left and right subtrees, then combine result with current node count.",
        "code": "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n        left_depth = self.maxDepth(root.left)\n        right_depth = self.maxDepth(root.right)\n        return 1 + max(left_depth, right_depth)",
        "steps": [
          {
            "label": "base case check",
            "note": "Check if current node is None.",
            "from": 3,
            "to": 4,
            "yes": "Return 0",
            "no": "Proceed to subtree calls"
          },
          {
            "label": "recurse left subtree",
            "note": "Compute max depth of left subtree.",
            "from": 5,
            "to": 5
          },
          {
            "label": "recurse right subtree",
            "note": "Compute max depth of right subtree.",
            "from": 6,
            "to": 6
          },
          {
            "label": "combine results",
            "note": "Add 1 for current node to max depth of subtrees.",
            "from": 7,
            "to": 7
          }
        ]
      }
    ]
  },
  "same-tree": {
    "statement": "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
    "given": "the roots of two binary trees p and q",
    "ret": "a boolean indicating whether the trees are identical",
    "summary": "Compare corresponding nodes recursively: structural equality and value match must hold for all pairs.",
    "starter": "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        pass",
    "tests": [
      {
        "label": "p = [1,2,3], q = [1,2,3]",
        "inputStr": "{\"p\": [1,2,3], \"q\": [1,2,3]}",
        "expectedStr": "true"
      },
      {
        "label": "p = [1,2], q = [1,null,2]",
        "inputStr": "{\"p\": [1,2], \"q\": [1,null,2]}",
        "expectedStr": "false"
      },
      {
        "label": "p = [1,2,1], q = [1,1,2]",
        "inputStr": "{\"p\": [1,2,1], \"q\": [1,1,2]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "Iterative BFS",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Use a queue containing pairs of nodes to compare corresponding nodes level-by-level.",
        "code": "from collections import deque\n\nclass Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        queue = deque([(p, q)])\n        while queue:\n            node1, node2 = queue.popleft()\n            if not node1 and not node2:\n                continue\n            if not node1 or not node2 or node1.val != node2.val:\n                return False\n            queue.append((node1.left, node2.left))\n            queue.append((node1.right, node2.right))\n        return True",
        "steps": [
          {
            "label": "initialize queue",
            "note": "Push root pair (p, q) into deque.",
            "from": 5,
            "to": 5
          },
          {
            "label": "pop pair",
            "note": "Dequeue node pair to compare.",
            "from": 7,
            "to": 7
          },
          {
            "label": "check double null",
            "note": "If both nodes are None, skip to next pair.",
            "from": 8,
            "to": 9,
            "yes": "Continue loop",
            "no": "Check node mismatch"
          },
          {
            "label": "check mismatch",
            "note": "If one node is None or values differ, trees aren't identical.",
            "from": 10,
            "to": 11,
            "yes": "Return False",
            "no": "Enqueue children"
          },
          {
            "label": "enqueue children pairs",
            "note": "Queue left child pair and right child pair.",
            "from": 12,
            "to": 13
          },
          {
            "label": "return success",
            "note": "If queue empties without mismatches, return True.",
            "from": 14,
            "to": 14
          }
        ]
      },
      {
        "name": "Recursive DFS",
        "time": "O(n)",
        "space": "O(h)",
        "idea": "Compare roots of both trees, then recursively check left subtrees and right subtrees.",
        "code": "class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        if not p and not q:\n            return True\n        if not p or not q or p.val != q.val:\n            return False\n        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)",
        "steps": [
          {
            "label": "both null check",
            "note": "If both nodes are None, structure matches at this leaf position.",
            "from": 3,
            "to": 4,
            "yes": "Return True",
            "no": "Check mismatch"
          },
          {
            "label": "mismatch check",
            "note": "If one is None or values are not equal, return False.",
            "from": 5,
            "to": 6,
            "yes": "Return False",
            "no": "Recurse children"
          },
          {
            "label": "recurse left & right",
            "note": "Recursively check left children and right children simultaneously.",
            "from": 7,
            "to": 7
          }
        ]
      }
    ]
  },
  "product-of-array-except-self": {
    "statement": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    "given": "an integer array nums",
    "ret": "an array answer where answer[i] is the product of all elements except nums[i]",
    "summary": "Compute prefix products in a left-to-right pass, then multiply by suffix products in a right-to-left pass to build the result in O(n) time and O(1) auxiliary space.",
    "starter": "class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        pass",
    "tests": [
      {
        "label": "nums = [1,2,3,4]",
        "inputStr": "{\"nums\": [1,2,3,4]}",
        "expectedStr": "[24,12,8,6]"
      },
      {
        "label": "nums = [-1,1,0,-3,3]",
        "inputStr": "{\"nums\": [-1,1,0,-3,3]}",
        "expectedStr": "[0,0,9,0,0]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "For every element at index i, run a nested loop over all indices j to multiply every element where j != i.",
        "code": "class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        n = len(nums)\n        res = [1] * n\n        for i in range(n):\n            prod = 1\n            for j in range(n):\n                if i != j:\n                    prod *= nums[j]\n            res[i] = prod\n        return res",
        "steps": [
          {
            "label": "initialize output",
            "note": "Create output array res filled with 1s",
            "from": 3,
            "to": 4
          },
          {
            "label": "outer loop",
            "note": "Iterate through each element position i",
            "from": 5,
            "to": 6
          },
          {
            "label": "inner product loop",
            "note": "Iterate through all positions j to calculate product of non-i elements",
            "from": 7,
            "to": 9,
            "yes": "Skip multiplying when i == j"
          },
          {
            "label": "store result",
            "note": "Assign calculated product to res[i]",
            "from": 10,
            "to": 10
          },
          {
            "label": "return result",
            "note": "Return final output array",
            "from": 11,
            "to": 11
          }
        ]
      },
      {
        "name": "optimal prefix and suffix product",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Use the output array to store cumulative prefix products moving left-to-right, then multiply by suffix products moving right-to-left using a single running scalar.",
        "code": "class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        n = len(nums)\n        res = [1] * n\n        prefix = 1\n        for i in range(n):\n            res[i] = prefix\n            prefix *= nums[i]\n        suffix = 1\n        for i in range(n - 1, -1, -1):\n            res[i] *= suffix\n            suffix *= nums[i]\n        return res",
        "steps": [
          {
            "label": "init result array",
            "note": "Initialize result array res of length n with 1s",
            "from": 3,
            "to": 4
          },
          {
            "label": "prefix pass",
            "note": "Set res[i] to accumulated product of elements left of i, then update prefix",
            "from": 5,
            "to": 8
          },
          {
            "label": "init suffix multiplier",
            "note": "Set variable suffix to 1 before backward pass",
            "from": 9,
            "to": 9
          },
          {
            "label": "suffix pass",
            "note": "Multiply res[i] by running suffix product and update suffix multiplier",
            "from": 10,
            "to": 12
          },
          {
            "label": "return result",
            "note": "Return completed res array",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "top-k-frequent-elements": {
    "statement": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    "given": "an integer array nums and an integer k",
    "ret": "an array containing the k most frequent elements",
    "summary": "Count frequency of elements with a hash map, then use Bucket Sort or a Min-Heap to extract the k highest frequency items.",
    "starter": "class Solution:\n    def topKFrequent(self, nums: list[int], k: int) -> list[int]:\n        pass",
    "tests": [
      {
        "label": "nums = [1,1,1,2,2,3], k = 2",
        "inputStr": "{\"nums\": [1,1,1,2,2,3], \"k\": 2}",
        "expectedStr": "[1,2]"
      },
      {
        "label": "nums = [1], k = 1",
        "inputStr": "{\"nums\": [1], \"k\": 1}",
        "expectedStr": "[1]"
      }
    ],
    "approaches": [
      {
        "name": "min-heap approach",
        "time": "O(n log k)",
        "space": "O(n)",
        "idea": "Count frequencies using a map, then maintain a Min-Heap of size k to retain only the top k frequent elements.",
        "code": "import heapq\nfrom collections import Counter\n\nclass Solution:\n    def topKFrequent(self, nums: list[int], k: int) -> list[int]:\n        count = Counter(nums)\n        return heapq.nlargest(k, count.keys(), key=count.get)",
        "steps": [
          {
            "label": "frequency counting",
            "note": "Build frequency hash map of element occurrences in nums",
            "from": 6,
            "to": 6
          },
          {
            "label": "heap extraction",
            "note": "Use nlargest to maintain top k elements ordered by count map values",
            "from": 7,
            "to": 7
          }
        ]
      },
      {
        "name": "bucket sort approach",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Group numbers into array buckets indexed by their frequencies (1 to n), then collect elements from the highest frequency bucket down.",
        "code": "from collections import Counter\n\nclass Solution:\n    def topKFrequent(self, nums: list[int], k: int) -> list[int]:\n        count = Counter(nums)\n        buckets = [[] for _ in range(len(nums) + 1)]\n        for num, freq in count.items():\n            buckets[freq].append(num)\n        res = []\n        for i in range(len(buckets) - 1, 0, -1):\n            for num in buckets[i]:\n                res.append(num)\n                if len(res) == k:\n                    return res\n        return res",
        "steps": [
          {
            "label": "count frequencies",
            "note": "Count occurrences of each number in nums",
            "from": 5,
            "to": 5
          },
          {
            "label": "initialize buckets",
            "note": "Create empty bucket lists indexed from 0 to len(nums)",
            "from": 6,
            "to": 6
          },
          {
            "label": "populate buckets",
            "note": "Append each number to bucket corresponding to its frequency",
            "from": 7,
            "to": 8
          },
          {
            "label": "collect elements",
            "note": "Iterate backwards from maximum bucket index to accumulate top k numbers",
            "from": 10,
            "to": 14,
            "yes": "Return accumulated result as soon as length equals k"
          }
        ]
      }
    ]
  },
  "group-anagrams": {
    "statement": "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "given": "an array of strings strs",
    "ret": "a list of lists of strings where each list contains grouped anagrams",
    "summary": "Hash strings by a common key: either their sorted representation or a 26-count frequency tuple of their characters.",
    "starter": "class Solution:\n    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:\n        pass",
    "tests": [
      {
        "label": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "inputStr": "{\"strs\": [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]}",
        "expectedStr": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]"
      },
      {
        "label": "strs = [\"\"]",
        "inputStr": "{\"strs\": [\"\"]}",
        "expectedStr": "[[\"\"]]"
      },
      {
        "label": "strs = [\"a\"]",
        "inputStr": "{\"strs\": [\"a\"]}",
        "expectedStr": "[[\"a\"]]"
      }
    ],
    "approaches": [
      {
        "name": "categorize by sorted string",
        "time": "O(n * k log k)",
        "space": "O(n * k)",
        "idea": "Sort characters of each string to form a standard map key for all anagram variants.",
        "code": "from collections import defaultdict\n\nclass Solution:\n    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:\n        ans = defaultdict(list)\n        for s in strs:\n            key = \"\".join(sorted(s))\n            ans[key].append(s)\n        return list(ans.values())",
        "steps": [
          {
            "label": "init dictionary",
            "note": "Create defaultdict with list values",
            "from": 5,
            "to": 5
          },
          {
            "label": "iterate strings",
            "note": "Loop through each string in input array",
            "from": 6,
            "to": 6
          },
          {
            "label": "generate key",
            "note": "Sort characters of string s to create canonical key string",
            "from": 7,
            "to": 7
          },
          {
            "label": "append word",
            "note": "Append string s to list matching its sorted key",
            "from": 8,
            "to": 8
          },
          {
            "label": "return groups",
            "note": "Return values of hash map as a list of lists",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "categorize by character count",
        "time": "O(n * k)",
        "space": "O(n * k)",
        "idea": "Build a frequency array of 26 characters for each word and convert it to a tuple to use as a hash map key.",
        "code": "from collections import defaultdict\n\nclass Solution:\n    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:\n        ans = defaultdict(list)\n        for s in strs:\n            count = [0] * 26\n            for c in s:\n                count[ord(c) - ord('a')] += 1\n            ans[tuple(count)].append(s)\n        return list(ans.values())",
        "steps": [
          {
            "label": "init hash map",
            "note": "Create defaultdict with list values",
            "from": 5,
            "to": 5
          },
          {
            "label": "init count array",
            "note": "For current string, construct count array of length 26 filled with zeros",
            "from": 6,
            "to": 7
          },
          {
            "label": "count characters",
            "note": "Increment letter frequency using ASCII offset from 'a'",
            "from": 8,
            "to": 9
          },
          {
            "label": "tuple key lookup",
            "note": "Convert count array to tuple key and append string to dictionary",
            "from": 10,
            "to": 10
          },
          {
            "label": "return answer",
            "note": "Return map values containing grouped anagrams",
            "from": 11,
            "to": 11
          }
        ]
      }
    ]
  },
  "encode-and-decode-strings": {
    "statement": "Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and decoded back to the original list of strings.",
    "given": "a list of strings strs",
    "ret": "a single encoded string (for encode) / original list of strings (for decode)",
    "summary": "Prefix each string with its length followed by a delimiter like '#', allowing exact string slicing during decoding regardless of special characters.",
    "starter": "class Codec:\n    def encode(self, strs: list[str]) -> str:\n        pass\n\n    def decode(self, s: str) -> list[str]:\n        pass",
    "tests": [
      {
        "label": "strs = [\"lint\",\"code\",\"love\",\"you\"]",
        "inputStr": "{\"strs\": [\"lint\", \"code\", \"love\", \"you\"]}",
        "expectedStr": "[\"lint\", \"code\", \"love\", \"you\"]"
      },
      {
        "label": "strs = [\"we\", \"say\", \":\", \"yes\"]",
        "inputStr": "{\"strs\": [\"we\", \"say\", \":\", \"yes\"]}",
        "expectedStr": "[\"we\", \"say\", \":\", \"yes\"]"
      },
      {
        "label": "strs = [\"\"]",
        "inputStr": "{\"strs\": [\"\"]}",
        "expectedStr": "[\"\"]"
      }
    ],
    "approaches": [
      {
        "name": "Delimiter Escaping",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Join strings using a specific delimiter (e.g., ',') while replacing internal delimiter characters with escaped versions (e.g., ',,').",
        "code": "class Codec:\n    def encode(self, strs: list[str]) -> str:\n        encoded = []\n        for s in strs:\n            encoded.append(s.replace(',', ',,'))\n        return ' , '.join(encoded)\n\n    def decode(self, s: str) -> list[str]:\n        raw_parts = s.split(' , ')\n        return [part.replace(',,', ',') for part in raw_parts]",
        "steps": [
          {
            "label": "Initialize encoded array",
            "note": "Prepare a list to hold processed string parts.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Escape delimiters",
            "note": "Iterate through each string and duplicate occurrences of the delimiter to avoid misinterpretation during decoding.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Join tokens",
            "note": "Combine all escaped tokens into a single string separated by the unique delimiter token.",
            "from": 6,
            "to": 6
          },
          {
            "label": "Split string",
            "note": "Split the encoded string back into individual parts using the unique delimiter sequence.",
            "from": 9,
            "to": 9
          },
          {
            "label": "Unescape delimiters",
            "note": "Restore original string values by replacing double delimiters with single delimiters.",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "Length Prefix Encoding (Optimal)",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "Prefix each string with its character length and a delimiter (e.g., '4#hello'). Decoding parses the integer length to extract exact character chunks.",
        "code": "class Codec:\n    def encode(self, strs: list[str]) -> str:\n        encoded = \"\"\n        for s in strs:\n            encoded += str(len(s)) + \"#\" + s\n        return encoded\n\n    def decode(self, s: str) -> list[str]:\n        res, i = [], 0\n        while i < len(s):\n            j = i\n            while s[j] != '#':\n                j += 1\n            length = int(s[i:j])\n            res.append(s[j + 1 : j + 1 + length])\n            i = j + 1 + length\n        return res",
        "steps": [
          {
            "label": "Build encoded string",
            "note": "For each string, append length + '#' + string contents.",
            "from": 3,
            "to": 6
          },
          {
            "label": "Initialize scan pointers",
            "note": "Set read index i to start of string s.",
            "from": 9,
            "to": 9
          },
          {
            "label": "Locate delimiter",
            "note": "Move pointer j forward until finding the '#' symbol separating length from string body.",
            "from": 11,
            "to": 13
          },
          {
            "label": "Parse chunk length",
            "note": "Convert substring s[i:j] to an integer to determine how many characters to read.",
            "from": 14,
            "to": 14
          },
          {
            "label": "Extract string slice",
            "note": "Slice 'length' characters after '#' and append to result list.",
            "from": 15,
            "to": 15
          },
          {
            "label": "Advance read pointer",
            "note": "Update index i past current extracted string chunk to prepare for next read.",
            "from": 16,
            "to": 16
          }
        ]
      }
    ]
  },
  "longest-consecutive-sequence": {
    "statement": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    "given": "an unsorted array of integers nums",
    "ret": "the length of the longest consecutive elements sequence",
    "summary": "Store numbers in a hash set; for each number that acts as sequence start (no num-1 exists), incrementally count consecutive numbers.",
    "starter": "def longestConsecutive(nums: list[int]) -> int:\n    pass",
    "tests": [
      {
        "label": "nums = [100,4,200,1,3,2]",
        "inputStr": "{\"nums\": [100, 4, 200, 1, 3, 2]}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [0,3,7,2,5,8,4,6,0,1]",
        "inputStr": "{\"nums\": [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]}",
        "expectedStr": "9"
      },
      {
        "label": "nums = []",
        "inputStr": "{\"nums\": []}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "Sorting",
        "time": "O(N log N)",
        "space": "O(1)",
        "idea": "Sort the array and iterate through elements to track consecutive counts while skipping duplicates.",
        "code": "def longestConsecutive(nums: list[int]) -> int:\n    if not nums:\n        return 0\n    nums.sort()\n    longest = 1\n    curr = 1\n    for i in range(1, len(nums)):\n        if nums[i] != nums[i - 1]:\n            if nums[i] == nums[i - 1] + 1:\n                curr += 1\n            else:\n                longest = max(longest, curr)\n                curr = 1\n    return max(longest, curr)",
        "steps": [
          {
            "label": "Handle empty input",
            "note": "Return 0 immediately if input array is empty.",
            "from": 2,
            "to": 3,
            "yes": "nums is empty, return 0",
            "no": "nums has elements, proceed"
          },
          {
            "label": "Sort elements",
            "note": "Sort array in ascending order.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Iterate sorted elements",
            "note": "Compare adjacent elements to count uninterrupted sequences.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Increment count",
            "note": "If current number is exactly 1 greater than previous number, increment sequence counter.",
            "from": 9,
            "to": 10,
            "yes": "nums[i] == nums[i-1] + 1, increment streak",
            "no": "Streak broken, reset streak"
          },
          {
            "label": "Update global maximum",
            "note": "Reset current streak counter and save max length found so far.",
            "from": 12,
            "to": 13
          },
          {
            "label": "Return result",
            "note": "Return maximum consecutive length.",
            "from": 14,
            "to": 14
          }
        ]
      },
      {
        "name": "Hash Set (Optimal)",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Store elements in a hash set for O(1) lookups. Only start sequence counting for numbers that have no left neighbor (num - 1).",
        "code": "def longestConsecutive(nums: list[int]) -> int:\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr_num = num\n            curr_streak = 1\n            while curr_num + 1 in num_set:\n                curr_num += 1\n                curr_streak += 1\n            longest = max(longest, curr_streak)\n    return longest",
        "steps": [
          {
            "label": "Create set",
            "note": "Convert array into a set for O(1) membership checking.",
            "from": 2,
            "to": 2
          },
          {
            "label": "Check sequence start",
            "note": "Check if (num - 1) exists in set to confirm if num is the start of a sequence.",
            "from": 5,
            "to": 5,
            "yes": "num - 1 is missing: num IS the start of a sequence",
            "no": "num - 1 exists: skip num as it is not sequence start"
          },
          {
            "label": "Count consecutive sequence",
            "note": "Increment curr_num and streak as long as (curr_num + 1) is present in set.",
            "from": 8,
            "to": 10
          },
          {
            "label": "Update global longest",
            "note": "Store maximum streak encountered.",
            "from": 11,
            "to": 11
          },
          {
            "label": "Return result",
            "note": "Return total maximum consecutive length.",
            "from": 12,
            "to": 12
          }
        ]
      }
    ]
  },
  "valid-palindrome": {
    "statement": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string s, return true if it is a palindrome, or false otherwise.",
    "given": "a string s",
    "ret": "a boolean indicating whether s is a valid palindrome",
    "summary": "Filter non-alphanumeric characters or compare characters inwards using two pointers while checking case-insensitive equality.",
    "starter": "def isPalindrome(s: str) -> bool:\n    pass",
    "tests": [
      {
        "label": "s = \"A man, a plan, a canal: Panama\"",
        "inputStr": "{\"s\": \"A man, a plan, a canal: Panama\"}",
        "expectedStr": "true"
      },
      {
        "label": "s = \"race a car\"",
        "inputStr": "{\"s\": \"race a car\"}",
        "expectedStr": "false"
      },
      {
        "label": "s = \" \"",
        "inputStr": "{\"s\": \" \"}",
        "expectedStr": "true"
      }
    ],
    "approaches": [
      {
        "name": "Filtered String Reversal",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Filter out non-alphanumeric characters into a new lowercased string and compare it to its reverse.",
        "code": "def isPalindrome(s: str) -> bool:\n    filtered = []\n    for char in s:\n        if char.isalnum():\n            filtered.append(char.lower())\n    filtered_str = \"\".join(filtered)\n    return filtered_str == filtered_str[::-1]",
        "steps": [
          {
            "label": "Initialize list",
            "note": "Create list to store valid alphanumeric characters.",
            "from": 2,
            "to": 2
          },
          {
            "label": "Filter characters",
            "note": "Iterate string and check if character is alphanumeric.",
            "from": 3,
            "to": 5,
            "yes": "char is alphanumeric: lowercase and append",
            "no": "char is punctuation/space: skip"
          },
          {
            "label": "Join string",
            "note": "Combine array into cleaned string.",
            "from": 6,
            "to": 6
          },
          {
            "label": "Compare with reverse",
            "note": "Check if cleaned string matches its reversed slice.",
            "from": 7,
            "to": 7,
            "yes": "Equal: return True",
            "no": "Not equal: return False"
          }
        ]
      },
      {
        "name": "Two Pointers In-Place (Optimal)",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "Use left and right pointers moving inward, skipping non-alphanumeric characters, and comparing valid characters.",
        "code": "def isPalindrome(s: str) -> bool:\n    left, right = 0, len(s) - 1\n    while left < right:\n        while left < right and not s[left].isalnum():\n            left += 1\n        while left < right and not s[right].isalnum():\n            right -= 1\n        if s[left].lower() != s[right].lower():\n            return False\n        left += 1\n        right -= 1\n    return True",
        "steps": [
          {
            "label": "Initialize pointers",
            "note": "Place left pointer at string start and right pointer at string end.",
            "from": 2,
            "to": 2
          },
          {
            "label": "Skip non-alphanumeric from left",
            "note": "Advance left pointer past non-alphanumeric characters.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Skip non-alphanumeric from right",
            "note": "Decrement right pointer past non-alphanumeric characters.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Compare characters",
            "note": "Check if lowercased left and right characters match.",
            "from": 8,
            "to": 9,
            "yes": "Characters mismatch: return False",
            "no": "Characters match: continue checking"
          },
          {
            "label": "Move pointers inward",
            "note": "Increment left and decrement right pointers.",
            "from": 10,
            "to": 11
          },
          {
            "label": "Return success",
            "note": "Pointers crossed without mismatch; string is a valid palindrome.",
            "from": 12,
            "to": 12
          }
        ]
      }
    ]
  },
  "3sum": {
    "statement": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    "given": "an array of integers nums",
    "ret": "all unique triplets [nums[i], nums[j], nums[k]] that sum to 0",
    "summary": "Sort the array and iterate through each element as a fixed target. Use two pointers (left and right) on the remaining subarray to find pairs that complete the zero sum, skipping duplicates along the way.",
    "starter": "class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        pass",
    "tests": [
      {
        "label": "nums = [-1,0,1,2,-1,-4]",
        "inputStr": "{\"nums\": [-1, 0, 1, 2, -1, -4]}",
        "expectedStr": "[[-1, -1, 2], [-1, 0, 1]]"
      },
      {
        "label": "nums = [0,1,1]",
        "inputStr": "{\"nums\": [0, 1, 1]}",
        "expectedStr": "[]"
      },
      {
        "label": "nums = [0,0,0]",
        "inputStr": "{\"nums\": [0, 0, 0]}",
        "expectedStr": "[[0, 0, 0]]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^3)",
        "space": "O(n)",
        "idea": "Use three nested loops to test every possible triplet combination. To avoid returning duplicate triplets, sort each valid triplet and store it in a hash set.",
        "code": "class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        res = set()\n        n = len(nums)\n        for i in range(n):\n            for j in range(i + 1, n):\n                for k in range(j + 1, n):\n                    if nums[i] + nums[j] + nums[k] == 0:\n                        res.add(tuple(sorted([nums[i], nums[j], nums[k]])))            return [list(t) for t in res]",
        "steps": [
          {
            "label": "init structure",
            "note": "Initialize a set to keep track of unique triplets",
            "from": 3,
            "to": 3
          },
          {
            "label": "triple loop search",
            "note": "Iterate through all combinations of indices i, j, and k",
            "from": 5,
            "to": 7
          },
          {
            "label": "check sum condition",
            "note": "Verify if current three values sum up to zero",
            "from": 8,
            "to": 8,
            "yes": "Sort and add the triplet to the set",
            "no": "Continue searching next combination"
          },
          {
            "label": "add sorted triplet",
            "note": "Sort triplet values to standardize order and add to set for uniqueness",
            "from": 9,
            "to": 9
          },
          {
            "label": "return result list",
            "note": "Convert set of tuples back to a list of lists",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "optimal approach",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Sort the input array. Loop through each number `nums[i]` as a pivot. Use two pointers (`l` and `r`) to find two numbers that sum to `-nums[i]`. Skip identical consecutive numbers to ensure output triplets are unique.",
        "code": "class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        nums.sort()\n        res = []\n        for i in range(len(nums) - 2):\n            if i > 0 and nums[i] == nums[i - 1]:\n                continue\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                total = nums[i] + nums[l] + nums[r]\n                if total < 0:\n                    l += 1\n                elif total > 0:\n                    r -= 1\n                else:\n                    res.append([nums[i], nums[l], nums[r]])\n                    while l < r and nums[l] == nums[l + 1]:\n                        l += 1\n                    while l < r and nums[r] == nums[r - 1]:\n                        r -= 1\n                    l += 1\n                    r -= 1\n        return res",
        "steps": [
          {
            "label": "sort array",
            "note": "Sort nums to allow two-pointer traversal and easy duplicate skipping",
            "from": 3,
            "to": 3
          },
          {
            "label": "skip duplicate pivots",
            "note": "Check if current pivot is same as previous pivot to avoid identical triplets",
            "from": 6,
            "to": 7,
            "yes": "Skip this loop iteration",
            "no": "Initialize two pointers l and r"
          },
          {
            "label": "init pointers",
            "note": "Set l to i+1 and r to end of array",
            "from": 8,
            "to": 8
          },
          {
            "label": "evaluate total sum",
            "note": "Compute total = nums[i] + nums[l] + nums[r]",
            "from": 10,
            "to": 10
          },
          {
            "label": "adjust pointers",
            "note": "If total < 0 increment l; if total > 0 decrement r; if 0 record triplet and skip pointer duplicates",
            "from": 11,
            "to": 20
          },
          {
            "label": "return result",
            "note": "Return list of unique triplets",
            "from": 21,
            "to": 21
          }
        ]
      }
    ]
  },
  "container-with-most-water": {
    "statement": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    "given": "an array of integers height representing line heights",
    "ret": "the maximum amount of water a container can store",
    "summary": "Place pointers at the start and end of the array. At each step, calculate the water volume bounded by the shorter line, track the maximum volume seen so far, and move the shorter line's pointer inward.",
    "starter": "class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "height = [1,8,6,2,5,4,8,3,7]",
        "inputStr": "{\"height\": [1, 8, 6, 2, 5, 4, 8, 3, 7]}",
        "expectedStr": "49"
      },
      {
        "label": "height = [1,1]",
        "inputStr": "{\"height\": [1, 1]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Calculate the container volume for every pair of lines and return the maximum calculated area.",
        "code": "class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        max_water = 0\n        n = len(height)\n        for i in range(n):\n            for j in range(i + 1, n):\n                h = min(height[i], height[j])\n                w = j - i\n                max_water = max(max_water, h * w)\n        return max_water",
        "steps": [
          {
            "label": "init max variable",
            "note": "Set max_water to 0 to track maximum container size",
            "from": 3,
            "to": 3
          },
          {
            "label": "pair search loop",
            "note": "Nested loops examine every pair (i, j)",
            "from": 5,
            "to": 6
          },
          {
            "label": "calculate water volume",
            "note": "Container height is constrained by shorter line; width is j - i",
            "from": 7,
            "to": 9
          },
          {
            "label": "return max area",
            "note": "Return the highest area calculated across all pairs",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "optimal approach",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Start with maximum width using left pointer at start and right pointer at end. Calculate area, update max area, and shift whichever pointer points to the shorter line inward because moving the taller line can never yield a larger area with a smaller width.",
        "code": "class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        l, r = 0, len(height) - 1\n        max_water = 0\n        while l < r:\n            h = min(height[l], height[r])\n            w = r - l\n            max_water = max(max_water, h * w)\n            if height[l] < height[r]:\n                l += 1\n            else:\n                r -= 1\n        return max_water",
        "steps": [
          {
            "label": "init pointers",
            "note": "Set left pointer to index 0, right pointer to end of array",
            "from": 3,
            "to": 4
          },
          {
            "label": "two-pointer loop",
            "note": "Continue loop while left pointer is less than right pointer",
            "from": 5,
            "to": 5
          },
          {
            "label": "compute area",
            "note": "Find container height min(height[l], height[r]) and update max_water",
            "from": 6,
            "to": 8
          },
          {
            "label": "move shorter line pointer",
            "note": "Shift the left pointer right if left line is shorter, otherwise shift right pointer left",
            "from": 9,
            "to": 12,
            "yes": "Increment l pointer",
            "no": "Decrement r pointer"
          },
          {
            "label": "return answer",
            "note": "Return max_water found after pointers meet",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "best-time-to-buy-and-sell-stock": {
    "statement": "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "given": "an array of stock prices prices",
    "ret": "the maximum profit achievable from a single buy and sell transaction",
    "summary": "Keep track of the minimum buy price seen so far as you traverse through the array. On each day, compute the potential profit if sold today and keep track of the maximum profit overall.",
    "starter": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "prices = [7,1,5,3,6,4]",
        "inputStr": "{\"prices\": [7, 1, 5, 3, 6, 4]}",
        "expectedStr": "5"
      },
      {
        "label": "prices = [7,6,4,3,1]",
        "inputStr": "{\"prices\": [7, 6, 4, 3, 1]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Check all possible buy and sell day pairs (i, j) where j > i, calculate profit for each pair, and keep track of the max profit.",
        "code": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        max_profit = 0\n        n = len(prices)\n        for i in range(n):\n            for j in range(i + 1, n):\n                profit = prices[j] - prices[i]\n                max_profit = max(max_profit, profit)\n        return max_profit",
        "steps": [
          {
            "label": "init max profit",
            "note": "Set initial max_profit to 0",
            "from": 3,
            "to": 3
          },
          {
            "label": "nested iteration",
            "note": "Loop buy day i from 0 to n and sell day j from i+1 to n",
            "from": 5,
            "to": 6
          },
          {
            "label": "calculate profit",
            "note": "Compute difference prices[j] - prices[i] and update max_profit",
            "from": 7,
            "to": 8
          },
          {
            "label": "return max profit",
            "note": "Return overall max_profit",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "optimal approach",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Perform a single pass over the array. Track the lowest price observed so far (`min_price`). If current price is lower than `min_price`, update `min_price`. Otherwise, calculate profit (`price - min_price`) and update `max_profit` if it's higher.",
        "code": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        min_price = float('inf')\n        max_profit = 0\n        for price in prices:\n            if price < min_price:\n                min_price = price\n            elif price - min_price > max_profit:\n                max_profit = price - min_price\n        return max_profit",
        "steps": [
          {
            "label": "init trackers",
            "note": "Set min_price to infinity and max_profit to 0",
            "from": 3,
            "to": 4
          },
          {
            "label": "iterate prices",
            "note": "Process each daily stock price sequentially",
            "from": 5,
            "to": 5
          },
          {
            "label": "check lower price",
            "note": "If current price is less than min_price, update min_price",
            "from": 6,
            "to": 7,
            "yes": "Update min_price to current price",
            "no": "Check potential profit"
          },
          {
            "label": "check higher profit",
            "note": "If selling today gives higher profit than max_profit, update max_profit",
            "from": 8,
            "to": 9,
            "yes": "Update max_profit to price - min_price",
            "no": "Keep current max_profit"
          },
          {
            "label": "return max profit",
            "note": "Return maximum profit recorded",
            "from": 10,
            "to": 10
          }
        ]
      }
    ]
  },
  "longest-substring-without-repeating-characters": {
    "statement": "Given a string s, find the length of the longest substring without repeating characters.",
    "given": "a string s",
    "ret": "the length of the longest substring without repeating characters",
    "summary": "Use a sliding window with a dynamic set or map to track characters in the current window. Expand the right boundary until a duplicate is found, then shrink the left boundary until the duplicate is removed.",
    "starter": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        pass",
    "tests": [
      {
        "label": "s = \"abcabcbb\"",
        "inputStr": "{\"s\": \"abcabcbb\"}",
        "expectedStr": "3"
      },
      {
        "label": "s = \"bbbbb\"",
        "inputStr": "{\"s\": \"bbbbb\"}",
        "expectedStr": "1"
      },
      {
        "label": "s = \"pwwkew\"",
        "inputStr": "{\"s\": \"pwwkew\"}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force",
        "time": "O(n^2)",
        "space": "O(min(n, m))",
        "idea": "Iterate over all possible starting positions and expand substrings while checking if characters remain unique using a set.",
        "code": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        max_len = 0\n        for i in range(len(s)):\n            seen = set()\n            for j in range(i, len(s)):\n                if s[j] in seen:\n                    break\n                seen.add(s[j])\n                max_len = max(max_len, j - i + 1)\n        return max_len",
        "steps": [
          {
            "label": "Outer Loop Start",
            "note": "Pick the starting index 'i' of the substring.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Initialize Set",
            "note": "Create a new hash set 'seen' for unique character tracking.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Inner Loop Expand",
            "note": "Expand the right end 'j' of the substring.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check Duplicate",
            "note": "If s[j] is already in 'seen', break to start next 'i'.",
            "from": 4,
            "to": 5,
            "yes": "Duplicate found, break inner loop.",
            "no": "Character is unique, continue."
          },
          {
            "label": "Update Max Length",
            "note": "Add s[j] to set and update max_len with (j - i + 1).",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "Sliding Window (Hash Set)",
        "time": "O(n)",
        "space": "O(min(n, m))",
        "idea": "Maintain a dynamic window [left, right]. Move 'right' to add characters. If s[right] is already in the set, move 'left' forward until s[right] is removed.",
        "code": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        char_set = set()\n        left = 0\n        max_len = 0\n        for right in range(len(s)):\n            while s[right] in char_set:\n                char_set.remove(s[left])\n                left += 1\n            char_set.add(s[right])\n            max_len = max(max_len, right - left + 1)\n        return max_len",
        "steps": [
          {
            "label": "Initialize Pointers",
            "note": "Initialize 'left' pointer to 0, 'char_set' to empty set, and 'max_len' to 0.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Expand Right Pointer",
            "note": "Iterate 'right' from 0 to len(s) - 1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check Window Validity",
            "note": "While current character s[right] exists in char_set, shrink window.",
            "from": 3,
            "to": 4,
            "yes": "Remove s[left] and increment left.",
            "no": "Window is valid, proceed."
          },
          {
            "label": "Add Character & Update",
            "note": "Add s[right] to set and update max_len = max(max_len, right - left + 1).",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "longest-repeating-character-replacement": {
    "statement": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
    "given": "a string s and an integer k",
    "ret": "the maximum length of a substring containing the same letter after replacing at most k characters",
    "summary": "Use a sliding window where the window size minus the count of the most frequent character in the window represents the required replacements. If replacements exceed k, shrink the window from the left.",
    "starter": "class Solution:\n    def characterReplacement(self, s: str, k: int) -> str:\n        pass",
    "tests": [
      {
        "label": "s = \"ABAB\", k = 2",
        "inputStr": "{\"s\": \"ABAB\", \"k\": 2}",
        "expectedStr": "4"
      },
      {
        "label": "s = \"AABABBA\", k = 1",
        "inputStr": "{\"s\": \"AABABBA\", \"k\": 1}",
        "expectedStr": "4"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force",
        "time": "O(26 * n^2)",
        "space": "O(26)",
        "idea": "Check all possible substrings, compute character counts, and check if (length - max_frequency) <= k.",
        "code": "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        max_len = 0\n        for i in range(len(s)):\n            counts = {}\n            max_freq = 0\n            for j in range(i, len(s)):\n                counts[s[j]] = counts.get(s[j], 0) + 1\n                max_freq = max(max_freq, counts[s[j]])\n                if (j - i + 1) - max_freq <= k:\n                    max_len = max(max_len, j - i + 1)\n        return max_len",
        "steps": [
          {
            "label": "Outer Loop",
            "note": "Fix the start index 'i' of the substring.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Inner Loop",
            "note": "Expand substring to index 'j' and track character frequencies.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Calculate Replacements",
            "note": "Check if total length minus max_freq is <= k.",
            "from": 3,
            "to": 4,
            "yes": "Valid substring, update max_len.",
            "no": "Requires too many replacements."
          }
        ]
      },
      {
        "name": "Optimized Sliding Window",
        "time": "O(n)",
        "space": "O(26)",
        "idea": "Expand window using 'right'. Track the maximum frequency of any character seen in the current window. If (window length - max_freq) > k, shift 'left' forward.",
        "code": "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        counts = {}\n        max_len = 0\n        max_freq = 0\n        left = 0\n        for right in range(len(s)):\n            counts[s[right]] = counts.get(s[right], 0) + 1\n            max_freq = max(max_freq, counts[s[right]])\n            while (right - left + 1) - max_freq > k:\n                counts[s[left]] -= 1\n                left += 1\n            max_len = max(max_len, right - left + 1)\n        return max_len",
        "steps": [
          {
            "label": "Initialize State",
            "note": "Set up counts dictionary, left pointer, max_freq, and max_len.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Expand Right Pointer",
            "note": "Add character s[right] to counts map and update global max_freq.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check Replacement Limit",
            "note": "If window_size - max_freq > k, current window requires > k changes.",
            "from": 3,
            "to": 4,
            "yes": "Shrink window: decrement counts[s[left]] and increment left.",
            "no": "Window is valid, proceed."
          },
          {
            "label": "Update Max Length",
            "note": "Record maximum valid length found so far.",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "minimum-window-substring": {
    "statement": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".",
    "given": "two strings s and t",
    "ret": "the minimum window substring of s containing all characters of t",
    "summary": "Use dynamic sliding window with two hash maps/frequency tables. Expand right until all required characters are satisfied, then shrink left to find the minimal valid window length.",
    "starter": "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        pass",
    "tests": [
      {
        "label": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "inputStr": "{\"s\": \"ADOBECODEBANC\", \"t\": \"ABC\"}",
        "expectedStr": "\"BANC\""
      },
      {
        "label": "s = \"a\", t = \"a\"",
        "inputStr": "{\"s\": \"a\", \"t\": \"a\"}",
        "expectedStr": "\"a\""
      },
      {
        "label": "s = \"a\", t = \"aa\"",
        "inputStr": "{\"s\": \"a\", \"t\": \"aa\"}",
        "expectedStr": "\"\""
      }
    ],
    "approaches": [
      {
        "name": "Brute Force",
        "time": "O(m^2 * n)",
        "space": "O(m + n)",
        "idea": "Generate all possible substrings of s and check if each substring contains all characters of t with at least required frequencies.",
        "code": "from collections import Counter\n\nclass Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        if not s or not t or len(s) < len(t):\n            return \"\"\n        target_counts = Counter(t)\n        min_len = float('inf')\n        res = \"\"\n        for i in range(len(s)):\n            for j in range(i + len(t), len(s) + 1):\n                sub = s[i:j]\n                sub_counts = Counter(sub)\n                valid = True\n                for char, count in target_counts.items():\n                    if sub_counts[char] < count:\n                        valid = False\n                        break\n                if valid and (j - i) < min_len:\n                    min_len = j - i\n                    res = sub\n        return res",
        "steps": [
          {
            "label": "Count Target Frequencies",
            "note": "Build frequency map target_counts for string t.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Generate Substring",
            "note": "Iterate i and j to slice substring sub = s[i:j].",
            "from": 2,
            "to": 3
          },
          {
            "label": "Validate Frequencies",
            "note": "Check if every character in target_counts is satisfied by sub.",
            "from": 3,
            "to": 4,
            "yes": "Valid substring: check if length is minimal and update result.",
            "no": "Invalid substring: check next."
          }
        ]
      },
      {
        "name": "Sliding Window with Two Pointers",
        "time": "O(m + n)",
        "space": "O(m + n)",
        "idea": "Expand 'right' pointer to include characters until window satisfies t. Then increment 'left' pointer to shrink window while keeping it valid to find minimum length.",
        "code": "from collections import Counter\n\nclass Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        if not t or not s:\n            return \"\"\n        target_counts = Counter(t)\n        window_counts = {}\n        have, need = 0, len(target_counts)\n        res, res_len = [-1, -1], float('inf')\n        left = 0\n        for right in range(len(s)):\n            char = s[right]\n            window_counts[char] = window_counts.get(char, 0) + 1\n            if char in target_counts and window_counts[char] == target_counts[char]:\n                have += 1\n            while have == need:\n                if (right - left + 1) < res_len:\n                    res = [left, right]\n                    res_len = right - left + 1\n                window_counts[s[left]] -= 1\n                if s[left] in target_counts and window_counts[s[left]] < target_counts[s[left]]:\n                    have -= 1\n                left += 1\n        l, r = res\n        return s[l:r+1] if res_len != float('inf') else \"\"",
        "steps": [
          {
            "label": "Build Frequency Counts",
            "note": "Count target characters in t, set 'have' to 0 and 'need' to len(target_counts).",
            "from": 1,
            "to": 2
          },
          {
            "label": "Expand Right Pointer",
            "note": "Add s[right] to window_counts and update 'have' if count matches target count.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check Condition Met",
            "note": "While have == need, window contains all characters of t.",
            "from": 3,
            "to": 4,
            "yes": "Update minimum window bounds and shrink window from left.",
            "no": "Expand right pointer further."
          },
          {
            "label": "Shrink Left Pointer",
            "note": "Remove s[left] from window_counts and decrement 'have' if count falls below target_counts requirement.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Return Substring",
            "note": "Return substring bounded by minimum window indices.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "valid-parentheses": {
    "statement": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets, open brackets are closed in the correct order, and every close bracket has a corresponding open bracket of the same type.",
    "given": "a string s containing parentheses characters",
    "ret": "a boolean indicating whether the input string has valid parentheses",
    "summary": "Use a stack data structure to store open brackets as you iterate through the string; whenever a closing bracket appears, check if it matches the top element of the stack.",
    "starter": "class Solution:\n    def isValid(self, s: str) -> bool:\n        pass",
    "tests": [
      {
        "label": "s = \"()\"",
        "inputStr": "{\"s\": \"()\"}",
        "expectedStr": "true"
      },
      {
        "label": "s = \"()[]{}\"",
        "inputStr": "{\"s\": \"()[]{}\"}",
        "expectedStr": "true"
      },
      {
        "label": "s = \"(]\"",
        "inputStr": "{\"s\": \"(]\"}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "Substring Replacement",
        "time": "O(n^2)",
        "space": "O(n)",
        "idea": "Repeatedly find and remove adjacent matching bracket pairs () [], and {} from the string until no more replacements can be made. If the resulting string is empty, it is valid.",
        "code": "class Solution:\n    def isValid(self, s: str) -> bool:\n        while \"()\" in s or \"[]\" in s or \"{}\" in s:\n            s = s.replace(\"()\", \"\").replace(\"[]\", \"\").replace(\"{}\", \"\")\n        return len(s) == 0",
        "steps": [
          {
            "label": "Check matching substrings",
            "note": "Check if s contains any valid pair '()', '[]', or '{}'.",
            "from": 3,
            "to": 4,
            "yes": "Enter loop to remove pairs",
            "no": "Exit loop when no pairs exist"
          },
          {
            "label": "Replace valid pairs",
            "note": "Replace all occurrences of '()', '[]', and '{}' with an empty string.",
            "from": 4,
            "to": 3
          },
          {
            "label": "Check final length",
            "note": "Return True if s is completely reduced to empty string, otherwise False.",
            "from": 5,
            "to": 5
          }
        ]
      },
      {
        "name": "Stack Data Structure",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Traverse the string while keeping track of expected closing brackets using a stack. Push open brackets onto the stack and pop to verify matches when encountering closing brackets.",
        "code": "class Solution:\n    def isValid(self, s: str) -> bool:\n        stack = []\n        mapping = {\")\": \"(\", \"}\": \"{\", \"]\": \"[\"}\n        for char in s:\n            if char in mapping:\n                top_element = stack.pop() if stack else '#'\n                if mapping[char] != top_element:\n                    return False\n            else:\n                stack.append(char)\n        return not stack",
        "steps": [
          {
            "label": "Initialize stack and mapping",
            "note": "Create stack to track open brackets and mapping dictionary for matching pairs.",
            "from": 3,
            "to": 5
          },
          {
            "label": "Iterate string characters",
            "note": "Loop through each character char in input string s.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Check bracket type",
            "note": "Check if character is a closing bracket.",
            "from": 6,
            "to": 7,
            "yes": "It is a closing bracket, attempt pop",
            "no": "It is an open bracket, branch to push"
          },
          {
            "label": "Pop from stack",
            "note": "Pop top bracket from stack if not empty, else use dummy character '#'.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Validate top bracket",
            "note": "Check if popped bracket matches expected opening bracket.",
            "from": 8,
            "to": 9,
            "yes": "Mismatched brackets; return False",
            "no": "Bracket matches; continue loop"
          },
          {
            "label": "Push open bracket",
            "note": "Push the open bracket char onto top of stack.",
            "from": 11,
            "to": 5
          },
          {
            "label": "Check stack empty",
            "note": "After loop finishes, return True if stack is empty (all matched), False otherwise.",
            "from": 12,
            "to": 12
          }
        ]
      }
    ]
  },
  "find-minimum-in-rotated-sorted-array": {
    "statement": "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
    "given": "a 1D rotated sorted array of unique integers nums",
    "ret": "the minimum integer element in nums",
    "summary": "Use binary search to find the inflection point; compare the mid element with the rightmost element to determine which unsorted half contains the minimum.",
    "starter": "class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [3,4,5,1,2]",
        "inputStr": "{\"nums\": [3,4,5,1,2]}",
        "expectedStr": "1"
      },
      {
        "label": "nums = [4,5,6,7,0,1,2]",
        "inputStr": "{\"nums\": [4,5,6,7,0,1,2]}",
        "expectedStr": "0"
      },
      {
        "label": "nums = [11,13,15,17]",
        "inputStr": "{\"nums\": [11,13,15,17]}",
        "expectedStr": "11"
      }
    ],
    "approaches": [
      {
        "name": "Linear Scan",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Iterate through the array and keep track of the minimum value encountered.",
        "code": "class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        min_val = nums[0]\n        for num in nums:\n            if num < min_val:\n                min_val = num\n        return min_val",
        "steps": [
          {
            "label": "Initialize min tracker",
            "note": "Set min_val to the first element of nums.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Iterate array",
            "note": "Loop through each integer in nums.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Update min value",
            "note": "If current num is smaller than min_val, update min_val.",
            "from": 5,
            "to": 6,
            "yes": "Update min_val",
            "no": "Keep existing min_val"
          },
          {
            "label": "Return result",
            "note": "Return min_val after loop completes.",
            "from": 7,
            "to": 7
          }
        ]
      },
      {
        "name": "Binary Search",
        "time": "O(log n)",
        "space": "O(1)",
        "idea": "Apply binary search by comparing nums[mid] to nums[right]. If nums[mid] > nums[right], the minimum lies in the right portion; otherwise, it lies in the left portion including mid.",
        "code": "class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        left, right = 0, len(nums) - 1\n        while left < right:\n            mid = (left + right) // 2\n            if nums[mid] > nums[right]:\n                left = mid + 1\n            else:\n                right = mid\n        return nums[left]",
        "steps": [
          {
            "label": "Initialize pointers",
            "note": "Set left to index 0 and right to last index len(nums) - 1.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check binary search condition",
            "note": "Loop while left is strictly less than right.",
            "from": 4,
            "to": 5,
            "yes": "Calculate midpoint",
            "no": "Exit loop when left == right"
          },
          {
            "label": "Calculate middle index",
            "note": "Compute mid pointer as floor division of left and right sum.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Compare mid with right",
            "note": "Check if middle element is strictly greater than rightmost element.",
            "from": 6,
            "to": 7,
            "yes": "Minimum must be strictly to the right of mid",
            "no": "Minimum is at mid or to the left of mid"
          },
          {
            "label": "Shift left pointer",
            "note": "Set left = mid + 1 because mid cannot be the minimum.",
            "from": 7,
            "to": 4
          },
          {
            "label": "Shift right pointer",
            "note": "Set right = mid since mid could potentially be the minimum.",
            "from": 9,
            "to": 4
          },
          {
            "label": "Return minimum element",
            "note": "When left == right, pointers converged on minimum element. Return nums[left].",
            "from": 10,
            "to": 10
          }
        ]
      }
    ]
  },
  "search-in-rotated-sorted-array": {
    "statement": "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
    "given": "a rotated sorted array of unique integers nums and a target integer target",
    "ret": "the zero-based index of target in nums, or -1 if target is not present",
    "summary": "Use modified binary search: identify which side of mid is sorted, then check if target lies within the boundaries of that sorted side to decide search direction.",
    "starter": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [4,5,6,7,0,1,2], target = 0",
        "inputStr": "{\"nums\": [4,5,6,7,0,1,2], \"target\": 0}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [4,5,6,7,0,1,2], target = 3",
        "inputStr": "{\"nums\": [4,5,6,7,0,1,2], \"target\": 3}",
        "expectedStr": "-1"
      },
      {
        "label": "nums = [1], target = 0",
        "inputStr": "{\"nums\": [1], \"target\": 0}",
        "expectedStr": "-1"
      }
    ],
    "approaches": [
      {
        "name": "Linear Search",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Iterate through each element in the array and return its index if it equals target.",
        "code": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        for i in range(len(nums)):\n            if nums[i] == target:\n                return i\n        return -1",
        "steps": [
          {
            "label": "Loop through array indices",
            "note": "Iterate index i from 0 to len(nums) - 1.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Compare element to target",
            "note": "Check if nums[i] is equal to target.",
            "from": 4,
            "to": 5,
            "yes": "Return current index i",
            "no": "Continue loop"
          },
          {
            "label": "Return default missing",
            "note": "If loop finishes without finding target, return -1.",
            "from": 6,
            "to": 6
          }
        ]
      },
      {
        "name": "Modified Binary Search",
        "time": "O(log n)",
        "space": "O(1)",
        "idea": "In a rotated array, at least one half (left or right of mid) is always sorted. Determine which half is sorted, then check if target lies within that half.",
        "code": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return mid\n            if nums[left] <= nums[mid]:\n                if nums[left] <= target < nums[mid]:\n                    right = mid - 1\n                else:\n                    left = mid + 1\n            else:\n                if nums[mid] < target <= nums[right]:\n                    left = mid + 1\n                else:\n                    right = mid - 1\n        return -1",
        "steps": [
          {
            "label": "Initialize pointers",
            "note": "Set left pointer to 0 and right pointer to len(nums) - 1.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check binary search condition",
            "note": "Loop while left <= right.",
            "from": 4,
            "to": 5,
            "yes": "Calculate mid index",
            "no": "Target not found, exit loop"
          },
          {
            "label": "Check target match",
            "note": "If nums[mid] equals target, return mid.",
            "from": 6,
            "to": 7,
            "yes": "Return index mid",
            "no": "Determine sorted half"
          },
          {
            "label": "Check if left half is sorted",
            "note": "Compare nums[left] <= nums[mid] to see if left portion is sorted.",
            "from": 8,
            "to": 9,
            "yes": "Left half is sorted",
            "no": "Right half is sorted"
          },
          {
            "label": "Check target range in left sorted half",
            "note": "Check if target is between nums[left] and nums[mid].",
            "from": 9,
            "to": 10,
            "yes": "Set right = mid - 1 to search left half",
            "no": "Set left = mid + 1 to search right half"
          },
          {
            "label": "Check target range in right sorted half",
            "note": "Check if target is between nums[mid] and nums[right].",
            "from": 14,
            "to": 15,
            "yes": "Set left = mid + 1 to search right half",
            "no": "Set right = mid - 1 to search left half"
          },
          {
            "label": "Return default",
            "note": "Return -1 if left > right without finding target.",
            "from": 18,
            "to": 18
          }
        ]
      }
    ]
  },
  "subtree-of-another-tree": {
    "statement": "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise. A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.",
    "given": "two binary tree roots root and subRoot",
    "ret": "a boolean indicating if subRoot is a subtree of root",
    "summary": "Recursively check if the tree rooted at the current node is identical to subRoot; if not, recursively check the left and right subtrees.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        pass",
    "tests": [
      {
        "label": "root = [3,4,5,1,2], subRoot = [4,1,2]",
        "inputStr": "{\"root\": [3,4,5,1,2], \"subRoot\": [4,1,2]}",
        "expectedStr": "true"
      },
      {
        "label": "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
        "inputStr": "{\"root\": [3,4,5,1,2,null,null,null,null,0], \"subRoot\": [4,1,2]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "DFS / Tree Comparison",
        "time": "O(N * M)",
        "space": "O(H)",
        "idea": "For each node in the main tree, invoke a helper function `isSameTree` to check if the tree starting at that node is identical to `subRoot`.",
        "code": "class Solution:\n    def isSameTree(self, s, t):\n        if not s and not t:\n            return True\n        if not s or not t:\n            return False\n        return s.val == t.val and self.isSameTree(s.left, t.left) and self.isSameTree(s.right, t.right)\n\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        if not subRoot:\n            return True\n        if not root:\n            return False\n        if self.isSameTree(root, subRoot):\n            return True\n        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)",
        "steps": [
          {
            "label": "check subRoot empty",
            "note": "An empty subRoot is always a subtree of any tree.",
            "from": 10,
            "to": 11,
            "yes": "return True",
            "no": "continue execution"
          },
          {
            "label": "check root empty",
            "note": "If root is empty but subRoot is not, subRoot cannot be a subtree.",
            "from": 12,
            "to": 13,
            "yes": "return False",
            "no": "continue execution"
          },
          {
            "label": "compare trees",
            "note": "Check if current tree at root matches subRoot using helper.",
            "from": 14,
            "to": 15,
            "yes": "trees are identical, return True",
            "no": "trees differ, proceed to children"
          },
          {
            "label": "helper check nodes",
            "note": "In isSameTree, check if values match and recurse on left/right children.",
            "from": 3,
            "to": 7
          },
          {
            "label": "recurse children",
            "note": "Check if subRoot is in the left or right subtrees of root.",
            "from": 16,
            "to": 16
          }
        ]
      },
      {
        "name": "Tree Serialization",
        "time": "O(N + M)",
        "space": "O(N + M)",
        "idea": "Serialize both trees into pre-order traversal strings using special markers for null values and delimiters, then perform substring matching.",
        "code": "class Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        def serialize(node):\n            if not node:\n                return ',#'\n            return f',{node.val}' + serialize(node.left) + serialize(node.right)\n        \n        return serialize(subRoot) in serialize(root)",
        "steps": [
          {
            "label": "define serializer",
            "note": "Define recursive helper function to build pre-order tree traversal string.",
            "from": 3,
            "to": 6
          },
          {
            "label": "serialize trees",
            "note": "Call serializer on both subRoot and root.",
            "from": 8,
            "to": 8
          },
          {
            "label": "substring search",
            "note": "Check if serialized subRoot string is a substring of serialized root string.",
            "from": 8,
            "to": 8,
            "yes": "return True",
            "no": "return False"
          }
        ]
      }
    ]
  },
  "lowest-common-ancestor-of-a-binary-search-tree": {
    "statement": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).",
    "given": "a binary search tree root and two nodes p and q",
    "ret": "the lowest common ancestor TreeNode",
    "summary": "Utilize BST properties: if both p and q values are smaller than the current node, search left; if both are greater, search right; otherwise, the current node is the split point (LCA).",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        pass",
    "tests": [
      {
        "label": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "inputStr": "{\"root\": [6,2,8,0,4,7,9,null,null,3,5], \"p\": 2, \"q\": 8}",
        "expectedStr": "6"
      },
      {
        "label": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "inputStr": "{\"root\": [6,2,8,0,4,7,9,null,null,3,5], \"p\": 2, \"q\": 4}",
        "expectedStr": "2"
      }
    ],
    "approaches": [
      {
        "name": "Iterative Traversal",
        "time": "O(H)",
        "space": "O(1)",
        "idea": "Traverse down the tree starting from root. Move left if both values are smaller, right if both are larger, and stop when values split.",
        "code": "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        curr = root\n        while curr:\n            if p.val < curr.val and q.val < curr.val:\n                curr = curr.left\n            elif p.val > curr.val and q.val > curr.val:\n                curr = curr.right\n            else:\n                return curr",
        "steps": [
          {
            "label": "init current pointer",
            "note": "Start traversal from the root node.",
            "from": 3,
            "to": 3
          },
          {
            "label": "check left subtree",
            "note": "If both p and q values are less than curr.val, LCA must be in left subtree.",
            "from": 5,
            "to": 6,
            "yes": "move curr to curr.left",
            "no": "check right condition"
          },
          {
            "label": "check right subtree",
            "note": "If both p and q values are greater than curr.val, LCA must be in right subtree.",
            "from": 7,
            "to": 8,
            "yes": "move curr to curr.right",
            "no": "found split point"
          },
          {
            "label": "return ancestor",
            "note": "Nodes p and q split at curr (or one matches curr), so curr is the LCA.",
            "from": 9,
            "to": 10
          }
        ]
      },
      {
        "name": "Recursive DFS",
        "time": "O(H)",
        "space": "O(H)",
        "idea": "Recursively move left or right based on value comparisons with current root until a split point is reached.",
        "code": "class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if p.val < root.val and q.val < root.val:\n            return self.lowestCommonAncestor(root.left, p, q)\n        if p.val > root.val and q.val > root.val:\n            return self.lowestCommonAncestor(root.right, p, q)\n        return root",
        "steps": [
          {
            "label": "check left child branch",
            "note": "If both targets are smaller than root, recurse on left child.",
            "from": 3,
            "to": 4,
            "yes": "recurse left",
            "no": "check right child branch"
          },
          {
            "label": "check right child branch",
            "note": "If both targets are larger than root, recurse on right child.",
            "from": 5,
            "to": 6,
            "yes": "recurse right",
            "no": "current node is LCA"
          },
          {
            "label": "return root",
            "note": "Return current root as the LCA since paths diverge here.",
            "from": 7,
            "to": 7
          }
        ]
      }
    ]
  },
  "validate-binary-search-tree": {
    "statement": "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST satisfies: 1) Left subtree nodes are strictly less than parent node. 2) Right subtree nodes are strictly greater than parent node. 3) Both subtrees are also valid BSTs.",
    "given": "the root of a binary tree root",
    "ret": "a boolean indicating if the tree is a valid BST",
    "summary": "Pass down valid value boundaries (low, high) recursively for each node, ensuring every node strictly satisfies low < node.val < high.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        pass",
    "tests": [
      {
        "label": "root = [2,1,3]",
        "inputStr": "{\"root\": [2,1,3]}",
        "expectedStr": "true"
      },
      {
        "label": "root = [5,1,4,null,null,3,6]",
        "inputStr": "{\"root\": [5,1,4,null,null,3,6]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "Recursive Range Validation (DFS)",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Traverse tree recursively, maintaining allowed range `(low, high)` for each node. Left child updates high bound; right child updates low bound.",
        "code": "class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        def validate(node, low=float('-inf'), high=float('inf')):\n            if not node:\n                return True\n            if not (low < node.val < high):\n                return False\n            return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n        return validate(root)",
        "steps": [
          {
            "label": "start validation",
            "note": "Invoke inner validate helper starting with (-inf, inf) range.",
            "from": 9,
            "to": 3
          },
          {
            "label": "check empty node",
            "note": "An empty node is a valid BST base case.",
            "from": 4,
            "to": 5,
            "yes": "return True",
            "no": "continue validation"
          },
          {
            "label": "check value in range",
            "note": "Ensure node value is strictly between low and high bounds.",
            "from": 6,
            "to": 7,
            "yes": "return False (invalid BST)",
            "no": "value valid, proceed to children"
          },
          {
            "label": "recurse left and right",
            "note": "Check left child with updated high bound and right child with updated low bound.",
            "from": 8,
            "to": 8
          }
        ]
      },
      {
        "name": "In-Order Traversal (Iterative)",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "In-order traversal of a valid BST must produce strictly increasing values. Compare each popped node value against the previously seen value.",
        "code": "class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        stack = []\n        prev = float('-inf')\n        curr = root\n        while stack or curr:\n            while curr:\n                stack.append(curr)\n                curr = curr.left\n            curr = stack.pop()\n            if curr.val <= prev:\n                return False\n            prev = curr.val\n            curr = curr.right\n        return True",
        "steps": [
          {
            "label": "initialize variables",
            "note": "Set up explicit stack and prev pointer initialized to negative infinity.",
            "from": 3,
            "to": 5
          },
          {
            "label": "push left branch",
            "note": "Traverse as far left as possible, pushing nodes onto stack.",
            "from": 7,
            "to": 9
          },
          {
            "label": "pop node",
            "note": "Pop current node from top of stack for evaluation.",
            "from": 10,
            "to": 10
          },
          {
            "label": "validate order",
            "note": "Check if current node value is less than or equal to previous node value.",
            "from": 11,
            "to": 12,
            "yes": "return False (not strictly increasing)",
            "no": "continue traversal"
          },
          {
            "label": "update prev and right",
            "note": "Update prev to curr.val and move to right child.",
            "from": 13,
            "to": 14
          },
          {
            "label": "complete traversal",
            "note": "All nodes visited in strictly increasing order.",
            "from": 15,
            "to": 15
          }
        ]
      }
    ]
  },
  "reorder-list": {
    "statement": "You are given the head of a singly linked list. The list can be represented as: L0 \u2192 L1 \u2192 \u2026 \u2192 Ln - 1 \u2192 Ln. Reorder the list to be on the following form: L0 \u2192 Ln \u2192 L1 \u2192 Ln - 1 \u2192 L2 \u2192 Ln - 2 \u2192 \u2026 You may not modify the values in the list's nodes. Only nodes themselves may be changed.",
    "given": "the head of a singly linked list head",
    "ret": "nothing (modify head in-place)",
    "summary": "Find the middle of the linked list using fast/slow pointers, reverse the second half of the list, and then interleave nodes from both halves.",
    "starter": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        \"\"\"\n        Do not return anything, modify head in-place instead.\n        \"\"\"\n        pass",
    "tests": [
      {
        "label": "head = [1,2,3,4]",
        "inputStr": "{\"head\": [1,2,3,4]}",
        "expectedStr": "[1,4,2,3]"
      },
      {
        "label": "head = [1,2,3,4,5]",
        "inputStr": "{\"head\": [1,2,3,4,5]}",
        "expectedStr": "[1,5,2,4,3]"
      }
    ],
    "approaches": [
      {
        "name": "array conversion",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Store all nodes in a Python list to enable random access. Use two pointers at the ends of the array to rebuild node links inward.",
        "code": "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        if not head:\n            return\n        nodes = []\n        curr = head\n        while curr:\n            nodes.append(curr)\n            curr = curr.next\n        \n        i, j = 0, len(nodes) - 1\n        while i < j:\n            nodes[i].next = nodes[j]\n            i += 1\n            if i == j:\n                break\n            nodes[j].next = nodes[i]\n            j -= 1\n        nodes[i].next = None",
        "steps": [
          {
            "label": "collect nodes",
            "note": "Traverse the linked list from head and store references to every node in a list.",
            "from": 1,
            "to": 2
          },
          {
            "label": "init two pointers",
            "note": "Set pointer i at 0 and pointer j at len(nodes) - 1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "interleave step 1",
            "note": "Point nodes[i].next to nodes[j] and increment i.",
            "from": 3,
            "to": 4
          },
          {
            "label": "check boundary",
            "note": "If i equals j, all nodes have been reordered.",
            "from": 4,
            "to": 5,
            "yes": "Break loop",
            "no": "Continue interleave"
          },
          {
            "label": "interleave step 2",
            "note": "Point nodes[j].next to nodes[i] and decrement j.",
            "from": 5,
            "to": 6
          },
          {
            "label": "terminate list",
            "note": "Set nodes[i].next to None to prevent cycle in the reordered list.",
            "from": 6,
            "to": 7
          }
        ]
      },
      {
        "name": "in-place reversal and merge",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Find middle of list using fast/slow pointers. Reverse the second half in-place, then interleave the first and second halves.",
        "code": "class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        if not head or not head.next:\n            return\n        \n        # 1. Find middle\n        slow, fast = head, head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        \n        # 2. Reverse second half\n        prev, curr = None, slow.next\n        slow.next = None\n        while curr:\n            nxt = curr.next\n            curr.next = prev\n            prev = curr\n            curr = nxt\n        \n        # 3. Merge two halves\n        first, second = head, prev\n        while second:\n            tmp1, tmp2 = first.next, second.next\n            first.next = second\n            second.next = tmp1\n            first = tmp1\n            second = tmp2",
        "steps": [
          {
            "label": "find middle node",
            "note": "Advance slow by 1 step and fast by 2 steps until fast reaches the end.",
            "from": 1,
            "to": 2
          },
          {
            "label": "split list",
            "note": "Store slow.next as start of second half, then break link slow.next = None.",
            "from": 2,
            "to": 3
          },
          {
            "label": "reverse second half",
            "note": "Iteratively reverse pointer directions for the second half of nodes.",
            "from": 3,
            "to": 4
          },
          {
            "label": "init merge pointers",
            "note": "Set first = head and second = head of reversed second half (prev).",
            "from": 4,
            "to": 5
          },
          {
            "label": "interleave nodes",
            "note": "Save next pointers for both halves, wire first -> second -> tmp1, advance both pointers.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "remove-nth-node-from-end-of-list": {
    "statement": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    "given": "the head of a linked list head and an integer n",
    "ret": "the head of the modified linked list",
    "summary": "Use two pointers separated by n nodes; move both until the front pointer reaches the end, then remove the target node.",
    "starter": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        pass",
    "tests": [
      {
        "label": "head = [1,2,3,4,5], n = 2",
        "inputStr": "{\"head\": [1,2,3,4,5], \"n\": 2}",
        "expectedStr": "[1,2,3,5]"
      },
      {
        "label": "head = [1], n = 1",
        "inputStr": "{\"head\": [1], \"n\": 1}",
        "expectedStr": "[]"
      },
      {
        "label": "head = [1,2], n = 1",
        "inputStr": "{\"head\": [1,2], \"n\": 1}",
        "expectedStr": "[1]"
      }
    ],
    "approaches": [
      {
        "name": "two pass length counting",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "First traverse the entire list to find total length L. In second pass, move L - n - 1 steps to reach node prior to target, then skip target node.",
        "code": "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        length = 0\n        curr = head\n        while curr:\n            length += 1\n            curr = curr.next\n        \n        dummy = ListNode(0, head)\n        curr = dummy\n        for _ in range(length - n):\n            curr = curr.next\n            \n        curr.next = curr.next.next\n        return dummy.next",
        "steps": [
          {
            "label": "count total length",
            "note": "Traverse list from head to end, counting total nodes.",
            "from": 1,
            "to": 2
          },
          {
            "label": "init dummy node",
            "note": "Create dummy node pointing to head to handle head node deletion seamlessly.",
            "from": 2,
            "to": 3
          },
          {
            "label": "advance to target predecessor",
            "note": "Move pointer length - n times starting from dummy.",
            "from": 3,
            "to": 4
          },
          {
            "label": "unlink node",
            "note": "Set curr.next = curr.next.next to bypass target node.",
            "from": 4,
            "to": 5
          },
          {
            "label": "return head",
            "note": "Return dummy.next as new list head.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "one pass two pointers",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Advance fast pointer n + 1 steps ahead of slow pointer. Then advance both until fast reaches None; slow will point right before node to delete.",
        "code": "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        dummy = ListNode(0, head)\n        fast = dummy\n        slow = dummy\n        \n        for _ in range(n + 1):\n            fast = fast.next\n            \n        while fast:\n            fast = fast.next\n            slow = slow.next\n            \n        slow.next = slow.next.next\n        return dummy.next",
        "steps": [
          {
            "label": "init dummy and pointers",
            "note": "Set fast and slow to point at dummy node.",
            "from": 1,
            "to": 2
          },
          {
            "label": "advance fast pointer",
            "note": "Move fast pointer forward n + 1 steps to create gap.",
            "from": 2,
            "to": 3
          },
          {
            "label": "move both pointers",
            "note": "Advance fast and slow together until fast reaches None.",
            "from": 3,
            "to": 4
          },
          {
            "label": "delete target node",
            "note": "Update slow.next to slow.next.next to drop the nth node from end.",
            "from": 4,
            "to": 5
          },
          {
            "label": "return result",
            "note": "Return dummy.next.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "merge-k-sorted-lists": {
    "statement": "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    "given": "an array of k sorted linked-lists lists",
    "ret": "the head of the merged sorted linked-list",
    "summary": "Use a min-heap to keep track of the smallest node among all active lists and iteratively build the merged list.",
    "starter": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        pass",
    "tests": [
      {
        "label": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "inputStr": "{\"lists\": [[1,4,5],[1,3,4],[2,6]]}",
        "expectedStr": "[1,1,2,3,4,4,5,6]"
      },
      {
        "label": "lists = []",
        "inputStr": "{\"lists\": []}",
        "expectedStr": "[]"
      },
      {
        "label": "lists = [[]]",
        "inputStr": "{\"lists\": [[]]}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "collect, sort, and rebuild",
        "time": "O(N log N)",
        "space": "O(N)",
        "idea": "Extract all values into a list, sort them, and reconstruct a brand new linked list.",
        "code": "class Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        vals = []\n        for l in lists:\n            curr = l\n            while curr:\n                vals.append(curr.val)\n                curr = curr.next\n                \n        vals.sort()\n        \n        dummy = ListNode(0)\n        curr = dummy\n        for val in vals:\n            curr.next = ListNode(val)\n            curr = curr.next\n            \n        return dummy.next",
        "steps": [
          {
            "label": "collect values",
            "note": "Traverse each list in lists and push all node values into an array.",
            "from": 1,
            "to": 2
          },
          {
            "label": "sort array",
            "note": "Sort all collected values in ascending order.",
            "from": 2,
            "to": 3
          },
          {
            "label": "reconstruct list",
            "note": "Iterate sorted values and instantiate new ListNodes connected sequentially.",
            "from": 3,
            "to": 4
          },
          {
            "label": "return head",
            "note": "Return dummy.next as head of merged list.",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "min-heap / priority queue",
        "time": "O(N log k)",
        "space": "O(k)",
        "idea": "Push the head of each non-empty list into a min-heap. Pop the minimum node, append it to result, and push its next node into heap.",
        "code": "import heapq\n\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        heap = []\n        for i, l in enumerate(lists):\n            if l:\n                heapq.heappush(heap, (l.val, i, l))\n                \n        dummy = ListNode(0)\n        curr = dummy\n        \n        while heap:\n            val, i, node = heapq.heappop(heap)\n            curr.next = node\n            curr = curr.next\n            if node.next:\n                heapq.heappush(heap, (node.next.val, i, node.next))\n                \n        return dummy.next",
        "steps": [
          {
            "label": "populate min-heap",
            "note": "Push initial head nodes of each list along with list index i into heap.",
            "from": 1,
            "to": 2
          },
          {
            "label": "init dummy tail",
            "note": "Create dummy node and set curr pointer to build output list.",
            "from": 2,
            "to": 3
          },
          {
            "label": "pop smallest node",
            "note": "Extract top element (smallest val) from heap.",
            "from": 3,
            "to": 4
          },
          {
            "label": "append to result",
            "note": "Connect curr.next to popped node and advance curr.",
            "from": 4,
            "to": 5
          },
          {
            "label": "push next node",
            "note": "If popped node has a next node, push node.next into heap.",
            "from": 5,
            "to": 6
          },
          {
            "label": "return result",
            "note": "When heap becomes empty, return dummy.next.",
            "from": 6,
            "to": 7
          }
        ]
      }
    ]
  },
  "kth-smallest-element-in-a-bst": {
    "statement": "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    "given": "the root of a binary search tree and an integer k",
    "ret": "the kth smallest value (1-indexed) in the tree",
    "summary": "An in-order traversal of a Binary Search Tree processes nodes in strictly ascending order. By traversing iteratively with a stack, we can stop as soon as we visit the kth node.",
    "starter": "class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        pass",
    "tests": [
      {
        "label": "root = [3,1,4,null,2], k = 1",
        "inputStr": "{\"root\": [3,1,4,null,2], \"k\": 1}",
        "expectedStr": "1"
      },
      {
        "label": "root = [5,3,6,2,4,null,null,1], k = 3",
        "inputStr": "{\"root\": [5,3,6,2,4,null,null,1], \"k\": 3}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "Full In-order Traversal",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Perform a recursive in-order traversal of the entire tree to produce a sorted list of node values, then return the (k-1)-th element.",
        "code": "class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        vals = []\n        def inorder(node):\n            if not node:\n                return\n            inorder(node.left)\n            vals.append(node.val)\n            inorder(node.right)\n        inorder(root)\n        return vals[k - 1]",
        "steps": [
          {
            "label": "initialize storage",
            "note": "Create an empty list 'vals' to store elements in sorted order.",
            "from": 3,
            "to": 3
          },
          {
            "label": "define dfs helper",
            "note": "Recursively traverse left subtree, visit current node, then traverse right subtree.",
            "from": 4,
            "to": 9
          },
          {
            "label": "execute traversal",
            "note": "Run the in-order traversal starting from tree root.",
            "from": 10,
            "to": 10
          },
          {
            "label": "retrieve result",
            "note": "Access the element at index (k - 1) from the sorted array.",
            "from": 11,
            "to": 11
          }
        ]
      },
      {
        "name": "Iterative In-order Traversal with Early Stopping",
        "time": "O(H + k)",
        "space": "O(H)",
        "idea": "Use an explicit stack to traverse nodes in-order iteratively. Decrement k each time a node is popped, and return immediately when k reaching 0 without visiting remaining nodes.",
        "code": "class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        stack = []\n        curr = root\n        while curr or stack:\n            while curr:\n                stack.append(curr)\n                curr = curr.left\n            curr = stack.pop()\n            k -= 1\n            if k == 0:\n                return curr.val\n            curr = curr.right",
        "steps": [
          {
            "label": "init state",
            "note": "Initialize stack for tracking nodes and pointer 'curr' to the tree root.",
            "from": 3,
            "to": 4
          },
          {
            "label": "push left branch",
            "note": "Keep pushing node and moving left until reaching a null node.",
            "from": 6,
            "to": 8
          },
          {
            "label": "visit node",
            "note": "Pop node from stack (smallest unvisited element) and decrement k.",
            "from": 9,
            "to": 10
          },
          {
            "label": "check target",
            "note": "Check if this popped element is the kth element.",
            "from": 11,
            "to": 12,
            "yes": "Return node value as result",
            "no": "Continue to right child"
          },
          {
            "label": "move right",
            "note": "Set curr to right child to process its subtree next.",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "construct-binary-tree-from-preorder-and-inorder-traversal": {
    "statement": "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
    "given": "two integer arrays preorder and inorder",
    "ret": "the root node of the constructed binary tree",
    "summary": "The first element of preorder is always the root. Finding this root element in inorder splits the tree into left and right subtrees. Using a hash map allows fast O(1) index lookups.",
    "starter": "class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        pass",
    "tests": [
      {
        "label": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "inputStr": "{\"preorder\": [3,9,20,15,7], \"inorder\": [9,3,15,20,7]}",
        "expectedStr": "[3,9,20,null,null,15,7]"
      },
      {
        "label": "preorder = [-1], inorder = [-1]",
        "inputStr": "{\"preorder\": [-1], \"inorder\": [-1]}",
        "expectedStr": "[-1]"
      }
    ],
    "approaches": [
      {
        "name": "Recursive Slicing",
        "time": "O(N^2)",
        "space": "O(N^2)",
        "idea": "Find the root from preorder[0], locate its index in inorder array, and slice preorder and inorder lists to recursively build subtrees.",
        "code": "class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        if not preorder or not inorder:\n            return None\n        root_val = preorder[0]\n        root = TreeNode(root_val)\n        mid = inorder.index(root_val)\n        root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])\n        root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])\n        return root",
        "steps": [
          {
            "label": "base case check",
            "note": "If preorder or inorder is empty, return None.",
            "from": 3,
            "to": 4
          },
          {
            "label": "create root",
            "note": "First element of preorder is root. Instantiate TreeNode.",
            "from": 5,
            "to": 6
          },
          {
            "label": "find root in inorder",
            "note": "Search linearly for root_val in inorder to split subtrees.",
            "from": 7,
            "to": 7
          },
          {
            "label": "recurse left/right",
            "note": "Slice sub-lists and construct left and right subtrees recursively.",
            "from": 8,
            "to": 9
          },
          {
            "label": "return node",
            "note": "Return constructed subtree root.",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "Recursive with HashMap Pointers",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Map inorder values to indices beforehand using a hash map to achieve O(1) searches. Pass index ranges (pointers) instead of slicing arrays.",
        "code": "class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        inorder_map = {val: i for i, val in enumerate(inorder)}\n        pre_idx = 0\n        def helper(left, right):\n            nonlocal pre_idx\n            if left > right:\n                return None\n            root_val = preorder[pre_idx]\n            pre_idx += 1\n            root = TreeNode(root_val)\n            mid = inorder_map[root_val]\n            root.left = helper(left, mid - 1)\n            root.right = helper(mid + 1, right)\n            return root\n        return helper(0, len(inorder) - 1)",
        "steps": [
          {
            "label": "build lookup map",
            "note": "Map each value in 'inorder' to its index for O(1) lookup.",
            "from": 3,
            "to": 3
          },
          {
            "label": "initialize pointer",
            "note": "Track global 'pre_idx' index for preorder traversal sequence.",
            "from": 4,
            "to": 4
          },
          {
            "label": "check boundary",
            "note": "If left index exceeds right, boundary is empty (return None).",
            "from": 7,
            "to": 8
          },
          {
            "label": "pick root & advance",
            "note": "Get root value from preorder at pre_idx and advance pre_idx.",
            "from": 9,
            "to": 11
          },
          {
            "label": "recurse subtrees",
            "note": "Lookup mid point in map and construct left and right subtrees using pointer ranges.",
            "from": 12,
            "to": 14
          }
        ]
      }
    ]
  },
  "binary-tree-level-order-traversal": {
    "statement": "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "given": "the root of a binary tree",
    "ret": "a list of lists containing node values grouped level by level",
    "summary": "Use Breadth-First Search (BFS) with a double-ended queue. Process all elements currently in the queue at each level before adding child nodes.",
    "starter": "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "root = [3,9,20,null,null,15,7]",
        "inputStr": "{\"root\": [3,9,20,null,null,15,7]}",
        "expectedStr": "[[3],[9,20],[15,7]]"
      },
      {
        "label": "root = [1]",
        "inputStr": "{\"root\": [1]}",
        "expectedStr": "[[1]]"
      },
      {
        "label": "root = []",
        "inputStr": "{\"root\": []}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "Depth-First Search (DFS with Level Indexing)",
        "time": "O(N)",
        "space": "O(H)",
        "idea": "Perform a recursive DFS, keeping track of depth level. Append current node value to the inner array corresponding to depth in result list.",
        "code": "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        res = []\n        def dfs(node, level):\n            if not node:\n                return\n            if len(res) == level:\n                res.append([])\n            res[level].append(node.val)\n            dfs(node.left, level + 1)\n            dfs(node.right, level + 1)\n        dfs(root, 0)\n        return res",
        "steps": [
          {
            "label": "init result list",
            "note": "Initialize res array to store sub-lists for each tree depth level.",
            "from": 3,
            "to": 3
          },
          {
            "label": "check node existence",
            "note": "If current node is None, return immediately.",
            "from": 5,
            "to": 6
          },
          {
            "label": "allocate sublist",
            "note": "If length of res equals current level index, add a new empty list for this level.",
            "from": 7,
            "to": 8
          },
          {
            "label": "append value & recurse",
            "note": "Append value to level list and recurse on left and right children with level + 1.",
            "from": 9,
            "to": 11
          }
        ]
      },
      {
        "name": "Breadth-First Search (BFS with Queue)",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Use a queue for standard level order expansion. Process batch of nodes matching current queue length at start of each iteration.",
        "code": "from collections import deque\nclass Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root:\n            return []\n        res = []\n        queue = deque([root])\n        while queue:\n            level_size = len(queue)\n            level = []\n            for _ in range(level_size):\n                node = queue.popleft()\n                level.append(node.val)\n                if node.left:\n                    queue.append(node.left)\n                if node.right:\n                    queue.append(node.right)\n            res.append(level)\n        return res",
        "steps": [
          {
            "label": "check root and init queue",
            "note": "Return empty array if root is None. Otherwise initialize queue with root.",
            "from": 4,
            "to": 7
          },
          {
            "label": "get level size",
            "note": "Capture fixed number of nodes present at current level (len(queue)).",
            "from": 9,
            "to": 10
          },
          {
            "label": "process level nodes",
            "note": "Pop 'level_size' nodes from left, record values, and enqueue valid children.",
            "from": 11,
            "to": 17
          },
          {
            "label": "store level result",
            "note": "Append completed level list to final result list.",
            "from": 18,
            "to": 18
          }
        ]
      }
    ]
  },
  "binary-tree-maximum-path-sum": {
    "statement": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
    "given": "the root of a binary tree",
    "ret": "the maximum path sum of any non-empty path",
    "summary": "Use post-order traversal DFS to compute the maximum single-branch path sum for each node while continuously updating a global maximum path sum that combines both left and right child branches.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        pass",
    "tests": [
      {
        "label": "root = [1,2,3]",
        "inputStr": "{\"root\": [1,2,3]}",
        "expectedStr": "6"
      },
      {
        "label": "root = [-10,9,20,null,null,15,7]",
        "inputStr": "{\"root\": [-10,9,20,null,null,15,7]}",
        "expectedStr": "42"
      }
    ],
    "approaches": [
      {
        "name": "brute force / path enumeration",
        "time": "O(N^2)",
        "space": "O(N)",
        "idea": "For every node in the binary tree, calculate the maximum path sum passing through that node by computing all max paths down into its left and right subtrees independently. Repeat this calculation for all nodes.",
        "code": "class Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        self.max_sum = float('-inf')\n        \n        def max_gain(node):\n            if not node:\n                return 0\n            return node.val + max(0, max_gain(node.left), max_gain(node.right))\n            \n        def traverse(node):\n            if not node:\n                return\n            left_gain = max(0, max_gain(node.left))\n            right_gain = max(0, max_gain(node.right))\n            current_max = node.val + left_gain + right_gain\n            self.max_sum = max(self.max_sum, current_max)\n            traverse(node.left)\n            traverse(node.right)\n            \n        traverse(root)\n        return self.max_sum",
        "steps": [
          {
            "label": "Initialize global answer",
            "note": "Set self.max_sum to negative infinity to handle trees with all negative values.",
            "from": 3,
            "to": 5
          },
          {
            "label": "Traverse tree nodes",
            "note": "Visit every node using helper function `traverse(node)`.",
            "from": 11,
            "to": 13,
            "yes": "Return if current node is null.",
            "no": "Compute max gain for left and right children."
          },
          {
            "label": "Compute path gains",
            "note": "Call `max_gain` recursively on left and right subtrees for the current node, recalculating subproblems.",
            "from": 14,
            "to": 15
          },
          {
            "label": "Update global max",
            "note": "Combine node value and positive gains from both branches to test path through node.",
            "from": 16,
            "to": 17
          },
          {
            "label": "Recurse children",
            "note": "Continue traversal to test subtrees rooted at left and right children.",
            "from": 18,
            "to": 21
          }
        ]
      },
      {
        "name": "optimal post-order dfs",
        "time": "O(N)",
        "space": "O(H)",
        "idea": "Perform a single post-order DFS traversal. Return the maximum gain a node can contribute to its parent (node.val + max(left_gain, right_gain, 0)), while simultaneously updating the global maximum with the path that turns at the current node (node.val + left_gain + right_gain).",
        "code": "class Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        res = [root.val]\n        \n        def dfs(node):\n            if not node:\n                return 0\n            \n            left_max = max(dfs(node.left), 0)\n            right_max = max(dfs(node.right), 0)\n            \n            # compute path sum WITH split at current node\n            res[0] = max(res[0], node.val + left_max + right_max)\n            \n            # return path sum WITHOUT split (single branch)\n            return node.val + max(left_max, right_max)\n            \n        dfs(root)\n        return res[0]",
        "steps": [
          {
            "label": "Initialize result holder",
            "note": "Store root node's value as initial max inside a mutable list.",
            "from": 3,
            "to": 5
          },
          {
            "label": "Base case check",
            "note": "If subtree node is null, return 0 gain.",
            "from": 6,
            "to": 7,
            "yes": "Return 0 when node is None.",
            "no": "Proceed to evaluate child branches."
          },
          {
            "label": "Compute left and right branch gains",
            "note": "Recursively compute subtree path gains and clamp negative gains to 0 using `max(..., 0)`.",
            "from": 9,
            "to": 10
          },
          {
            "label": "Update global max with split path",
            "note": "Consider the path through node connecting left and right branches: node.val + left_max + right_max.",
            "from": 13,
            "to": 13
          },
          {
            "label": "Return single-leg contribution",
            "note": "Pass maximum single branch up to parent: node.val + max(left_max, right_max).",
            "from": 16,
            "to": 19
          }
        ]
      }
    ]
  },
  "serialize-and-deserialize-binary-tree": {
    "statement": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree.",
    "given": "a binary tree root (for serialize) and a string data (for deserialize)",
    "ret": "a string representation (for serialize) and a reconstructed binary tree root (for deserialize)",
    "summary": "Use preorder DFS with null markers (e.g. 'N') and delimiters to flatten the binary tree into a string, then reconstruct it recursively using an iterator/queue.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode(object):\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Codec:\n    def serialize(self, root: Optional[TreeNode]) -> str:\n        \"\"\"Encodes a tree to a single string.\n        \"\"\"\n        pass\n\n    def deserialize(self, data: str) -> Optional[TreeNode]:\n        \"\"\"Decodes your encoded data to tree.\n        \"\"\"\n        pass",
    "tests": [
      {
        "label": "root = [1,2,3,null,null,4,5]",
        "inputStr": "{\"root\": [1,2,3,null,null,4,5]}",
        "expectedStr": "[1,2,3,null,null,4,5]"
      },
      {
        "label": "root = []",
        "inputStr": "{\"root\": []}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "preorder dfs with null symbols",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Traverse the tree in pre-order format (Root -> Left -> Right). Append node values to a list, using a special character like 'N' for empty pointers. Join with commas. For deserialization, split the string and recursively construct nodes using an iterator.",
        "code": "class Codec:\n    def serialize(self, root):\n        res = []\n        def dfs(node):\n            if not node:\n                res.append(\"N\")\n                return\n            res.append(str(node.val))\n            dfs(node.left)\n            dfs(node.right)\n        dfs(root)\n        return \",\".join(res)\n\n    def deserialize(self, data):\n        vals = iter(data.split(\",\"))\n        def dfs():\n            val = next(vals)\n            if val == \"N\":\n                return None\n            node = TreeNode(int(val))\n            node.left = dfs()\n            node.right = dfs()\n            return node\n        return dfs()",
        "steps": [
          {
            "label": "Serialize Preorder DFS",
            "note": "Traverse the tree recursively starting at root.",
            "from": 3,
            "to": 6,
            "yes": "Append 'N' if node is None.",
            "no": "Append node.val as string."
          },
          {
            "label": "Serialize Children",
            "note": "Recurse on left child then right child.",
            "from": 7,
            "to": 10
          },
          {
            "label": "Format Serialized String",
            "note": "Join all collected list tokens using comma delimiter.",
            "from": 11,
            "to": 11
          },
          {
            "label": "Deserialize String Tokenizer",
            "note": "Split input string by commas and create an iterator over tokens.",
            "from": 14,
            "to": 14
          },
          {
            "label": "Reconstruct Nodes Recursively",
            "note": "Fetch next token from iterator. If 'N', return None; otherwise instantiate node and build left and right subtrees recursively.",
            "from": 16,
            "to": 22
          }
        ]
      },
      {
        "name": "bfs level-order traversal",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Use level-order BFS with a queue to build a standard array representation of the binary tree including nulls. To deserialize, iterate through tokens maintaining a node queue to attach left and right children dynamically.",
        "code": "from collections import deque\n\nclass Codec:\n    def serialize(self, root):\n        if not root:\n            return \"\"\n        q = deque([root])\n        res = []\n        while q:\n            node = q.popleft()\n            if node:\n                res.append(str(node.val))\n                q.append(node.left)\n                q.append(node.right)\n            else:\n                res.append(\"N\")\n        return \",\".join(res)\n\n    def deserialize(self, data):\n        if not data:\n            return None\n        vals = data.split(\",\")\n        root = TreeNode(int(vals[0]))\n        q = deque([root])\n        i = 1\n        while q:\n            node = q.popleft()\n            if vals[i] != \"N\":\n                node.left = TreeNode(int(vals[i]))\n                q.append(node.left)\n            i += 1\n            if vals[i] != \"N\":\n                node.right = TreeNode(int(vals[i]))\n                q.append(node.right)\n            i += 1\n        return root",
        "steps": [
          {
            "label": "Check edge cases",
            "note": "If root is empty, return empty string.",
            "from": 5,
            "to": 6
          },
          {
            "label": "BFS Serialization",
            "note": "Process nodes queue-wise. Append node values or 'N' for nulls, adding children to queue.",
            "from": 8,
            "to": 16
          },
          {
            "label": "Initialize Deserialization Queue",
            "note": "Construct root node from first value and push it onto queue.",
            "from": 20,
            "to": 23
          },
          {
            "label": "Connect Children dynamic pointer tracking",
            "note": "Pop queue node and attach left/right children based on tokens at index `i` and `i + 1`.",
            "from": 24,
            "to": 34
          }
        ]
      }
    ]
  },
  "implement-trie-prefix-tree": {
    "statement": "A trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class with `insert`, `search`, and `startsWith` methods.",
    "given": "words and prefixes as strings",
    "ret": "None for insert; boolean for search and startsWith operations",
    "summary": "Create TrieNode objects containing a dictionary mapping characters to child TrieNodes and a boolean flag indicating if the node represents the end of a word.",
    "starter": "class Trie:\n\n    def __init__(self):\n        pass\n\n    def insert(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass\n\n    def startsWith(self, prefix: str) -> bool:\n        pass",
    "tests": [
      {
        "label": "word = \"apple\", prefix = \"app\"",
        "inputStr": "{\"actions\": [\"Trie\", \"insert\", \"search\", \"startsWith\"], \"args\": [[], [\"apple\"], [\"apple\"], [\"app\"]]}",
        "expectedStr": "[null, null, true, true]"
      },
      {
        "label": "word = \"app\", prefix = \"app\"",
        "inputStr": "{\"actions\": [\"Trie\", \"insert\", \"search\"], \"args\": [[], [\"apple\"], [\"app\"]]}",
        "expectedStr": "[null, null, false]"
      }
    ],
    "approaches": [
      {
        "name": "trie node with hash map",
        "time": "O(L) per operation where L is length of word/prefix",
        "space": "O(N * L) total characters inserted across all operations",
        "idea": "Represent each tree node using a nested dictionary structure. Nodes track character transitions and an `is_end` flag indicating complete words.",
        "code": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for c in word:\n            if c not in cur.children:\n                cur.children[c] = TrieNode()\n            cur = cur.children[c]\n        cur.is_end = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for c in word:\n            if c not in cur.children:\n                return False\n            cur = cur.children[c]\n        return cur.is_end\n\n    def startsWith(self, prefix: str) -> bool:\n        cur = self.root\n        for c in prefix:\n            if c not in cur.children:\n                return False\n            cur = cur.children[c]\n        return True",
        "steps": [
          {
            "label": "Initialize Trie",
            "note": "Set up a dummy root node using `TrieNode` containing empty children hash map.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Insert loop",
            "note": "Iterate through each character in word. Create new TrieNode if child mapping does not exist.",
            "from": 11,
            "to": 15
          },
          {
            "label": "Mark word end",
            "note": "Set `is_end = True` on the terminal node.",
            "from": 16,
            "to": 16
          },
          {
            "label": "Search character matching",
            "note": "Traverse character path for target word; return False immediately if a child character key is missing.",
            "from": 19,
            "to": 23,
            "yes": "Missing child -> Return False.",
            "no": "Move pointer to matching child TrieNode."
          },
          {
            "label": "Validate exact word match vs prefix match",
            "note": "For `search`, check `cur.is_end`. For `startsWith`, return True if traversal completes successfully.",
            "from": 24,
            "to": 32
          }
        ]
      }
    ]
  },
  "design-add-and-search-words-data-structure": {
    "statement": "Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WordDictionary class:\n- WordDictionary() Initializes the object.\n- void addWord(word) Adds word to the data structure, it can be matched later.\n- bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.",
    "given": "commands and string arguments for addWord and search",
    "ret": "boolean output for search operations",
    "summary": "Use a Trie (Prefix Tree) where each node represents a character. For search queries containing '.', perform a recursive depth-first search across all existing child branches at that position.",
    "starter": "class WordDictionary:\n\n    def __init__(self):\n        pass\n\n    def addWord(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass",
    "tests": [
      {
        "label": "commands = [\"addWord\",\"addWord\",\"addWord\",\"search\",\"search\",\"search\",\"search\"], args = [[\"bad\"],[\"dad\"],[\"mad\"],[\"pad\"],[\"bad\"],[\".ad\"],[\"b..\"]]",
        "inputStr": "{\"commands\": [\"addWord\",\"addWord\",\"addWord\",\"search\",\"search\",\"search\",\"search\"], \"args\": [[\"bad\"],[\"dad\"],[\"mad\"],[\"pad\"],[\"bad\"],[\".ad\"],[\"b..\"]]}",
        "expectedStr": "[null, null, null, false, true, true, true]"
      },
      {
        "label": "commands = [\"addWord\",\"search\"], args = [[\"a\"],[\".\"]]",
        "inputStr": "{\"commands\": [\"addWord\",\"search\"], \"args\": [[\"a\"],[\".\"]]}",
        "expectedStr": "[null, true]"
      }
    ],
    "approaches": [
      {
        "name": "List Store with Pattern Search",
        "time": "O(N * M) per search, O(1) per add",
        "space": "O(N * M)",
        "idea": "Store all words in a standard dynamic array. When searching, iterate through all words and check if the candidate word matches character by character, treating '.' as a wildcard.",
        "code": "class WordDictionary:\n    def __init__(self):\n        self.words = []\n\n    def addWord(self, word: str) -> None:\n        self.words.append(word)\n\n    def search(self, word: str) -> bool:\n        for w in self.words:\n            if len(w) != len(word):\n                continue\n            match = True\n            for c1, c2 in zip(w, word):\n                if c2 != '.' and c1 != c2:\n                    match = False\n                    break\n            if match:\n                return True\n        return False",
        "steps": [
          {
            "label": "Store word",
            "note": "Append the new word to the internal words array.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Iterate words",
            "note": "Loop through each stored word in the dictionary.",
            "from": 9,
            "to": 10
          },
          {
            "label": "Length check",
            "note": "Skip words that do not match the target word length.",
            "from": 10,
            "to": 11,
            "yes": "Lengths differ, skip word",
            "no": "Lengths equal, continue comparison"
          },
          {
            "label": "Character comparison",
            "note": "Compare chars; if character is not '.' and doesn't match, break.",
            "from": 13,
            "to": 16
          },
          {
            "label": "Return result",
            "note": "If full match found, return True; else return False after loop.",
            "from": 17,
            "to": 19
          }
        ]
      },
      {
        "name": "Trie with DFS for Wildcards",
        "time": "O(M) for add, O(M) best case to O(26^M) worst case search",
        "space": "O(N * M)",
        "idea": "Build a Trie where each node is a dict of child nodes and an end-of-word boolean. Perform recursive DFS during search so that encountering '.' branches into all valid child paths.",
        "code": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n\nclass WordDictionary:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def addWord(self, word: str) -> None:\n        curr = self.root\n        for ch in word:\n            if ch not in curr.children:\n                curr.children[ch] = TrieNode()\n            curr = curr.children[ch]\n        curr.is_end = True\n\n    def search(self, word: str) -> bool:\n        def dfs(node, i):\n            if i == len(word):\n                return node.is_end\n            ch = word[i]\n            if ch == '.':\n                for child in node.children.values():\n                    if dfs(child, i + 1):\n                        return True\n                return False\n            else:\n                if ch not in node.children:\n                    return False\n                return dfs(node.children[ch], i + 1)\n        return dfs(self.root, 0)",
        "steps": [
          {
            "label": "Traverse/Insert Trie",
            "note": "Walk through word characters, creating TrieNodes as needed, mark end node.",
            "from": 10,
            "to": 16
          },
          {
            "label": "DFS Base Case",
            "note": "When index reaches word length, return whether current node marks word end.",
            "from": 19,
            "to": 21
          },
          {
            "label": "Wildcard Branching",
            "note": "If character is '.', recursively call DFS on every available child node.",
            "from": 23,
            "to": 27,
            "yes": "Child branch matches, return True",
            "no": "No child branches match, return False"
          },
          {
            "label": "Exact Character Match",
            "note": "If character is literal, follow target child node if present.",
            "from": 28,
            "to": 32
          }
        ]
      }
    ]
  },
  "word-search-ii": {
    "statement": "Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
    "given": "board = List[List[str]], words = List[str]",
    "ret": "List[str] containing all unique words present on the grid",
    "summary": "Build a Trie from the input words dictionary. Perform a DFS traversal from each grid cell, navigating the grid and Trie concurrently while pruning matched words to eliminate duplicate checks.",
    "starter": "class Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        pass",
    "tests": [
      {
        "label": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
        "inputStr": "{\"board\": [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], \"words\": [\"oath\",\"pea\",\"eat\",\"rain\"]}",
        "expectedStr": "[\"oath\",\"eat\"]"
      },
      {
        "label": "board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]",
        "inputStr": "{\"board\": [[\"a\",\"b\"],[\"c\",\"d\"]], \"words\": [\"abcb\"]}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "Backtracking per Word (Brute Force)",
        "time": "O(W * M * N * 4^L)",
        "space": "O(L)",
        "idea": "For each word in words, run a standalone DFS/backtracking search across every cell in the board to check if that individual word can be formed.",
        "code": "class Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        R, C = len(board), len(board[0])\n        res = []\n        \n        def dfs(r, c, word, idx, visited):\n            if idx == len(word):\n                return True\n            if r < 0 or r >= R or c < 0 or c >= C or (r, c) in visited or board[r][c] != word[idx]:\n                return False\n            visited.add((r, c))\n            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                if dfs(r + dr, c + dc, word, idx + 1, visited):\n                    visited.remove((r, c))\n                    return True\n            visited.remove((r, c))\n            return False\n            \n        for word in words:\n            found = False\n            for r in range(R):\n                for c in range(C):\n                    if dfs(r, c, word, 0, set()):\n                        res.append(word)\n                        found = True\n                        break\n                if found:\n                    break\n        return res",
        "steps": [
          {
            "label": "Outer word loop",
            "note": "Iterate through each word in the given word list.",
            "from": 21,
            "to": 22
          },
          {
            "label": "Grid start point",
            "note": "Try starting the word traversal from every cell (r, c).",
            "from": 23,
            "to": 25
          },
          {
            "label": "DFS character validation",
            "note": "Check boundary condition, cell match, and unvisited status.",
            "from": 8,
            "to": 10
          },
          {
            "label": "Backtrack adjacent neighbors",
            "note": "Mark visited, explore four directions recursively, then backtrack.",
            "from": 11,
            "to": 17
          }
        ]
      },
      {
        "name": "Trie with Grid Backtracking and Pruning",
        "time": "O(M * N * 4^L)",
        "space": "O(Total chars in words)",
        "idea": "Store all words in a Trie. Run DFS from every board cell. Walk down the grid and Trie simultaneously. Store full words at Trie leaf nodes and remove found words to prune search paths.",
        "code": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.word = None\n\nclass Solution:\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        root = TrieNode()\n        for w in words:\n            curr = root\n            for ch in w:\n                if ch not in curr.children:\n                    curr.children[ch] = TrieNode()\n                curr = curr.children[ch]\n            curr.word = w\n            \n        R, C = len(board), len(board[0])\n        res = []\n        \n        def dfs(r, c, node):\n            ch = board[r][c]\n            if ch not in node.children:\n                return\n            nxt = node.children[ch]\n            if nxt.word:\n                res.append(nxt.word)\n                nxt.word = None\n                \n            board[r][c] = '#'\n            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < R and 0 <= nc < C and board[nr][nc] != '#':\n                    dfs(nr, nc, nxt)\n            board[r][c] = ch\n            \n        for r in range(R):\n            for c in range(C):\n                dfs(r, c, root)\n        return res",
        "steps": [
          {
            "label": "Build Trie",
            "note": "Insert all words into Trie, storing full word at terminal TrieNode.",
            "from": 8,
            "to": 15
          },
          {
            "label": "Trie prefix matching",
            "note": "Check if current board character exists in current Trie node's children.",
            "from": 21,
            "to": 24
          },
          {
            "label": "Collect and prune word",
            "note": "If a word is stored in node, add to output and set nxt.word = None to avoid duplicates.",
            "from": 25,
            "to": 27
          },
          {
            "label": "In-place grid mark & backtrack",
            "note": "Temporarily replace board character with '#' during DFS and restore after.",
            "from": 29,
            "to": 34
          }
        ]
      }
    ]
  },
  "find-median-from-data-stream": {
    "statement": "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.\n\nImplement the MedianFinder class:\n- MedianFinder() initializes the MedianFinder object.\n- void addNum(int num) adds the integer num from the data stream to the data structure.\n- double findMedian() returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.",
    "given": "stream of integers via addNum(num)",
    "ret": "float representation of current median via findMedian()",
    "summary": "Maintain two heaps: a max-heap for the smaller half of numbers and a min-heap for the larger half. Keep the heap sizes balanced so the median is easily read from their tops.",
    "starter": "class MedianFinder:\n\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass",
    "tests": [
      {
        "label": "commands = [\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"], args = [[1],[2],[],[3],[]]",
        "inputStr": "{\"commands\": [\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"], \"args\": [[1],[2],[],[3],[]]}",
        "expectedStr": "[null, null, 1.5, null, 2.0]"
      }
    ],
    "approaches": [
      {
        "name": "Insertion Sort / Bisect Store",
        "time": "O(N) for addNum, O(1) for findMedian",
        "space": "O(N)",
        "idea": "Maintain a dynamically sorted list. Use binary search (bisect.insort) to insert new numbers into their correct sorted position immediately.",
        "code": "import bisect\n\nclass MedianFinder:\n    def __init__(self):\n        self.arr = []\n\n    def addNum(self, num: int) -> None:\n        bisect.insort(self.arr, num)\n\n    def findMedian(self) -> float:\n        n = len(self.arr)\n        if n % 2 == 1:\n            return float(self.arr[n // 2])\n        else:\n            return (self.arr[n // 2 - 1] + self.arr[n // 2]) / 2.0",
        "steps": [
          {
            "label": "Insert in order",
            "note": "Use bisect.insort to binary search insertion point and shift elements.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Check size parity",
            "note": "Determine if total element count is odd or even.",
            "from": 11,
            "to": 12
          },
          {
            "label": "Odd length median",
            "note": "Return middle element directly if size is odd.",
            "from": 12,
            "to": 13,
            "yes": "Odd count, return exact middle"
          },
          {
            "label": "Even length median",
            "note": "Compute mean of two middle elements if size is even.",
            "from": 14,
            "to": 15,
            "no": "Even count, return average of middle two"
          }
        ]
      },
      {
        "name": "Two Heaps (Max-Heap and Min-Heap)",
        "time": "O(log N) for addNum, O(1) for findMedian",
        "space": "O(N)",
        "idea": "Divide numbers into lower half (Max-Heap) and upper half (Min-Heap). Push to max-heap, pass max to min-heap, rebalance if max-heap size falls behind.",
        "code": "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = []  # max-heap (negated)\n        self.large = []  # min-heap\n\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        # ensure max element of small <= min element of large\n        if self.small and self.large and (-self.small[0] > self.large[0]):\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        # maintain size property (small can have at most 1 extra element)\n        if len(self.small) > len(self.large) + 1:\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.large) > len(self.small):\n            val = heapq.heappop(self.large)\n            heapq.heappush(self.small, -val)\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
        "steps": [
          {
            "label": "Push to small heap",
            "note": "Push inverted number into small (max-heap).",
            "from": 8,
            "to": 9
          },
          {
            "label": "Maintain order property",
            "note": "If max of small > min of large, swap root elements across heaps.",
            "from": 10,
            "to": 13
          },
          {
            "label": "Balance heap sizes",
            "note": "Ensure length of small is either equal to or 1 greater than length of large.",
            "from": 14,
            "to": 19
          },
          {
            "label": "Calculate median",
            "note": "If sizes unequal, top of small is median; otherwise average tops of both heaps.",
            "from": 21,
            "to": 24
          }
        ]
      }
    ]
  },
  "combination-sum": {
    "statement": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.",
    "given": "an array of distinct integers candidates and a target integer target",
    "ret": "a list of all unique combinations of candidates that sum to target",
    "summary": "Use backtracking to recursively explore combinations. At each step, either choose the candidate at the current index (staying at index to allow reuse) or skip to the next candidate.",
    "starter": "class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "candidates = [2,3,6,7], target = 7",
        "inputStr": "{\"candidates\": [2,3,6,7], \"target\": 7}",
        "expectedStr": "[[2,2,3],[7]]"
      },
      {
        "label": "candidates = [2,3,5], target = 8",
        "inputStr": "{\"candidates\": [2,3,5], \"target\": 8}",
        "expectedStr": "[[2,2,2,2],[2,3,3],[3,5]]"
      },
      {
        "label": "candidates = [2], target = 1",
        "inputStr": "{\"candidates\": [2], \"target\": 1}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "brute force (naive decision tree)",
        "time": "O(2^(target/min_candidate))",
        "space": "O(target/min_candidate)",
        "idea": "Generate all possible combinations of numbers up to target without pruning branches that already exceed target.",
        "code": "class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        res = []\n        def explore(idx, path):\n            if sum(path) == target:\n                if sorted(path) not in [sorted(x) for x in res]:\n                    res.append(path[:])\n                return\n            if sum(path) > target or idx >= len(candidates):\n                return\n            for i in range(idx, len(candidates)):\n                explore(i, path + [candidates[i]])\n        explore(0, [])\n        return res",
        "steps": [
          {
            "label": "check sum equality",
            "note": "Check if current path sums to target and isn't a duplicate in res",
            "from": 5,
            "to": 8
          },
          {
            "label": "check boundaries",
            "note": "If total sum strictly exceeds target or index is out of bounds, stop exploring",
            "from": 9,
            "to": 10
          },
          {
            "label": "explore all choices",
            "note": "Iterate through remaining candidates and recursively append each one to path",
            "from": 11,
            "to": 12
          }
        ]
      },
      {
        "name": "optimal backtracking",
        "time": "O(N^(T/M)) where N is candidates, T is target, M is min candidate",
        "space": "O(T/M)",
        "idea": "Use depth-first backtracking with a running sum. Decide either to include the current candidate (and remain at current index for potential reuse) or skip it and move to the next index.",
        "code": "class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        res = []\n        def backtrack(idx, path, total):\n            if total == target:\n                res.append(path[:])\n                return\n            if total > target or idx >= len(candidates):\n                return\n            path.append(candidates[idx])\n            backtrack(idx, path, total + candidates[idx])\n            path.pop()\n            backtrack(idx + 1, path, total)\n        backtrack(0, [], 0)\n        return res",
        "steps": [
          {
            "label": "check target matched",
            "note": "If accumulated total equals target, save dynamic path copy to results",
            "from": 5,
            "to": 7,
            "yes": "Target reached, record solution"
          },
          {
            "label": "check invalid state",
            "note": "If total exceeds target or index moves past array length, prune branch",
            "from": 8,
            "to": 9,
            "yes": "Branch invalid, return"
          },
          {
            "label": "include candidate",
            "note": "Append current candidate to path and recursively call backtrack staying on same index",
            "from": 10,
            "to": 11
          },
          {
            "label": "exclude candidate",
            "note": "Pop last appended candidate and recursively call backtrack for next index",
            "from": 12,
            "to": 13
          }
        ]
      }
    ]
  },
  "word-search": {
    "statement": "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    "given": "a 2D board of characters and a target word string",
    "ret": "true if word exists in grid, false otherwise",
    "summary": "Iterate over every cell in the grid and perform dynamic DFS backtracking. Mark visited cells in-place to avoid reuse and restore them upon backtracking.",
    "starter": "class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        pass",
    "tests": [
      {
        "label": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "inputStr": "{\"board\": [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"word\": \"ABCCED\"}",
        "expectedStr": "true"
      },
      {
        "label": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"",
        "inputStr": "{\"board\": [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"word\": \"SEE\"}",
        "expectedStr": "true"
      },
      {
        "label": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"",
        "inputStr": "{\"board\": [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"word\": \"ABCB\"}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "brute force (with global visited matrix)",
        "time": "O(M * N * 4^L)",
        "space": "O(M * N + L)",
        "idea": "Try starting DFS from each grid cell, keeping a separate visited set/matrix to keep track of used coordinates.",
        "code": "class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        R, C = len(board), len(board[0])\n        visited = set()\n        def dfs(r, c, k):\n            if k == len(word):\n                return True\n            if r < 0 or r >= R or c < 0 or c >= C or (r, c) in visited or board[r][c] != word[k]:\n                return False\n            visited.add((r, c))\n            res = (dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1))\n            visited.remove((r, c))\n            return res\n        for r in range(R):\n            for c in range(C):\n                if dfs(r, c, 0):\n                    return True\n        return False",
        "steps": [
          {
            "label": "check complete match",
            "note": "If index k reaches word length, all characters matched successfully",
            "from": 5,
            "to": 6
          },
          {
            "label": "boundary and matching checks",
            "note": "Verify row/col are within bounds, cell unvisited, and matches target char",
            "from": 7,
            "to": 8
          },
          {
            "label": "mark visited & recurse",
            "note": "Add coordinate to visited set and recursively inspect four adjacent directions",
            "from": 9,
            "to": 10
          },
          {
            "label": "backtrack visited set",
            "note": "Remove cell from visited set to allow other candidate paths to evaluate it",
            "from": 11,
            "to": 12
          }
        ]
      },
      {
        "name": "optimal in-place backtracking DFS",
        "time": "O(M * N * 3^L)",
        "space": "O(L)",
        "idea": "Perform DFS, modifying the current cell to '#' temporarily to mark it visited, avoiding space for a separate visited set.",
        "code": "class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        R, C = len(board), len(board[0])\n        def dfs(r, c, k):\n            if k == len(word):\n                return True\n            if r < 0 or r >= R or c < 0 or c >= C or board[r][c] != word[k]:\n                return False\n            temp = board[r][c]\n            board[r][c] = '#'\n            found = (dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1))\n            board[r][c] = temp\n            return found\n        for r in range(R):\n            for c in range(C):\n                if board[r][c] == word[0] and dfs(r, c, 0):\n                    return True\n        return False",
        "steps": [
          {
            "label": "base match check",
            "note": "If index k equals word length, entire word has been matched",
            "from": 5,
            "to": 6,
            "yes": "Return true"
          },
          {
            "label": "boundary & value check",
            "note": "Check if position is out of grid bounds or character doesn't match word[k]",
            "from": 7,
            "to": 8,
            "yes": "Return false"
          },
          {
            "label": "mark cell in-place",
            "note": "Save original char and overwrite with '#' to prevent revisiting",
            "from": 9,
            "to": 10
          },
          {
            "label": "recurse four directions",
            "note": "Recursively check down, up, right, left neighbors for word index k + 1",
            "from": 11,
            "to": 11
          },
          {
            "label": "restore cell state",
            "note": "Revert grid cell back to original character before returning",
            "from": 12,
            "to": 13
          }
        ]
      }
    ]
  },
  "clone-graph": {
    "statement": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list of its neighbors (List[Node]).",
    "given": "a reference node of a connected undirected graph",
    "ret": "a deep copy (clone) of the graph",
    "summary": "Traverse the graph using DFS or BFS while using a hash map to map original nodes to their cloned counterparts, preventing infinite loops in cyclic graphs.",
    "starter": "\"\"\"\n# Definition for a Node.\nclass Node:\n    def __init__(self, val = 0, neighbors = None):\n        self.val = val\n        self.neighbors = neighbors if neighbors is not None else []\n\"\"\"\nclass Solution:\n    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:\n        pass",
    "tests": [
      {
        "label": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "inputStr": "{\"adjList\": [[2,4],[1,3],[2,4],[1,3]]}",
        "expectedStr": "[[2,4],[1,3],[2,4],[1,3]]"
      },
      {
        "label": "adjList = [[]]",
        "inputStr": "{\"adjList\": [[]]}",
        "expectedStr": "[[]]"
      },
      {
        "label": "adjList = []",
        "inputStr": "{\"adjList\": []}",
        "expectedStr": "[]"
      }
    ],
    "approaches": [
      {
        "name": "BFS traversal with hash map",
        "time": "O(V + E)",
        "space": "O(V)",
        "idea": "Use a queue for standard BFS traversal. Map every original node to its copy. Whenever visiting neighbors, instantiate missing clones and enqueue original nodes.",
        "code": "from collections import deque\nclass Solution:\n    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:\n        if not node:\n            return None\n        clones = {node: Node(node.val)}\n        queue = deque([node])\n        while queue:\n            curr = queue.popleft()\n            for neighbor in curr.neighbors:\n                if neighbor not in clones:\n                    clones[neighbor] = Node(neighbor.val)\n                    queue.append(neighbor)\n                clones[curr].neighbors.append(clones[neighbor])\n        return clones[node]",
        "steps": [
          {
            "label": "handle empty node",
            "note": "If input node is null, return null immediately",
            "from": 4,
            "to": 5
          },
          {
            "label": "init root clone & queue",
            "note": "Create map entry mapping root original node to its copy and seed queue",
            "from": 6,
            "to": 7
          },
          {
            "label": "process queue nodes",
            "note": "Pop current original node from queue to process its neighbors",
            "from": 8,
            "to": 9
          },
          {
            "label": "clone & link neighbors",
            "note": "If neighbor is not cloned, create clone and enqueue original neighbor, then attach neighbor clone to current clone",
            "from": 10,
            "to": 13
          }
        ]
      },
      {
        "name": "optimal recursive DFS with hash map",
        "time": "O(V + E)",
        "space": "O(V)",
        "idea": "Recursively clone nodes using DFS while passing a hash map storing already-cloned nodes to handle cycles.",
        "code": "class Solution:\n    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:\n        clones = {}\n        def dfs(curr):\n            if not curr:\n                return None\n            if curr in clones:\n                return clones[curr]\n            copy = Node(curr.val)\n            clones[curr] = copy\n            for neighbor in curr.neighbors:\n                copy.neighbors.append(dfs(neighbor))\n            return copy\n        return dfs(node)",
        "steps": [
          {
            "label": "check null node",
            "note": "If current original node is None, return None",
            "from": 5,
            "to": 6
          },
          {
            "label": "check cache map",
            "note": "If node was already cloned previously, return its stored clone pointer",
            "from": 7,
            "to": 8,
            "yes": "Return cached clone"
          },
          {
            "label": "instantiate copy",
            "note": "Create copy node with original node's val and store in clones map",
            "from": 9,
            "to": 10
          },
          {
            "label": "recursive neighbor cloning",
            "note": "Loop through all neighbors, recursively clone each, and attach to copy.neighbors",
            "from": 11,
            "to": 12
          },
          {
            "label": "return cloned node",
            "note": "Return completed deep copy of node",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "course-schedule": {
    "statement": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a. Return true if you can finish all courses. Otherwise, return false.",
    "given": "an integer numCourses and a list of prerequisite pairs",
    "ret": "a boolean indicating whether it is possible to finish all courses",
    "summary": "Detect if a cycle exists in the directed graph formed by prerequisites. If a cycle exists, courses cannot be finished.",
    "starter": "def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    pass",
    "tests": [
      {
        "label": "numCourses = 2, prerequisites = [[1,0]]",
        "inputStr": "{\"numCourses\": 2, \"prerequisites\": [[1, 0]]}",
        "expectedStr": "true"
      },
      {
        "label": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "inputStr": "{\"numCourses\": 2, \"prerequisites\": [[1, 0], [0, 1]]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "DFS (Cycle Detection)",
        "time": "O(V + E)",
        "space": "O(V + E)",
        "idea": "Build an adjacency list and perform Depth-First Search for each node to detect directed cycles. Use a set to track the current recursive call stack.",
        "code": "def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    adj = {i: [] for i in range(numCourses)}\n    for crs, pre in prerequisites:\n        adj[crs].append(pre)\n    visit = set()\n    def dfs(crs):\n        if crs in visit:\n            return False\n        if adj[crs] == []:\n            return True\n        visit.add(crs)\n        for pre in adj[crs]:\n            if not dfs(pre): return False\n        visit.remove(crs)\n        adj[crs] = []\n        return True\n    for crs in range(numCourses):\n        if not dfs(crs): return False\n    return True",
        "steps": [
          {
            "label": "Build Adjacency Map",
            "note": "Initialize map for each course and populate prerequisite edges",
            "from": 2,
            "to": 4
          },
          {
            "label": "Check Cycle Condition",
            "note": "If node is in current visiting path, cycle detected",
            "from": 7,
            "to": 8,
            "yes": "Cycle detected, return False",
            "no": "Continue checking prerequisites"
          },
          {
            "label": "Check Base Case",
            "note": "If course has no remaining dependencies, it can be taken",
            "from": 9,
            "to": 10
          },
          {
            "label": "Recurse on Dependencies",
            "note": "Add course to recursion set and run DFS on dependencies",
            "from": 11,
            "to": 13
          },
          {
            "label": "Backtrack and Clean Up",
            "note": "Remove from active path set and clear dependencies to memoize success",
            "from": 14,
            "to": 16
          },
          {
            "label": "Iterate All Nodes",
            "note": "Run DFS for every course from 0 to numCourses - 1",
            "from": 17,
            "to": 19
          }
        ]
      },
      {
        "name": "Kahn's Algorithm (BFS Topological Sort)",
        "time": "O(V + E)",
        "space": "O(V + E)",
        "idea": "Compute in-degrees for all courses. Add zero in-degree courses to a queue and process them, reducing the in-degree of dependent courses. If total processed courses equal numCourses, no cycle exists.",
        "code": "from collections import deque\ndef canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    adj = [[] for _ in range(numCourses)]\n    in_degree = [0] * numCourses\n    for crs, pre in prerequisites:\n        adj[pre].append(crs)\n        in_degree[crs] += 1\n    q = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    count = 0\n    while q:\n        node = q.popleft()\n        count += 1\n        for neighbor in adj[node]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                q.append(neighbor)\n    return count == numCourses",
        "steps": [
          {
            "label": "Compute In-Degrees",
            "note": "Build graph adjacencies and tally total prerequisites per course",
            "from": 3,
            "to": 7
          },
          {
            "label": "Initialize Queue",
            "note": "Enqueue all courses having 0 prerequisites",
            "from": 8,
            "to": 9
          },
          {
            "label": "Process Queue",
            "note": "Pop processed course and increment completed course count",
            "from": 10,
            "to": 12
          },
          {
            "label": "Decrement In-Degrees",
            "note": "Reduce in-degree count for dependent neighbor courses",
            "from": 13,
            "to": 14
          },
          {
            "label": "Enqueue Unlocked Courses",
            "note": "If a neighbor's in-degree drops to 0, add it to queue",
            "from": 15,
            "to": 16
          },
          {
            "label": "Verify Completion",
            "note": "Compare count of processed courses with total course count",
            "from": 17,
            "to": 17
          }
        ]
      }
    ]
  },
  "number-of-islands": {
    "statement": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    "given": "a 2D grid of character strings '1' (land) and '0' (water)",
    "ret": "an integer representing total number of islands",
    "summary": "Iterate through each grid cell. When encountering land ('1'), increment island count and trigger DFS/BFS to sink all connected land cells by setting them to '0'.",
    "starter": "def numIslands(grid: list[list[str]]) -> int:\n    pass",
    "tests": [
      {
        "label": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "inputStr": "{\"grid\": [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]}",
        "expectedStr": "1"
      },
      {
        "label": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "inputStr": "{\"grid\": [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "DFS (Depth-First Search)",
        "time": "O(M * N)",
        "space": "O(M * N)",
        "idea": "Scan every cell. Upon hitting '1', add 1 to island count and recursively mark all adjacent '1's as '0' to avoid double-counting.",
        "code": "def numIslands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    islands = 0\n    def dfs(r, c):\n        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':\n            return\n        grid[r][c] = '0'\n        dfs(r + 1, c)\n        dfs(r - 1, c)\n        dfs(r, c + 1)\n        dfs(r, c - 1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                islands += 1\n                dfs(r, c)\n    return islands",
        "steps": [
          {
            "label": "Initialize Bounds",
            "note": "Verify non-empty grid and record row and column counts",
            "from": 2,
            "to": 4
          },
          {
            "label": "DFS Boundary Check",
            "note": "Stop recursion if coordinates are out of bounds or cell is water '0'",
            "from": 6,
            "to": 7
          },
          {
            "label": "Mark Land Visited",
            "note": "Mutate cell from '1' to '0' to sink land piece",
            "from": 8,
            "to": 8
          },
          {
            "label": "Recurse 4-Directions",
            "note": "Perform DFS on up, down, left, right neighbors",
            "from": 9,
            "to": 12
          },
          {
            "label": "Scan Grid Cells",
            "note": "Loop through all coordinates (r, c) looking for land '1'",
            "from": 13,
            "to": 15
          },
          {
            "label": "Trigger Traversal",
            "note": "Increment island count and start DFS for every new unvisited land",
            "from": 16,
            "to": 18
          }
        ]
      },
      {
        "name": "BFS (Breadth-First Search)",
        "time": "O(M * N)",
        "space": "O(min(M, N))",
        "idea": "Use a queue to iteratively explore land neighbors level by level, sinking land cells as soon as they are enqueued.",
        "code": "from collections import deque\ndef numIslands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    islands = 0\n    def bfs(r, c):\n        q = deque([(r, c)])\n        grid[r][c] = '0'\n        while q:\n            row, col = q.popleft()\n            for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:\n                nr, nc = row + dr, col + dc\n                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':\n                    grid[nr][nc] = '0'\n                    q.append((nr, nc))\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                islands += 1\n                bfs(r, c)\n    return islands",
        "steps": [
          {
            "label": "Initialize Queue",
            "note": "Enqueue origin land cell and sink it immediately",
            "from": 7,
            "to": 8
          },
          {
            "label": "Pop Queue Item",
            "note": "Retrieve current land cell coordinates to process directions",
            "from": 9,
            "to": 10
          },
          {
            "label": "Explore 4-Neighbors",
            "note": "Calculate candidate neighbor coordinates",
            "from": 11,
            "to": 12
          },
          {
            "label": "Validate & Enqueue",
            "note": "If neighbor is valid land '1', mark '0' and add to queue",
            "from": 13,
            "to": 15
          },
          {
            "label": "Outer Grid Loop",
            "note": "Traverse grid to find unvisited land cells and invoke BFS",
            "from": 16,
            "to": 21
          }
        ]
      }
    ]
  },
  "number-of-connected-components-in-an-undirected-graph": {
    "statement": "You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and an array edges where edges[i] = [a, b] indicates that there is an undirected edge between node a and node b. Return the number of connected components in the graph.",
    "given": "an integer n and an array of undirected edges",
    "ret": "an integer representing the number of connected components",
    "summary": "Use Graph Traversal (DFS/BFS) or Union-Find (DSU) to group connected vertices together. Start with n components and decrement each time a valid edge merges two components.",
    "starter": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    pass",
    "tests": [
      {
        "label": "n = 5, edges = [[0,1],[1,2],[3,4]]",
        "inputStr": "{\"n\": 5, \"edges\": [[0, 1], [1, 2], [3, 4]]}",
        "expectedStr": "2"
      },
      {
        "label": "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        "inputStr": "{\"n\": 5, \"edges\": [[0, 1], [1, 2], [2, 3], [3, 4]]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "DFS Traversal",
        "time": "O(V + E)",
        "space": "O(V + E)",
        "idea": "Build an adjacency list and iterate through all nodes from 0 to n-1. Start DFS for every unvisited node, incrementing component counter.",
        "code": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n    visited = set()\n    def dfs(node):\n        visited.add(node)\n        for neighbor in adj[node]:\n            if neighbor not in visited:\n                dfs(neighbor)\n    components = 0\n    for i in range(n):\n        if i not in visited:\n            components += 1\n            dfs(i)\n    return components",
        "steps": [
          {
            "label": "Build Undirected Graph",
            "note": "Construct adjacency list adding bi-directional edges",
            "from": 2,
            "to": 5
          },
          {
            "label": "Mark Node Visited",
            "note": "Add target node to visited set in recursive call",
            "from": 8,
            "to": 8
          },
          {
            "label": "Recurse Neighbors",
            "note": "Check all unvisited neighbors connected to current node",
            "from": 9,
            "to": 11
          },
          {
            "label": "Iterate Graph Nodes",
            "note": "Loop through all nodes from 0 to n - 1",
            "from": 13,
            "to": 14
          },
          {
            "label": "Count Component",
            "note": "Increment component count for unvisited root and traverse whole component",
            "from": 15,
            "to": 17
          }
        ]
      },
      {
        "name": "Union-Find (Disjoint Set Union)",
        "time": "O(E * alpha(V))",
        "space": "O(V)",
        "idea": "Initialize parent pointers for each node. Process each edge: if nodes belong to different sets, union them and decrement the total component count by 1.",
        "code": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    parent = [i for i in range(n)]\n    rank = [1] * n\n    def find(n1):\n        res = n1\n        while res != parent[res]:\n            parent[res] = parent[parent[res]]\n            res = parent[res]\n        return res\n    def union(n1, n2):\n        p1, p2 = find(n1), find(n2)\n        if p1 == p2:\n            return 0\n        if rank[p2] > rank[p1]:\n            parent[p1] = p2\n            rank[p2] += rank[p1]\n        else:\n            parent[p2] = p1\n            rank[p1] += rank[p2]\n        return 1\n    res = n\n    for n1, n2 in edges:\n        res -= union(n1, n2)\n    return res",
        "steps": [
          {
            "label": "Initialize Disjoint Set",
            "note": "Set parent pointers to self and ranks to 1",
            "from": 2,
            "to": 3
          },
          {
            "label": "Find Root with Path Compression",
            "note": "Traverse parent pointers and flatten structure",
            "from": 4,
            "to": 9
          },
          {
            "label": "Union Sets",
            "note": "Find roots for both endpoints; return 0 if already in same set",
            "from": 10,
            "to": 13,
            "yes": "Already connected, return 0",
            "no": "Perform rank-based union"
          },
          {
            "label": "Merge Ranks",
            "note": "Attach smaller rank tree under larger rank tree",
            "from": 14,
            "to": 20
          },
          {
            "label": "Process Edges",
            "note": "Start with n components and subtract 1 for each successful union",
            "from": 21,
            "to": 24
          }
        ]
      }
    ]
  },
  "graph-valid-tree": {
    "statement": "You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [a, b] indicates that there is an undirected edge between nodes a and b in the graph. Return true if the edges of the given graph make up a valid tree, and false otherwise.",
    "given": "an integer n and a list of undirected edges",
    "ret": "a boolean indicating whether the graph forms a valid tree",
    "summary": "A valid tree with n nodes must have exactly n - 1 edges and be fully connected without any cycles. Check the edge count first, then use Union-Find or Graph Traversal (DFS/BFS) to verify connectivity and absence of cycles.",
    "starter": "def validTree(n: int, edges: list[list[int]]) -> bool:\n    pass",
    "tests": [
      {
        "label": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        "inputStr": "{\"n\": 5, \"edges\": [[0,1],[0,2],[0,3],[1,4]]}",
        "expectedStr": "true"
      },
      {
        "label": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
        "inputStr": "{\"n\": 5, \"edges\": [[0,1],[1,2],[2,3],[1,3],[1,4]]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "DFS with Cycle Detection",
        "time": "O(N + E)",
        "space": "O(N + E)",
        "idea": "Build an adjacency list and run a Depth-First Search starting from node 0. Keep track of visited nodes and the parent node to prevent going back immediately. If a visited neighbor is not the parent, a cycle exists. Finally, ensure all nodes were visited.",
        "code": "def validTree(n: int, edges: list[list[int]]) -> bool:\n    if len(edges) != n - 1:\n        return False\n    \n    adj = {i: [] for i in range(n)}\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n        \n    visited = set()\n    \n    def dfs(node, parent):\n        if node in visited:\n            return False\n        visited.add(node)\n        for neighbor in adj[node]:\n            if neighbor == parent:\n                continue\n            if not dfs(neighbor, node):\n                return False\n        return True\n        \n    if not dfs(0, -1):\n        return False\n        \n    return len(visited) == n",
        "steps": [
          {
            "label": "Check edge count",
            "note": "Verify if number of edges equals n - 1",
            "from": 2,
            "to": 3,
            "yes": "Proceed to graph construction",
            "no": "Return False immediately if edge count != n - 1"
          },
          {
            "label": "Build adjacency list",
            "note": "Construct undirected graph representation using a dictionary of lists",
            "from": 5,
            "to": 8
          },
          {
            "label": "Start DFS traversal",
            "note": "Invoke DFS starting from node 0 with -1 as dummy parent",
            "from": 23,
            "to": 24,
            "yes": "DFS succeeded without detecting cycles",
            "no": "Cycle detected during traversal, return False"
          },
          {
            "label": "Check cycle & visit neighbor",
            "note": "If a neighbor is visited and not parent, cycle detected",
            "from": 12,
            "to": 20
          },
          {
            "label": "Verify connectivity",
            "note": "Check if all n nodes were reached during DFS",
            "from": 26,
            "to": 26
          }
        ]
      },
      {
        "name": "Union-Find (Disjoint Set Union)",
        "time": "O(N * \u03b1(N))",
        "space": "O(N)",
        "idea": "First verify that len(edges) == n - 1. Then process each edge through a Union-Find structure. If two endpoints of an edge are already in the same connected component, adding the edge creates a cycle.",
        "code": "def validTree(n: int, edges: list[list[int]]) -> bool:\n    if len(edges) != n - 1:\n        return False\n        \n    parent = list(range(n))\n    \n    def find(i):\n        if parent[i] == i:\n            return i\n        parent[i] = find(parent[i])\n        return parent[i]\n        \n    def union(i, j):\n        root_i = find(i)\n        root_j = find(j)\n        if root_i == root_j:\n            return False\n        parent[root_i] = root_j\n        return True\n        \n    for u, v in edges:\n        if not union(u, v):\n            return False\n            \n    return True",
        "steps": [
          {
            "label": "Check edge count",
            "note": "A valid tree must have exactly n - 1 edges",
            "from": 2,
            "to": 3
          },
          {
            "label": "Initialize parent array",
            "note": "Set each node as its own parent set",
            "from": 5,
            "to": 5
          },
          {
            "label": "Find root with path compression",
            "note": "Recursively locate component root and compress tree height",
            "from": 7,
            "to": 11
          },
          {
            "label": "Union sets",
            "note": "Attempt to merge sets containing u and v",
            "from": 13,
            "to": 19,
            "yes": "Roots differ, merged successfully",
            "no": "Roots are identical, cycle found"
          },
          {
            "label": "Process all edges",
            "note": "Iterate through input edges and union endpoints",
            "from": 21,
            "to": 23
          }
        ]
      }
    ]
  },
  "pacific-atlantic-water-flow": {
    "statement": "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c). Water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Return a 2D list of grid coordinates [r, c] where water can flow to both the Pacific and Atlantic oceans.",
    "given": "an m x n integer matrix heights representing terrain elevation",
    "ret": "a list of coordinate pairs [r, c] that can reach both the Pacific and Atlantic oceans",
    "summary": "Instead of checking water flow downwards from every cell, work backward: run multi-source DFS/BFS starting from ocean-adjacent cells going uphill. The intersection of cells reached by both oceans forms the answer.",
    "starter": "def pacificAtlantic(heights: list[list[int]]) -> list[list[int]]:\n    pass",
    "tests": [
      {
        "label": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "inputStr": "{\"heights\": [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]}",
        "expectedStr": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]"
      },
      {
        "label": "heights = [[1]]",
        "inputStr": "{\"heights\": [[1]]}",
        "expectedStr": "[[0,0]]"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force DFS from Every Cell",
        "time": "O((M * N)^2)",
        "space": "O(M * N)",
        "idea": "For every cell (r, c) in the grid, start a DFS traversal following non-increasing height paths. Track if the Pacific and Atlantic borders can be reached during traversal.",
        "code": "def pacificAtlantic(heights: list[list[int]]) -> list[list[int]]:\n    if not heights or not heights[0]:\n        return []\n    ROWS, COLS = len(heights), len(heights[0])\n    \n    def can_reach(r, c, target_ocean, visited):\n        if target_ocean == 'pacific' and (r == 0 or c == 0):\n            return True\n        if target_ocean == 'atlantic' and (r == ROWS - 1 or c == COLS - 1):\n            return True\n        visited.add((r, c))\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < ROWS and 0 <= nc < COLS and (nr, nc) not in visited:\n                if heights[nr][nc] <= heights[r][c]:\n                    if can_reach(nr, nc, target_ocean, visited):\n                        return True\n        return False\n        \n    res = []\n    for r in range(ROWS):\n        for c in range(COLS):\n            p = can_reach(r, c, 'pacific', set())\n            a = can_reach(r, c, 'atlantic', set())\n            if p and a:\n                res.append([r, c])\n    return res",
        "steps": [
          {
            "label": "Loop through all grid cells",
            "note": "Iterate over every row and column combination",
            "from": 20,
            "to": 21
          },
          {
            "label": "Check Pacific reachability",
            "note": "Run DFS to see if water from (r, c) can reach top/left edges",
            "from": 22,
            "to": 22
          },
          {
            "label": "Check Atlantic reachability",
            "note": "Run DFS to see if water from (r, c) can reach bottom/right edges",
            "from": 23,
            "to": 23
          },
          {
            "label": "Collect common coordinates",
            "note": "If cell reaches both oceans, add to results list",
            "from": 24,
            "to": 25
          }
        ]
      },
      {
        "name": "Reverse Multi-Source DFS from Oceans",
        "time": "O(M * N)",
        "space": "O(M * N)",
        "idea": "Perform DFS starting from the ocean edges moving inward. Water can only flow from neighbor to current cell if neighbor height >= current cell height (uphill). Maintain two visited sets for Pacific and Atlantic, then find their intersection.",
        "code": "def pacificAtlantic(heights: list[list[int]]) -> list[list[int]]:\n    if not heights or not heights[0]:\n        return []\n        \n    ROWS, COLS = len(heights), len(heights[0])\n    pacific, atlantic = set(), set()\n    \n    def dfs(r, c, visit, prev_height):\n        if (r, c) in visit or r < 0 or c < 0 or r == ROWS or c == COLS or heights[r][c] < prev_height:\n            return\n        visit.add((r, c))\n        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n            dfs(r + dr, c + dc, visit, heights[r][c])\n            \n    for c in range(COLS):\n        dfs(0, c, pacific, heights[0][c])\n        dfs(ROWS - 1, c, atlantic, heights[ROWS - 1][c])\n        \n    for r in range(ROWS):\n        dfs(r, 0, pacific, heights[r][0])\n        dfs(r, COLS - 1, atlantic, heights[r][COLS - 1])\n        \n    res = []\n    for r in range(ROWS):\n        for c in range(COLS):\n            if (r, c) in pacific and (r, c) in atlantic:\n                res.append([r, c])\n    return res",
        "steps": [
          {
            "label": "Initialize ocean reach sets",
            "note": "Create pacific and atlantic sets to store reachable coordinates",
            "from": 6,
            "to": 6
          },
          {
            "label": "DFS from top and bottom borders",
            "note": "Start DFS from top row for Pacific, bottom row for Atlantic",
            "from": 15,
            "to": 17
          },
          {
            "label": "DFS from left and right borders",
            "note": "Start DFS from left column for Pacific, right column for Atlantic",
            "from": 19,
            "to": 21
          },
          {
            "label": "Traverse uphill recursively",
            "note": "In DFS, only visit adjacent cells with height >= current height",
            "from": 8,
            "to": 13
          },
          {
            "label": "Intersect reachable sets",
            "note": "Find all cells contained in both pacific and atlantic sets",
            "from": 23,
            "to": 27
          }
        ]
      }
    ]
  },
  "alien-dictionary": {
    "statement": "There is a new alien language that uses the Latin alphabet. However, the order among the letters is unknown to you. You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return \"\". If there are multiple solutions, return any of them.",
    "given": "a list of lexicographically ordered words in an unknown alien language",
    "ret": "a string of unique letters in valid topological order, or empty string if invalid",
    "summary": "Compare adjacent words to establish direct precedence rules between characters, constructing a directed graph. Perform topological sorting (Kahn's algorithm or DFS) to derive character ordering while checking for cycle or invalid prefix edge cases.",
    "starter": "def alienOrder(words: list[str]) -> str:\n    pass",
    "tests": [
      {
        "label": "words = [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]",
        "inputStr": "{\"words\": [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]}",
        "expectedStr": "\"wertf\""
      },
      {
        "label": "words = [\"z\",\"x\"]",
        "inputStr": "{\"words\": [\"z\",\"x\"]}",
        "expectedStr": "\"zx\""
      },
      {
        "label": "words = [\"z\",\"x\",\"z\"]",
        "inputStr": "{\"words\": [\"z\",\"x\",\"z\"]}",
        "expectedStr": "\"\""
      }
    ],
    "approaches": [
      {
        "name": "DFS Topological Sort with 3-State Graph Coloring",
        "time": "O(C)",
        "space": "O(U + E)",
        "idea": "Build an adjacency list comparing adjacent words. Use a 3-state DFS traversal (unvisited, visiting, visited) to detect cycles and build reverse topological order of characters.",
        "code": "def alienOrder(words: list[str]) -> str:\n    adj = {c: set() for w in words for c in w}\n    \n    for i in range(len(words) - 1):\n        w1, w2 = words[i], words[i + 1]\n        min_len = min(len(w1), len(w2))\n        if len(w1) > len(w2) and w1[:min_len] == w2[:min_len]:\n            return \"\"\n        for j in range(min_len):\n            if w1[j] != w2[j]:\n                adj[w1[j]].add(w2[j])\n                break\n                \n    visit = {} # False = visiting, True = visited\n    res = []\n    \n    def dfs(c):\n        if c in visit:\n            return visit[c]\n        visit[c] = False\n        for neighbor in adj[c]:\n            if not dfs(neighbor):\n                return False\n        visit[c] = True\n        res.append(c)\n        return True\n        \n    for c in adj:\n        if not dfs(c):\n            return \"\"\n            \n    res.reverse()\n    return \"\".join(res)",
        "steps": [
          {
            "label": "Initialize graph nodes",
            "note": "Create adjacency list entries for all unique characters in input",
            "from": 2,
            "to": 2
          },
          {
            "label": "Compare adjacent words",
            "note": "Find first differing character to add directed edge; handle invalid prefixes",
            "from": 4,
            "to": 12
          },
          {
            "label": "DFS character traversal",
            "note": "Visit graph nodes recursively, marking state for cycle detection",
            "from": 17,
            "to": 25
          },
          {
            "label": "Detect cycle",
            "note": "If neighbor is currently marked 'visiting' (False), cycle exists",
            "from": 18,
            "to": 19
          },
          {
            "label": "Reverse result list",
            "note": "Post-order DFS produces reverse topological order, reverse for final string",
            "from": 31,
            "to": 32
          }
        ]
      },
      {
        "name": "Kahn's Algorithm (BFS Topological Sort)",
        "time": "O(C)",
        "space": "O(U + E)",
        "idea": "Build graph adjacencies and compute in-degrees for every character. Repeatedly pull nodes with 0 in-degree into a queue. If total processed nodes match unique node count, return ordering.",
        "code": "from collections import defaultdict, deque\n\ndef alienOrder(words: list[str]) -> str:\n    adj = {c: set() for w in words for c in w}\n    in_degree = {c: 0 for c in adj}\n    \n    for i in range(len(words) - 1):\n        w1, w2 = words[i], words[i + 1]\n        min_len = min(len(w1), len(w2))\n        if len(w1) > len(w2) and w1[:min_len] == w2[:min_len]:\n            return \"\"\n        for j in range(min_len):\n            if w1[j] != w2[j]:\n                if w2[j] not in adj[w1[j]]:\n                    adj[w1[j]].add(w2[j])\n                    in_degree[w2[j]] += 1\n                break\n                \n    q = deque([c for c in in_degree if in_degree[c] == 0])\n    res = []\n    while q:\n        c = q.popleft()\n        res.append(c)\n        for neighbor in adj[c]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                q.append(neighbor)\n                \n    if len(res) < len(adj):\n        return \"\"\n    return \"\".join(res)",
        "steps": [
          {
            "label": "Build graph & in-degrees",
            "note": "Initialize node sets and calculate in-degrees based on word character rules",
            "from": 4,
            "to": 17
          },
          {
            "label": "Identify zero in-degree nodes",
            "note": "Enqueue all unique characters that have an in-degree of 0",
            "from": 19,
            "to": 19
          },
          {
            "label": "Process queue with BFS",
            "note": "Pop character, append to output, and decrement in-degree of neighbors",
            "from": 21,
            "to": 27
          },
          {
            "label": "Check cycle validity",
            "note": "If processed node count < unique character count, graph has a cycle",
            "from": 29,
            "to": 31,
            "yes": "Invalid configuration / cycle detected",
            "no": "Valid topological order obtained"
          }
        ]
      }
    ]
  },
  "climbing-stairs": {
    "statement": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "given": "an integer n",
    "ret": "the number of distinct ways to climb to the top",
    "summary": "The problem reduces to finding the n-th Fibonacci number because to reach step n, you can either come from step n-1 or step n-2.",
    "starter": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        pass",
    "tests": [
      {
        "label": "n = 2",
        "inputStr": "{\"n\": 2}",
        "expectedStr": "2"
      },
      {
        "label": "n = 3",
        "inputStr": "{\"n\": 3}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "Recursion (Brute Force)",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Recursively call climbStairs(n-1) and climbStairs(n-2) to explore all possible combinations of 1 and 2 steps.",
        "code": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        if n <= 2:\n            return n\n        return self.climbStairs(n - 1) + self.climbStairs(n - 2)",
        "steps": [
          {
            "label": "check base case",
            "note": "If n is 1 or 2, return n immediately as the ways are direct.",
            "from": 3,
            "to": 4,
            "yes": "Returns 1 or 2 base ways",
            "no": "Proceeds to recursive expansion"
          },
          {
            "label": "recurse left branch",
            "note": "Calculate total ways taking a step of size 1 first.",
            "from": 5,
            "to": 5
          },
          {
            "label": "recurse right branch",
            "note": "Calculate total ways taking a step of size 2 first.",
            "from": 5,
            "to": 5
          },
          {
            "label": "combine solutions",
            "note": "Add results of both branches to get total distinct ways for n.",
            "from": 5,
            "to": 5
          }
        ]
      },
      {
        "name": "Dynamic Programming (Space Optimized)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Use two variables to keep track of the number of ways to reach the previous two steps, iteratively updating them up to n.",
        "code": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        if n <= 2:\n            return n\n        prev, curr = 1, 2\n        for _ in range(3, n + 1):\n            prev, curr = curr, prev + curr\n        return curr",
        "steps": [
          {
            "label": "check small n",
            "note": "Handle base cases where n is 1 or 2 directly.",
            "from": 3,
            "to": 4
          },
          {
            "label": "initialize state",
            "note": "Set prev to ways(1)=1 and curr to ways(2)=2.",
            "from": 5,
            "to": 6
          },
          {
            "label": "loop from 3 to n",
            "note": "Iterate sequentially through each staircase step.",
            "from": 6,
            "to": 7
          },
          {
            "label": "update variables",
            "note": "Compute next step ways as (prev + curr) and shift pointers.",
            "from": 7,
            "to": 6
          },
          {
            "label": "return result",
            "note": "Return curr which holds total ways to reach step n.",
            "from": 8,
            "to": 8
          }
        ]
      }
    ]
  },
  "house-robber": {
    "statement": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "given": "an array of integers nums",
    "ret": "an integer representing the maximum money robbed",
    "summary": "For each house, choose the maximum between robbing current house + max profit from 2 houses back, OR skipping current house and taking max profit from 1 house back.",
    "starter": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [1,2,3,1]",
        "inputStr": "{\"nums\": [1, 2, 3, 1]}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [2,7,9,3,1]",
        "inputStr": "{\"nums\": [2, 7, 9, 3, 1]}",
        "expectedStr": "12"
      }
    ],
    "approaches": [
      {
        "name": "Recursive Decision Tree (Brute Force)",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "For each index, recursively decide to either rob the house and skip next, or skip the house and check next.",
        "code": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        def helper(i):\n            if i >= len(nums):\n                return 0\n            return max(nums[i] + helper(i + 2), helper(i + 1))\n        return helper(0)",
        "steps": [
          {
            "label": "check boundary",
            "note": "If index i is past array end, 0 extra profit can be obtained.",
            "from": 3,
            "to": 4
          },
          {
            "label": "rob current house",
            "note": "Add current house money and recurse on index i + 2.",
            "from": 5,
            "to": 5
          },
          {
            "label": "skip current house",
            "note": "Recurse directly on index i + 1 without taking current money.",
            "from": 5,
            "to": 5
          },
          {
            "label": "take maximum",
            "note": "Compare robbing vs skipping options and return the higher value.",
            "from": 5,
            "to": 5
          }
        ]
      },
      {
        "name": "Dynamic Programming (Iterative O(1) Space)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Maintain two variables representing the max loot up to the house before last (rob1) and up to the last house (rob2). Update iteratively.",
        "code": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        rob1, rob2 = 0, 0\n        for n in nums:\n            temp = max(n + rob1, rob2)\n            rob1 = rob2\n            rob2 = temp\n        return rob2",
        "steps": [
          {
            "label": "initialize dp variables",
            "note": "Set rob1 and rob2 to 0 representing max profit before starting.",
            "from": 3,
            "to": 4
          },
          {
            "label": "iterate through houses",
            "note": "Loop through each house value n in nums.",
            "from": 4,
            "to": 5
          },
          {
            "label": "compute max profit for current house",
            "note": "Evaluate max(n + rob1, rob2) to decide optimal choice at index.",
            "from": 5,
            "to": 6
          },
          {
            "label": "shift DP state",
            "note": "Update rob1 to rob2 and rob2 to the newly computed maximum temp.",
            "from": 6,
            "to": 4
          },
          {
            "label": "return answer",
            "note": "Return rob2 which contains the optimal total loot after all houses.",
            "from": 8,
            "to": 8
          }
        ]
      }
    ]
  },
  "house-robber-ii": {
    "statement": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "given": "an array of integers nums",
    "ret": "an integer representing the maximum money robbed in a circular arrangement",
    "summary": "Break the circular arrangement into two linear House Robber subproblems: one excluding the first house, and one excluding the last house. The answer is the maximum of the two.",
    "starter": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [2,3,2]",
        "inputStr": "{\"nums\": [2, 3, 2]}",
        "expectedStr": "3"
      },
      {
        "label": "nums = [1,2,3,1]",
        "inputStr": "{\"nums\": [1, 2, 3, 1]}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [1,2,3]",
        "inputStr": "{\"nums\": [1, 2, 3]}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "Recursive Branching (Brute Force)",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Solve two standard recursive house robber calls: one on nums[:-1] and one on nums[1:], then return the max.",
        "code": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) == 1:\n            return nums[0]\n        def helper(arr, i):\n            if i >= len(arr):\n                return 0\n            return max(arr[i] + helper(arr, i + 2), helper(arr, i + 1))\n        return max(helper(nums[:-1], 0), helper(nums[1:], 0))",
        "steps": [
          {
            "label": "handle single house edge case",
            "note": "If there is only 1 house, rob it directly.",
            "from": 3,
            "to": 4
          },
          {
            "label": "define recursive helper",
            "note": "Helper calculates max money for standard non-circular sub-array.",
            "from": 5,
            "to": 8
          },
          {
            "label": "run helper without last house",
            "note": "Call helper on nums[:-1] assuming the last house cannot be robbed.",
            "from": 9,
            "to": 9
          },
          {
            "label": "run helper without first house",
            "note": "Call helper on nums[1:] assuming the first house cannot be robbed.",
            "from": 9,
            "to": 9
          },
          {
            "label": "return max overall",
            "note": "Return the maximum result from the two subproblem runs.",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "Dynamic Programming with Two Passes",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Reuse the O(1) space linear DP algorithm on two slices: nums[:-1] (ignoring last) and nums[1:] (ignoring first). Take max of these and nums[0].",
        "code": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) == 1:\n            return nums[0]\n        def rob_linear(arr):\n            rob1, rob2 = 0, 0\n            for n in arr:\n                rob1, rob2 = rob2, max(n + rob1, rob2)\n            return rob2\n        return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))",
        "steps": [
          {
            "label": "check single element array",
            "note": "If nums length is 1, return nums[0] directly as there are no circular conflicts.",
            "from": 3,
            "to": 4
          },
          {
            "label": "helper function definition",
            "note": "rob_linear takes a 1D slice and computes standard linear house robber.",
            "from": 5,
            "to": 9
          },
          {
            "label": "execute slice 1 (exclude last)",
            "note": "Call rob_linear on nums[:-1] to handle cases where last house is skipped.",
            "from": 10,
            "to": 10
          },
          {
            "label": "execute slice 2 (exclude first)",
            "note": "Call rob_linear on nums[1:] to handle cases where first house is skipped.",
            "from": 10,
            "to": 10
          },
          {
            "label": "return maximum loot",
            "note": "Return max result between slice 1 and slice 2.",
            "from": 10,
            "to": 10
          }
        ]
      }
    ]
  },
  "longest-palindromic-substring": {
    "statement": "Given a string s, return the longest palindromic substring in s.",
    "given": "a string s",
    "ret": "the longest palindromic substring in s",
    "summary": "Expand around centers for every character (and between adjacent pairs) to check for palindromes, tracking the maximum length found.",
    "starter": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        pass",
    "tests": [
      {
        "label": "s = \"babad\"",
        "inputStr": "{\"s\": \"babad\"}",
        "expectedStr": "\"bab\""
      },
      {
        "label": "s = \"cbbd\"",
        "inputStr": "{\"s\": \"cbbd\"}",
        "expectedStr": "\"bb\""
      }
    ],
    "approaches": [
      {
        "name": "Brute Force",
        "time": "O(n^3)",
        "space": "O(1)",
        "idea": "Check all possible substrings of string s. For each substring, verify whether it is a palindrome by reversing it. Keep track of the longest valid palindrome.",
        "code": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        res = \"\"\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                sub = s[i:j+1]\n                if sub == sub[::-1] and len(sub) > len(res):\n                    res = sub\n        return res",
        "steps": [
          {
            "label": "Initialize result",
            "note": "Initialize res as an empty string to store the longest palindrome.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Outer loop for start index",
            "note": "Iterate i through all starting positions in string s.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Inner loop for end index",
            "note": "Iterate j from i to the end of string s to form every possible substring.",
            "from": 5,
            "to": 5
          },
          {
            "label": "Extract substring",
            "note": "Slice s from index i to j inclusive.",
            "from": 6,
            "to": 6
          },
          {
            "label": "Check palindrome and update",
            "note": "Verify if the slice equals its reverse and if its length exceeds the current res.",
            "from": 7,
            "to": 8,
            "yes": "Update res with the longer palindrome substring.",
            "no": "Skip to the next substring."
          },
          {
            "label": "Return result",
            "note": "Return the longest palindromic substring recorded.",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "Expand Around Center",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Consider every index (and gap between adjacent indices) as the center of a potential palindrome. Expand outward while characters match to find the longest palindrome at each center.",
        "code": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        res = \"\"\n        def expand(l, r):\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                l -= 1\n                r += 1\n            return s[l+1:r]\n        for i in range(len(s)):\n            p1 = expand(i, i)\n            p2 = expand(i, i + 1)\n            res = max([res, p1, p2], key=len)\n        return res",
        "steps": [
          {
            "label": "Define helper expand",
            "note": "Create expand helper function that takes left and right pointers and expands while s[l] == s[r].",
            "from": 4,
            "to": 8
          },
          {
            "label": "Iterate through string centers",
            "note": "Loop i from index 0 to len(s) - 1.",
            "from": 9,
            "to": 9
          },
          {
            "label": "Expand odd length palindrome",
            "note": "Call expand(i, i) to find the longest odd-length palindrome centered at character i.",
            "from": 10,
            "to": 10
          },
          {
            "label": "Expand even length palindrome",
            "note": "Call expand(i, i + 1) to find the longest even-length palindrome centered between i and i + 1.",
            "from": 11,
            "to": 11
          },
          {
            "label": "Update max palindrome",
            "note": "Compare res, p1, and p2 by length and update res with the maximum string.",
            "from": 12,
            "to": 12
          },
          {
            "label": "Return result",
            "note": "Return the maximum length palindrome found.",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "palindromic-substrings": {
    "statement": "Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.",
    "given": "a string s",
    "ret": "the total count of palindromic substrings",
    "summary": "Count palindromes by expanding outward from each character index (odd-length) and each adjacent character pair (even-length).",
    "starter": "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        pass",
    "tests": [
      {
        "label": "s = \"abc\"",
        "inputStr": "{\"s\": \"abc\"}",
        "expectedStr": "3"
      },
      {
        "label": "s = \"aaa\"",
        "inputStr": "{\"s\": \"aaa\"}",
        "expectedStr": "6"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force Substring Check",
        "time": "O(n^3)",
        "space": "O(1)",
        "idea": "Generate every possible substring and check if it reads the same forward and backward. Increment counter whenever a valid palindrome is identified.",
        "code": "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        count = 0\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                sub = s[i:j+1]\n                if sub == sub[::-1]:\n                    count += 1\n        return count",
        "steps": [
          {
            "label": "Initialize counter",
            "note": "Set count = 0 to store total number of palindromes.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Loop start pointer",
            "note": "Loop i through all indices of string s.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Loop end pointer",
            "note": "Loop j from i to len(s) to form all substrings s[i:j+1].",
            "from": 5,
            "to": 6
          },
          {
            "label": "Palindrome check",
            "note": "Check if sub is equal to its reversed version sub[::-1].",
            "from": 7,
            "to": 8,
            "yes": "Increment count by 1.",
            "no": "Continue loop without incrementing."
          },
          {
            "label": "Return count",
            "note": "Return the total accumulated palindromes.",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "Expand Around Center",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Treat every position and gap between positions as a potential palindrome center. Expand outwards using two pointers while characters match, incrementing count for each valid palindrome.",
        "code": "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        count = 0\n        for i in range(len(s)):\n            for l, r in [(i, i), (i, i + 1)]:\n                while l >= 0 and r < len(s) and s[l] == s[r]:\n                    count += 1\n                    l -= 1\n                    r += 1\n        return count",
        "steps": [
          {
            "label": "Initialize counter",
            "note": "Set count = 0 to track the number of valid palindromes.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Iterate center index",
            "note": "Loop i through every character index in string s.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Select center pairs",
            "note": "For each index i, test center pair (i, i) for odd lengths and (i, i + 1) for even lengths.",
            "from": 5,
            "to": 5
          },
          {
            "label": "Expand outward condition check",
            "note": "Check if left pointer l and right pointer r stay in bounds and s[l] == s[r].",
            "from": 6,
            "to": 6,
            "yes": "Valid palindrome found; proceed into expansion body.",
            "no": "Stop expanding for this center."
          },
          {
            "label": "Increment count and shift pointers",
            "note": "Increment count by 1, decrement l, and increment r to expand the window.",
            "from": 7,
            "to": 9
          },
          {
            "label": "Return result",
            "note": "Return total count after testing all centers.",
            "from": 10,
            "to": 10
          }
        ]
      }
    ]
  },
  "decode-ways": {
    "statement": "A message containing letters from A-Z can be encoded into numbers using the mapping 'A' -> \"1\", 'B' -> \"2\", ..., 'Z' -> \"26\". Given a string s containing only digits, return the number of ways to decode it.",
    "given": "a digit string s",
    "ret": "the total number of valid decodings",
    "summary": "Use Dynamic Programming where each state represents decodings up to index i based on valid single-digit ('1'-'9') and two-digit ('10'-'26') transitions.",
    "starter": "class Solution:\n    def numDecodings(self, s: str) -> int:\n        pass",
    "tests": [
      {
        "label": "s = \"12\"",
        "inputStr": "{\"s\": \"12\"}",
        "expectedStr": "2"
      },
      {
        "label": "s = \"226\"",
        "inputStr": "{\"s\": \"226\"}",
        "expectedStr": "3"
      },
      {
        "label": "s = \"06\"",
        "inputStr": "{\"s\": \"06\"}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "Recursive DFS",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Recursively attempt to decode 1 digit or 2 digits at a time starting from index i. If leading digit is '0', the path is invalid.",
        "code": "class Solution:\n    def numDecodings(self, s: str) -> int:\n        def dfs(i):\n            if i == len(s): return 1\n            if s[i] == '0': return 0\n            res = dfs(i + 1)\n            if i + 1 < len(s) and (s[i] == '1' or (s[i] == '2' and s[i+1] in '0123456')):\n                res += dfs(i + 2)\n            return res\n        return dfs(0)",
        "steps": [
          {
            "label": "Define recursive function",
            "note": "Define inner function dfs(i) to return total decodings from index i.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Check base cases",
            "note": "If i reaches len(s), return 1. If s[i] == '0', return 0 as '0' cannot be mapped alone.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Decode single digit",
            "note": "Recursively decode remaining string taking 1 character s[i].",
            "from": 6,
            "to": 6
          },
          {
            "label": "Decode double digit check",
            "note": "Check if s[i:i+2] forms a valid number between 10 and 26.",
            "from": 7,
            "to": 8,
            "yes": "Add dfs(i + 2) to res.",
            "no": "Do not attempt two-character decode."
          },
          {
            "label": "Return result",
            "note": "Return accumulated result for subproblem and kick off search with dfs(0).",
            "from": 9,
            "to": 10
          }
        ]
      },
      {
        "name": "Iterative Dynamic Programming (O(1) Space)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Iterate through the string maintaining DP state for the previous two subproblems. At index i, check single digit s[i] and two digit s[i-1:i+1] validity.",
        "code": "class Solution:\n    def numDecodings(self, s: str) -> int:\n        if not s or s[0] == '0': return 0\n        prev2, prev1 = 1, 1\n        for i in range(1, len(s)):\n            curr = 0\n            if s[i] != '0': curr += prev1\n            two_digit = int(s[i-1:i+1])\n            if 10 <= two_digit <= 26: curr += prev2\n            prev2, prev1 = prev1, curr\n        return prev1",
        "steps": [
          {
            "label": "Check edge case",
            "note": "If string is empty or starts with '0', return 0 as it cannot be decoded.",
            "from": 3,
            "to": 3,
            "yes": "Return 0 immediately.",
            "no": "Proceed to algorithm."
          },
          {
            "label": "Initialize DP state variables",
            "note": "Set prev2 = 1 (dp[i-2]) and prev1 = 1 (dp[i-1]) for index 0.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Loop through remaining digits",
            "note": "Iterate i from index 1 to len(s) - 1.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Single digit transition",
            "note": "If s[i] != '0', add prev1 to curr ways.",
            "from": 7,
            "to": 7
          },
          {
            "label": "Two digit transition",
            "note": "Parse s[i-1:i+1] as int. If value is between 10 and 26 inclusive, add prev2 to curr.",
            "from": 8,
            "to": 9
          },
          {
            "label": "Shift pointers",
            "note": "Update prev2 = prev1 and prev1 = curr for the next iteration.",
            "from": 10,
            "to": 10
          },
          {
            "label": "Return result",
            "note": "Return prev1, which contains total decodings for full string length.",
            "from": 11,
            "to": 11
          }
        ]
      }
    ]
  },
  "coin-change": {
    "statement": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin.",
    "given": "an integer array coins and an integer amount",
    "ret": "the minimum number of coins needed to make up the amount, or -1 if impossible",
    "summary": "Use dynamic programming to build a 1D table where dp[i] represents the minimum coins needed for amount i, building up solutions from 0 to amount.",
    "starter": "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        pass",
    "tests": [
      {
        "label": "coins = [1, 2, 5], amount = 11",
        "inputStr": "{\"coins\": [1, 2, 5], \"amount\": 11}",
        "expectedStr": "3"
      },
      {
        "label": "coins = [2], amount = 3",
        "inputStr": "{\"coins\": [2], \"amount\": 3}",
        "expectedStr": "-1"
      },
      {
        "label": "coins = [1], amount = 0",
        "inputStr": "{\"coins\": [1], \"amount\": 0}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "brute force recursion",
        "time": "O(S^N)",
        "space": "O(S)",
        "idea": "Try all combinations of coins recursively by subtracting each coin denomination from the remaining amount until reaching 0 or a negative amount.",
        "code": "def coinChange(coins, amount):\n    def dfs(rem):\n        if rem == 0:\n            return 0\n        if rem < 0:\n            return float('inf')\n        min_coins = float('inf')\n        for c in coins:\n            res = dfs(rem - c)\n            if res != float('inf'):\n                min_coins = min(min_coins, res + 1)\n        return min_coins\n    ans = dfs(amount)\n    return ans if ans != float('inf') else -1",
        "steps": [
          {
            "label": "base case check (0)",
            "note": "Check if remaining amount is zero.",
            "from": 1,
            "to": 2,
            "yes": "Return 0 as no more coins are needed."
          },
          {
            "label": "base case check (negative)",
            "note": "Check if remaining amount is negative.",
            "from": 2,
            "to": 3,
            "yes": "Return infinity to represent an invalid coin path."
          },
          {
            "label": "explore denominations",
            "note": "Iterate through each available coin denomination.",
            "from": 3,
            "to": 4
          },
          {
            "label": "recursive step",
            "note": "Recurse on the remaining amount minus current coin.",
            "from": 4,
            "to": 5
          },
          {
            "label": "update minimum count",
            "note": "If recursion returned valid answer, update min_coins with 1 + result.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "optimal dynamic programming (bottom-up)",
        "time": "O(N * S)",
        "space": "O(S)",
        "idea": "Build a DP table of size amount + 1 initialized to infinity. dp[0] = 0. For each value from 1 to amount, compute min coins by checking all coin options.",
        "code": "def coinChange(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for c in coins:\n            if i - c >= 0:\n                dp[i] = min(dp[i], dp[i - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
        "steps": [
          {
            "label": "initialize dp table",
            "note": "Create array dp of size amount + 1 filled with inf, set dp[0] = 0.",
            "from": 1,
            "to": 2
          },
          {
            "label": "outer loop amounts",
            "note": "Iterate sub-amount i from 1 up to target amount.",
            "from": 2,
            "to": 3
          },
          {
            "label": "inner loop coins",
            "note": "Try taking each coin c from the given coins array.",
            "from": 3,
            "to": 4
          },
          {
            "label": "check valid subtraction",
            "note": "Check if sub-amount i can accommodate coin value c.",
            "from": 4,
            "to": 5,
            "yes": "Update dp[i] = min(dp[i], dp[i - c] + 1).",
            "no": "Skip this coin as it exceeds current sub-amount."
          },
          {
            "label": "return answer",
            "note": "Return dp[amount] if not infinity, otherwise -1.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "maximum-product-subarray": {
    "statement": "Given an integer array nums, find a subarray that has the largest product, and return the product.",
    "given": "an integer array nums",
    "ret": "the maximum product of a contiguous subarray",
    "summary": "Track both the current maximum and current minimum products at each position to handle double negatives flipping products to large positive values.",
    "starter": "class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [2, 3, -2, 4]",
        "inputStr": "{\"nums\": [2, 3, -2, 4]}",
        "expectedStr": "6"
      },
      {
        "label": "nums = [-2, 0, -1]",
        "inputStr": "{\"nums\": [-2, 0, -1]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(N^2)",
        "space": "O(1)",
        "idea": "Iterate through every possible starting index i and ending index j to compute products for all contiguous subarrays.",
        "code": "def maxProduct(nums):\n    max_prod = float('-inf')\n    for i in range(len(nums)):\n        curr = 1\n        for j in range(i, len(nums)):\n            curr *= nums[j]\n            max_prod = max(max_prod, curr)\n    return max_prod",
        "steps": [
          {
            "label": "initialize max_prod",
            "note": "Set global max product tracker to negative infinity.",
            "from": 1,
            "to": 2
          },
          {
            "label": "outer loop start index",
            "note": "Pick starting index i for candidate subarray.",
            "from": 2,
            "to": 3
          },
          {
            "label": "inner loop end index",
            "note": "Extend end index j and multiply current running product by nums[j].",
            "from": 3,
            "to": 4
          },
          {
            "label": "update max_prod",
            "note": "Compare running product with global max and record maximum.",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "optimal dynamic programming (min/max tracking)",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "Keep track of curMax and curMin at each step. Swap or calculate candidate products using current num, curMax * num, and curMin * num.",
        "code": "def maxProduct(nums):\n    res = max(nums)\n    curMin, curMax = 1, 1\n    for n in nums:\n        if n == 0:\n            curMin, curMax = 1, 1\n            continue\n        tmp = curMax * n\n        curMax = max(n * curMax, n * curMin, n)\n        curMin = min(tmp, n * curMin, n)\n        res = max(res, curMax)\n    return res",
        "steps": [
          {
            "label": "initialize trackers",
            "note": "Set res to max value in nums, and curMin, curMax to 1.",
            "from": 1,
            "to": 2
          },
          {
            "label": "iterate through elements",
            "note": "Process each number n in nums.",
            "from": 2,
            "to": 3
          },
          {
            "label": "zero check",
            "note": "If element is 0, reset product trackers to 1.",
            "from": 3,
            "to": 4,
            "yes": "Reset curMin and curMax to 1 and continue loop.",
            "no": "Proceed to calculate new products."
          },
          {
            "label": "compute new max and min",
            "note": "Calculate candidate products and update curMax and curMin.",
            "from": 4,
            "to": 5
          },
          {
            "label": "update global max",
            "note": "Update overall result res with curMax.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "word-break": {
    "statement": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    "given": "a string s and a dictionary of strings wordDict",
    "ret": "true if s can be segmented into dictionary words, false otherwise",
    "summary": "Use dynamic programming with a boolean array dp where dp[i] indicates whether prefix or suffix starting at i can be formed using words in wordDict.",
    "starter": "class Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        pass",
    "tests": [
      {
        "label": "s = \"leetcode\", wordDict = [\"leet\", \"code\"]",
        "inputStr": "{\"s\": \"leetcode\", \"wordDict\": [\"leet\", \"code\"]}",
        "expectedStr": "true"
      },
      {
        "label": "s = \"applepenapple\", wordDict = [\"apple\", \"pen\"]",
        "inputStr": "{\"s\": \"applepenapple\", \"wordDict\": [\"apple\", \"pen\"]}",
        "expectedStr": "true"
      },
      {
        "label": "s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]",
        "inputStr": "{\"s\": \"catsandog\", \"wordDict\": [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "brute force recursion",
        "time": "O(2^N)",
        "space": "O(N)",
        "idea": "Recursively test every prefix of string s. If a prefix exists in wordDict, recurse on the remaining substring.",
        "code": "def wordBreak(s, wordDict):\n    def canBreak(start):\n        if start == len(s):\n            return True\n        for end in range(start + 1, len(s) + 1):\n            if s[start:end] in wordDict and canBreak(end):\n                return True\n        return False\n    return canBreak(0)",
        "steps": [
          {
            "label": "base case check",
            "note": "Check if start pointer has reached end of s.",
            "from": 1,
            "to": 2,
            "yes": "Return True since entire string is segmented successfully."
          },
          {
            "label": "loop prefix substrings",
            "note": "Try ending positions end from start + 1 to len(s).",
            "from": 2,
            "to": 3
          },
          {
            "label": "valid word and recursive branch",
            "note": "Check if current substring is in wordDict and remaining string can be broken.",
            "from": 3,
            "to": 4,
            "yes": "Return True immediately.",
            "no": "Continue checking next substring end index."
          }
        ]
      },
      {
        "name": "optimal dynamic programming (1D DP)",
        "time": "O(N * M * K)",
        "space": "O(N)",
        "idea": "Build a boolean array dp of size len(s) + 1 bottom-up from end to start. dp[i] is true if s[i:] can be matched with words in wordDict.",
        "code": "def wordBreak(s, wordDict):\n    dp = [False] * (len(s) + 1)\n    dp[len(s)] = True\n    for i in range(len(s) - 1, -1, -1):\n        for w in wordDict:\n            if i + len(w) <= len(s) and s[i : i + len(w)] == w:\n                dp[i] = dp[i + len(w)]\n            if dp[i]:\n                break\n    return dp[0]",
        "steps": [
          {
            "label": "initialize dp array",
            "note": "Create boolean array dp of length len(s) + 1 with False, set base case dp[len(s)] = True.",
            "from": 1,
            "to": 2
          },
          {
            "label": "loop backwards through string",
            "note": "Iterate index i from len(s) - 1 down to 0.",
            "from": 2,
            "to": 3
          },
          {
            "label": "try dictionary words",
            "note": "Check each word w in wordDict.",
            "from": 3,
            "to": 4
          },
          {
            "label": "match prefix substring",
            "note": "If s[i : i + len(w)] matches w, set dp[i] = dp[i + len(w)].",
            "from": 4,
            "to": 5,
            "yes": "Assign dp[i] from state dp[i + len(w)].",
            "no": "Try next dictionary word."
          },
          {
            "label": "early exit inner loop",
            "note": "If dp[i] becomes True, break inner loop early.",
            "from": 5,
            "to": 6
          },
          {
            "label": "return result",
            "note": "Return dp[0] indicating if full string s can be broken.",
            "from": 6,
            "to": 7
          }
        ]
      }
    ]
  },
  "longest-increasing-subsequence": {
    "statement": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    "given": "an integer array nums",
    "ret": "the length of the longest strictly increasing subsequence",
    "summary": "Use Dynamic Programming in O(n^2) time or Patience Sorting with Binary Search in O(n log n) time to keep track of increasing subsequence candidates.",
    "starter": "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
        "inputStr": "{\"nums\": [10, 9, 2, 5, 3, 7, 101, 18]}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [0, 1, 0, 3, 2, 3]",
        "inputStr": "{\"nums\": [0, 1, 0, 3, 2, 3]}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [7, 7, 7, 7, 7, 7, 7]",
        "inputStr": "{\"nums\": [7, 7, 7, 7, 7, 7, 7]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "Dynamic Programming",
        "time": "O(n^2)",
        "space": "O(n)",
        "idea": "Maintain a 1D DP array where dp[i] represents the length of the longest increasing subsequence that ends at index i.",
        "code": "class Solution:\n    def lengthOfLIS(self, nums: list[int]) -> int:\n        if not nums:\n            return 0\n        dp = [1] * len(nums)\n        for i in range(len(nums)):\n            for j in range(i):\n                if nums[i] > nums[j]:\n                    dp[i] = max(dp[i], dp[j] + 1)\n        return max(dp)",
        "steps": [
          {
            "label": "Initialize DP Array",
            "note": "Create a dp array of size n filled with 1s since every individual element is a valid sequence of length 1.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Outer Loop",
            "note": "Iterate through each element i from 0 to n-1 to compute the LIS ending at index i.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Inner Loop",
            "note": "Iterate through all preceding elements j from 0 to i-1.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check Increasing Condition",
            "note": "Check if nums[i] > nums[j].",
            "from": 4,
            "to": 5,
            "yes": "Update dp[i] = max(dp[i], dp[j] + 1)",
            "no": "Continue to the next j"
          },
          {
            "label": "Return Result",
            "note": "Return the maximum value present in the dp array.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "Patience Sorting / Binary Search",
        "time": "O(n log n)",
        "space": "O(n)",
        "idea": "Maintain an array tails where tails[i] stores the smallest tail of all increasing subsequences of length i+1. Binary search is used to place or update elements in tails.",
        "code": "import bisect\n\nclass Solution:\n    def lengthOfLIS(self, nums: list[int]) -> int:\n        tails = []\n        for x in nums:\n            idx = bisect.bisect_left(tails, x)\n            if idx == len(tails):\n                tails.append(x)\n            else:\n                tails[idx] = x\n        return len(tails)",
        "steps": [
          {
            "label": "Initialize Tails",
            "note": "Create an empty list tails to store minimal end values of subsequences.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Iterate Elements",
            "note": "Loop through each number x in the input list nums.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Binary Search",
            "note": "Find the insertion point idx of x in tails using bisect_left.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Extend or Replace",
            "note": "Check if idx equals the length of tails.",
            "from": 4,
            "to": 5,
            "yes": "Append x to tails (found a longer sequence)",
            "no": "Overwrite tails[idx] with x (found a smaller tail value for length idx+1)"
          },
          {
            "label": "Return Length",
            "note": "The length of tails array represents the length of the LIS.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "unique-paths": {
    "statement": "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    "given": "two integers m and n representing grid dimensions",
    "ret": "the number of possible unique paths from top-left to bottom-right",
    "summary": "Use dynamic programming where the number of unique paths to cell (r, c) is the sum of unique paths to (r-1, c) and (r, c-1).",
    "starter": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        pass",
    "tests": [
      {
        "label": "m = 3, n = 7",
        "inputStr": "{\"m\": 3, \"n\": 7}",
        "expectedStr": "28"
      },
      {
        "label": "m = 3, n = 2",
        "inputStr": "{\"m\": 3, \"n\": 2}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "2D Dynamic Programming",
        "time": "O(m * n)",
        "space": "O(m * n)",
        "idea": "Build an m x n table where each cell (r, c) stores the number of unique paths to reach it from (0, 0).",
        "code": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [[1] * n for _ in range(m)]\n        for r in range(1, m):\n            for c in range(1, n):\n                dp[r][c] = dp[r-1][c] + dp[r][c-1]\n        return dp[m-1][n-1]",
        "steps": [
          {
            "label": "Initialize 2D Grid",
            "note": "Create an m x n grid filled with 1s since top row and leftmost column cells only have 1 path.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Outer Row Loop",
            "note": "Iterate row index r from 1 to m-1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Inner Column Loop",
            "note": "Iterate column index c from 1 to n-1.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Compute Paths",
            "note": "Set dp[r][c] to the sum of cell above dp[r-1][c] and cell to the left dp[r][c-1].",
            "from": 4,
            "to": 5
          },
          {
            "label": "Return Destination Value",
            "note": "Return dp[m-1][n-1] containing total paths to the bottom-right corner.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "1D Space-Optimized Dynamic Programming",
        "time": "O(m * n)",
        "space": "O(n)",
        "idea": "Since cell calculation only requires the current and previous row values, we compress the 2D grid into a 1D array of size n.",
        "code": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        dp = [1] * n\n        for r in range(1, m):\n            for c in range(1, n):\n                dp[c] += dp[c-1]\n        return dp[-1]",
        "steps": [
          {
            "label": "Initialize 1D DP Array",
            "note": "Create a 1D list dp of size n with all 1s representing paths in the first row.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Iterate Rows",
            "note": "Loop through row indices from 1 to m-1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Iterate Columns & Accumulate",
            "note": "For each column c from 1 to n-1, add dp[c-1] (left neighbor) to dp[c] (top neighbor).",
            "from": 3,
            "to": 4
          },
          {
            "label": "Return Final Answer",
            "note": "Return dp[-1], which stores unique paths to the bottom-right element.",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "longest-common-subsequence": {
    "statement": "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    "given": "two strings text1 and text2",
    "ret": "the length of their longest common subsequence",
    "summary": "Use dynamic programming with a 2D table where dp[i][j] stores the LCS length for text1[0..i-1] and text2[0..j-1]. Matches add 1 to diagonal, mismatches take max of top and left.",
    "starter": "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        pass",
    "tests": [
      {
        "label": "text1 = \"abcde\", text2 = \"ace\"",
        "inputStr": "{\"text1\": \"abcde\", \"text2\": \"ace\"}",
        "expectedStr": "3"
      },
      {
        "label": "text1 = \"abc\", text2 = \"abc\"",
        "inputStr": "{\"text1\": \"abc\", \"text2\": \"abc\"}",
        "expectedStr": "3"
      },
      {
        "label": "text1 = \"abc\", text2 = \"def\"",
        "inputStr": "{\"text1\": \"abc\", \"text2\": \"def\"}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "2D Dynamic Programming",
        "time": "O(m * n)",
        "space": "O(m * n)",
        "idea": "Construct an (m+1) x (n+1) grid to build up LCS lengths subproblem by subproblem.",
        "code": "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        m, n = len(text1), len(text2)\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        for i in range(1, m + 1):\n            for j in range(1, n + 1):\n                if text1[i-1] == text2[j-1]:\n                    dp[i][j] = dp[i-1][j-1] + 1\n                else:\n                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n        return dp[m][n]",
        "steps": [
          {
            "label": "Initialize DP Grid",
            "note": "Create an (m+1) x (n+1) grid populated with 0s to handle empty string base cases.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Outer Loop text1",
            "note": "Iterate index i from 1 to m.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Inner Loop text2",
            "note": "Iterate index j from 1 to n.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Character Match Check",
            "note": "Check if text1[i-1] equals text2[j-1].",
            "from": 4,
            "to": 5,
            "yes": "Match: Set dp[i][j] = dp[i-1][j-1] + 1",
            "no": "Mismatch: Set dp[i][j] = max(dp[i-1][j], dp[i][j-1])"
          },
          {
            "label": "Return LCS Length",
            "note": "Return dp[m][n] which stores the maximum LCS length for full text1 and text2.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "1D Space-Optimized Dynamic Programming",
        "time": "O(m * n)",
        "space": "O(min(m, n))",
        "idea": "Reduce memory usage by maintaining a 1D DP array of size min(m, n) + 1 and tracking the top-left diagonal state.",
        "code": "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        if len(text1) < len(text2):\n            text1, text2 = text2, text1\n        dp = [0] * (len(text2) + 1)\n        for char1 in text1:\n            prev_diag = 0\n            for j, char2 in enumerate(text2):\n                temp = dp[j+1]\n                if char1 == char2:\n                    dp[j+1] = prev_diag + 1\n                else:\n                    dp[j+1] = max(dp[j+1], dp[j])\n                prev_diag = temp\n        return dp[-1]",
        "steps": [
          {
            "label": "Optimize String Lengths",
            "note": "Ensure text2 is the shorter string to optimize space complexity.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Initialize 1D Array",
            "note": "Create 1D dp array of size len(text2) + 1 filled with 0s.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Outer Loop text1 Characters",
            "note": "Iterate over each character char1 in text1.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Inner Loop text2 Characters",
            "note": "Iterate over text2 saving current dp[j+1] as diagonal value for next iteration.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Update Cell Value",
            "note": "If char1 == char2, update dp[j+1] = prev_diag + 1; otherwise, max(dp[j+1], dp[j]).",
            "from": 5,
            "to": 6
          },
          {
            "label": "Return Result",
            "note": "Return dp[-1] containing the overall LCS length.",
            "from": 6,
            "to": 7
          }
        ]
      }
    ]
  },
  "insert-interval": {
    "statement": "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start_i, end_i]` represent the start and the end of the `i`-th interval, and `intervals` is sorted in ascending order by `start_i`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.\n\nInsert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start_i` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).\n\nReturn `intervals` after the insertion.",
    "given": "a sorted array of non-overlapping intervals `intervals` and a `newInterval`",
    "ret": "a new list of non-overlapping intervals containing all merged intervals",
    "summary": "Iterate through the array: collect intervals ending before `newInterval`, merge all intervals overlapping with `newInterval`, then add `newInterval` and remaining intervals.",
    "starter": "class Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "inputStr": "{\"intervals\": [[1,3],[6,9]], \"newInterval\": [2,5]}",
        "expectedStr": "[[1,5],[6,9]]"
      },
      {
        "label": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        "inputStr": "{\"intervals\": [[1,2],[3,5],[6,7],[8,10],[12,16]], \"newInterval\": [4,8]}",
        "expectedStr": "[[1,2],[3,10],[12,16]]"
      }
    ],
    "approaches": [
      {
        "name": "Insert and Re-sort (Brute Force)",
        "time": "O(N log N)",
        "space": "O(N)",
        "idea": "Append the `newInterval` to the `intervals` list, re-sort the entire list by start time, and then run a standard interval merging pass.",
        "code": "class Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        intervals.append(newInterval)\n        intervals.sort(key=lambda x: x[0])\n        merged = []\n        for interval in intervals:\n            if not merged or merged[-1][1] < interval[0]:\n                merged.append(interval)\n            else:\n                merged[-1][1] = max(merged[-1][1], interval[1])\n        return merged",
        "steps": [
          {
            "label": "Append new interval",
            "note": "Add newInterval to the existing list of intervals",
            "from": 3,
            "to": 3
          },
          {
            "label": "Sort intervals",
            "note": "Sort all intervals by their start time O(N log N)",
            "from": 4,
            "to": 4
          },
          {
            "label": "Initialize output array",
            "note": "Create empty merged list to build non-overlapping intervals",
            "from": 5,
            "to": 5
          },
          {
            "label": "Iterate through sorted intervals",
            "note": "Check overlap with last interval in merged",
            "from": 6,
            "to": 7
          },
          {
            "label": "Append non-overlapping interval",
            "note": "If no overlap, append interval directly to merged",
            "from": 7,
            "to": 8,
            "yes": "merged is empty or merged[-1].end < interval.start"
          },
          {
            "label": "Merge overlapping interval",
            "note": "Update end time of last interval in merged",
            "from": 9,
            "to": 10,
            "no": "Intervals overlap"
          }
        ]
      },
      {
        "name": "Linear Scan (Optimal)",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Leverage the existing sorted order: add all intervals that end before `newInterval` starts, merge all overlapping intervals into `newInterval`, and finally add `newInterval` and remaining intervals.",
        "code": "class Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        res = []\n        for i, interval in enumerate(intervals):\n            if newInterval[1] < interval[0]:\n                res.append(newInterval)\n                return res + intervals[i:]\n            elif newInterval[0] > interval[1]:\n                res.append(interval)\n            else:\n                newInterval = [min(newInterval[0], interval[0]), max(newInterval[1], interval[1])]\n        res.append(newInterval)\n        return res",
        "steps": [
          {
            "label": "Initialize result array",
            "note": "Create res list to hold output intervals",
            "from": 3,
            "to": 3
          },
          {
            "label": "Iterate intervals",
            "note": "Process each interval sequentially",
            "from": 4,
            "to": 4
          },
          {
            "label": "Check if newInterval comes strictly before",
            "note": "If newInterval finishes before interval starts, insert newInterval and concatenate rest",
            "from": 5,
            "to": 7,
            "yes": "newInterval[1] < interval[0]"
          },
          {
            "label": "Check if newInterval comes strictly after",
            "note": "If current interval finishes before newInterval starts, append current interval",
            "from": 8,
            "to": 9,
            "yes": "newInterval[0] > interval[1]"
          },
          {
            "label": "Merge overlapping intervals",
            "note": "Update newInterval bounds to encompass current overlapping interval",
            "from": 10,
            "to": 11,
            "no": "Intervals overlap"
          },
          {
            "label": "Append remaining newInterval",
            "note": "Append newInterval if loop completes without early return",
            "from": 12,
            "to": 13
          }
        ]
      }
    ]
  },
  "merge-intervals": {
    "statement": "Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "given": "an array of `intervals` where each interval has a start and end time",
    "ret": "an array of non-overlapping intervals covering all input intervals",
    "summary": "Sort the intervals by their start time, then iterate through to merge consecutive overlapping intervals.",
    "starter": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "inputStr": "{\"intervals\": [[1,3],[2,6],[8,10],[15,18]]}",
        "expectedStr": "[[1,6],[8,10],[15,18]]"
      },
      {
        "label": "intervals = [[1,4],[4,5]]",
        "inputStr": "{\"intervals\": [[1,4],[4,5]]}",
        "expectedStr": "[[1,5]]"
      }
    ],
    "approaches": [
      {
        "name": "Graph / Connected Components (Brute Force)",
        "time": "O(N^2)",
        "space": "O(N^2)",
        "idea": "Build an undirected graph where nodes are intervals and edges represent overlap. Find connected components and merge each component into a single interval.",
        "code": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        def overlap(a, b):\n            return a[0] <= b[1] and b[0] <= a[1]\n        \n        adj = {i: [] for i in range(len(intervals))}\n        for i in range(len(intervals)):\n            for j in range(i + 1, len(intervals)):\n                if overlap(intervals[i], intervals[j]):\n                    adj[i].append(j)\n                    adj[j].append(i)\n        \n        visited = set()\n        res = []\n        for i in range(len(intervals)):\n            if i not in visited:\n                comp = []\n                stack = [i]\n                visited.add(i)\n                while stack:\n                    node = stack.pop()\n                    comp.append(intervals[node])\n                    for nei in adj[node]:\n                        if nei not in visited:\n                            visited.add(nei)\n                            stack.append(nei)\n                res.append([min(x[0] for x in comp), max(x[1] for x in comp)])\n        return res",
        "steps": [
          {
            "label": "Define overlap check",
            "note": "Helper function to determine if two intervals overlap",
            "from": 3,
            "to": 4
          },
          {
            "label": "Build adjacency graph",
            "note": "Construct graph edges between overlapping interval pairs O(N^2)",
            "from": 6,
            "to": 11
          },
          {
            "label": "Traverse graph components",
            "note": "Use DFS/BFS to group connected overlapping intervals",
            "from": 13,
            "to": 24
          },
          {
            "label": "Merge connected component",
            "note": "Combine each component into [min_start, max_end] and add to result",
            "from": 25,
            "to": 25
          },
          {
            "label": "Return merged intervals",
            "note": "Return list of merged interval components",
            "from": 26,
            "to": 26
          }
        ]
      },
      {
        "name": "Sort and Merge (Optimal)",
        "time": "O(N log N)",
        "space": "O(N)",
        "idea": "Sort intervals by start time. Iterate through intervals, comparing each with the last merged interval to determine if it should be merged or added as new.",
        "code": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        intervals.sort(key=lambda x: x[0])\n        merged = []\n        for interval in intervals:\n            if not merged or merged[-1][1] < interval[0]:\n                merged.append(interval)\n            else:\n                merged[-1][1] = max(merged[-1][1], interval[1])\n        return merged",
        "steps": [
          {
            "label": "Sort intervals",
            "note": "Sort all intervals in ascending order based on start time",
            "from": 3,
            "to": 3
          },
          {
            "label": "Initialize result list",
            "note": "Create merged array to store finalized intervals",
            "from": 4,
            "to": 4
          },
          {
            "label": "Iterate intervals",
            "note": "Loop through each interval in sorted list",
            "from": 5,
            "to": 5
          },
          {
            "label": "Check overlap condition",
            "note": "If merged is empty or current start > last end, append current interval",
            "from": 6,
            "to": 7,
            "yes": "No overlap with last interval"
          },
          {
            "label": "Merge intervals",
            "note": "If overlap exists, update last interval's end to max end time",
            "from": 8,
            "to": 9,
            "no": "Overlap detected"
          },
          {
            "label": "Return result",
            "note": "Return completed list of merged non-overlapping intervals",
            "from": 10,
            "to": 10
          }
        ]
      }
    ]
  },
  "non-overlapping-intervals": {
    "statement": "Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    "given": "an array of intervals `intervals`",
    "ret": "minimum number of removals required to eliminate all overlaps",
    "summary": "Sort intervals by end times and greedily select non-overlapping intervals, counting how many overlapping intervals are discarded.",
    "starter": "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        pass",
    "tests": [
      {
        "label": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        "inputStr": "{\"intervals\": [[1,2],[2,3],[3,4],[1,3]]}",
        "expectedStr": "1"
      },
      {
        "label": "intervals = [[1,2],[1,2],[1,2]]",
        "inputStr": "{\"intervals\": [[1,2],[1,2],[1,2]]}",
        "expectedStr": "2"
      },
      {
        "label": "intervals = [[1,2],[2,3]]",
        "inputStr": "{\"intervals\": [[1,2],[2,3]]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "Recursive Backtracking (Brute Force)",
        "time": "O(2^N)",
        "space": "O(N)",
        "idea": "Sort intervals by start time. Recursively decide whether to keep or remove each interval, keeping track of the end time of the last kept interval.",
        "code": "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        intervals.sort(key=lambda x: x[0])\n        def solve(i, prev_end):\n            if i == len(intervals):\n                return 0\n            remove = 1 + solve(i + 1, prev_end)\n            keep = float('inf')\n            if intervals[i][0] >= prev_end:\n                keep = solve(i + 1, intervals[i][1])\n            return min(remove, keep)\n        return solve(0, float('-inf'))",
        "steps": [
          {
            "label": "Sort intervals",
            "note": "Sort intervals by start time",
            "from": 3,
            "to": 3
          },
          {
            "label": "Base case check",
            "note": "If index i reaches end of intervals, return 0",
            "from": 5,
            "to": 6
          },
          {
            "label": "Option 1: Remove interval",
            "note": "Count 1 removal and solve for remaining intervals",
            "from": 7,
            "to": 7
          },
          {
            "label": "Option 2: Keep interval",
            "note": "If current interval does not overlap with prev_end, compute cost of keeping it",
            "from": 8,
            "to": 10,
            "yes": "intervals[i].start >= prev_end"
          },
          {
            "label": "Return minimum removals",
            "note": "Return minimum between remove and keep decisions",
            "from": 11,
            "to": 11
          }
        ]
      },
      {
        "name": "Greedy Choice by End Time (Optimal)",
        "time": "O(N log N)",
        "space": "O(1)",
        "idea": "Sort intervals by end time. Always pick the interval that finishes earliest to leave max room for subsequent intervals, incrementing removal count when overlap occurs.",
        "code": "class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        intervals.sort(key=lambda x: x[1])\n        removals = 0\n        prev_end = float('-inf')\n        for interval in intervals:\n            if interval[0] >= prev_end:\n                prev_end = interval[1]\n            else:\n                removals += 1\n        return removals",
        "steps": [
          {
            "label": "Sort intervals by end time",
            "note": "Greedy strategy works best by sorting based on interval finish times",
            "from": 3,
            "to": 3
          },
          {
            "label": "Initialize variables",
            "note": "Set removals counter to 0 and prev_end to negative infinity",
            "from": 4,
            "to": 5
          },
          {
            "label": "Iterate intervals",
            "note": "Check each interval against prev_end",
            "from": 6,
            "to": 6
          },
          {
            "label": "Keep interval",
            "note": "If interval starts at or after prev_end, update prev_end to current interval's end",
            "from": 7,
            "to": 8,
            "yes": "interval.start >= prev_end"
          },
          {
            "label": "Remove interval",
            "note": "If interval overlaps with prev_end, increment removals count",
            "from": 9,
            "to": 10,
            "no": "Interval overlaps with prev_end"
          },
          {
            "label": "Return result",
            "note": "Return total count of removed intervals",
            "from": 11,
            "to": 11
          }
        ]
      }
    ]
  },
  "meeting-rooms": {
    "statement": "Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.",
    "given": "an array of meeting time intervals intervals",
    "ret": "a boolean indicating whether a person could attend all meetings without overlap",
    "summary": "Sort the intervals by their start times and check if any meeting starts before the previous meeting ends.",
    "starter": "class Solution:\n    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:\n        pass",
    "tests": [
      {
        "label": "intervals = [[0,30],[5,10],[15,20]]",
        "inputStr": "{\"intervals\": [[0,30],[5,10],[15,20]]}",
        "expectedStr": "false"
      },
      {
        "label": "intervals = [[7,10],[2,4]]",
        "inputStr": "{\"intervals\": [[7,10],[2,4]]}",
        "expectedStr": "true"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Compare every pair of intervals to check if they overlap with each other. Two intervals overlap if max(start1, start2) < min(end1, end2).",
        "code": "class Solution:\n    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:\n        n = len(intervals)\n        for i in range(n):\n            for j in range(i + 1, n):\n                i1, i2 = intervals[i], intervals[j]\n                if max(i1[0], i2[0]) < min(i1[1], i2[1]):\n                    return False\n        return True",
        "steps": [
          {
            "label": "outer loop",
            "note": "Iterate through each meeting interval as the first meeting to compare.",
            "from": 1,
            "to": 2
          },
          {
            "label": "inner loop",
            "note": "Iterate through subsequent meeting intervals to check against the first.",
            "from": 2,
            "to": 3
          },
          {
            "label": "check overlap",
            "note": "Determine if interval i and interval j overlap in time.",
            "from": 3,
            "to": 4,
            "yes": "Conflict detected, return False.",
            "no": "Continue checking remaining pairs."
          },
          {
            "label": "return result",
            "note": "If no pairs overlap after checking all combinations, return True.",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "sorting (optimal)",
        "time": "O(n log n)",
        "space": "O(1)",
        "idea": "Sort the intervals by start time. Once sorted, adjacent intervals are the only ones that could potentially overlap. Iterate through and check if interval[i][0] < interval[i-1][1].",
        "code": "class Solution:\n    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:\n        intervals.sort(key=lambda x: x[0])\n        for i in range(1, len(intervals)):\n            if intervals[i][0] < intervals[i - 1][1]:\n                return False\n        return True",
        "steps": [
          {
            "label": "sort intervals",
            "note": "Sort all intervals in ascending order based on start time.",
            "from": 1,
            "to": 2
          },
          {
            "label": "iterate intervals",
            "note": "Loop through the sorted list starting from the second meeting (index 1).",
            "from": 2,
            "to": 3
          },
          {
            "label": "check adjacent overlap",
            "note": "Compare current start time with previous end time.",
            "from": 3,
            "to": 4,
            "yes": "Current starts before previous ends, return False.",
            "no": "No overlap, continue to next interval."
          },
          {
            "label": "return valid",
            "note": "If no adjacent overlaps are found, return True.",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "meeting-rooms-ii": {
    "statement": "Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.",
    "given": "an array of meeting time intervals intervals",
    "ret": "an integer representing the minimum number of conference rooms required",
    "summary": "Sort meetings by start time and use a min-heap to track the end times of ongoing meetings, allocating new rooms when overlaps occur.",
    "starter": "class Solution:\n    def minMeetingRooms(self, intervals: List[List[int]]) -> int:\n        pass",
    "tests": [
      {
        "label": "intervals = [[0,30],[5,10],[15,20]]",
        "inputStr": "{\"intervals\": [[0,30],[5,10],[15,20]]}",
        "expectedStr": "2"
      },
      {
        "label": "intervals = [[7,10],[2,4]]",
        "inputStr": "{\"intervals\": [[7,10],[2,4]]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "min-heap (optimal)",
        "time": "O(n log n)",
        "space": "O(n)",
        "idea": "Sort intervals by start time. Maintain a min-heap storing end times of active meetings. If the earliest ending meeting finishes before the current meeting starts, reuse that room (pop heap). Otherwise, allocate a new room. The size of the heap at the end is the minimum rooms required.",
        "code": "import heapq\n\nclass Solution:\n    def minMeetingRooms(self, intervals: List[List[int]]) -> int:\n        if not intervals:\n            return 0\n        \n        intervals.sort(key=lambda x: x[0])\n        free_rooms = []\n        heapq.heappush(free_rooms, intervals[0][1])\n        \n        for interval in intervals[1:]:\n            if free_rooms[0] <= interval[0]:\n                heapq.heappop(free_rooms)\n            heapq.heappush(free_rooms, interval[1])\n            \n        return len(free_rooms)",
        "steps": [
          {
            "label": "handle empty",
            "note": "Return 0 if there are no intervals.",
            "from": 1,
            "to": 2
          },
          {
            "label": "sort intervals",
            "note": "Sort meetings chronological by start time.",
            "from": 2,
            "to": 3
          },
          {
            "label": "initialize heap",
            "note": "Push the end time of the first meeting into the min-heap.",
            "from": 3,
            "to": 4
          },
          {
            "label": "process meetings",
            "note": "Iterate through remaining intervals.",
            "from": 4,
            "to": 5
          },
          {
            "label": "check room availability",
            "note": "Compare earliest end time in heap against current meeting's start time.",
            "from": 5,
            "to": 6,
            "yes": "Earliest meeting ended; pop it from heap (reuse room).",
            "no": "No room free; keep heap element (allocate new room)."
          },
          {
            "label": "push current end time",
            "note": "Push current meeting's end time to min-heap.",
            "from": 6,
            "to": 7
          },
          {
            "label": "return result",
            "note": "Return total size of heap representing active rooms needed.",
            "from": 7,
            "to": 8
          }
        ]
      },
      {
        "name": "chronological ordering / two pointers",
        "time": "O(n log n)",
        "space": "O(n)",
        "idea": "Extract and sort start times and end times independently into two separate arrays. Use two pointers to simulate timeline: increment room count when a meeting starts before the earliest ending meeting finishes; advance end pointer when a meeting finishes.",
        "code": "class Solution:\n    def minMeetingRooms(self, intervals: List[List[int]]) -> int:\n        if not intervals:\n            return 0\n        \n        starts = sorted([i[0] for i in intervals])\n        ends = sorted([i[1] for i in intervals])\n        \n        s_ptr = e_ptr = 0\n        used_rooms = 0\n        \n        while s_ptr < len(intervals):\n            if starts[s_ptr] >= ends[e_ptr]:\n                used_rooms -= 1\n                e_ptr += 1\n            used_rooms += 1\n            s_ptr += 1\n            \n        return used_rooms",
        "steps": [
          {
            "label": "extract and sort",
            "note": "Separate start times and end times, then sort both arrays independently.",
            "from": 1,
            "to": 2
          },
          {
            "label": "init pointers",
            "note": "Initialize start pointer (s_ptr), end pointer (e_ptr), and room counter.",
            "from": 2,
            "to": 3
          },
          {
            "label": "traverse starts",
            "note": "Loop through each meeting's start time.",
            "from": 3,
            "to": 4
          },
          {
            "label": "check meeting finish",
            "note": "If start time >= earliest end time, a room has freed up.",
            "from": 4,
            "to": 5,
            "yes": "Decrement room count and increment end pointer.",
            "no": "Do not decrement room count."
          },
          {
            "label": "allocate room",
            "note": "Increment room count and move start pointer to next meeting.",
            "from": 5,
            "to": 6
          },
          {
            "label": "return rooms",
            "note": "Return maximum room count reached during traversal.",
            "from": 6,
            "to": 7
          }
        ]
      }
    ]
  },
  "maximum-subarray": {
    "statement": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "given": "an array of integers nums",
    "ret": "an integer representing the maximum sum of a contiguous subarray",
    "summary": "Iterate through the array while maintaining a running current sum; reset the running sum to the current element if it becomes negative.",
    "starter": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "inputStr": "{\"nums\": [-2,1,-3,4,-1,2,1,-5,4]}",
        "expectedStr": "6"
      },
      {
        "label": "nums = [1]",
        "inputStr": "{\"nums\": [1]}",
        "expectedStr": "1"
      },
      {
        "label": "nums = [5,4,-1,7,8]",
        "inputStr": "{\"nums\": [5,4,-1,7,8]}",
        "expectedStr": "23"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Compute the sum of all possible contiguous subarrays starting from index i to index j, tracking the maximum sum found.",
        "code": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        max_sum = float('-inf')\n        for i in range(len(nums)):\n            current_sum = 0\n            for j in range(i, len(nums)):\n                current_sum += nums[j]\n                max_sum = max(max_sum, current_sum)\n        return max_sum",
        "steps": [
          {
            "label": "initialize max",
            "note": "Set max_sum to negative infinity.",
            "from": 1,
            "to": 2
          },
          {
            "label": "outer loop",
            "note": "Select subarray start index i.",
            "from": 2,
            "to": 3
          },
          {
            "label": "inner loop",
            "note": "Extend subarray end index j from i to end of array.",
            "from": 3,
            "to": 4
          },
          {
            "label": "accumulate sum",
            "note": "Add nums[j] to running current_sum and update max_sum if current_sum is larger.",
            "from": 4,
            "to": 5
          },
          {
            "label": "return result",
            "note": "Return max_sum after evaluating all subarrays.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "Kadane's Algorithm (optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "At each element, decide whether to add it to the existing subarray sum or start a new subarray starting at the current element. Track the global maximum across all steps.",
        "code": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        max_sum = current_sum = nums[0]\n        for num in nums[1:]:\n            current_sum = max(num, current_sum + num)\n            max_sum = max(max_sum, current_sum)\n        return max_sum",
        "steps": [
          {
            "label": "initialize tracking variables",
            "note": "Set max_sum and current_sum to first element nums[0].",
            "from": 1,
            "to": 2
          },
          {
            "label": "iterate remaining elements",
            "note": "Loop through nums starting from index 1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "update current sum",
            "note": "Determine whether joining previous subarray (current_sum + num) is better than starting fresh (num).",
            "from": 3,
            "to": 4
          },
          {
            "label": "update global max",
            "note": "Update max_sum if current_sum exceeds max_sum.",
            "from": 4,
            "to": 5
          },
          {
            "label": "return max sum",
            "note": "Return global maximum subarray sum found.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "jump-game": {
    "statement": "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
    "given": "an array of non-negative integers nums",
    "ret": "a boolean indicating if you can reach the last index",
    "summary": "Track the maximum index reachable at each step; if the current position ever exceeds this maximum reach, return false. Otherwise, if the maximum reach touches or exceeds the end, return true.",
    "starter": "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        pass",
    "tests": [
      {
        "label": "nums = [2, 3, 1, 1, 4]",
        "inputStr": "{\"nums\": [2, 3, 1, 1, 4]}",
        "expectedStr": "true"
      },
      {
        "label": "nums = [3, 2, 1, 0, 4]",
        "inputStr": "{\"nums\": [3, 2, 1, 0, 4]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "backtracking",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Recursively explore all possible jump distances from the current position to check if any path leads to the final index.",
        "code": "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        def can_reach_from_position(position):\n            if position == len(nums) - 1:\n                return True\n            furthest_jump = min(position + nums[position], len(nums) - 1)\n            for next_pos in range(position + 1, furthest_jump + 1):\n                if can_reach_from_position(next_pos):\n                    return True\n            return False\n        return can_reach_from_position(0)",
        "steps": [
          {
            "label": "check end condition",
            "note": "If position reaches the last index, return True.",
            "from": 3,
            "to": 4,
            "yes": " reached final destination",
            "no": "continue exploring possibilities"
          },
          {
            "label": "calculate reachable range",
            "note": "Determine maximum valid index that can be reached from current position.",
            "from": 5,
            "to": 5
          },
          {
            "label": "loop next positions",
            "note": "Iterate through every available next step in the range.",
            "from": 6,
            "to": 6
          },
          {
            "label": "recursive exploration",
            "note": "Recursively check if any of the target positions can reach the last index.",
            "from": 7,
            "to": 8,
            "yes": "found valid path to end"
          },
          {
            "label": "return fail",
            "note": "Return False if no branches starting from current position lead to the end.",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "greedy reach tracking",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Iterate through the array maintaining the furthest reach boundary. If at any index i, i > max_reachable, we cannot move forward.",
        "code": "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        max_reachable = 0\n        for i in range(len(nums)):\n            if i > max_reachable:\n                return False\n            max_reachable = max(max_reachable, i + nums[i])\n            if max_reachable >= len(nums) - 1:\n                return True\n        return True",
        "steps": [
          {
            "label": "initialize max boundary",
            "note": "Set `max_reachable` starting at index 0.",
            "from": 3,
            "to": 3
          },
          {
            "label": "iterate array",
            "note": "Traverse each position i in `nums`.",
            "from": 4,
            "to": 4
          },
          {
            "label": "check reachability limit",
            "note": "Check if current index i is greater than max reach.",
            "from": 5,
            "to": 6,
            "yes": "stuck at unreachable index",
            "no": "continue updating reach"
          },
          {
            "label": "update max reach",
            "note": "Update reach boundary with `i + nums[i]` if larger.",
            "from": 7,
            "to": 7
          },
          {
            "label": "early return check",
            "note": "If max reach is equal or past last index, return True immediately.",
            "from": 8,
            "to": 9,
            "yes": "end is guaranteed reachable"
          }
        ]
      }
    ]
  },
  "rotate-image": {
    "statement": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
    "given": "an n x n 2D matrix representing an image",
    "ret": "None (modify matrix in-place)",
    "summary": "Transpose the matrix by swapping elements across the main diagonal, then reverse each row to complete a 90-degree clockwise rotation.",
    "starter": "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\"\n        pass",
    "tests": [
      {
        "label": "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "inputStr": "{\"matrix\": [[1, 2, 3], [4, 5, 6], [7, 8, 9]]}",
        "expectedStr": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
      },
      {
        "label": "matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]",
        "inputStr": "{\"matrix\": [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]}",
        "expectedStr": "[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]"
      }
    ],
    "approaches": [
      {
        "name": "auxiliary matrix copy",
        "time": "O(n^2)",
        "space": "O(n^2)",
        "idea": "Allocate a separate 2D array, copy each element from matrix[r][c] to target location res[c][n-1-r], then copy back.",
        "code": "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        n = len(matrix)\n        res = [[0] * n for _ in range(n)]\n        for r in range(n):\n            for c in range(n):\n                res[c][n - 1 - r] = matrix[r][c]\n        for r in range(n):\n            for c in range(n):\n                matrix[r][c] = res[r][c]",
        "steps": [
          {
            "label": "create secondary grid",
            "note": "Initialize empty n x n helper matrix.",
            "from": 3,
            "to": 4
          },
          {
            "label": "map rotated cells",
            "note": "Place element at matrix[r][c] into rotated coordinate res[c][n-1-r].",
            "from": 5,
            "to": 7
          },
          {
            "label": "overwrite original matrix",
            "note": "Copy elements back into input matrix to satisfy signature.",
            "from": 8,
            "to": 10
          }
        ]
      },
      {
        "name": "transpose and reverse",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Transpose the matrix by swapping matrix[i][j] with matrix[j][i], then reverse each row in place.",
        "code": "class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        n = len(matrix)\n        for i in range(n):\n            for j in range(i + 1, n):\n                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n        for i in range(n):\n            matrix[i].reverse()",
        "steps": [
          {
            "label": "get matrix dimension",
            "note": "Store matrix length n.",
            "from": 3,
            "to": 3
          },
          {
            "label": "transpose matrix",
            "note": "Swap elements across upper right triangle and lower left triangle.",
            "from": 4,
            "to": 6
          },
          {
            "label": "reverse rows",
            "note": "Reverse elements in each row horizontally to reflect clockwise shift.",
            "from": 7,
            "to": 8
          }
        ]
      }
    ]
  },
  "spiral-matrix": {
    "statement": "Given an m x n matrix, return all elements of the matrix in spiral order.",
    "given": "an m x n matrix",
    "ret": "a list of integers representing all elements in spiral order",
    "summary": "Maintain boundaries (top, bottom, left, right) and loop clockwise around the matrix perimeter while shrinking the boundaries inwards.",
    "starter": "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        pass",
    "tests": [
      {
        "label": "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        "inputStr": "{\"matrix\": [[1, 2, 3], [4, 5, 6], [7, 8, 9]]}",
        "expectedStr": "[1, 2, 3, 6, 9, 8, 7, 4, 5]"
      },
      {
        "label": "matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]",
        "inputStr": "{\"matrix\": [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]}",
        "expectedStr": "[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]"
      }
    ],
    "approaches": [
      {
        "name": "simulation with visited array",
        "time": "O(m * n)",
        "space": "O(m * n)",
        "idea": "Simulate moving right, down, left, up using direction vectors, turning clockwise whenever out of bounds or encountering an already visited cell.",
        "code": "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        if not matrix: return []\n        m, n = len(matrix), len(matrix[0])\n        seen = [[False] * n for _ in range(m)]\n        ans = []\n        dr = [0, 1, 0, -1]\n        dc = [1, 0, -1, 0]\n        r = c = di = 0\n        for _ in range(m * n):\n            ans.append(matrix[r][c])\n            seen[r][c] = True\n            cr, cc = r + dr[di], c + dc[di]\n            if 0 <= cr < m and 0 <= cc < n and not seen[cr][cc]:\n                r, c = cr, cc\n            else:\n                di = (di + 1) % 4\n                r, c = r + dr[di], c + dc[di]\n        return ans",
        "steps": [
          {
            "label": "setup grid pointers and matrix dimensions",
            "note": "Initialize variables for tracking visited positions and movements.",
            "from": 3,
            "to": 9
          },
          {
            "label": "loop matrix size times",
            "note": "Iterate total number of elements m * n.",
            "from": 10,
            "to": 10
          },
          {
            "label": "record current coordinate",
            "note": "Add matrix[r][c] to output list and set seen flag.",
            "from": 11,
            "to": 12
          },
          {
            "label": "calculate next position",
            "note": "Attempt moving in current direction vector `di`.",
            "from": 13,
            "to": 13
          },
          {
            "label": "check next step or change direction",
            "note": "If valid step move forward; if invalid, increment direction `di = (di + 1) % 4` and move.",
            "from": 14,
            "to": 18
          },
          {
            "label": "return spiral values",
            "note": "Return completed order list.",
            "from": 19,
            "to": 19
          }
        ]
      },
      {
        "name": "boundary shrinking",
        "time": "O(m * n)",
        "space": "O(1)",
        "idea": "Define boundaries top, bottom, left, right. Traversal loops top row, right column, bottom row, and left column, contracting boundaries inward.",
        "code": "class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        res = []\n        top, bottom = 0, len(matrix) - 1\n        left, right = 0, len(matrix[0]) - 1\n        while top <= bottom and left <= right:\n            for col in range(left, right + 1):\n                res.append(matrix[top][col])\n            top += 1\n            for row in range(top, bottom + 1):\n                res.append(matrix[row][right])\n            right -= 1\n            if top <= bottom:\n                for col in range(right, left - 1, -1):\n                    res.append(matrix[bottom][col])\n                bottom -= 1\n            if left <= right:\n                for row in range(bottom, top - 1, -1):\n                    res.append(matrix[row][left])\n                left += 1\n        return res",
        "steps": [
          {
            "label": "initialize boundaries",
            "note": "Set `top`, `bottom`, `left`, `right` boundaries.",
            "from": 3,
            "to": 5
          },
          {
            "label": "traverse top edge",
            "note": "Iterate from left to right along top boundary, then increment top pointer.",
            "from": 7,
            "to": 9
          },
          {
            "label": "traverse right edge",
            "note": "Iterate from top to bottom along right boundary, then decrement right pointer.",
            "from": 10,
            "to": 12
          },
          {
            "label": "traverse bottom edge",
            "note": "If `top <= bottom`, traverse right to left along bottom, then decrement bottom pointer.",
            "from": 13,
            "to": 16,
            "yes": "valid row remaining to traverse",
            "no": "skip bottom side traversal"
          },
          {
            "label": "traverse left edge",
            "note": "If `left <= right`, traverse bottom to top along left, then increment left pointer.",
            "from": 17,
            "to": 20,
            "yes": "valid column remaining to traverse",
            "no": "skip left side traversal"
          },
          {
            "label": "return result array",
            "note": "Return accumulated values in spiral order.",
            "from": 21,
            "to": 21
          }
        ]
      }
    ]
  },
  "set-matrix-zeroes": {
    "statement": "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in-place.",
    "given": "an m x n integer matrix matrix",
    "ret": "modify matrix in-place to set entire row and column to 0 for any 0 element",
    "summary": "Use the first row and first column as markers to record which rows and columns should be zeroed out, with an extra variable tracking whether the first column itself needs to be zeroed.",
    "starter": "def setZeroes(matrix: list[list[int]]) -> None:\n    \"\"\"\n    Do not return anything, modify matrix in-place instead.\n    \"\"\"\n    pass",
    "tests": [
      {
        "label": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "inputStr": "{\"matrix\": [[1,1,1],[1,0,1],[1,1,1]]}",
        "expectedStr": "[[1,0,1],[0,0,0],[1,0,1]]"
      },
      {
        "label": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "inputStr": "{\"matrix\": [[0,1,2,0],[3,4,5,2],[1,3,1,5]]}",
        "expectedStr": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
      }
    ],
    "approaches": [
      {
        "name": "brute force / auxiliary space",
        "time": "O(m * n)",
        "space": "O(m + n)",
        "idea": "Use two additional hash sets to store the row and column indices that contain zeroes, then iterate over the matrix a second time to set cells to zero if their row or column index is in either set.",
        "code": "def setZeroes(matrix: list[list[int]]) -> None:\n    R, C = len(matrix), len(matrix[0])\n    rows, cols = set(), set()\n    for r in range(R):\n        for c in range(C):\n            if matrix[r][c] == 0:\n                rows.add(r)\n                cols.add(c)\n    for r in range(R):\n        for c in range(C):\n            if r in rows or c in cols:\n                matrix[r][c] = 0",
        "steps": [
          {
            "label": "Initialize Tracking Sets",
            "note": "Get matrix dimensions and create hash sets to track zero row and column indices.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Scan Matrix for Zeroes",
            "note": "Iterate through every cell in the matrix.",
            "from": 4,
            "to": 6
          },
          {
            "label": "Record Zero Indices",
            "note": "If a cell value is 0, add its row index to 'rows' and column index to 'cols'.",
            "from": 6,
            "to": 8
          },
          {
            "label": "Iterate for Zeroing",
            "note": "Traverse the matrix a second time.",
            "from": 9,
            "to": 11
          },
          {
            "label": "Apply Zeroes",
            "note": "Set matrix element to 0 if its row index is in 'rows' or column index is in 'cols'.",
            "from": 11,
            "to": 12
          }
        ]
      },
      {
        "name": "optimal in-place zeroing",
        "time": "O(m * n)",
        "space": "O(1)",
        "idea": "Use the first row and column of the matrix itself to store zero markers for the rest of the matrix. Track the state of the first column separately using a boolean flag to avoid marker collisions.",
        "code": "def setZeroes(matrix: list[list[int]]) -> None:\n    R, C = len(matrix), len(matrix[0])\n    first_col_zero = False\n    for r in range(R):\n        if matrix[r][0] == 0:\n            first_col_zero = True\n        for c in range(1, C):\n            if matrix[r][c] == 0:\n                matrix[r][0] = 0\n                matrix[0][c] = 0\n    for r in range(1, R):\n        for c in range(1, C):\n            if matrix[r][0] == 0 or matrix[0][c] == 0:\n                matrix[r][c] = 0\n    if matrix[0][0] == 0:\n        for c in range(C):\n            matrix[0][c] = 0\n    if first_col_zero:\n        for r in range(R):\n            matrix[r][0] = 0",
        "steps": [
          {
            "label": "Check First Column Status",
            "note": "Track if column 0 contains a zero using 'first_col_zero' variable.",
            "from": 3,
            "to": 6
          },
          {
            "label": "Mark Zeroes in Outer Bounds",
            "note": "For cells (r, c) where c > 0, set matrix[r][0] and matrix[0][c] to 0 if matrix[r][c] is 0.",
            "from": 7,
            "to": 10
          },
          {
            "label": "Update Inner Submatrix",
            "note": "Iterate from row 1 and column 1 upwards; set matrix[r][c] to 0 if its row or column marker is 0.",
            "from": 11,
            "to": 14
          },
          {
            "label": "Update First Row",
            "note": "If matrix[0][0] is 0, set all elements in the first row to 0.",
            "from": 15,
            "to": 17
          },
          {
            "label": "Update First Column",
            "note": "If 'first_col_zero' is True, set all elements in the first column to 0.",
            "from": 18,
            "to": 20
          }
        ]
      }
    ]
  },
  "reverse-bits": {
    "statement": "Reverse bits of a given 32 bits unsigned integer.",
    "given": "a 32-bit unsigned integer n",
    "ret": "the 32-bit unsigned integer with reversed bits",
    "summary": "Extract each bit from the least significant side of input n and construct the output by placing each bit into its corresponding mirrored position using bitwise shifts and OR operations.",
    "starter": "def reverseBits(n: int) -> int:\n    pass",
    "tests": [
      {
        "label": "n = 43261596",
        "inputStr": "{\"n\": 43261596}",
        "expectedStr": "964176192"
      },
      {
        "label": "n = 4294967293",
        "inputStr": "{\"n\": 4294967293}",
        "expectedStr": "3221225471"
      }
    ],
    "approaches": [
      {
        "name": "string conversion",
        "time": "O(1)",
        "space": "O(1)",
        "idea": "Convert the integer into a 32-bit binary string representation, reverse the string, and parse it back to an integer.",
        "code": "def reverseBits(n: int) -> int:\n    bit_str = bin(n)[2:].zfill(32)\n    reversed_str = bit_str[::-1]\n    return int(reversed_str, 2)",
        "steps": [
          {
            "label": "Format Binary String",
            "note": "Convert integer to binary string excluding '0b' prefix and pad with leading zeroes to length 32.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Reverse String",
            "note": "Reverse the padded binary string using slicing.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Parse Integer",
            "note": "Convert the reversed binary string back into a base-2 integer and return.",
            "from": 3,
            "to": 4
          }
        ]
      },
      {
        "name": "bit manipulation",
        "time": "O(1)",
        "space": "O(1)",
        "idea": "Iterate 32 times, isolating the i-th bit of n and shifting it to position (31 - i) in the result integer using bitwise operations.",
        "code": "def reverseBits(n: int) -> int:\n    res = 0\n    for i in range(32):\n        bit = (n >> i) & 1\n        res |= (bit << (31 - i))\n    return res",
        "steps": [
          {
            "label": "Initialize Result",
            "note": "Set result accumulator 'res' to 0 and loop 32 times.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Extract Bit",
            "note": "Shift input 'n' right by i positions and mask with 1 to get the bit value at index i.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Place Bit at Mirror Position",
            "note": "Shift extracted bit left by (31 - i) positions and perform bitwise OR into 'res'.",
            "from": 5,
            "to": 5
          },
          {
            "label": "Return Reversed Integer",
            "note": "Return the accumulated 32-bit reversed integer.",
            "from": 3,
            "to": 6
          }
        ]
      }
    ]
  },
  "number-of-1-bits": {
    "statement": "Given a positive integer n, write a function that returns the number of set bits it has (also known as the Hamming weight).",
    "given": "a positive integer n",
    "ret": "the number of set bits (1s) in n's binary representation",
    "summary": "Clear the least significant set bit repeatedly using n = n & (n - 1) and count how many steps it takes until n reaches zero.",
    "starter": "def hammingWeight(n: int) -> int:\n    pass",
    "tests": [
      {
        "label": "n = 11",
        "inputStr": "{\"n\": 11}",
        "expectedStr": "3"
      },
      {
        "label": "n = 128",
        "inputStr": "{\"n\": 128}",
        "expectedStr": "1"
      },
      {
        "label": "n = 2147483645",
        "inputStr": "{\"n\": 2147483645}",
        "expectedStr": "30"
      }
    ],
    "approaches": [
      {
        "name": "bit shift loop",
        "time": "O(1)",
        "space": "O(1)",
        "idea": "Inspect each bit of n from right to left by checking the least significant bit (n & 1) and shifting right until n becomes zero.",
        "code": "def hammingWeight(n: int) -> int:\n    count = 0\n    while n > 0:\n        count += n & 1\n        n >>= 1\n    return count",
        "steps": [
          {
            "label": "Initialize Counter",
            "note": "Set bit count to 0 and loop while 'n' is greater than 0.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check LSB",
            "note": "Bitwise AND n with 1 to determine if current lowest bit is set, adding to count.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Shift Right",
            "note": "Logical shift n right by 1 to inspect the next bit.",
            "from": 5,
            "to": 5
          },
          {
            "label": "Return Result",
            "note": "Return total count after all bits are processed.",
            "from": 3,
            "to": 6
          }
        ]
      },
      {
        "name": "brian kernighan's algorithm",
        "time": "O(k)",
        "space": "O(1)",
        "idea": "Perform bitwise AND between n and (n - 1), which directly flips the lowest set bit of n to 0, running in iterations equal to the exact number of set bits k.",
        "code": "def hammingWeight(n: int) -> int:\n    count = 0\n    while n > 0:\n        n &= (n - 1)\n        count += 1\n    return count",
        "steps": [
          {
            "label": "Initialize Counter",
            "note": "Set set-bit count to 0 and loop while 'n' is non-zero.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Clear Lowest Set Bit",
            "note": "Operation n &= (n - 1) turns off the rightmost 1-bit in n.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Increment Count",
            "note": "Add 1 to count for the cleared set bit.",
            "from": 5,
            "to": 5
          },
          {
            "label": "Return Final Count",
            "note": "Return count when n reaches 0.",
            "from": 3,
            "to": 6
          }
        ]
      }
    ]
  },
  "counting-bits": {
    "statement": "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
    "given": "an integer n",
    "ret": "an array ans of length n + 1 where ans[i] is the number of set bits in i",
    "summary": "We can compute bit counts in O(N) time using dynamic programming by observing that the number of set bits in i is equal to the number of set bits in i >> 1 plus the last bit (i & 1).",
    "starter": "class Solution:\n    def countBits(self, n: int) -> list[int]:\n        pass",
    "tests": [
      {
        "label": "n = 2",
        "inputStr": "{\"n\": 2}",
        "expectedStr": "[0, 1, 1]"
      },
      {
        "label": "n = 5",
        "inputStr": "{\"n\": 5}",
        "expectedStr": "[0, 1, 1, 2, 1, 2]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n log n)",
        "space": "O(1)",
        "idea": "For every number from 0 to n, convert it to binary or iterate through its bits individually, counting the number of 1s.",
        "code": "class Solution:\n    def countBits(self, n: int) -> list[int]:\n        ans = []\n        for i in range(n + 1):\n            count = 0\n            num = i\n            while num > 0:\n                count += num & 1\n                num >>= 1\n            ans.append(count)\n        return ans",
        "steps": [
          {
            "label": "initialize output array",
            "note": "Create an empty list `ans` to store the set bit count for each integer.",
            "from": 3,
            "to": 3
          },
          {
            "label": "outer loop",
            "note": "Loop through every integer `i` from 0 up to `n` inclusive.",
            "from": 4,
            "to": 4
          },
          {
            "label": "inner loop bit counting",
            "note": "Extract the lowest bit with `num & 1`, add it to `count`, and right-shift `num` until `num` becomes 0.",
            "from": 7,
            "to": 9
          },
          {
            "label": "append result",
            "note": "Append the calculated bit count for current integer `i` to `ans`.",
            "from": 10,
            "to": 10
          },
          {
            "label": "return result",
            "note": "Return the completed `ans` list.",
            "from": 11,
            "to": 11
          }
        ]
      },
      {
        "name": "optimal dynamic programming",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Reuse bit counts of smaller numbers using the relation ans[i] = ans[i >> 1] + (i & 1). Shift right removes the last bit, which we've already solved.",
        "code": "class Solution:\n    def countBits(self, n: int) -> list[int]:\n        dp = [0] * (n + 1)\n        for i in range(1, n + 1):\n            dp[i] = dp[i >> 1] + (i & 1)\n        return dp",
        "steps": [
          {
            "label": "initialize dp array",
            "note": "Create an array `dp` of size `n + 1` filled with zeroes. `dp[0]` is correctly set to 0.",
            "from": 3,
            "to": 3
          },
          {
            "label": "iterate from 1 to n",
            "note": "Iterate through integers `i` from 1 up to `n` inclusive.",
            "from": 4,
            "to": 4
          },
          {
            "label": "dp bit transition",
            "note": "Look up `dp[i >> 1]` (number divided by 2) and add `i & 1` (1 if `i` is odd, 0 if even).",
            "from": 5,
            "to": 5
          },
          {
            "label": "return dp array",
            "note": "Return the computed `dp` array containing bit counts for all indices.",
            "from": 6,
            "to": 6
          }
        ]
      }
    ]
  },
  "missing-number": {
    "statement": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "given": "an array of integers nums",
    "ret": "the missing integer from the range [0, n]",
    "summary": "We can compute the expected sum of range [0, n] using Gauss' formula n * (n + 1) / 2 and subtract the sum of elements in nums, or use XOR cancellation.",
    "starter": "class Solution:\n    def missingNumber(self, nums: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [3,0,1]",
        "inputStr": "{\"nums\": [3,0,1]}",
        "expectedStr": "2"
      },
      {
        "label": "nums = [0,1]",
        "inputStr": "{\"nums\": [0,1]}",
        "expectedStr": "2"
      },
      {
        "label": "nums = [9,6,4,2,3,5,7,0,1]",
        "inputStr": "{\"nums\": [9,6,4,2,3,5,7,0,1]}",
        "expectedStr": "8"
      }
    ],
    "approaches": [
      {
        "name": "hash set lookup",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Convert array to a hash set for O(1) lookups. Check every number from 0 to n to find which one is missing.",
        "code": "class Solution:\n    def missingNumber(self, nums: list[int]) -> int:\n        num_set = set(nums)\n        n = len(nums)\n        for number in range(n + 1):\n            if number not in num_set:\n                return number",
        "steps": [
          {
            "label": "build set",
            "note": "Convert `nums` into a set `num_set` for O(1) lookups.",
            "from": 3,
            "to": 3
          },
          {
            "label": "get array length",
            "note": "Calculate `n`, which represents the upper bound of the full expected sequence [0, n].",
            "from": 4,
            "to": 4
          },
          {
            "label": "iterate range",
            "note": "Check each `number` from 0 up to `n` inclusive.",
            "from": 5,
            "to": 5
          },
          {
            "label": "check membership",
            "note": "If `number` is missing from `num_set`, return it immediately.",
            "from": 6,
            "to": 7,
            "yes": "Number not found in set, return this number.",
            "no": "Number exists in set, continue loop."
          }
        ]
      },
      {
        "name": "math sum formula (optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Calculate expected sum using n*(n+1)//2 and subtract actual sum of array elements. Difference is the missing number.",
        "code": "class Solution:\n    def missingNumber(self, nums: list[int]) -> int:\n        n = len(nums)\n        expected_sum = n * (n + 1) // 2\n        actual_sum = sum(nums)\n        return expected_sum - actual_sum",
        "steps": [
          {
            "label": "get length",
            "note": "Find `n`, the size of `nums`.",
            "from": 3,
            "to": 3
          },
          {
            "label": "expected sum formula",
            "note": "Calculate Gauss sum `n * (n + 1) // 2` representing total sum of numbers [0, n].",
            "from": 4,
            "to": 4
          },
          {
            "label": "actual sum",
            "note": "Sum all actual elements in `nums`.",
            "from": 5,
            "to": 5
          },
          {
            "label": "subtract and return",
            "note": "Subtract `actual_sum` from `expected_sum` to reveal missing number.",
            "from": 6,
            "to": 6
          }
        ]
      },
      {
        "name": "bitwise xor (optimal alternative)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "XORing a number with itself cancels out (a ^ a = 0). XOR all indices from 0 to n and all numbers in array; remaining value is missing.",
        "code": "class Solution:\n    def missingNumber(self, nums: list[int]) -> int:\n        res = len(nums)\n        for i, num in enumerate(nums):\n            res ^= i ^ num\n        return res",
        "steps": [
          {
            "label": "initialize res",
            "note": "Set `res` to `len(nums)` (the maximum number `n`).",
            "from": 3,
            "to": 3
          },
          {
            "label": "iterate indices and values",
            "note": "Iterate over `nums` using `enumerate` to get index `i` and element `num`.",
            "from": 4,
            "to": 4
          },
          {
            "label": "xor step",
            "note": "XOR current `res` with index `i` and array element `num` to cancel out matching pairs.",
            "from": 5,
            "to": 5
          },
          {
            "label": "return result",
            "note": "Return `res` containing the single unpaired number.",
            "from": 6,
            "to": 6
          }
        ]
      }
    ]
  },
  "sum-of-two-integers": {
    "statement": "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    "given": "two integers a and b",
    "ret": "the sum of a and b",
    "summary": "Use XOR (^) to add bits without carry, and AND (&) shifted left by 1 to compute carries. In Python, handle 32-bit signed integer masking explicitly.",
    "starter": "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        pass",
    "tests": [
      {
        "label": "a = 1, b = 2",
        "inputStr": "{\"a\": 1, \"b\": 2}",
        "expectedStr": "3"
      },
      {
        "label": "a = 2, b = 3",
        "inputStr": "{\"a\": 2, \"b\": 3}",
        "expectedStr": "5"
      }
    ],
    "approaches": [
      {
        "name": "bit manipulation with 32-bit masking",
        "time": "O(1)",
        "space": "O(1)",
        "idea": "Repeatedly compute sum without carry using XOR (a ^ b) and carry using AND shifted left ((a & b) << 1). Limit mask to 32 bits to prevent infinite Python bit growth.",
        "code": "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        mask = 0xFFFFFFFF\n        while (b & mask) > 0:\n            carry = (a & b) << 1\n            a = a ^ b\n            b = carry\n        return (a & mask) if b > 0 else a",
        "steps": [
          {
            "label": "initialize bitmask",
            "note": "Define a 32-bit mask `0xFFFFFFFF` to simulate 32-bit signed integer behavior in Python.",
            "from": 3,
            "to": 3
          },
          {
            "label": "loop while carry exists",
            "note": "Continue loop while carry bits `b & mask` are non-zero.",
            "from": 4,
            "to": 4
          },
          {
            "label": "compute carry",
            "note": "Find carry bits where both `a` and `b` have 1s, and shift left by 1 position.",
            "from": 5,
            "to": 5
          },
          {
            "label": "compute sum without carry",
            "note": "XOR `a` and `b` to perform addition for bits without carrying.",
            "from": 6,
            "to": 6
          },
          {
            "label": "update carry variable",
            "note": "Set `b = carry` so the next iteration processes remaining carries.",
            "from": 7,
            "to": 7
          },
          {
            "label": "format signed output",
            "note": "Mask `a` to 32 bits if `b > 0`, handling negative values properly, and return.",
            "from": 8,
            "to": 8
          }
        ]
      }
    ]
  },
  "valid-sudoku": {
    "statement": "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n1. Each row must contain the digits 1-9 without repetition.\n2. Each column must contain the digits 1-9 without repetition.\n3. Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.\n\nNote:\n- A Sudoku board (partially filled) could be valid but is not necessarily solvable.\n- Only the filled cells need to be validated according to the mentioned rules.",
    "given": "a 9x9 2D array board of character strings",
    "ret": "a boolean indicating whether the current board configuration is valid",
    "summary": "Iterate over every cell while maintaining sets or bitmasks for each row, column, and 3x3 sub-box to ensure no digit appears twice.",
    "starter": "def isValidSudoku(board: list[list[str]]) -> bool:\n    pass",
    "tests": [
      {
        "label": "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
        "inputStr": "{\"board\": [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]}",
        "expectedStr": "true"
      },
      {
        "label": "board = [['8','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
        "inputStr": "{\"board\": [[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "brute force / distinct checks",
        "time": "O(1)",
        "space": "O(1)",
        "idea": "Perform three separate iterations: check each row for duplicates, check each column for duplicates, and finally check each of the nine 3x3 sub-boxes.",
        "code": "def isValidSudoku(board: list[list[str]]) -> bool:\n    for r in range(9):\n        seen = set()\n        for c in range(9):\n            val = board[r][c]\n            if val != '.':\n                if val in seen:\n                    return False\n                seen.add(val)\n    for c in range(9):\n        seen = set()\n        for r in range(9):\n            val = board[r][c]\n            if val != '.':\n                if val in seen:\n                    return False\n                seen.add(val)\n    for box in range(9):\n        seen = set()\n        for i in range(3):\n            for j in range(3):\n                r = (box // 3) * 3 + i\n                c = (box % 3) * 3 + j\n                val = board[r][c]\n                if val != '.':\n                    if val in seen:\n                        return False\n                    seen.add(val)\n    return True",
        "steps": [
          {
            "label": "validate rows",
            "note": "Iterate row by row and collect filled digits in a hash set to detect duplicates.",
            "from": 2,
            "to": 8
          },
          {
            "label": "validate columns",
            "note": "Iterate column by column and collect filled digits in a hash set.",
            "from": 10,
            "to": 16
          },
          {
            "label": "validate 3x3 boxes",
            "note": "Map index 0..8 to box top-left corners and iterate inside 3x3 blocks.",
            "from": 18,
            "to": 27
          },
          {
            "label": "check duplicates",
            "note": "If a digit is already in 'seen', return False immediately.",
            "from": 24,
            "to": 26,
            "yes": "Duplicate found, board is invalid",
            "no": "Add digit to set and continue"
          },
          {
            "label": "return valid",
            "note": "If all rows, columns, and boxes pass without conflict, return True.",
            "from": 28,
            "to": 28
          }
        ]
      },
      {
        "name": "single pass hash sets",
        "time": "O(1)",
        "space": "O(1)",
        "idea": "Traverse each cell once, keeping track of seen numbers for rows, columns, and 3x3 boxes using array of sets.",
        "code": "def isValidSudoku(board: list[list[str]]) -> bool:\n    rows = [set() for _ in range(9)]\n    cols = [set() for _ in range(9)]\n    boxes = [set() for _ in range(9)]\n    for r in range(9):\n        for c in range(9):\n            val = board[r][c]\n            if val == '.':\n                continue\n            box_idx = (r // 3) * 3 + (c // 3)\n            if val in rows[r] or val in cols[c] or val in boxes[box_idx]:\n                return False\n            rows[r].add(val)\n            cols[c].add(val)\n            boxes[box_idx].add(val)\n    return True",
        "steps": [
          {
            "label": "initialize tracking sets",
            "note": "Create lists containing 9 sets each for rows, columns, and sub-boxes.",
            "from": 2,
            "to": 4
          },
          {
            "label": "loop through cells",
            "note": "Iterate over all cells (r, c) from (0,0) to (8,8).",
            "from": 5,
            "to": 6
          },
          {
            "label": "skip empty cells",
            "note": "Ignore dot characters.",
            "from": 8,
            "to": 9,
            "yes": "Cell is empty, skip to next cell"
          },
          {
            "label": "compute box index",
            "note": "Calculate sub-box index as (r // 3) * 3 + (c // 3).",
            "from": 10,
            "to": 10
          },
          {
            "label": "check validity",
            "note": "Check if value exists in corresponding row, column, or box set.",
            "from": 11,
            "to": 12,
            "yes": "Duplicate found, return False",
            "no": "Value is unique so far"
          },
          {
            "label": "record value",
            "note": "Add value to row, column, and box sets.",
            "from": 13,
            "to": 15
          },
          {
            "label": "return True",
            "note": "If loop finishes without invalid placement, return True.",
            "from": 16,
            "to": 16
          }
        ]
      }
    ]
  },
  "two-sum-ii-input-array-is-sorted": {
    "statement": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.\n\nReturn the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.\n\nThe tests are generated such that there is exactly one solution. You may not use the same element twice.\n\nYour solution must use only constant extra space.",
    "given": "a 1-indexed sorted array of integers numbers and an integer target",
    "ret": "an array of length 2 containing the 1-based indices of the two numbers",
    "summary": "Use two pointers starting at opposite ends; shrink the window from left or right based on whether the current sum is smaller or larger than the target.",
    "starter": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    pass",
    "tests": [
      {
        "label": "numbers = [2,7,11,15], target = 9",
        "inputStr": "{\"numbers\": [2, 7, 11, 15], \"target\": 9}",
        "expectedStr": "[1, 2]"
      },
      {
        "label": "numbers = [2,3,4], target = 6",
        "inputStr": "{\"numbers\": [2, 3, 4], \"target\": 6}",
        "expectedStr": "[1, 3]"
      },
      {
        "label": "numbers = [-1,0], target = -1",
        "inputStr": "{\"numbers\": [-1, 0], \"target\": -1}",
        "expectedStr": "[1, 2]"
      }
    ],
    "approaches": [
      {
        "name": "binary search",
        "time": "O(n log n)",
        "space": "O(1)",
        "idea": "For each element in the array, use binary search to locate its complement (target - numbers[i]) in the rest of the array.",
        "code": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    for i in range(len(numbers)):\n        complement = target - numbers[i]\n        low, high = i + 1, len(numbers) - 1\n        while low <= high:\n            mid = (low + high) // 2\n            if numbers[mid] == complement:\n                return [i + 1, mid + 1]\n            elif numbers[mid] < complement:\n                low = mid + 1\n            else:\n                high = mid - 1\n    return []",
        "steps": [
          {
            "label": "outer loop",
            "note": "Iterate through each element as the first candidate.",
            "from": 2,
            "to": 3
          },
          {
            "label": "binary search setup",
            "note": "Initialize binary search range from i + 1 to end of array.",
            "from": 4,
            "to": 5
          },
          {
            "label": "check middle element",
            "note": "Compare numbers[mid] to complement.",
            "from": 7,
            "to": 8,
            "yes": "Complement found, return 1-based indices",
            "no": "Adjust search bounds"
          },
          {
            "label": "adjust search space",
            "note": "If mid value is too small, increase low pointer; else decrease high pointer.",
            "from": 9,
            "to": 12
          }
        ]
      },
      {
        "name": "two pointers (optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Place one pointer at the beginning and one at the end. Since the array is sorted, increment the left pointer if sum < target, and decrement the right pointer if sum > target.",
        "code": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    left, right = 0, len(numbers) - 1\n    while left < right:\n        cur_sum = numbers[left] + numbers[right]\n        if cur_sum == target:\n            return [left + 1, right + 1]\n        elif cur_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return []",
        "steps": [
          {
            "label": "init pointers",
            "note": "Set left pointer to 0 and right pointer to end of array.",
            "from": 2,
            "to": 2
          },
          {
            "label": "check termination",
            "note": "Loop while left < right.",
            "from": 3,
            "to": 3
          },
          {
            "label": "calculate sum",
            "note": "Compute current pair sum.",
            "from": 4,
            "to": 4
          },
          {
            "label": "check target match",
            "note": "Check if current sum equals target.",
            "from": 5,
            "to": 6,
            "yes": "Found target sum! Return 1-based indices [left + 1, right + 1]"
          },
          {
            "label": "adjust pointers",
            "note": "If sum is too small, advance left pointer. Otherwise decrement right pointer.",
            "from": 7,
            "to": 10,
            "yes": "cur_sum < target: left += 1",
            "no": "cur_sum > target: right -= 1"
          }
        ]
      }
    ]
  },
  "trapping-rain-water": {
    "statement": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "given": "an array of non-negative integers height",
    "ret": "an integer representing total units of trapped water",
    "summary": "Water trapped above any bar is min(max_left, max_right) - height[i]; track maximum left/right heights dynamically with two pointers to solve in one pass with constant memory.",
    "starter": "def trap(height: list[int]) -> int:\n    pass",
    "tests": [
      {
        "label": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "inputStr": "{\"height\": [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]}",
        "expectedStr": "6"
      },
      {
        "label": "height = [4,2,0,3,2,5]",
        "inputStr": "{\"height\": [4, 2, 0, 3, 2, 5]}",
        "expectedStr": "9"
      }
    ],
    "approaches": [
      {
        "name": "dynamic programming / prefix suffix max",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Precompute prefix maximums and suffix maximums for each position, then calculate trapped water per bar as min(left_max[i], right_max[i]) - height[i].",
        "code": "def trap(height: list[int]) -> int:\n    if not height:\n        return 0\n    n = len(height)\n    left_max = [0] * n\n    right_max = [0] * n\n    left_max[0] = height[0]\n    for i in range(1, n):\n        left_max[i] = max(left_max[i - 1], height[i])\n    right_max[-1] = height[-1]\n    for i in range(n - 2, -1, -1):\n        right_max[i] = max(right_max[i + 1], height[i])\n    total_water = 0\n    for i in range(n):\n        total_water += min(left_max[i], right_max[i]) - height[i]\n    return total_water",
        "steps": [
          {
            "label": "check edge case",
            "note": "Return 0 if height array is empty.",
            "from": 2,
            "to": 3
          },
          {
            "label": "compute left max array",
            "note": "Build array where left_max[i] holds maximum height from 0 to i.",
            "from": 7,
            "to": 9
          },
          {
            "label": "compute right max array",
            "note": "Build array where right_max[i] holds maximum height from i to n-1.",
            "from": 10,
            "to": 12
          },
          {
            "label": "accumulate water",
            "note": "For each index, add min(left_max[i], right_max[i]) - height[i] to total_water.",
            "from": 13,
            "to": 15
          },
          {
            "label": "return result",
            "note": "Return calculated total water.",
            "from": 16,
            "to": 16
          }
        ]
      },
      {
        "name": "two pointers (optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Use left and right pointers. Track left_max and right_max. Move the pointer on the smaller max side inward since the trapped water bound is determined by the shorter wall.",
        "code": "def trap(height: list[int]) -> int:\n    if not height:\n        return 0\n    left, right = 0, len(height) - 1\n    left_max, right_max = 0, 0\n    total_water = 0\n    while left < right:\n        if height[left] < height[right]:\n            if height[left] >= left_max:\n                left_max = height[left]\n            else:\n                total_water += left_max - height[left]\n            left += 1\n        else:\n            if height[right] >= right_max:\n                right_max = height[right]\n            else:\n                total_water += right_max - height[right]\n            right -= 1\n    return total_water",
        "steps": [
          {
            "label": "init pointers & maximums",
            "note": "Initialize left = 0, right = end, left_max = 0, right_max = 0.",
            "from": 4,
            "to": 6
          },
          {
            "label": "compare height pointers",
            "note": "Check whether height[left] < height[right].",
            "from": 7,
            "to": 8,
            "yes": "Process left side",
            "no": "Process right side"
          },
          {
            "label": "process left side",
            "note": "Update left_max if current height is greater, else add trapped water (left_max - height[left]). Advance left pointer.",
            "from": 9,
            "to": 13
          },
          {
            "label": "process right side",
            "note": "Update right_max if current height is greater, else add trapped water (right_max - height[right]). Decrement right pointer.",
            "from": 14,
            "to": 19
          },
          {
            "label": "return total",
            "note": "Return accumulated total_water when pointers meet.",
            "from": 20,
            "to": 20
          }
        ]
      }
    ]
  },
  "permutation-in-string": {
    "statement": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is the substring of s2.",
    "given": "two strings s1 and s2",
    "ret": "a boolean indicating whether a permutation of s1 exists in s2",
    "summary": "Use a fixed-size sliding window of length len(s1) across s2 while maintaining character frequency counts.",
    "starter": "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        pass",
    "tests": [
      {
        "label": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "inputStr": "{\"s1\": \"ab\", \"s2\": \"eidbaooo\"}",
        "expectedStr": "true"
      },
      {
        "label": "s1 = \"ab\", s2 = \"eidboaoo\"",
        "inputStr": "{\"s1\": \"ab\", \"s2\": \"eidboaoo\"}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(N * M log M)",
        "space": "O(M)",
        "idea": "Check every substring of s2 with length equal to s1. Sort both the substring and s1, then compare if they match.",
        "code": "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        n1, n2 = len(s1), len(s2)\n        if n1 > n2:\n            return False\n        target = sorted(s1)\n        for i in range(n2 - n1 + 1):\n            if sorted(s2[i:i+n1]) == target:\n                return True\n        return False",
        "steps": [
          {
            "label": "length check",
            "note": "If s1 is longer than s2, s2 cannot contain any permutation of s1.",
            "from": 3,
            "to": 5,
            "yes": "Return False early.",
            "no": "Continue to target sorting."
          },
          {
            "label": "sort target string",
            "note": "Sort s1 to use as a canonized baseline for comparison.",
            "from": 6,
            "to": 6
          },
          {
            "label": "iterate substrings",
            "note": "Slide through s2 in slices of size len(s1).",
            "from": 7,
            "to": 7
          },
          {
            "label": "check window match",
            "note": "Sort the window slice and compare with target.",
            "from": 8,
            "to": 9,
            "yes": "Match found, return True.",
            "no": "Continue iteration to next slice."
          },
          {
            "label": "exhausted search",
            "note": "No window matched target permutation.",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "optimal sliding window",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "Maintain dynamic character frequency counts for a sliding window of length len(s1) in s2 using fixed 26-element array comparisons.",
        "code": "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        n1, n2 = len(s1), len(s2)\n        if n1 > n2:\n            return False\n        c1, c2 = [0] * 26, [0] * 26\n        for i in range(n1):\n            c1[ord(s1[i]) - 97] += 1\n            c2[ord(s2[i]) - 97] += 1\n        if c1 == c2:\n            return True\n        for i in range(n1, n2):\n            c2[ord(s2[i]) - 97] += 1\n            c2[ord(s2[i - n1]) - 97] -= 1\n            if c1 == c2:\n                return True\n        return False",
        "steps": [
          {
            "label": "init frequency tables",
            "note": "Create frequency count arrays for lowercase English letters (26 elements).",
            "from": 5,
            "to": 5
          },
          {
            "label": "populate initial window",
            "note": "Fill frequency arrays for all of s1 and the first window of s2 of length len(s1).",
            "from": 6,
            "to": 8
          },
          {
            "label": "initial match check",
            "note": "If initial window counts match s1 counts, return True.",
            "from": 9,
            "to": 10,
            "yes": "Permutation found at index 0.",
            "no": "Slide window forward."
          },
          {
            "label": "slide window",
            "note": "Add character coming into window at right, remove character leaving from left.",
            "from": 11,
            "to": 13
          },
          {
            "label": "window match check",
            "note": "Check if updated window count matches s1 count array.",
            "from": 14,
            "to": 15,
            "yes": "Permutation found, return True.",
            "no": "Continue loop."
          }
        ]
      }
    ]
  },
  "sliding-window-maximum": {
    "statement": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    "given": "an array of integers nums and an integer k",
    "ret": "an array containing the maximum element of each sliding window",
    "summary": "Use a monotonic double-ended queue (deque) storing indices to track candidates for maximum elements in O(1) amortized per step.",
    "starter": "class Solution:\n    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:\n        pass",
    "tests": [
      {
        "label": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "inputStr": "{\"nums\": [1,3,-1,-3,5,3,6,7], \"k\": 3}",
        "expectedStr": "[3,3,5,5,6,7]"
      },
      {
        "label": "nums = [1], k = 1",
        "inputStr": "{\"nums\": [1], \"k\": 1}",
        "expectedStr": "[1]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(N * K)",
        "space": "O(1)",
        "idea": "For every possible sliding window position, compute max element by scanning the k items.",
        "code": "class Solution:\n    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:\n        res = []\n        n = len(nums)\n        for i in range(n - k + 1):\n            max_val = max(nums[i:i+k])\n            res.append(max_val)\n        return res",
        "steps": [
          {
            "label": "initialize result list",
            "note": "Create output list to store window maximums.",
            "from": 3,
            "to": 3
          },
          {
            "label": "iterate window start",
            "note": "Loop through all starting indices i from 0 to n - k.",
            "from": 5,
            "to": 5
          },
          {
            "label": "find current window max",
            "note": "Scan subsegment of length k to find maximum value.",
            "from": 6,
            "to": 6
          },
          {
            "label": "append result",
            "note": "Append computed maximum to output array.",
            "from": 7,
            "to": 7
          }
        ]
      },
      {
        "name": "optimal monotonic deque",
        "time": "O(N)",
        "space": "O(K)",
        "idea": "Maintain a deque of indices in strictly decreasing order of values. Pop smaller elements from the back and out-of-bounds indices from the front.",
        "code": "from collections import deque\n\nclass Solution:\n    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:\n        q = deque()\n        res = []\n        for i, val in enumerate(nums):\n            while q and nums[q[-1]] <= val:\n                q.pop()\n            q.append(i)\n            if q[0] <= i - k:\n                q.popleft()\n            if i >= k - 1:\n                res.append(nums[q[0]])\n        return res",
        "steps": [
          {
            "label": "initialize deque",
            "note": "Initialize empty deque to hold indices of potential maximum elements.",
            "from": 5,
            "to": 6
          },
          {
            "label": "maintain monotonicity",
            "note": "Remove indices from back whose values are <= incoming element val.",
            "from": 8,
            "to": 9
          },
          {
            "label": "push current index",
            "note": "Append current index i to back of deque.",
            "from": 10,
            "to": 10
          },
          {
            "label": "remove stale elements",
            "note": "If queue front index is out of current window bounds (<= i - k), pop from front.",
            "from": 11,
            "to": 12
          },
          {
            "label": "record maximum",
            "note": "Once window size reaches k, max value is at front of deque; append it to res.",
            "from": 13,
            "to": 14
          }
        ]
      }
    ]
  },
  "min-stack": {
    "statement": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the MinStack class:\n- MinStack() initializes the stack object.\n- void push(int val) pushes the element val onto the stack.\n- void pop() removes the element on the top of the stack.\n- int top() gets the top element of the stack.\n- int getMin() retrieves the minimum element in the stack.",
    "given": "series of stack operations and integer values",
    "ret": "outputs of top and getMin calls",
    "summary": "Maintain a secondary auxiliary stack (or store pairs) to keep track of the minimum value at each depth of the stack.",
    "starter": "class MinStack:\n    def __init__(self):\n        pass\n    def push(self, val: int) -> None:\n        pass\n    def pop(self) -> None:\n        pass\n    def top(self) -> int:\n        pass\n    def getMin(self) -> int:\n        pass",
    "tests": [
      {
        "label": "ops = [\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"], vals = [[],[-2],[0],[-3],[],[],[],[]]",
        "inputStr": "{\"ops\": [\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"], \"vals\": [[],[-2],[0],[-3],[],[],[],[]]}",
        "expectedStr": "[null,null,null,null,-3,null,0,-2]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(1) push/pop/top, O(N) getMin",
        "space": "O(N)",
        "idea": "Use a standard list as a stack. Iteratively search through the whole stack to find the minimum element during getMin operations.",
        "code": "class MinStack:\n    def __init__(self):\n        self.stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n\n    def pop(self) -> None:\n        self.stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return min(self.stack)",
        "steps": [
          {
            "label": "initialize stack",
            "note": "Initialize internal array storage.",
            "from": 3,
            "to": 3
          },
          {
            "label": "push / pop / top",
            "note": "Perform standard O(1) array end operations.",
            "from": 6,
            "to": 12
          },
          {
            "label": "getMin scan",
            "note": "Scan entire list using min() function in O(N) time.",
            "from": 14,
            "to": 15
          }
        ]
      },
      {
        "name": "optimal two stacks",
        "time": "O(1) all operations",
        "space": "O(N)",
        "idea": "Keep an auxiliary stack min_stack where min_stack[-1] represents the minimum element present in the main stack up to that level.",
        "code": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        current_min = self.min_stack[-1] if self.min_stack else val\n        self.min_stack.append(min(val, current_min))\n\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]",
        "steps": [
          {
            "label": "initialize stacks",
            "note": "Maintain stack for data and parallel min_stack for minimum values.",
            "from": 3,
            "to": 4
          },
          {
            "label": "push logic",
            "note": "Push element to data stack and compute dynamic minimum to push onto min_stack.",
            "from": 7,
            "to": 9
          },
          {
            "label": "pop logic",
            "note": "Pop simultaneously from both stack and min_stack to maintain sync.",
            "from": 12,
            "to": 13
          },
          {
            "label": "top logic",
            "note": "Return last element in main data stack.",
            "from": 16,
            "to": 16
          },
          {
            "label": "getMin logic",
            "note": "Return top element of min_stack in O(1) time.",
            "from": 19,
            "to": 19
          }
        ]
      }
    ]
  },
  "evaluate-reverse-polish-notation": {
    "statement": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression. Note that: The valid operators are '+', '-', '*', and '/'. Each operand may be an integer or another expression. The division between two integers always truncates toward zero. There will not be any division by zero. The input represents a valid arithmetic expression in reverse polish notation.",
    "given": "an array of strings tokens representing an arithmetic expression in Reverse Polish Notation",
    "ret": "an integer that represents the value of the expression",
    "summary": "Use a stack to store operands; when an operator is encountered, pop the top two operands, evaluate the operation, and push the result back onto the stack.",
    "starter": "class Solution:\n    def evalRPN(self, tokens: list[str]) -> int:\n        pass",
    "tests": [
      {
        "label": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "inputStr": "{\"tokens\": [\"2\", \"1\", \"+\", \"3\", \"*\"]}",
        "expectedStr": "9"
      },
      {
        "label": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "inputStr": "{\"tokens\": [\"4\", \"13\", \"5\", \"/\", \"+\"]}",
        "expectedStr": "6"
      },
      {
        "label": "tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
        "inputStr": "{\"tokens\": [\"10\", \"6\", \"9\", \"3\", \"+\", \"-11\", \"*\", \"/\", \"*\", \"17\", \"+\", \"5\", \"+\"]}",
        "expectedStr": "22"
      }
    ],
    "approaches": [
      {
        "name": "array modification (naive)",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Repeatedly search for the first operator, replace the operator and its two preceding operands with the result in-place, and repeat until one element remains.",
        "code": "class Solution:\n    def evalRPN(self, tokens: list[str]) -> int:\n        i = 0\n        while len(tokens) > 1:\n            if tokens[i] in \"+-*/\":\n                a = int(tokens[i - 2])\n                b = int(tokens[i - 1])\n                op = tokens[i]\n                if op == '+': res = a + b\n                elif op == '-': res = a - b\n                elif op == '*': res = a * b\n                else: res = int(a / b)\n                tokens[i - 2] = str(res)\n                tokens.pop(i)\n                tokens.pop(i - 1)\n                i -= 2\n            i += 1\n        return int(tokens[0])",
        "steps": [
          {
            "label": "init index",
            "note": "Initialize index pointer to scan tokens sequentially.",
            "from": 3,
            "to": 4
          },
          {
            "label": "check operator",
            "note": "Check if current token is an operator.",
            "from": 5,
            "to": 6,
            "yes": "Token is operator; evaluate previous two tokens",
            "no": "Token is number; advance index"
          },
          {
            "label": "evaluate sub-expression",
            "note": "Perform operation using integer truncation toward zero.",
            "from": 7,
            "to": 12
          },
          {
            "label": "splice array",
            "note": "Replace evaluated slice with result and shift pointer backward.",
            "from": 13,
            "to": 16
          },
          {
            "label": "return answer",
            "note": "Return the final remaining value in tokens list.",
            "from": 18,
            "to": 18
          }
        ]
      },
      {
        "name": "stack optimal evaluation",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Iterate through tokens; push numbers to a stack, and on encountering an operator, pop two numbers, apply the operation, and push the outcome back.",
        "code": "class Solution:\n    def evalRPN(self, tokens: list[str]) -> int:\n        stack = []\n        for token in tokens:\n            if token in \"+-*/\":\n                b = stack.pop()\n                a = stack.pop()\n                if token == '+':\n                    stack.append(a + b)\n                elif token == '-':\n                    stack.append(a - b)\n                elif token == '*':\n                    stack.append(a * b)\n                else:\n                    stack.append(int(a / b))\n            else:\n                stack.append(int(token))\n        return stack[0]",
        "steps": [
          {
            "label": "init stack",
            "note": "Initialize empty stack to track intermediate numbers.",
            "from": 3,
            "to": 4
          },
          {
            "label": "process token",
            "note": "Determine if token is operator or integer operand.",
            "from": 5,
            "to": 5,
            "yes": "Pop top two values to execute operation",
            "no": "Push parsed integer onto stack"
          },
          {
            "label": "pop operands",
            "note": "Pop operand b first (right operand), then operand a (left operand).",
            "from": 6,
            "to": 7
          },
          {
            "label": "apply operator",
            "note": "Perform arithmetic operation with integer truncation toward zero for division.",
            "from": 8,
            "to": 15
          },
          {
            "label": "push operand",
            "note": "Convert string number to integer and push onto stack.",
            "from": 17,
            "to": 17
          },
          {
            "label": "return result",
            "note": "Return the remaining integer at stack top.",
            "from": 18,
            "to": 18
          }
        ]
      }
    ]
  },
  "generate-parentheses": {
    "statement": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "given": "an integer n representing the number of pairs of parentheses",
    "ret": "a list of all combinations of well-formed parentheses",
    "summary": "Use recursive backtracking to add opening parentheses when open_count < n and closing parentheses when close_count < open_count.",
    "starter": "class Solution:\n    def generateParenthesis(self, n: int) -> list[str]:\n        pass",
    "tests": [
      {
        "label": "n = 3",
        "inputStr": "{\"n\": 3}",
        "expectedStr": "[\"((()))\", \"(()())\", \"(())()\", \"()(())\", \"()()()\"]"
      },
      {
        "label": "n = 1",
        "inputStr": "{\"n\": 1}",
        "expectedStr": "[\"()\"]"
      }
    ],
    "approaches": [
      {
        "name": "brute force (generate all)",
        "time": "O(2^(2n) * n)",
        "space": "O(2^(2n) * n)",
        "idea": "Generate all possible strings of length 2*n containing '(' and ')', then filter out strings that are not valid well-formed parentheses.",
        "code": "class Solution:\n    def generateParenthesis(self, n: int) -> list[str]:\n        res = []\n        def isValid(s):\n            bal = 0\n            for c in s:\n                bal += 1 if c == '(' else -1\n                if bal < 0: return False\n            return bal == 0\n        def generate(curr):\n            if len(curr) == 2 * n:\n                if isValid(curr):\n                    res.append(\"\".join(curr))\n                return\n            curr.append('(')\n            generate(curr)\n            curr.pop()\n            curr.append(')')\n            generate(curr)\n            curr.pop()\n        generate([])\n        return res",
        "steps": [
          {
            "label": "init result list",
            "note": "Create container for valid combinations.",
            "from": 3,
            "to": 3
          },
          {
            "label": "check base case",
            "note": "When string length reaches 2*n, validate parenthesization.",
            "from": 11,
            "to": 14,
            "yes": "If valid, append copy to results and return",
            "no": "If not complete length, continue recursion"
          },
          {
            "label": "recurse with '('",
            "note": "Append '(' and make recursive call.",
            "from": 15,
            "to": 17
          },
          {
            "label": "recurse with ')'",
            "note": "Append ')' and make recursive call.",
            "from": 18,
            "to": 20
          },
          {
            "label": "return results",
            "note": "Return full list of validated combinations.",
            "from": 22,
            "to": 22
          }
        ]
      },
      {
        "name": "backtracking (guided)",
        "time": "O(4^n / sqrt(n))",
        "space": "O(n)",
        "idea": "Build strings recursively, adding '(' if open_count < n and ')' if close_count < open_count to ensure only valid prefixes are generated.",
        "code": "class Solution:\n    def generateParenthesis(self, n: int) -> list[str]:\n        res = []\n        def backtrack(open_c, close_c, path):\n            if len(path) == 2 * n:\n                res.append(\"\".join(path))\n                return\n            if open_c < n:\n                path.append(\"(\")\n                backtrack(open_c + 1, close_c, path)\n                path.pop()\n            if close_c < open_c:\n                path.append(\")\")\n                backtrack(open_c, close_c + 1, path)\n                path.pop()\n        backtrack(0, 0, [])\n        return res",
        "steps": [
          {
            "label": "init recursion",
            "note": "Start helper backtrack function with 0 open and 0 closed parentheses.",
            "from": 3,
            "to": 16
          },
          {
            "label": "check full combination",
            "note": "Check if current path has reached target length 2 * n.",
            "from": 5,
            "to": 7,
            "yes": "Add string to results and backtrack",
            "no": "Continue exploring valid extensions"
          },
          {
            "label": "try open parenthesis",
            "note": "Can add '(' if total open parentheses used is less than n.",
            "from": 8,
            "to": 11,
            "yes": "Append '(' and recursively call backtrack(open_c + 1, close_c)",
            "no": "Skip adding '('"
          },
          {
            "label": "try close parenthesis",
            "note": "Can add ')' if count of close parentheses is less than open parentheses.",
            "from": 12,
            "to": 15,
            "yes": "Append ')' and recursively call backtrack(open_c, close_c + 1)",
            "no": "Skip adding ')'"
          },
          {
            "label": "return output list",
            "note": "Return collected valid combinations array.",
            "from": 17,
            "to": 17
          }
        ]
      }
    ]
  },
  "daily-temperatures": {
    "statement": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the i-th day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    "given": "an array of integers temperatures representing daily temperatures",
    "ret": "an array of integers where answer[i] is the number of days to wait for a warmer temperature",
    "summary": "Use a monotonic decreasing stack storing indices; for each temperature, pop colder days from the stack and compute day differences.",
    "starter": "class Solution:\n    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:\n        pass",
    "tests": [
      {
        "label": "temperatures = [73,74,75,71,69,72,76,73]",
        "inputStr": "{\"temperatures\": [73, 74, 75, 71, 69, 72, 76, 73]}",
        "expectedStr": "[1, 1, 4, 2, 1, 1, 0, 0]"
      },
      {
        "label": "temperatures = [30,40,50,60]",
        "inputStr": "{\"temperatures\": [30, 40, 50, 60]}",
        "expectedStr": "[1, 1, 1, 0]"
      },
      {
        "label": "temperatures = [30,60,90]",
        "inputStr": "{\"temperatures\": [30, 60, 90]}",
        "expectedStr": "[1, 1, 0]"
      }
    ],
    "approaches": [
      {
        "name": "brute force (nested loops)",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "For each day, iterate through all future days to find the first day with a strictly higher temperature.",
        "code": "class Solution:\n    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:\n        n = len(temperatures)\n        res = [0] * n\n        for i in range(n):\n            for j in range(i + 1, n):\n                if temperatures[j] > temperatures[i]:\n                    res[i] = j - i\n                    break\n        return res",
        "steps": [
          {
            "label": "init result array",
            "note": "Initialize result array with zeros of same length.",
            "from": 3,
            "to": 4
          },
          {
            "label": "outer loop",
            "note": "Pick target day index i.",
            "from": 5,
            "to": 5
          },
          {
            "label": "inner loop scan",
            "note": "Scan subsequent days j > i for a warmer temperature.",
            "from": 6,
            "to": 7,
            "yes": "Found warmer day; compute distance and break inner loop",
            "no": "Continue checking next future day"
          },
          {
            "label": "save wait distance",
            "note": "Assign j - i to res[i].",
            "from": 8,
            "to": 9
          },
          {
            "label": "return results",
            "note": "Return complete array of waiting days.",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "monotonic stack",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Maintain a stack of indices with decreasing temperatures. When a warmer temperature is encountered, pop indices and set their answer as the difference between current index and popped index.",
        "code": "class Solution:\n    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:\n        res = [0] * len(temperatures)\n        stack = []\n        for i, temp in enumerate(temperatures):\n            while stack and temperatures[stack[-1]] < temp:\n                prev_i = stack.pop()\n                res[prev_i] = i - prev_i\n            stack.append(i)\n        return res",
        "steps": [
          {
            "label": "init stack and result",
            "note": "Initialize zero-filled result list and empty stack for indices.",
            "from": 3,
            "to": 4
          },
          {
            "label": "iterate temperatures",
            "note": "Iterate through temperatures array with index i and value temp.",
            "from": 5,
            "to": 5
          },
          {
            "label": "check stack top",
            "note": "Compare current temperature with temperature at top index of stack.",
            "from": 6,
            "to": 6,
            "yes": "Current temp is warmer; pop colder index",
            "no": "Stack empty or top is warmer/equal; proceed to append"
          },
          {
            "label": "resolve waiting day",
            "note": "Pop stack index and calculate day difference i - prev_i.",
            "from": 7,
            "to": 8
          },
          {
            "label": "push current index",
            "note": "Push current index i onto stack to await future warmer day.",
            "from": 9,
            "to": 9
          },
          {
            "label": "return distances",
            "note": "Return final list of wait days.",
            "from": 10,
            "to": 10
          }
        ]
      }
    ]
  },
  "car-fleet": {
    "statement": "There are n cars at given miles away from the starting mile 0, traveling to a target mile. You are given two integer arrays position and speed, both of length n, where position[i] is the starting position of the ith car and speed[i] is the speed of the ith car in miles per hour. A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. A car fleet is some non-empty set of cars driving at the same position and speed. Return the number of car fleets that will arrive at the destination.",
    "given": "an integer target, an integer array position, and an integer array speed",
    "ret": "the number of car fleets that will arrive at the destination",
    "summary": "Sort cars by starting position in descending order and calculate arrival times. Iterate from closest to farthest from the target, forming a new fleet whenever a car's arrival time strictly exceeds the fleet time ahead of it.",
    "starter": "class Solution:\n    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
        "inputStr": "{\"target\": 12, \"position\": [10,8,0,5,3], \"speed\": [2,4,1,1,3]}",
        "expectedStr": "3"
      },
      {
        "label": "target = 10, position = [3], speed = [3]",
        "inputStr": "{\"target\": 10, \"position\": [3], \"speed\": [3]}",
        "expectedStr": "1"
      },
      {
        "label": "target = 100, position = [0,2,4], speed = [4,2,1]",
        "inputStr": "{\"target\": 100, \"position\": [0,2,4], \"speed\": [4,2,1]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "sorting and linear scan",
        "time": "O(n log n)",
        "space": "O(n)",
        "idea": "Pair positions and speeds, then sort descending by position. Iterate through the cars to compute reaching time. If a car takes longer than the fleet ahead, it starts a new fleet.",
        "code": "class Solution:\n    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:\n        cars = sorted(zip(position, speed), reverse=True)\n        fleets = 0\n        max_time = 0.0\n        for pos, spd in cars:\n            time = (target - pos) / spd\n            if time > max_time:\n                fleets += 1\n                max_time = time\n        return fleets",
        "steps": [
          {
            "label": "Sort cars",
            "note": "Combine position and speed, then sort in descending order of position so we process cars closest to the target first.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Initialize counters",
            "note": "Set fleet count to 0 and max_time to 0.0 to track the bottleneck arrival time of the current leading fleet.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Calculate arrival time",
            "note": "Compute time taken for current car to reach target: (target - pos) / spd.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Check fleet condition",
            "note": "Determine if current car arrives later than the fleet ahead of it.",
            "from": 8,
            "to": 8,
            "yes": "Car takes longer, meaning it cannot catch up. Increment fleets and update max_time.",
            "no": "Car catches up to fleet ahead, so it joins the existing fleet."
          },
          {
            "label": "Update fleet count and max_time",
            "note": "Increment fleet counter and assign max_time = current time.",
            "from": 9,
            "to": 10
          },
          {
            "label": "Return result",
            "note": "Return total number of distinct car fleets counted.",
            "from": 11,
            "to": 11
          }
        ]
      },
      {
        "name": "monotonic stack",
        "time": "O(n log n)",
        "space": "O(n)",
        "idea": "Sort cars by position descending, convert to arrival times, and push onto a stack. If top of stack takes less time or equal to previous element, pop it because it catches up.",
        "code": "class Solution:\n    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:\n        cars = sorted(zip(position, speed), reverse=True)\n        stack = []\n        for pos, spd in cars:\n            stack.append((target - pos) / spd)\n            if len(stack) >= 2 and stack[-1] <= stack[-2]:\n                stack.pop()\n        return len(stack)",
        "steps": [
          {
            "label": "Sort cars descending",
            "note": "Sort cars from closest to destination to furthest away.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Push arrival time",
            "note": "Calculate arrival time for current car and push to stack.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Check fleet merge",
            "note": "Compare current car's time with the time of the car ahead.",
            "from": 7,
            "to": 7,
            "yes": "Current car is faster or equal, so it joins the fleet ahead. Pop top element.",
            "no": "Current car is slower, forming a distinct fleet behind."
          },
          {
            "label": "Pop from stack",
            "note": "Remove current car from stack as it merges into preceding fleet.",
            "from": 8,
            "to": 8
          },
          {
            "label": "Return stack length",
            "note": "The final size of stack equals total number of distinct fleets.",
            "from": 9,
            "to": 9
          }
        ]
      }
    ]
  },
  "largest-rectangle-in-histogram": {
    "statement": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "given": "an array of integers heights representing bar heights",
    "ret": "the area of the largest rectangle in the histogram",
    "summary": "Use a monotonic increasing stack storing indices. When encountering a height smaller than the top of the stack, pop bars and compute maximum areas using the popped bar height as the minimum boundary height.",
    "starter": "class Solution:\n    def largestRectangleArea(self, heights: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "heights = [2,1,5,6,2,3]",
        "inputStr": "{\"heights\": [2,1,5,6,2,3]}",
        "expectedStr": "10"
      },
      {
        "label": "heights = [2,4]",
        "inputStr": "{\"heights\": [2,4]}",
        "expectedStr": "4"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "For every bar, expand left and right as far as possible to find the maximum width where all bars are at least as tall as the current bar.",
        "code": "class Solution:\n    def largestRectangleArea(self, heights: list[int]) -> int:\n        max_area = 0\n        n = len(heights)\n        for i in range(n):\n            min_h = heights[i]\n            for j in range(i, n):\n                min_h = min(min_h, heights[j])\n                area = min_h * (j - i + 1)\n                max_area = max(max_area, area)\n        return max_area",
        "steps": [
          {
            "label": "Initialize max_area",
            "note": "Set max_area to 0.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Outer loop left bound",
            "note": "Iterate left endpoint i from 0 to n-1.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Inner loop right bound",
            "note": "Iterate right endpoint j from i to n-1.",
            "from": 6,
            "to": 6
          },
          {
            "label": "Track min height",
            "note": "Maintain minimum height in range [i, j].",
            "from": 7,
            "to": 7
          },
          {
            "label": "Compute area",
            "note": "Area is min height multiplied by width (j - i + 1). Update max_area.",
            "from": 8,
            "to": 9
          },
          {
            "label": "Return result",
            "note": "Return global maximum area calculated across all pairs.",
            "from": 10,
            "to": 10
          }
        ]
      },
      {
        "name": "monotonic stack",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Maintain a stack of (index, height) pairs in strictly increasing order. When a smaller bar is encountered, pop elements to calculate rectangle areas, extending the current bar's starting index leftward.",
        "code": "class Solution:\n    def largestRectangleArea(self, heights: list[int]) -> int:\n        max_area = 0\n        stack = []  # pairs: (index, height)\n        for i, h in enumerate(heights):\n            start = i\n            while stack and stack[-1][1] > h:\n                idx, height = stack.pop()\n                max_area = max(max_area, height * (i - idx))\n                start = idx\n            stack.append((start, h))\n        for idx, height in stack:\n            max_area = max(max_area, height * (len(heights) - idx))\n        return max_area",
        "steps": [
          {
            "label": "Init stack and max_area",
            "note": "Create an empty stack to track pairs of (start index, height). Set max_area = 0.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Iterate histogram bars",
            "note": "Loop through indices and heights of array.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Check monotonic stack condition",
            "note": "Check if top bar of stack is taller than current height h.",
            "from": 6,
            "to": 6,
            "yes": "Top height > current height. Pop top bar and calculate max rectangle area with top height.",
            "no": "Stack height <= current height. Push current (start, h) to stack."
          },
          {
            "label": "Pop stack and update max_area",
            "note": "Calculate area using popped height and width (current index - popped index). Shift start index left.",
            "from": 7,
            "to": 9
          },
          {
            "label": "Push current bar",
            "note": "Push (start, h) onto stack.",
            "from": 10,
            "to": 10
          },
          {
            "label": "Process remaining stack bars",
            "note": "For any remaining items in stack, compute potential area extending to the far right end of the histogram.",
            "from": 11,
            "to": 12
          },
          {
            "label": "Return result",
            "note": "Return max_area.",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "binary-search": {
    "statement": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.",
    "given": "a sorted array of integers nums and an integer target",
    "ret": "the index of target if found, otherwise -1",
    "summary": "Maintain left and right pointers. Calculate mid index; if target equals nums[mid], return mid. Adjust pointers based on comparison to eliminate half of the remaining search space at each step.",
    "starter": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        pass",
    "tests": [
      {
        "label": "nums = [-1,0,3,5,9,12], target = 9",
        "inputStr": "{\"nums\": [-1,0,3,5,9,12], \"target\": 9}",
        "expectedStr": "4"
      },
      {
        "label": "nums = [-1,0,3,5,9,12], target = 2",
        "inputStr": "{\"nums\": [-1,0,3,5,9,12], \"target\": 2}",
        "expectedStr": "-1"
      }
    ],
    "approaches": [
      {
        "name": "linear search",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Iterate through each element sequentially from left to right and compare it with target.",
        "code": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        for i in range(len(nums)):\n            if nums[i] == target:\n                return i\n        return -1",
        "steps": [
          {
            "label": "Iterate elements",
            "note": "Loop through indices from 0 to len(nums) - 1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check match",
            "note": "Check if element at index i equals target.",
            "from": 4,
            "to": 4,
            "yes": "Found target, return index i.",
            "no": "Continue to next iteration."
          },
          {
            "label": "Return -1",
            "note": "Target not present in array after checking all elements.",
            "from": 6,
            "to": 6
          }
        ]
      },
      {
        "name": "binary search",
        "time": "O(log n)",
        "space": "O(1)",
        "idea": "Use two pointers left and right to define search range. Halve search range in each iteration based on comparison with middle element.",
        "code": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return mid\n            elif nums[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return -1",
        "steps": [
          {
            "label": "Init pointers",
            "note": "Set left pointer to index 0 and right pointer to len(nums) - 1.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Loop search condition",
            "note": "Continue loop while search space is valid (left <= right).",
            "from": 4,
            "to": 4,
            "yes": "Valid search space exists, compute mid index.",
            "no": "Search space exhausted without finding target, return -1."
          },
          {
            "label": "Calculate middle index",
            "note": "mid = (left + right) // 2.",
            "from": 5,
            "to": 5
          },
          {
            "label": "Check match at mid",
            "note": "Compare nums[mid] with target.",
            "from": 6,
            "to": 7,
            "yes": "nums[mid] == target, return index mid.",
            "no": "Check whether target lies in left or right half."
          },
          {
            "label": "Adjust pointers",
            "note": "If nums[mid] < target, shift left = mid + 1. Otherwise shift right = mid - 1.",
            "from": 8,
            "to": 11
          },
          {
            "label": "Return -1",
            "note": "Target not found in array.",
            "from": 12,
            "to": 12
          }
        ]
      }
    ]
  },
  "search-a-2d-matrix": {
    "statement": "You are given an m x n integer matrix matrix with the following two properties:\n- Each row is sorted in non-decreasing order.\n- The first integer of each row is greater than the last integer of the previous row.\n\nGiven an integer target, return true if target is in matrix or false otherwise.\n\nYou must write a solution in O(log(m * n)) time complexity.",
    "given": "an m x n integer matrix matrix and an integer target",
    "ret": "true if target is in matrix, false otherwise",
    "summary": "Treat the m x n matrix as a flattened 1D sorted array of size m * n and perform standard binary search using index mapping.",
    "starter": "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        pass",
    "tests": [
      {
        "label": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "inputStr": "{\"matrix\": [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], \"target\": 3}",
        "expectedStr": "true"
      },
      {
        "label": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "inputStr": "{\"matrix\": [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], \"target\": 13}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(m * n)",
        "space": "O(1)",
        "idea": "Traverse through every element in the matrix row by row and column by column to check if it equals the target.",
        "code": "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        for row in matrix:\n            for val in row:\n                if val == target:\n                    return True\n        return False",
        "steps": [
          {
            "label": "Iterate rows",
            "note": "Loop through each row in the 2D matrix",
            "from": 3,
            "to": 4
          },
          {
            "label": "Iterate columns",
            "note": "Loop through each value in the current row",
            "from": 4,
            "to": 5
          },
          {
            "label": "Check match",
            "note": "Compare current element with target value",
            "from": 5,
            "to": 6,
            "yes": "Target found, return True immediately",
            "no": "Target not equal, move to next element"
          },
          {
            "label": "Return default",
            "note": "All elements checked without finding target",
            "from": 7,
            "to": 7
          }
        ]
      },
      {
        "name": "optimal binary search",
        "time": "O(log(m * n))",
        "space": "O(1)",
        "idea": "Since matrix elements strictly increase from left-to-right and top-to-bottom, map 1D indices from 0 to (m*n - 1) into 2D coordinates via row = idx // n and col = idx % n, performing binary search.",
        "code": "class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        m, n = len(matrix), len(matrix[0])\n        left, right = 0, m * n - 1\n        while left <= right:\n            mid = (left + right) // 2\n            val = matrix[mid // n][mid % n]\n            if val == target:\n                return True\n            elif val < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return False",
        "steps": [
          {
            "label": "Initialize bounds",
            "note": "Set left=0 and right=m*n-1 for 1D search space",
            "from": 3,
            "to": 5
          },
          {
            "label": "Compute middle element",
            "note": "Find mid index and convert to matrix coordinates [mid // n][mid % n]",
            "from": 5,
            "to": 7
          },
          {
            "label": "Check equality",
            "note": "If matrix[row][col] == target, return True",
            "from": 7,
            "to": 8,
            "yes": "Found target, return True",
            "no": "Not equal, check if target is larger or smaller"
          },
          {
            "label": "Adjust pointers",
            "note": "If val < target move left pointer to mid + 1, else move right pointer to mid - 1",
            "from": 9,
            "to": 12
          },
          {
            "label": "Exhausted search space",
            "note": "Loop finishes without match, return False",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "koko-eating-bananas": {
    "statement": "Koko loves to eat bananas. There are n piles of bananas, the i-th pile has piles[i] bananas. The guards have gone and will come back in h hours.\n\nKoko can decide her banana-eating speed of k per hour. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.\n\nKoko wants to finish eating all the bananas before the guards return.\n\nReturn the minimum integer k such that she can eat all the bananas within h hours.",
    "given": "an array of integers piles and an integer h representing available hours",
    "ret": "the minimum integer eating speed k",
    "summary": "Binary search for minimum valid speed k in range [1, max(piles)], checking if total hours ceil(p / k) sum to <= h.",
    "starter": "class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        pass",
    "tests": [
      {
        "label": "piles = [3,6,7,11], h = 8",
        "inputStr": "{\"piles\": [3, 6, 7, 11], \"h\": 8}",
        "expectedStr": "4"
      },
      {
        "label": "piles = [30,11,23,4,20], h = 5",
        "inputStr": "{\"piles\": [30, 11, 23, 4, 20], \"h\": 5}",
        "expectedStr": "30"
      },
      {
        "label": "piles = [30,11,23,4,20], h = 6",
        "inputStr": "{\"piles\": [30, 11, 23, 4, 20], \"h\": 6}",
        "expectedStr": "23"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O(n * max(piles))",
        "space": "O(1)",
        "idea": "Try every speed k starting from 1 up to max(piles). Compute total hours needed for each k, and return the first k where total hours <= h.",
        "code": "import math\n\nclass Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        for k in range(1, max(piles) + 1):\n            hours = sum(math.ceil(p / k) for p in piles)\n            if hours <= h:\n                return k\n        return max(piles)",
        "steps": [
          {
            "label": "Iterate speeds",
            "note": "Try candidates for k from 1 up to max(piles)",
            "from": 5,
            "to": 6
          },
          {
            "label": "Calculate required hours",
            "note": "Sum ceiling division of each pile by speed k",
            "from": 6,
            "to": 7
          },
          {
            "label": "Check feasibility",
            "note": "If total hours <= h, return k as the minimum speed",
            "from": 7,
            "to": 8,
            "yes": "Return current k",
            "no": "Try next larger k"
          }
        ]
      },
      {
        "name": "optimal binary search on answer",
        "time": "O(n * log(max(piles)))",
        "space": "O(1)",
        "idea": "The total hours required is monotonically decreasing with speed k. Use binary search in range [1, max(piles)] to find the smallest k that satisfies hours <= h.",
        "code": "import math\n\nclass Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        left, right = 1, max(piles)\n        res = right\n        while left <= right:\n            k = (left + right) // 2\n            hours = sum(math.ceil(p / k) for p in piles)\n            if hours <= h:\n                res = k\n                right = k - 1\n            else:\n                left = k + 1\n        return res",
        "steps": [
          {
            "label": "Initialize range",
            "note": "Set search range left=1 and right=max(piles)",
            "from": 5,
            "to": 7
          },
          {
            "label": "Compute middle speed",
            "note": "Calculate mid candidate speed k",
            "from": 7,
            "to": 8
          },
          {
            "label": "Compute total hours",
            "note": "Sum math.ceil(p / k) for all piles",
            "from": 8,
            "to": 9
          },
          {
            "label": "Check condition and shrink range",
            "note": "If hours <= h, store k in res and search left half (right = k - 1); else search right half (left = k + 1)",
            "from": 9,
            "to": 13,
            "yes": "Speed k is valid, attempt finding smaller k",
            "no": "Speed k is too slow, increase left bound"
          },
          {
            "label": "Return answer",
            "note": "Return the minimum valid speed saved in res",
            "from": 14,
            "to": 14
          }
        ]
      }
    ]
  },
  "time-based-key-value-store": {
    "statement": "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.\n\nImplement the TimeMap class:\n- TimeMap() Initializes the object of the data structure.\n- void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.\n- String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns \"\".",
    "given": "calls to set(key, value, timestamp) and get(key, timestamp)",
    "ret": "retrieved string value for get requests matching timestamp constraints",
    "summary": "Map keys to lists of (timestamp, value) pairs; since timestamps strictly increase in set calls, binary search each list for the maximum timestamp <= query timestamp.",
    "starter": "class TimeMap:\n    def __init__(self):\n        pass\n\n    def set(self, key: str, value: str, timestamp: int) -> None:\n        pass\n\n    def get(self, key: str, timestamp: int) -> str:\n        pass",
    "tests": [
      {
        "label": "key = \"foo\", timestamp = 1",
        "inputStr": "{\"actions\": [\"TimeMap\", \"set\", \"get\", \"get\"], \"values\": [[], [\"foo\", \"bar\", 1], [\"foo\", 1], [\"foo\", 3]]}",
        "expectedStr": "[null, null, \"bar\", \"bar\"]"
      },
      {
        "label": "key = \"foo\", timestamp = 5",
        "inputStr": "{\"actions\": [\"TimeMap\", \"set\", \"set\", \"get\", \"get\"], \"values\": [[], [\"foo\", \"bar\", 1], [\"foo\", \"bar2\", 4], [\"foo\", 4], [\"foo\", 5]]}",
        "expectedStr": "[null, null, null, \"bar2\", \"bar2\"]"
      }
    ],
    "approaches": [
      {
        "name": "brute force linear search",
        "time": "O(1) for set, O(n) for get",
        "space": "O(N) total stored items",
        "idea": "Store timestamp-value pairs in a list for each key. For get calls, iterate backward through the list to find the first entry with timestamp <= query timestamp.",
        "code": "from collections import defaultdict\n\nclass TimeMap:\n    def __init__(self):\n        self.store = defaultdict(list)\n\n    def set(self, key: str, value: str, timestamp: int) -> None:\n        self.store[key].append((timestamp, value))\n\n    def get(self, key: str, timestamp: int) -> str:\n        values = self.store[key]\n        for t, val in reversed(values):\n            if t <= timestamp:\n                return val\n        return \"\"",
        "steps": [
          {
            "label": "Retrieve list",
            "note": "Get list of (timestamp, value) pairs for key",
            "from": 10,
            "to": 11
          },
          {
            "label": "Iterate backwards",
            "note": "Scan list from right to left (newest to oldest)",
            "from": 11,
            "to": 12
          },
          {
            "label": "Check timestamp",
            "note": "If element timestamp <= target timestamp, return value",
            "from": 12,
            "to": 13,
            "yes": "Return matching value immediately",
            "no": "Continue checking older entries"
          },
          {
            "label": "Return default",
            "note": "No valid entry found, return empty string",
            "from": 14,
            "to": 14
          }
        ]
      },
      {
        "name": "optimal binary search",
        "time": "O(1) for set, O(log N) for get",
        "space": "O(N) total stored items",
        "idea": "Since set calls append strictly increasing timestamps, run binary search on the array of (timestamp, value) pairs to find the largest timestamp <= query timestamp.",
        "code": "from collections import defaultdict\n\nclass TimeMap:\n    def __init__(self):\n        self.store = defaultdict(list)\n\n    def set(self, key: str, value: str, timestamp: int) -> None:\n        self.store[key].append((timestamp, value))\n\n    def get(self, key: str, timestamp: int) -> str:\n        values = self.store.get(key, [])\n        res = \"\"\n        left, right = 0, len(values) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if values[mid][0] <= timestamp:\n                res = values[mid][1]\n                left = mid + 1\n            else:\n                right = mid - 1\n        return res",
        "steps": [
          {
            "label": "Fetch history",
            "note": "Retrieve array of pairs for key, initialize res=\"\"",
            "from": 10,
            "to": 12
          },
          {
            "label": "Initialize pointers",
            "note": "Set binary search bounds left=0, right=len(values)-1",
            "from": 12,
            "to": 13
          },
          {
            "label": "Compute mid",
            "note": "Calculate middle index mid",
            "from": 13,
            "to": 14
          },
          {
            "label": "Evaluate mid timestamp",
            "note": "If values[mid][0] <= timestamp, save values[mid][1] in res and shift left = mid + 1",
            "from": 15,
            "to": 17,
            "yes": "Candidate found, search right for potentially closer timestamp",
            "no": "Timestamp too high, move right pointer to mid - 1"
          },
          {
            "label": "Return best answer",
            "note": "Return latest valid value recorded in res",
            "from": 19,
            "to": 19
          }
        ]
      }
    ]
  },
  "median-of-two-sorted-arrays": {
    "statement": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    "given": "two sorted integer arrays nums1 and nums2",
    "ret": "the median of the two combined sorted arrays as a float",
    "summary": "Binary search on the smaller array to partition both arrays into two halves such that all elements on the left side are less than or equal to all elements on the right side.",
    "starter": "class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        pass",
    "tests": [
      {
        "label": "nums1 = [1,3], nums2 = [2]",
        "inputStr": "{\"nums1\": [1,3], \"nums2\": [2]}",
        "expectedStr": "2.0"
      },
      {
        "label": "nums1 = [1,2], nums2 = [3,4]",
        "inputStr": "{\"nums1\": [1,2], \"nums2\": [3,4]}",
        "expectedStr": "2.5"
      }
    ],
    "approaches": [
      {
        "name": "merge and sort",
        "time": "O((m+n) log(m+n))",
        "space": "O(m+n)",
        "idea": "Concatenate both arrays, sort the combined array, and compute the median based on whether total length is odd or even.",
        "code": "class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        merged = sorted(nums1 + nums2)\n        total = len(merged)\n        if total % 2 == 1:\n            return float(merged[total // 2])\n        return (merged[total // 2 - 1] + merged[total // 2]) / 2.0",
        "steps": [
          {
            "label": "combine arrays",
            "note": "Concatenate nums1 and nums2 into a single list.",
            "from": 1,
            "to": 2
          },
          {
            "label": "sort combined list",
            "note": "Sort all merged elements in ascending order.",
            "from": 2,
            "to": 3
          },
          {
            "label": "check length parity",
            "note": "Determine if total element count is odd or even.",
            "from": 3,
            "to": 4,
            "yes": "Return middle element if length is odd",
            "no": "Average middle two elements if length is even"
          }
        ]
      },
      {
        "name": "binary search partition",
        "time": "O(log(min(m, n)))",
        "space": "O(1)",
        "idea": "Partition the smaller array using binary search to split both arrays into equal left and right halves where max(left) <= min(right).",
        "code": "class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        A, B = nums1, nums2\n        if len(A) > len(B):\n            A, B = B, A\n        total = len(A) + len(B)\n        half = total // 2\n        l, r = 0, len(A) - 1\n        while True:\n            i = (l + r) // 2\n            j = half - i - 2\n            Aleft = A[i] if i >= 0 else float('-inf')\n            Aright = A[i + 1] if (i + 1) < len(A) else float('inf')\n            Bleft = B[j] if j >= 0 else float('-inf')\n            Bright = B[j + 1] if (j + 1) < len(B) else float('inf')\n            if Aleft <= Bright and Bleft <= Aright:\n                if total % 2:\n                    return float(min(Aright, Bright))\n                return (max(Aleft, Bleft) + min(Aright, Bright)) / 2.0\n            elif Aleft > Bright:\n                r = i - 1\n            else:\n                l = i + 1",
        "steps": [
          {
            "label": "ensure smaller array first",
            "note": "Swap arrays if A is larger than B so binary search runs on the smaller array.",
            "from": 1,
            "to": 2
          },
          {
            "label": "binary search loop",
            "note": "Compute partition index i for A and corresponding partition index j for B.",
            "from": 2,
            "to": 3
          },
          {
            "label": "extract boundary values",
            "note": "Get boundary elements left/right of partitions with infinity guards for out-of-bounds.",
            "from": 3,
            "to": 4
          },
          {
            "label": "check partition validity",
            "note": "Check if Aleft <= Bright and Bleft <= Aright.",
            "from": 4,
            "to": 5,
            "yes": "Valid partition found; calculate median",
            "no": "Adjust search range using binary search logic"
          }
        ]
      }
    ]
  },
  "copy-list-with-random-pointer": {
    "statement": "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.",
    "given": "the head of a linked list where nodes have val, next, and random pointers",
    "ret": "the head of the newly created deep-copied linked list",
    "summary": "Use a hash map to map original nodes to cloned nodes, then assign next and random pointers in a second pass.",
    "starter": "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        pass",
    "tests": [
      {
        "label": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "inputStr": "{\"head\": [[7,null],[13,0],[11,4],[10,2],[1,0]]}",
        "expectedStr": "[[7,null],[13,0],[11,4],[10,2],[1,0]]"
      },
      {
        "label": "head = [[1,1],[2,1]]",
        "inputStr": "{\"head\": [[1,1],[2,1]]}",
        "expectedStr": "[[1,1],[2,1]]"
      }
    ],
    "approaches": [
      {
        "name": "hash map two pass",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Pass 1 creates new node copies and stores old->new mapping in a hash map. Pass 2 connects next and random pointers using the map.",
        "code": "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        if not head:\n            return None\n        old_to_new = {}\n        curr = head\n        while curr:\n            old_to_new[curr] = Node(curr.val)\n            curr = curr.next\n        curr = head\n        while curr:\n            old_to_new[curr].next = old_to_new.get(curr.next)\n            old_to_new[curr].random = old_to_new.get(curr.random)\n            curr = curr.next\n        return old_to_new[head]",
        "steps": [
          {
            "label": "null check",
            "note": "Return None immediately if list is empty.",
            "from": 1,
            "to": 2
          },
          {
            "label": "first pass - node creation",
            "note": "Traverse original list and create copy nodes without pointers in hash map.",
            "from": 2,
            "to": 3
          },
          {
            "label": "second pass - pointer assignment",
            "note": "Traverse original list again and link copy nodes' next and random pointers.",
            "from": 3,
            "to": 4
          },
          {
            "label": "return copy head",
            "note": "Return mapped copy corresponding to original head node.",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "interleaved nodes O(1) space",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Interleave copied nodes directly inside the original list (A -> A' -> B -> B'), set random pointers, then separate the lists.",
        "code": "class Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        if not head:\n            return None\n        curr = head\n        while curr:\n            nxt = curr.next\n            copy = Node(curr.val)\n            curr.next = copy\n            copy.next = nxt\n            curr = nxt\n        curr = head\n        while curr:\n            if curr.random:\n                curr.next.random = curr.random.next\n            curr = curr.next.next\n        curr = head\n        copy_head = head.next\n        while curr:\n            copy = curr.next\n            curr.next = copy.next\n            copy.next = copy.next.next if copy.next else None\n            curr = curr.next\n        return copy_head",
        "steps": [
          {
            "label": "interleave nodes",
            "note": "Insert new duplicate node after each original node in the list.",
            "from": 1,
            "to": 2
          },
          {
            "label": "copy random pointers",
            "note": "Assign copy.random = orig.random.next for each interleaved copy.",
            "from": 2,
            "to": 3
          },
          {
            "label": "separate lists",
            "note": "Restore original next pointers and isolate copied nodes into standalone list.",
            "from": 3,
            "to": 4
          }
        ]
      }
    ]
  },
  "add-two-numbers": {
    "statement": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    "given": "two non-empty linked lists l1 and l2 representing reverse-digit integers",
    "ret": "the head of a linked list representing the sum in reverse order",
    "summary": "Simultaneously traverse both linked lists, adding values node-by-node along with a carry variable, building a new list.",
    "starter": "class Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        pass",
    "tests": [
      {
        "label": "l1 = [2,4,3], l2 = [5,6,4]",
        "inputStr": "{\"l1\": [2,4,3], \"l2\": [5,6,4]}",
        "expectedStr": "[7,0,8]"
      },
      {
        "label": "l1 = [0], l2 = [0]",
        "inputStr": "{\"l1\": [0], \"l2\": [0]}",
        "expectedStr": "[0]"
      },
      {
        "label": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        "inputStr": "{\"l1\": [9,9,9,9,9,9,9], \"l2\": [9,9,9,9]}",
        "expectedStr": "[8,9,9,9,0,0,0,1]"
      }
    ],
    "approaches": [
      {
        "name": "elementary addition with carry",
        "time": "O(max(m, n))",
        "space": "O(max(m, n))",
        "idea": "Iterate through both lists digit by digit, add values with carry, append result nodes to a dummy head list.",
        "code": "class Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(0)\n        curr = dummy\n        carry = 0\n        while l1 or l2 or carry:\n            val1 = l1.val if l1 else 0\n            val2 = l2.val if l2 else 0\n            total = val1 + val2 + carry\n            carry = total // 10\n            curr.next = ListNode(total % 10)\n            curr = curr.next\n            l1 = l1.next if l1 else None\n            l2 = l2.next if l2 else None\n        return dummy.next",
        "steps": [
          {
            "label": "init dummy and carry",
            "note": "Initialize dummy node to track result list head and carry variable to 0.",
            "from": 1,
            "to": 2
          },
          {
            "label": "traversal loop",
            "note": "Loop while l1, l2, or carry remaining.",
            "from": 2,
            "to": 3
          },
          {
            "label": "compute sum and carry",
            "note": "Extract digit values (defaulting to 0 if node is null) and sum with carry.",
            "from": 3,
            "to": 4
          },
          {
            "label": "append result node",
            "note": "Create new node with digit value (total % 10) and advance pointers.",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "find-the-duplicate-number": {
    "statement": "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and using only constant extra space.",
    "given": "An array of integers nums of length n + 1",
    "ret": "The repeated duplicate integer",
    "summary": "Treat the array as a linked list where nums[i] points to index nums[i], converting the problem into finding the entry point of a cycle using Floyd's Tortoise and Hare algorithm.",
    "starter": "def findDuplicate(nums: list[int]) -> int:\n    pass",
    "tests": [
      {
        "label": "nums = [1,3,4,2,2]",
        "inputStr": "{\"nums\": [1,3,4,2,2]}",
        "expectedStr": "2"
      },
      {
        "label": "nums = [3,1,3,4,2]",
        "inputStr": "{\"nums\": [3,1,3,4,2]}",
        "expectedStr": "3"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force (Nested Loops)",
        "time": "O(n^2)",
        "space": "O(1)",
        "idea": "Compare every element with every other element in the array to find the duplicate pair.",
        "code": "def findDuplicate(nums: list[int]) -> int:\n    n = len(nums)\n    for i in range(n):\n        for j in range(i + 1, n):\n            if nums[i] == nums[j]:\n                return nums[i]\n    return -1",
        "steps": [
          {
            "label": "outer loop",
            "note": "Iterate through each index i from 0 to n-1",
            "from": 3,
            "to": 4
          },
          {
            "label": "inner loop",
            "note": "Iterate through subsequent indices j from i+1 to n-1",
            "from": 4,
            "to": 5
          },
          {
            "label": "compare elements",
            "note": "Check if nums[i] is equal to nums[j]",
            "from": 5,
            "to": 6,
            "yes": "Duplicate found, return nums[i]",
            "no": "Continue searching inner loop"
          },
          {
            "label": "return answer",
            "note": "Return duplicate element when equality condition is met",
            "from": 6,
            "to": 6
          }
        ]
      },
      {
        "name": "Floyd's Cycle Detection (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Use fast and slow pointers to detect a cycle. Since values are in range [1, n], indices form a cycle at the duplicate element. Once pointers meet, reset one pointer to the start and move both at step speed 1 to find the cycle entrance.",
        "code": "def findDuplicate(nums: list[int]) -> int:\n    slow = nums[0]\n    fast = nums[0]\n    while True:\n        slow = nums[slow]\n        fast = nums[nums[fast]]\n        if slow == fast:\n            break\n    slow = nums[0]\n    while slow != fast:\n        slow = nums[slow]\n        fast = nums[fast]\n    return slow",
        "steps": [
          {
            "label": "initialize pointers",
            "note": "Start both slow and fast pointers at nums[0]",
            "from": 2,
            "to": 4
          },
          {
            "label": "first phase traversal",
            "note": "Advance slow pointer by 1 step and fast pointer by 2 steps",
            "from": 5,
            "to": 7
          },
          {
            "label": "check collision",
            "note": "Check if slow and fast pointers meet inside the cycle",
            "from": 7,
            "to": 8,
            "yes": "Break first loop",
            "no": "Continue traversal"
          },
          {
            "label": "reset slow pointer",
            "note": "Set slow pointer back to head (nums[0]) to prepare for phase two",
            "from": 9,
            "to": 10
          },
          {
            "label": "second phase traversal",
            "note": "Move both pointers step-by-step (1 position each) until they meet at cycle entry",
            "from": 10,
            "to": 12,
            "yes": "Match reached; cycle entry identified",
            "no": "Advance both pointers by 1 step"
          },
          {
            "label": "return duplicate",
            "note": "Return value where pointers meet, which is the duplicate number",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "lru-cache": {
    "statement": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with __init__(capacity), get(key), and put(key, value). get and put must run in O(1) average time complexity.",
    "given": "Cache capacity and sequence of get/put method calls with keys and values",
    "ret": "Values returned by get operations (-1 if key not found)",
    "summary": "Combine a Hash Map for O(1) key lookups with a Doubly Linked List to maintain key recency order (Most Recently Used at head, Least Recently Used at tail) in O(1) time.",
    "starter": "class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass",
    "tests": [
      {
        "label": "capacity = 2, commands = [put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4)]",
        "inputStr": "{\"capacity\": 2, \"actions\": [\"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"], \"args\": [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]}",
        "expectedStr": "[null, null, 1, null, -1, null, -1, 3, 4]"
      }
    ],
    "approaches": [
      {
        "name": "OrderedDict / Brute Force List",
        "time": "O(n) for list shift or O(1) amortized using Python OrderedDict",
        "space": "O(capacity)",
        "idea": "Use an array to track usage order and search linearly, or use built-in data structures like OrderedDict to re-insert keys upon access.",
        "code": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.cache = {}\n        self.order = []\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.order.remove(key)\n        self.order.append(key)\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.capacity:\n            lru = self.order.pop(0)\n            del self.cache[lru]\n        self.cache[key] = value\n        self.order.append(key)",
        "steps": [
          {
            "label": "check key existence",
            "note": "Verify if requested key is in cache dictionary",
            "from": 7,
            "to": 8,
            "yes": "Proceed to update usage order",
            "no": "Return -1"
          },
          {
            "label": "update usage order in list",
            "note": "Remove key from current position in self.order list and append to end",
            "from": 9,
            "to": 11
          },
          {
            "label": "handle eviction on put",
            "note": "If cache is full and key is new, remove oldest item from front of self.order and cache",
            "from": 15,
            "to": 18,
            "yes": "Evict LRU key",
            "no": "Proceed to insert key"
          },
          {
            "label": "insert new key-value",
            "note": "Store new value in hash map and mark key as most recently used",
            "from": 19,
            "to": 20
          }
        ]
      },
      {
        "name": "Hash Map + Doubly Linked List (Optimal)",
        "time": "O(1) for both get and put operations",
        "space": "O(capacity)",
        "idea": "Use dummy head and tail nodes in a Doubly Linked List. The node next to head is Most Recently Used; node before tail is Least Recently Used. Hash map maps key to DLL node pointer.",
        "code": "class Node:\n    def __init__(self, key=0, val=0):\n        self.key, self.val = key, val\n        self.prev, self.next = None, None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = {}\n        self.head, self.tail = Node(), Node()\n        self.head.next, self.tail.prev = self.tail, self.head\n\n    def _remove(self, node: Node):\n        p, n = node.prev, node.next\n        p.next, n.prev = n, p\n\n    def _add_to_head(self, node: Node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        node = self.cache[key]\n        self._remove(node)\n        self._add_to_head(node)\n        return node.val\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self._remove(self.cache[key])\n        node = Node(key, value)\n        self.cache[key] = node\n        self._add_to_head(node)\n        if len(self.cache) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru)\n            del self.cache[lru.key]",
        "steps": [
          {
            "label": "initialize structure",
            "note": "Connect dummy head and dummy tail nodes together to create empty doubly linked list",
            "from": 9,
            "to": 10
          },
          {
            "label": "get hit operation",
            "note": "Lookup key node, remove node from current position, insert right after dummy head",
            "from": 22,
            "to": 26,
            "yes": "Node refreshed to head, return value",
            "no": "Return -1"
          },
          {
            "label": "put existing key",
            "note": "If key exists, remove existing node from DLL before adding updated node",
            "from": 29,
            "to": 30,
            "yes": "Remove old node",
            "no": "Create new node"
          },
          {
            "label": "add new node to head",
            "note": "Create Node, link in dictionary, and attach right after dummy head",
            "from": 31,
            "to": 33
          },
          {
            "label": "check capacity breach",
            "note": "If capacity exceeded, identify tail.prev as LRU node, remove from list and delete from hash map",
            "from": 34,
            "to": 37,
            "yes": "Evict node right before dummy tail",
            "no": "Operation finished"
          }
        ]
      }
    ]
  },
  "reverse-nodes-in-k-group": {
    "statement": "Given the head of a linked list, reverse the nodes of a list k at a time, and return its modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.",
    "given": "Head of a singly linked list and an integer k",
    "ret": "Head of modified linked list reversed in k-groups",
    "summary": "Iteratively check if there are at least k nodes remaining; if so, reverse those k nodes, link the previous group's tail to the new reversed head, and proceed to the next group.",
    "starter": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverseKGroup(head: ListNode, k: int) -> ListNode:\n    pass",
    "tests": [
      {
        "label": "head = [1,2,3,4,5], k = 2",
        "inputStr": "{\"head\": [1,2,3,4,5], \"k\": 2}",
        "expectedStr": "[2,1,4,3,5]"
      },
      {
        "label": "head = [1,2,3,4,5], k = 3",
        "inputStr": "{\"head\": [1,2,3,4,5], \"k\": 3}",
        "expectedStr": "[3,2,1,4,5]"
      }
    ],
    "approaches": [
      {
        "name": "Array Conversion (Suboptimal)",
        "time": "O(n)",
        "space": "O(n)",
        "idea": "Extract all list node values into an array, reverse values in contiguous groups of size k, and construct a new linked list with the modified values.",
        "code": "def reverseKGroup(head: ListNode, k: int) -> ListNode:\n    vals = []\n    curr = head\n    while curr:\n        vals.append(curr.val)\n        curr = curr.next\n    n = len(vals)\n    for i in range(0, n - n % k, k):\n        vals[i:i+k] = vals[i:i+k][::-1]\n    dummy = ListNode(0)\n    curr = dummy\n    for v in vals:\n        curr.next = ListNode(v)\n        curr = curr.next\n    return dummy.next",
        "steps": [
          {
            "label": "extract node values",
            "note": "Traverse linked list and append node values to array",
            "from": 3,
            "to": 6
          },
          {
            "label": "reverse group elements",
            "note": "Iterate in steps of k up to the last full group and reverse sub-arrays in place",
            "from": 7,
            "to": 9
          },
          {
            "label": "reconstruct linked list",
            "note": "Build new nodes using reversed value array",
            "from": 10,
            "to": 14
          },
          {
            "label": "return new head",
            "note": "Return dummy.next as head of reconstructed list",
            "from": 15,
            "to": 15
          }
        ]
      },
      {
        "name": "Iterative In-Place Reversal (Optimal)",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Count k nodes ahead using a pointer. If k nodes exist, reverse them in-place, connect with previous group tail, and update group pointers.",
        "code": "def reverseKGroup(head: ListNode, k: int) -> ListNode:\n    dummy = ListNode(0, head)\n    groupPrev = dummy\n    while True:\n        kth = groupPrev\n        for _ in range(k):\n            kth = kth.next\n            if not kth:\n                break\n        if not kth:\n            break\n        groupNext = kth.next\n        prev, curr = kth.next, groupPrev.next\n        while curr != groupNext:\n            nxt = curr.next\n            curr.next = prev\n            prev = curr\n            curr = nxt\n        tmp = groupPrev.next\n        groupPrev.next = kth\n        groupPrev = tmp\n    return dummy.next",
        "steps": [
          {
            "label": "setup dummy node",
            "note": "Attach dummy node before head and initialize groupPrev pointer",
            "from": 2,
            "to": 3
          },
          {
            "label": "find kth node",
            "note": "Advance kth pointer by k steps to check if full group exists",
            "from": 5,
            "to": 9
          },
          {
            "label": "check remaining length",
            "note": "If fewer than k nodes remain, exit loop leaving trailing nodes intact",
            "from": 10,
            "to": 11,
            "yes": "Exit main loop",
            "no": "Proceed to group reversal"
          },
          {
            "label": "reverse group in place",
            "note": "Reverse pointers within group between groupPrev.next and kth node",
            "from": 13,
            "to": 18
          },
          {
            "label": "relink outer pointers",
            "note": "Connect groupPrev to reversed group head and update groupPrev to group tail",
            "from": 19,
            "to": 21
          },
          {
            "label": "return result",
            "note": "Return dummy.next as new list head",
            "from": 22,
            "to": 22
          }
        ]
      }
    ]
  },
  "diameter-of-binary-tree": {
    "statement": "Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root. The length of a path between two nodes is represented by the number of edges between them.",
    "given": "the root of a binary tree",
    "ret": "the integer representing the diameter (number of edges on the longest path)",
    "summary": "Compute the longest path through each node by adding the max height of its left subtree to the max height of its right subtree using a single post-order traversal.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        pass",
    "tests": [
      {
        "label": "root = [1,2,3,4,5]",
        "inputStr": "{\"root\": [1,2,3,4,5]}",
        "expectedStr": "3"
      },
      {
        "label": "root = [1,2]",
        "inputStr": "{\"root\": [1,2]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "Recursive Height Calculation per Node",
        "time": "O(n^2)",
        "space": "O(h)",
        "idea": "For every node, recursively compute the height of its left and right subtrees. Sum these heights to get the candidate diameter through that node, then recurse on left and right children.",
        "code": "class Solution:\n    def height(self, node: Optional[TreeNode]) -> int:\n        if not node:\n            return 0\n        return 1 + max(self.height(node.left), self.height(node.right))\n\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n        left_h = self.height(root.left)\n        right_h = self.height(root.right)\n        current_diameter = left_h + right_h\n        left_diameter = self.diameterOfBinaryTree(root.left)\n        right_diameter = self.diameterOfBinaryTree(root.right)\n        return max(current_diameter, left_diameter, right_diameter)",
        "steps": [
          {
            "label": "Base case check",
            "note": "If root is None, return 0 as diameter.",
            "from": 8,
            "to": 9,
            "yes": "Return 0 if tree is empty",
            "no": "Proceed to height calculation"
          },
          {
            "label": "Compute subtree heights",
            "note": "Call height helper on left and right children of current node.",
            "from": 10,
            "to": 11
          },
          {
            "label": "Calculate node diameter",
            "note": "Sum left and right heights for diameter through current root.",
            "from": 12,
            "to": 12
          },
          {
            "label": "Recurse on children",
            "note": "Find diameters in left and right subtrees.",
            "from": 13,
            "to": 14
          },
          {
            "label": "Return overall max",
            "note": "Return max of current diameter, left subtree diameter, right subtree diameter.",
            "from": 15,
            "to": 15
          }
        ]
      },
      {
        "name": "Optimal Bottom-Up Post-Order DFS",
        "time": "O(n)",
        "space": "O(h)",
        "idea": "Use a bottom-up DFS helper function that returns subtree height while continuously updating a global maximum diameter variable with (left_height + right_height).",
        "code": "class Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        self.max_diameter = 0\n        \n        def dfs(node: Optional[TreeNode]) -> int:\n            if not node:\n                return 0\n            left_h = dfs(node.left)\n            right_h = dfs(node.right)\n            self.max_diameter = max(self.max_diameter, left_h + right_h)\n            return 1 + max(left_h, right_h)\n            \n        dfs(root)\n        return self.max_diameter",
        "steps": [
          {
            "label": "Initialize global max",
            "note": "Set max_diameter state to 0.",
            "from": 3,
            "to": 3
          },
          {
            "label": "DFS base case",
            "note": "Check if current node is null; return 0 height.",
            "from": 6,
            "to": 7,
            "yes": "Return height 0",
            "no": "Recurse on left and right children"
          },
          {
            "label": "Recurse subtrees",
            "note": "Compute left_h and right_h using dfs.",
            "from": 8,
            "to": 9
          },
          {
            "label": "Update diameter",
            "note": "Update max_diameter with left_h + right_h.",
            "from": 10,
            "to": 10
          },
          {
            "label": "Return node height",
            "note": "Return 1 + max(left_h, right_h) to parent caller.",
            "from": 11,
            "to": 11
          },
          {
            "label": "Execute and return",
            "note": "Invoke dfs on root and return global max_diameter.",
            "from": 13,
            "to": 14
          }
        ]
      }
    ]
  },
  "balanced-binary-tree": {
    "statement": "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.",
    "given": "the root of a binary tree",
    "ret": "a boolean indicating whether the binary tree is height-balanced",
    "summary": "Traverse subtrees in post-order order, returning height if balanced or -1 if unbalanced to short-circuit calculation immediately upon detection.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        pass",
    "tests": [
      {
        "label": "root = [3,9,20,null,null,15,7]",
        "inputStr": "{\"root\": [3,9,20,null,null,15,7]}",
        "expectedStr": "true"
      },
      {
        "label": "root = [1,2,2,3,3,null,null,4,4]",
        "inputStr": "{\"root\": [1,2,2,3,3,null,null,4,4]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "Top-Down Height Check",
        "time": "O(n^2)",
        "space": "O(h)",
        "idea": "For every node, calculate height of left and right subtrees. Check if abs(left - right) <= 1, then recursively check left and right children.",
        "code": "class Solution:\n    def height(self, node: Optional[TreeNode]) -> int:\n        if not node:\n            return 0\n        return 1 + max(self.height(node.left), self.height(node.right))\n\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        if not root:\n            return True\n        left_h = self.height(root.left)\n        right_h = self.height(root.right)\n        if abs(left_h - right_h) > 1:\n            return False\n        return self.isBalanced(root.left) and self.isBalanced(root.right)",
        "steps": [
          {
            "label": "Base case check",
            "note": "Null root is balanced, return True.",
            "from": 8,
            "to": 9,
            "yes": "Return True for empty node/tree",
            "no": "Proceed to height calculation"
          },
          {
            "label": "Calculate heights",
            "note": "Call height helper on left and right children.",
            "from": 10,
            "to": 11
          },
          {
            "label": "Check height difference",
            "note": "If height difference > 1, return False immediately.",
            "from": 12,
            "to": 13,
            "yes": "Return False if unbalanced",
            "no": "Recurse on children"
          },
          {
            "label": "Recurse on children",
            "note": "Return True only if both subtrees are also balanced.",
            "from": 14,
            "to": 14
          }
        ]
      },
      {
        "name": "Bottom-Up DFS Short-Circuit",
        "time": "O(n)",
        "space": "O(h)",
        "idea": "Perform a post-order traversal DFS. Return height if subtree is balanced, or -1 if unbalanced. Propagate -1 upward to short-circuit remaining checks.",
        "code": "class Solution:\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        def check(node: Optional[TreeNode]) -> int:\n            if not node:\n                return 0\n            left = check(node.left)\n            if left == -1:\n                return -1\n            right = check(node.right)\n            if right == -1:\n                return -1\n            if abs(left - right) > 1:\n                return -1\n            return 1 + max(left, right)\n            \n        return check(root) != -1",
        "steps": [
          {
            "label": "Check node existence",
            "note": "If node is null, return 0 height.",
            "from": 4,
            "to": 5,
            "yes": "Return 0",
            "no": "Recurse left"
          },
          {
            "label": "Check left child",
            "note": "Call check(left). Short-circuit with -1 if unbalanced.",
            "from": 6,
            "to": 8,
            "yes": "Return -1 immediately",
            "no": "Recurse right"
          },
          {
            "label": "Check right child",
            "note": "Call check(right). Short-circuit with -1 if unbalanced.",
            "from": 9,
            "to": 11,
            "yes": "Return -1 immediately",
            "no": "Compare heights"
          },
          {
            "label": "Check balance condition",
            "note": "Compare left and right heights.",
            "from": 12,
            "to": 13,
            "yes": "Return -1 if abs(left - right) > 1",
            "no": "Return height"
          },
          {
            "label": "Return node height",
            "note": "Return 1 + max(left, right) if balanced.",
            "from": 14,
            "to": 14
          },
          {
            "label": "Final output",
            "note": "Return True if helper output is not -1.",
            "from": 16,
            "to": 16
          }
        ]
      }
    ]
  },
  "binary-tree-right-side-view": {
    "statement": "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    "given": "the root of a binary tree",
    "ret": "a list of integers representing node values visible from the right side",
    "summary": "Traverse the tree level-by-level via BFS and capture the last node value of each level, or use DFS prioritizing right subtrees first and recording depth.",
    "starter": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        pass",
    "tests": [
      {
        "label": "root = [1,2,3,null,5,null,4]",
        "inputStr": "{\"root\": [1,2,3,null,5,null,4]}",
        "expectedStr": "[1,3,4]"
      },
      {
        "label": "root = [1,null,3]",
        "inputStr": "{\"root\": [1,null,3]}",
        "expectedStr": "[1,3]"
      }
    ],
    "approaches": [
      {
        "name": "BFS Level Order Traversal",
        "time": "O(n)",
        "space": "O(w)",
        "idea": "Perform a standard level-order BFS using a queue. For each level, append the value of the last node processed in that level to the result array.",
        "code": "from collections import deque\n\nclass Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        if not root:\n            return []\n        res = []\n        queue = deque([root])\n        while queue:\n            level_len = len(queue)\n            for i in range(level_len):\n                node = queue.popleft()\n                if i == level_len - 1:\n                    res.append(node.val)\n                if node.left:\n                    queue.append(node.left)\n                if node.right:\n                    queue.append(node.right)\n        return res",
        "steps": [
          {
            "label": "Check root and setup queue",
            "note": "Initialize result list and deque with root.",
            "from": 5,
            "to": 8
          },
          {
            "label": "Level loop",
            "note": "Process each level by measuring queue length.",
            "from": 9,
            "to": 10
          },
          {
            "label": "Pop node",
            "note": "Pop node from front of queue.",
            "from": 11,
            "to": 12
          },
          {
            "label": "Capture last element",
            "note": "If current index is the last in level (i == level_len - 1), append to res.",
            "from": 13,
            "to": 14,
            "yes": "Append node.val to res",
            "no": "Do not append"
          },
          {
            "label": "Push children",
            "note": "Push left and right children to queue for next level.",
            "from": 15,
            "to": 18
          },
          {
            "label": "Return result",
            "note": "Return completed res list.",
            "from": 19,
            "to": 19
          }
        ]
      },
      {
        "name": "DFS Right-First Traversal",
        "time": "O(n)",
        "space": "O(h)",
        "idea": "Traverse DFS visiting right child before left child. When the current depth equals the size of the result list, the current node is the rightmost visible node for that level.",
        "code": "class Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        res = []\n        def dfs(node: Optional[TreeNode], depth: int):\n            if not node:\n                return\n            if depth == len(res):\n                res.append(node.val)\n            dfs(node.right, depth + 1)\n            dfs(node.left, depth + 1)\n            \n        dfs(root, 0)\n        return res",
        "steps": [
          {
            "label": "Initialize DFS",
            "note": "Create res list and trigger DFS starting at depth 0.",
            "from": 3,
            "to": 11
          },
          {
            "label": "DFS base case",
            "note": "Return if node is None.",
            "from": 5,
            "to": 6,
            "yes": "Return",
            "no": "Continue processing node"
          },
          {
            "label": "Record visible node",
            "note": "If depth == len(res), this is the first time reaching this depth (rightmost node).",
            "from": 7,
            "to": 8,
            "yes": "Append node.val to res",
            "no": "Skip append"
          },
          {
            "label": "Recurse right subtree first",
            "note": "Recurse on node.right with depth + 1.",
            "from": 9,
            "to": 9
          },
          {
            "label": "Recurse left subtree second",
            "note": "Recurse on node.left with depth + 1.",
            "from": 10,
            "to": 10
          },
          {
            "label": "Return result",
            "note": "Return res list containing right side view.",
            "from": 12,
            "to": 12
          }
        ]
      }
    ]
  },
  "count-good-nodes-in-binary-tree": {
    "statement": "Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.\n\nReturn the number of good nodes in the binary tree.",
    "given": "the root of a binary tree root",
    "ret": "the number of good nodes in the binary tree",
    "summary": "Traverse the tree using DFS or BFS while tracking the maximum value seen along the path from the root. A node is good if its value is greater than or equal to this path maximum.",
    "starter": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n        pass",
    "tests": [
      {
        "label": "root = [3,1,4,3,null,5]",
        "inputStr": "{\"root\": [3,1,4,3,null,5]}",
        "expectedStr": "4"
      },
      {
        "label": "root = [3,3,null,4,2]",
        "inputStr": "{\"root\": [3,3,null,4,2]}",
        "expectedStr": "3"
      },
      {
        "label": "root = [1]",
        "inputStr": "{\"root\": [1]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "Depth-First Search (DFS)",
        "time": "O(N)",
        "space": "O(H)",
        "idea": "Perform a recursive pre-order traversal. Pass down the running maximum value from the root to the current node. If the current node's value is greater than or equal to the path max, count it as good and update the path max.",
        "code": "class Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n        def dfs(node, max_val):\n            if not node:\n                return 0\n            \n            is_good = 1 if node.val >= max_val else 0\n            max_val = max(max_val, node.val)\n            \n            return is_good + dfs(node.left, max_val) + dfs(node.right, max_val)\n            \n        return dfs(root, root.val)",
        "steps": [
          {
            "label": "Start DFS",
            "note": "Invoke the helper function `dfs` passing the root node and initial `root.val` as the starting maximum.",
            "from": 12,
            "to": 3
          },
          {
            "label": "Check Base Case",
            "note": "If `node` is `None`, return 0 since an empty node contributes 0 good nodes.",
            "from": 3,
            "to": 4,
            "yes": "Return 0 if node is None",
            "no": "Proceed to evaluate current node"
          },
          {
            "label": "Evaluate Good Node",
            "note": "Compare `node.val` with `max_val`. If `node.val >= max_val`, set `is_good = 1`, else `0`.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Update Path Maximum",
            "note": "Update `max_val = max(max_val, node.val)` to pass to child calls.",
            "from": 7,
            "to": 9
          },
          {
            "label": "Recurse and Return",
            "note": "Recursively call `dfs` on left and right children with updated `max_val`, sum results with `is_good`, and return.",
            "from": 9,
            "to": 12
          }
        ]
      },
      {
        "name": "Breadth-First Search (BFS)",
        "time": "O(N)",
        "space": "O(W)",
        "idea": "Use a queue to perform a level-order traversal. Each entry in the queue stores a tuple of (node, path_max). For each node, increment count if node.val >= path_max, and push children with updated max values.",
        "code": "from collections import deque\n\nclass Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n        if not root:\n            return 0\n            \n        count = 0\n        queue = deque([(root, root.val)])\n        \n        while queue:\n            node, max_val = queue.popleft()\n            if node.val >= max_val:\n                count += 1\n            new_max = max(max_val, node.val)\n            \n            if node.left:\n                queue.append((node.left, new_max))\n            if node.right:\n                queue.append((node.right, new_max))\n                \n        return count",
        "steps": [
          {
            "label": "Initialize Queue",
            "note": "Check if root exists, initialize `count = 0` and queue with `(root, root.val)`.",
            "from": 5,
            "to": 11
          },
          {
            "label": "Pop Node",
            "note": "Dequeue the front node and its associated path maximum `max_val`.",
            "from": 11,
            "to": 12
          },
          {
            "label": "Check Good Node",
            "note": "If `node.val >= max_val`, increment `count` by 1.",
            "from": 12,
            "to": 14,
            "yes": "Increment count",
            "no": "Do not increment count"
          },
          {
            "label": "Enqueue Children",
            "note": "Calculate `new_max` and push left/right children to queue if they exist.",
            "from": 14,
            "to": 21
          },
          {
            "label": "Return Result",
            "note": "When queue is empty, return total `count`.",
            "from": 21,
            "to": 21
          }
        ]
      }
    ]
  },
  "kth-largest-element-in-a-stream": {
    "statement": "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\nImplement KthLargest class:\n- KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.\n- int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.",
    "given": "an integer k and an initial array of numbers nums",
    "ret": "a class instance that returns the kth largest element after each addition",
    "summary": "Maintain a min-heap of size k containing the k largest elements seen so far. The root of the min-heap will always represent the kth largest element.",
    "starter": "import heapq\n\nclass KthLargest:\n    def __init__(self, k: int, nums: list[int]):\n        pass\n\n    def add(self, val: int) -> int:\n        pass",
    "tests": [
      {
        "label": "k = 3, nums = [4, 5, 8, 2], adds = [3, 5, 10, 9, 4]",
        "inputStr": "{\"k\": 3, \"nums\": [4, 5, 8, 2], \"adds\": [3, 5, 10, 9, 4]}",
        "expectedStr": "[4, 5, 5, 8, 8]"
      },
      {
        "label": "k = 1, nums = [], adds = [-3, -2, -4, 0, 4]",
        "inputStr": "{\"k\": 1, \"nums\": [], \"adds\": [-3, -2, -4, 0, 4]}",
        "expectedStr": "[-3, -2, -2, 0, 4]"
      }
    ],
    "approaches": [
      {
        "name": "Sort Array on Every Add (Brute Force)",
        "time": "O(M * N log N)",
        "space": "O(N)",
        "idea": "Keep an array of all stream elements. Every time `add` is called, append the new element, sort the array in descending order, and return the element at index `k - 1`.",
        "code": "class KthLargest:\n    def __init__(self, k: int, nums: list[int]):\n        self.k = k\n        self.nums = nums\n\n    def add(self, val: int) -> int:\n        self.nums.append(val)\n        self.nums.sort(reverse=True)\n        return self.nums[self.k - 1]",
        "steps": [
          {
            "label": "Initialize State",
            "note": "Store `k` and `nums` array in instance variables.",
            "from": 2,
            "to": 4
          },
          {
            "label": "Append New Value",
            "note": "Append parameter `val` to `self.nums`.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Sort Array",
            "note": "Sort `self.nums` in descending order so largest elements are at the front.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Return Kth Element",
            "note": "Access index `self.k - 1` and return that value.",
            "from": 8,
            "to": 9
          }
        ]
      },
      {
        "name": "Min-Heap of Size K (Optimal)",
        "time": "O(N log K) init, O(log K) per add",
        "space": "O(K)",
        "idea": "Use a min-heap to keep track of the largest k numbers. The smallest element among these k numbers (top of min-heap) is the kth largest element overall.",
        "code": "import heapq\n\nclass KthLargest:\n    def __init__(self, k: int, nums: list[int]):\n        self.k = k\n        self.min_heap = nums\n        heapq.heapify(self.min_heap)\n        while len(self.min_heap) > self.k:\n            heapq.heappop(self.min_heap)\n\n    def add(self, val: int) -> int:\n        heapq.heappush(self.min_heap, val)\n        if len(self.min_heap) > self.k:\n            heapq.heappop(self.min_heap)\n        return self.min_heap[0]",
        "steps": [
          {
            "label": "Heapify Input",
            "note": "Store `k` and convert `nums` list into a heap structure using `heapq.heapify`.",
            "from": 4,
            "to": 7
          },
          {
            "label": "Trim Heap Size",
            "note": "Pop elements from `min_heap` until size becomes at most `k`.",
            "from": 7,
            "to": 10,
            "yes": "Pop smallest element",
            "no": "Heap size <= k reached"
          },
          {
            "label": "Push New Value",
            "note": "Push new stream `val` into `min_heap`.",
            "from": 10,
            "to": 11
          },
          {
            "label": "Evict Excess Element",
            "note": "If heap length exceeds `k`, pop the smallest element to maintain size `k`.",
            "from": 11,
            "to": 13,
            "yes": "Pop excess element",
            "no": "Heap size is <= k"
          },
          {
            "label": "Return Top Element",
            "note": "The root `self.min_heap[0]` is the kth largest element.",
            "from": 13,
            "to": 14
          }
        ]
      }
    ]
  },
  "last-stone-weight": {
    "statement": "You are given an array of integers stones where stones[i] is the weight of the ith stone.\n\nWe are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:\n- If x == y, both stones are destroyed.\n- If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.\n\nAt the end of the game, there is at most one stone left.\n\nReturn the weight of the last remaining stone. If there are no stones left, return 0.",
    "given": "an array of integers stones representing stone weights",
    "ret": "the weight of the last remaining stone, or 0 if no stones are left",
    "summary": "Repeatedly extract the two heaviest stones using a max-heap (by negating values in Python). If they are unequal, push the difference back into the heap until at most one stone remains.",
    "starter": "import heapq\n\nclass Solution:\n    def lastStoneWeight(self, stones: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "stones = [2,7,4,1,8,1]",
        "inputStr": "{\"stones\": [2,7,4,1,8,1]}",
        "expectedStr": "1"
      },
      {
        "label": "stones = [1]",
        "inputStr": "{\"stones\": [1]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "Iterative Array Sorting (Brute Force)",
        "time": "O(N^2 log N)",
        "space": "O(1)",
        "idea": "In every turn, sort the array to bring the heaviest stones to the end, pop the two largest, smash them, and append the non-zero difference back into the array.",
        "code": "class Solution:\n    def lastStoneWeight(self, stones: list[int]) -> int:\n        while len(stones) > 1:\n            stones.sort()\n            first = stones.pop()\n            second = stones.pop()\n            if first != second:\n                stones.append(first - second)\n        return stones[0] if stones else 0",
        "steps": [
          {
            "label": "Loop Until <= 1 Stone",
            "note": "Continue running smashing rounds while `len(stones) > 1`.",
            "from": 3,
            "to": 4,
            "yes": "Proceed to smash stones",
            "no": "Break loop"
          },
          {
            "label": "Sort Stones",
            "note": "Sort array in ascending order so heaviest stones are at the end.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Pop Two Heaviest",
            "note": "Pop the last two elements as `first` (heaviest) and `second` (second heaviest).",
            "from": 5,
            "to": 7
          },
          {
            "label": "Smash and Push Difference",
            "note": "If `first != second`, push remaining weight `first - second` back into array.",
            "from": 7,
            "to": 8,
            "yes": "Append non-zero difference",
            "no": "Both stones destroyed"
          },
          {
            "label": "Return Final Stone Weight",
            "note": "Return `stones[0]` if one stone remains, otherwise return 0.",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "Max-Heap / Priority Queue (Optimal)",
        "time": "O(N log N)",
        "space": "O(N)",
        "idea": "Convert stones into negative values to simulate a max-heap using Python's min-heap standard library (`heapq`). Pop the top two elements, compare them, and push the negated difference back if non-zero.",
        "code": "import heapq\n\nclass Solution:\n    def lastStoneWeight(self, stones: list[int]) -> int:\n        stones = [-s for s in stones]\n        heapq.heapify(stones)\n        \n        while len(stones) > 1:\n            first = heapq.heappop(stones)\n            second = heapq.heappop(stones)\n            if first != second:\n                heapq.heappush(stones, first - second)\n                \n        return -stones[0] if stones else 0",
        "steps": [
          {
            "label": "Negate and Heapify",
            "note": "Negate all stone values to convert Python min-heap into max-heap behavior, then call `heapify`.",
            "from": 5,
            "to": 8
          },
          {
            "label": "Loop While > 1 Stone",
            "note": "Check if heap contains at least 2 stones.",
            "from": 8,
            "to": 9,
            "yes": "Extract top two stones",
            "no": "Break loop"
          },
          {
            "label": "Extract Top Two",
            "note": "Pop `first` and `second` heaviest stones from heap.",
            "from": 9,
            "to": 11
          },
          {
            "label": "Push Remaining Difference",
            "note": "If `first != second`, push `first - second` (note negative arithmetic preserves order) back into heap.",
            "from": 11,
            "to": 13,
            "yes": "Push difference to heap",
            "no": "Both destroyed"
          },
          {
            "label": "Return Result",
            "note": "Return `-stones[0]` to restore original positive value, or 0 if heap is empty.",
            "from": 13,
            "to": 14
          }
        ]
      }
    ]
  },
  "k-closest-points-to-origin": {
    "statement": "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).\n\nThe distance between two points on the X-Y plane is the Euclidean distance (i.e., \u221a(x1 - x2)^2 + (y1 - y2)^2).\n\nYou may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).",
    "given": "an array of 2D points and an integer k",
    "ret": "the k closest points to the origin (0, 0)",
    "summary": "Calculate the squared distance for each point, then use a max-heap of size k to track the k smallest distances in O(N log K) time.",
    "starter": "class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        ",
    "tests": [
      {
        "label": "points = [[1,3],[-2,2]], k = 1",
        "inputStr": "{\"points\": [[1, 3], [-2, 2]], \"k\": 1}",
        "expectedStr": "[[-2, 2]]"
      },
      {
        "label": "points = [[3,3],[5,-1],[-2,4]], k = 2",
        "inputStr": "{\"points\": [[3, 3], [5, -1], [-2, 4]], \"k\": 2}",
        "expectedStr": "[[3, 3], [-2, 4]]"
      }
    ],
    "approaches": [
      {
        "name": "Full Sorting",
        "time": "O(N log N)",
        "space": "O(N)",
        "idea": "Compute the Euclidean distance squared for each point, sort all points by distance, and slice the first k points.",
        "code": "class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        points.sort(key=lambda p: p[0]**2 + p[1]**2)\n        return points[:k]",
        "steps": [
          {
            "label": "Define sort key",
            "note": "Use squared distance x^2 + y^2 as key to avoid computing square root operations.",
            "from": 1,
            "to": 3
          },
          {
            "label": "Sort points",
            "note": "Sort all N points in ascending order based on their computed distance key.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Return prefix slice",
            "note": "Slice the array to get the first k points from the sorted list.",
            "from": 3,
            "to": 4
          }
        ]
      },
      {
        "name": "Max Heap",
        "time": "O(N log K)",
        "space": "O(K)",
        "idea": "Maintain a Max-Heap of size K. For each point, insert negative distance so Python's min-heap acts as a max-heap. If heap exceeds size K, pop the maximum distance.",
        "code": "import heapq\n\nclass Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        max_heap = []\n        for x, y in points:\n            dist = -(x*x + y*y)\n            heapq.heappush(max_heap, (dist, [x, y]))\n            if len(max_heap) > k:\n                heapq.heappop(max_heap)\n        return [pt for dist, pt in max_heap]",
        "steps": [
          {
            "label": "Initialize Heap",
            "note": "Create an empty list to represent our max heap.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Iterate & Calculate Distance",
            "note": "For each point (x, y), calculate the negative squared distance to invert heap ordering.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Push to Heap",
            "note": "Push pair (-dist, point) into max_heap.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Check Heap Size",
            "note": "If heap size exceeds k, pop the farthest point (largest distance).",
            "from": 9,
            "to": 10,
            "yes": "Size > k: pop farthest element",
            "no": "Size <= k: keep building heap"
          },
          {
            "label": "Extract Results",
            "note": "Extract all k point elements remaining in the max heap.",
            "from": 10,
            "to": 11
          }
        ]
      }
    ]
  },
  "kth-largest-element-in-an-array": {
    "statement": "Given an integer array nums and an integer k, return the kth largest element in the array.\n\nNote that it is the kth largest element in the sorted order, not the kth distinct element.\n\nCan you solve it without sorting?",
    "given": "an array of integers nums and an integer k",
    "ret": "the kth largest element in nums",
    "summary": "Use a min-heap of size k to track the largest elements in the array. The root of the heap will hold the kth largest element.",
    "starter": "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        ",
    "tests": [
      {
        "label": "nums = [3,2,1,5,6,4], k = 2",
        "inputStr": "{\"nums\": [3, 2, 1, 5, 6, 4], \"k\": 2}",
        "expectedStr": "5"
      },
      {
        "label": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "inputStr": "{\"nums\": [3, 2, 3, 1, 2, 4, 5, 5, 6], \"k\": 4}",
        "expectedStr": "4"
      }
    ],
    "approaches": [
      {
        "name": "Array Sorting",
        "time": "O(N log N)",
        "space": "O(1)",
        "idea": "Sort the array in ascending order and select the element at index len(nums) - k.",
        "code": "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        nums.sort()\n        return nums[len(nums) - k]",
        "steps": [
          {
            "label": "Sort array",
            "note": "Sort all elements in nums in ascending order.",
            "from": 1,
            "to": 3
          },
          {
            "label": "Access Kth Largest",
            "note": "The kth largest element is at index len(nums) - k after ascending sort.",
            "from": 3,
            "to": 4
          }
        ]
      },
      {
        "name": "Min-Heap",
        "time": "O(N log K)",
        "space": "O(K)",
        "idea": "Maintain a min-heap of size K. Iterate through nums, pushing each element. If the size exceeds K, pop the minimum. At the end, the top of the heap is the Kth largest element.",
        "code": "import heapq\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        heap = []\n        for num in nums:\n            heapq.heappush(heap, num)\n            if len(heap) > k:\n                heapq.heappop(heap)\n        return heap[0]",
        "steps": [
          {
            "label": "Initialize Heap",
            "note": "Create an empty list to act as our min-heap.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Iterate Elements",
            "note": "Loop through each integer 'num' in the input array 'nums'.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Push to Heap",
            "note": "Push 'num' onto the min-heap.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Maintain Size K",
            "note": "If heap size grows larger than K, pop the smallest element.",
            "from": 7,
            "to": 8,
            "yes": "len(heap) > k: remove smallest",
            "no": "len(heap) <= k: continue"
          },
          {
            "label": "Return Top",
            "note": "The root of the min-heap (heap[0]) is the Kth largest element overall.",
            "from": 8,
            "to": 9
          }
        ]
      }
    ]
  },
  "task-scheduler": {
    "statement": "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could have done a task or, at least, be idle.\n\nHowever, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.\n\nReturn the least number of units of times that the CPU will take to finish all the given tasks.",
    "given": "an array of task characters tasks and a cooldown parameter n",
    "ret": "the minimum total units of time needed to execute all tasks with cooling restrictions",
    "summary": "Calculate frequencies of tasks. Find the max frequency task count to structure execution intervals mathematically, or simulate using a Max-Heap and Queue.",
    "starter": "class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        ",
    "tests": [
      {
        "label": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
        "inputStr": "{\"tasks\": [\"A\", \"A\", \"A\", \"B\", \"B\", \"B\"], \"n\": 2}",
        "expectedStr": "8"
      },
      {
        "label": "tasks = [\"A\",\"C\",\"A\",\"B\",\"D\",\"B\"], n = 1",
        "inputStr": "{\"tasks\": [\"A\", \"C\", \"A\", \"B\", \"D\", \"B\"], \"n\": 1}",
        "expectedStr": "6"
      },
      {
        "label": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 0",
        "inputStr": "{\"tasks\": [\"A\", \"A\", \"A\", \"B\", \"B\", \"B\"], \"n\": 0}",
        "expectedStr": "6"
      }
    ],
    "approaches": [
      {
        "name": "Max Heap & Cooling Queue Simulation",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "Use a max-heap to process tasks with the highest remaining frequency, and a queue to enforce the cooling off time 'n' for tasks.",
        "code": "from collections import Counter, deque\nimport heapq\n\nclass Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        counts = Counter(tasks)\n        max_heap = [-cnt for cnt in counts.values()]\n        heapq.heapify(max_heap)\n        q = deque()\n        time = 0\n        \n        while max_heap or q:\n            time += 1\n            if max_heap:\n                cnt = heapq.heappop(max_heap) + 1\n                if cnt != 0:\n                    q.append((cnt, time + n))\n            if q and q[0][1] == time:\n                heapq.heappush(max_heap, q.popleft()[0])\n                \n        return time",
        "steps": [
          {
            "label": "Frequency Count & Heap Build",
            "note": "Count frequencies and push negative counts into max_heap to simulate max-heap in Python.",
            "from": 5,
            "to": 8
          },
          {
            "label": "Initialize Clock & Queue",
            "note": "Set time = 0 and create a deque 'q' to hold tasks currently on cooldown.",
            "from": 8,
            "to": 10
          },
          {
            "label": "Process Unit Time",
            "note": "Increment clock counter 'time' by 1.",
            "from": 11,
            "to": 12
          },
          {
            "label": "Pop Max Freq Task",
            "note": "Pop highest remaining frequency task from heap, decrement its count, and enqueue if count remaining > 0.",
            "from": 13,
            "to": 16,
            "yes": "Heap not empty: execute most frequent task",
            "no": "Heap empty: CPU is idle for this unit"
          },
          {
            "label": "Check Cooldown Queue",
            "note": "If top task in queue completed cooldown (time == target time), push back into max_heap.",
            "from": 17,
            "to": 18,
            "yes": "Cooldown finished: push task back to heap",
            "no": "Task still in cooldown"
          },
          {
            "label": "Return Elapsed Time",
            "note": "Loop finishes when max_heap and cooldown queue are both empty. Return total time elapsed.",
            "from": 19,
            "to": 20
          }
        ]
      },
      {
        "name": "Mathematical / Greedy Frequency Counting",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "The bottleneck is the task with the maximum frequency. Calculate minimum slots required using formula: (max_freq - 1) * (n + 1) + max_freq_count. Compare with total task count.",
        "code": "from collections import Counter\n\nclass Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        counts = Counter(tasks)\n        max_freq = max(counts.values())\n        max_freq_count = sum(1 for cnt in counts.values() if cnt == max_freq)\n        \n        ans = (max_freq - 1) * (n + 1) + max_freq_count\n        return max(ans, len(tasks))",
        "steps": [
          {
            "label": "Count Task Frequencies",
            "note": "Find occurrence counts of each distinct task.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Identify Max Frequency",
            "note": "Find the maximum frequency `max_freq` among all tasks.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Count Max Frequency Tasks",
            "note": "Count how many distinct tasks tie for having `max_freq` occurrences.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Calculate Frame Bound",
            "note": "Compute slots bound: (max_freq - 1) full cycles of length (n + 1) plus max_freq_count tasks in final cycle.",
            "from": 8,
            "to": 9
          },
          {
            "label": "Return Result",
            "note": "Result is maximum of calculated frame bound and actual total task count.",
            "from": 9,
            "to": 10
          }
        ]
      }
    ]
  },
  "design-twitter": {
    "statement": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in their news feed.\n\nImplement the Twitter class:\n- Twitter() Initializes your twitter object.\n- void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.\n- List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.\n- void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.\n- void unfollow(int followerId, int followeeId) The user with ID followerId stopped following the user with ID followeeId.",
    "given": "A sequence of Twitter API calls and parameters",
    "ret": "Results of getNewsFeed calls and null for void operations",
    "summary": "Track user tweets and follow relationships using hash maps/sets, and merge the 10 most recent tweets across followed users using a priority queue (max-heap).",
    "starter": "class Twitter:\n\n    def __init__(self):\n        pass\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n        pass\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass",
    "tests": [
      {
        "label": "actions = [\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"postTweet\", \"getNewsFeed\", \"unfollow\", \"getNewsFeed\"], params = [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]",
        "inputStr": "{\"actions\": [\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"postTweet\", \"getNewsFeed\", \"unfollow\", \"getNewsFeed\"], \"params\": [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]}",
        "expectedStr": "[null, null, [5], null, null, [6, 5], null, [5]]"
      },
      {
        "label": "actions = [\"Twitter\", \"postTweet\", \"postTweet\", \"getNewsFeed\"], params = [[], [1, 101], [1, 102], [1]]",
        "inputStr": "{\"actions\": [\"Twitter\", \"postTweet\", \"postTweet\", \"getNewsFeed\"], \"params\": [[], [1, 101], [1, 102], [1]]}",
        "expectedStr": "[null, null, null, [102, 101]]"
      }
    ],
    "approaches": [
      {
        "name": "Naive Aggregation and Sorting",
        "time": "O(N * M log(N * M)) for getNewsFeed where N is followees and M is tweets per followee",
        "space": "O(Total Tweets + Total Follows)",
        "idea": "Store all tweets in a list per user along with a global timestamp. To generate a news feed, aggregate all tweets from the user and their followees, sort them descending by timestamp, and pick the top 10.",
        "code": "from collections import defaultdict\n\nclass Twitter:\n    def __init__(self):\n        self.time = 0\n        self.tweets = defaultdict(list)  # userId -> list of (time, tweetId)\n        self.follows = defaultdict(set)   # followerId -> set of followeeIds\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        self.time += 1\n        self.tweets[userId].append((self.time, tweetId))\n\n    def getNewsFeed(self, userId: int) -> list[int]:\n        all_tweets = []\n        # Followees + user self\n        user_ids = self.follows[userId] | {userId}\n        for u in user_ids:\n            all_tweets.extend(self.tweets[u])\n        all_tweets.sort(key=lambda x: x[0], reverse=True)\n        return [t[1] for t in all_tweets[:10]]\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n        self.follows[followerId].add(followeeId)\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        self.follows[followerId].discard(followeeId)",
        "steps": [
          {
            "label": "Aggregate tweets",
            "note": "Collect all tweets from self and all followees into a single list",
            "from": 1,
            "to": 2
          },
          {
            "label": "Sort by timestamp",
            "note": "Sort all collected tweets in descending order using their creation time",
            "from": 2,
            "to": 3
          },
          {
            "label": "Extract top 10",
            "note": "Slice top 10 items and return only their tweet IDs",
            "from": 3,
            "to": 4
          }
        ]
      },
      {
        "name": "Priority Queue / Min-Heap Optimization",
        "time": "O(K log U) where K=10 and U is the number of followees",
        "space": "O(Total Tweets + Total Follows)",
        "idea": "Treat each user's tweet list as a sorted queue. Use a heap to efficiently extract the 10 most recent tweets overall, dynamic merging similar to Merging K Sorted Lists.",
        "code": "import heapq\nfrom collections import defaultdict\n\nclass Twitter:\n    def __init__(self):\n        self.count = 0\n        self.tweetMap = defaultdict(list)  # userId -> list of [count, tweetId]\n        self.followMap = defaultdict(set)  # userId -> set of followeeIds\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        self.tweetMap[userId].append([self.count, tweetId])\n        self.count -= 1  # Using negative values for min-heap to act as max-heap\n\n    def getNewsFeed(self, userId: int) -> list[int]:\n        res = []\n        minHeap = []\n        self.followMap[userId].add(userId)\n        \n        for followeeId in self.followMap[userId]:\n            if followeeId in self.tweetMap:\n                index = len(self.tweetMap[followeeId]) - 1\n                count, tweetId = self.tweetMap[followeeId][index]\n                minHeap.append([count, tweetId, followeeId, index - 1])\n        \n        heapq.heapify(minHeap)\n        while minHeap and len(res) < 10:\n            count, tweetId, followeeId, index = heapq.heappop(minHeap)\n            res.append(tweetId)\n            if index >= 0:\n                count, tweetId = self.tweetMap[followeeId][index]\n                heapq.heappush(minHeap, [count, tweetId, followeeId, index - 1])\n        return res\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n        self.followMap[followerId].add(followeeId)\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        if followeeId in self.followMap[followerId]:\n            self.followMap[followerId].remove(followeeId)",
        "steps": [
          {
            "label": "Ensure self-follow",
            "note": "Include user's own ID in their follow map set",
            "from": 1,
            "to": 2
          },
          {
            "label": "Initialize heap",
            "note": "Populate heap with the latest tweet from each followee",
            "from": 2,
            "to": 3
          },
          {
            "label": "Pop most recent",
            "note": "Pop the latest tweet from heap, append tweet ID to result set",
            "from": 3,
            "to": 4
          },
          {
            "label": "Push next tweet",
            "note": "If the followee has earlier tweets, push the next latest into heap",
            "from": 4,
            "to": 5,
            "yes": "index >= 0",
            "no": "No earlier tweets for this followee"
          },
          {
            "label": "Loop termination check",
            "note": "Stop when result list reaches length 10 or heap becomes empty",
            "from": 5,
            "to": 6,
            "yes": "len(res) < 10 and heap not empty",
            "no": "Return res"
          }
        ]
      }
    ]
  },
  "subsets": {
    "statement": "Given an integer array nums of unique elements, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.",
    "given": "an array of unique integers `nums`",
    "ret": "all possible subsets (the power set)",
    "summary": "Iterate through elements or branch recursively, making a decision to include or exclude each element to build all $2^N$ subsets.",
    "starter": "class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "nums = [1,2,3]",
        "inputStr": "{\"nums\": [1, 2, 3]}",
        "expectedStr": "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]"
      },
      {
        "label": "nums = [0]",
        "inputStr": "{\"nums\": [0]}",
        "expectedStr": "[[], [0]]"
      }
    ],
    "approaches": [
      {
        "name": "Iterative (Cascading)",
        "time": "O(N * 2^N)",
        "space": "O(N * 2^N)",
        "idea": "Start with an empty set [[]]. For each number in nums, duplicate all existing subsets and append the current number to each clone.",
        "code": "class Solution:\n    def subsets(self, nums: list[int]) -> list[list[int]]:\n        res = [[]]\n        for num in nums:\n            res += [curr + [num] for curr in res]\n        return res",
        "steps": [
          {
            "label": "Initialize result",
            "note": "Start with base array containing empty subset [[]]",
            "from": 1,
            "to": 2
          },
          {
            "label": "Iterate elements",
            "note": "Loop through each number in nums",
            "from": 2,
            "to": 3
          },
          {
            "label": "Cascade existing subsets",
            "note": "For current number, duplicate all current subsets in res and append num to them",
            "from": 3,
            "to": 4
          },
          {
            "label": "Return result",
            "note": "Return completed power set res",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "Backtracking / DFS Decision Tree",
        "time": "O(N * 2^N)",
        "space": "O(N)",
        "idea": "Traverse a decision tree where at each index `i`, we choose to either include `nums[i]` or exclude `nums[i]` before recursing to index `i + 1`.",
        "code": "class Solution:\n    def subsets(self, nums: list[int]) -> list[list[int]]:\n        res = []\n        subset = []\n\n        def dfs(i):\n            if i >= len(nums):\n                res.append(subset.copy())\n                return\n            # Decision to include nums[i]\n            subset.append(nums[i])\n            dfs(i + 1)\n            # Decision NOT to include nums[i]\n            subset.pop()\n            dfs(i + 1)\n\n        dfs(0)\n        return res",
        "steps": [
          {
            "label": "Check base case",
            "note": "If index i equals length of nums, add clone of subset to res and return",
            "from": 1,
            "to": 2,
            "yes": "i >= len(nums)",
            "no": "i < len(nums)"
          },
          {
            "label": "Include branch",
            "note": "Append nums[i] to subset path, recurse to index i + 1",
            "from": 2,
            "to": 3
          },
          {
            "label": "Backtrack",
            "note": "Pop nums[i] from subset path to restore state",
            "from": 3,
            "to": 4
          },
          {
            "label": "Exclude branch",
            "note": "Recurse to index i + 1 without including nums[i]",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "permutations": {
    "statement": "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "given": "an array `nums` of distinct integers",
    "ret": "all possible permutations",
    "summary": "Recursively construct sequences by choosing available choices at each depth, maintaining state with a used tracking set or in-place swapping.",
    "starter": "class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "nums = [1,2,3]",
        "inputStr": "{\"nums\": [1, 2, 3]}",
        "expectedStr": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      },
      {
        "label": "nums = [0,1]",
        "inputStr": "{\"nums\": [0, 1]}",
        "expectedStr": "[[0,1],[1,0]]"
      }
    ],
    "approaches": [
      {
        "name": "Backtracking with Used Tracking",
        "time": "O(N * N!)",
        "space": "O(N)",
        "idea": "Build candidate permutations element by element. At each step, pick an unused element from nums, add it to current candidate path, recurse, and then backtrack.",
        "code": "class Solution:\n    def permute(self, nums: list[int]) -> list[list[int]]:\n        res = []\n        sol = []\n        \n        def backtrack():\n            if len(sol) == len(nums):\n                res.append(sol.copy())\n                return\n            \n            for x in nums:\n                if x not in sol:\n                    sol.append(x)\n                    backtrack()\n                    sol.pop()\n                    \n        backtrack()\n        return res",
        "steps": [
          {
            "label": "Base case check",
            "note": "If sol length equals nums length, permutation is complete. Save copy to res",
            "from": 1,
            "to": 2,
            "yes": "len(sol) == len(nums)",
            "no": "len(sol) < len(nums)"
          },
          {
            "label": "Iterate options",
            "note": "Loop through each candidate number x in nums",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check availability",
            "note": "Check if candidate x is already used in current permutation sol",
            "from": 3,
            "to": 4,
            "yes": "x not in sol",
            "no": "x already used"
          },
          {
            "label": "Make choice & Recurse",
            "note": "Append x to sol and trigger recursive backtrack call",
            "from": 4,
            "to": 5
          },
          {
            "label": "Backtrack step",
            "note": "Remove last element x from sol to restore state for next candidate loop iteration",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "In-place Swap Backtracking",
        "time": "O(N * N!)",
        "space": "O(N)",
        "idea": "Partition array into fixed elements (left) and candidates (right). Swap candidates into the current index position, recurse for next position, then swap back.",
        "code": "class Solution:\n    def permute(self, nums: list[int]) -> list[list[int]]:\n        res = []\n        \n        def backtrack(first=0):\n            if first == len(nums):\n                res.append(nums[:])\n                return\n            for i in range(first, len(nums)):\n                nums[first], nums[i] = nums[i], nums[first]\n                backtrack(first + 1)\n                nums[first], nums[i] = nums[i], nums[first]\n                \n        backtrack()\n        return res",
        "steps": [
          {
            "label": "Check termination",
            "note": "If first pointer reaches end of array, current arrangement is a full permutation",
            "from": 1,
            "to": 2,
            "yes": "first == len(nums)",
            "no": "first < len(nums)"
          },
          {
            "label": "Swap element",
            "note": "Swap current index element with target element at index i",
            "from": 2,
            "to": 3
          },
          {
            "label": "Recurse next depth",
            "note": "Call backtrack with first + 1 to fix current position",
            "from": 3,
            "to": 4
          },
          {
            "label": "Undo swap",
            "note": "Swap elements back to restore original state before trying next swap target i",
            "from": 4,
            "to": 5
          }
        ]
      }
    ]
  },
  "subsets-ii": {
    "statement": "Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    "given": "an array of integers nums that may contain duplicates",
    "ret": "all possible unique subsets of the given array",
    "summary": "Sort the array to group duplicate numbers together. Use backtracking to generate all subsets while skipping duplicate elements at the same level of recursion.",
    "starter": "class Solution:\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "nums = [1,2,2]",
        "inputStr": "{\"nums\": [1, 2, 2]}",
        "expectedStr": "[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]"
      },
      {
        "label": "nums = [0]",
        "inputStr": "{\"nums\": [0]}",
        "expectedStr": "[[], [0]]"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force (Set Deduplication)",
        "time": "O(n * 2^n)",
        "space": "O(n * 2^n)",
        "idea": "Generate all possible 2^n subsets using standard recursion without skipping duplicates. Convert each generated subset to a sorted tuple and add it to a hash set to remove duplicate subsets, then convert the set back to a list of lists.",
        "code": "class Solution:\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\n        res = set()\n        \n        def backtrack(index, path):\n            if index == len(nums):\n                res.add(tuple(sorted(path)))\n                return\n            backtrack(index + 1, path + [nums[index]])\n            backtrack(index + 1, path)\n            \n        backtrack(0, [])\n        return [list(s) for s in res]",
        "steps": [
          {
            "label": "Initialize Result Set",
            "note": "Create a set named 'res' to automatically store unique sorted tuples.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check Base Case",
            "note": "If index reaches len(nums), convert path to a sorted tuple and add it to res set.",
            "from": 5,
            "to": 7
          },
          {
            "label": "Include Element Branch",
            "note": "Recursively call backtrack including nums[index] in the path.",
            "from": 8,
            "to": 8
          },
          {
            "label": "Exclude Element Branch",
            "note": "Recursively call backtrack excluding nums[index] from the path.",
            "from": 9,
            "to": 9
          },
          {
            "label": "Return Formatted Subsets",
            "note": "Convert all unique tuples in 'res' back into lists and return.",
            "from": 12,
            "to": 12
          }
        ]
      },
      {
        "name": "Backtracking with Pruning (Optimal)",
        "time": "O(n * 2^n)",
        "space": "O(n)",
        "idea": "Sort the input array first so duplicates are adjacent. When generating subsets recursively, loop through candidates starting from the current index. If an element is identical to its predecessor and is not the first element in the current decision branch (i > start), skip it to prevent duplicate subsets.",
        "code": "class Solution:\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\n        nums.sort()\n        res = []\n        \n        def backtrack(start, path):\n            res.append(list(path))\n            for i in range(start, len(nums)):\n                if i > start and nums[i] == nums[i - 1]:\n                    continue\n                path.append(nums[i])\n                backtrack(i + 1, path)\n                path.pop()\n                \n        backtrack(0, [])\n        return res",
        "steps": [
          {
            "label": "Sort Input",
            "note": "Sort nums to group duplicate numbers together.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Record Current Path",
            "note": "Append a copy of the current subset path to res immediately.",
            "from": 7,
            "to": 7
          },
          {
            "label": "Iterate Candidates",
            "note": "Loop through remaining elements from index 'start' to len(nums) - 1.",
            "from": 8,
            "to": 8
          },
          {
            "label": "Duplicate Check",
            "note": "If i > start and nums[i] == nums[i-1], skip this element to prune duplicate subsets at the same recursion level.",
            "from": 9,
            "to": 10,
            "yes": "Skip iteration if duplicate element at current depth",
            "no": "Proceed to include element"
          },
          {
            "label": "Backtrack Step",
            "note": "Append nums[i], recursively explore next elements with index i + 1, then pop nums[i] to backtrack.",
            "from": 11,
            "to": 13
          }
        ]
      }
    ]
  },
  "combination-sum-ii": {
    "statement": "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination. Note: The solution set must not contain duplicate combinations.",
    "given": "a list of integers candidates and an integer target",
    "ret": "all unique combinations that sum up to target",
    "summary": "Sort candidates to make duplicate detection easy and enable early stopping. Use backtracking, skipping duplicate elements at the same tree depth and stopping early if the sum exceeds target.",
    "starter": "class Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        pass",
    "tests": [
      {
        "label": "candidates = [10,1,2,7,6,1,5], target = 8",
        "inputStr": "{\"candidates\": [10, 1, 2, 7, 6, 1, 5], \"target\": 8}",
        "expectedStr": "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]"
      },
      {
        "label": "candidates = [2,5,2,1,2], target = 5",
        "inputStr": "{\"candidates\": [2, 5, 2, 1, 2], \"target\": 5}",
        "expectedStr": "[[1, 2, 2], [5]]"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force (Set Deduplication)",
        "time": "O(2^n * n)",
        "space": "O(2^n * n)",
        "idea": "Explore all combinations using standard recursion, picking each element at most once. Add valid combinations that sum to target to a set (as sorted tuples) to remove duplicate combinations.",
        "code": "class Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        res = set()\n        candidates.sort()\n        \n        def backtrack(index, current_sum, path):\n            if current_sum == target:\n                res.add(tuple(path))\n                return\n            if current_sum > target or index == len(candidates):\n                return\n            \n            backtrack(index + 1, current_sum + candidates[index], path + [candidates[index]])\n            backtrack(index + 1, current_sum, path)\n            \n        backtrack(0, 0, [])\n        return [list(comb) for comb in res]",
        "steps": [
          {
            "label": "Sort Candidates",
            "note": "Sort candidates so generated tuples will be in consistent order for set hashing.",
            "from": 4,
            "to": 4
          },
          {
            "label": "Check Target Reached",
            "note": "If current_sum equals target, add path as a tuple to set res.",
            "from": 7,
            "to": 9,
            "yes": "Target match found, add to set and return"
          },
          {
            "label": "Check Exceed Target or Boundary",
            "note": "If sum exceeds target or index is out of bounds, prune search branch.",
            "from": 10,
            "to": 11,
            "yes": "Return early to stop invalid exploration"
          },
          {
            "label": "Include & Exclude Calls",
            "note": "Recurse twice: once including current candidate and once excluding it.",
            "from": 13,
            "to": 14
          }
        ]
      },
      {
        "name": "Backtracking with Pruning (Optimal)",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Sort candidates first. Recursively build combinations. Loop starting at index `start`; if `candidates[i] > target`, break early (since array is sorted). Skip duplicate elements at the same tree depth (`i > start and candidates[i] == candidates[i-1]`).",
        "code": "class Solution:\n    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:\n        candidates.sort()\n        res = []\n        \n        def backtrack(start, remain, path):\n            if remain == 0:\n                res.append(list(path))\n                return\n            for i in range(start, len(candidates)):\n                if candidates[i] > remain:\n                    break\n                if i > start and candidates[i] == candidates[i - 1]:\n                    continue\n                path.append(candidates[i])\n                backtrack(i + 1, remain - candidates[i], path)\n                path.pop()\n                \n        backtrack(0, target, [])\n        return res",
        "steps": [
          {
            "label": "Sort Candidates",
            "note": "Sort candidates in non-decreasing order to enable duplicate skipping and early breaking.",
            "from": 3,
            "to": 3
          },
          {
            "label": "Base Case Check",
            "note": "If remain == 0, a valid combination is found. Append path to res.",
            "from": 7,
            "to": 9
          },
          {
            "label": "Loop and Early Break",
            "note": "If candidates[i] exceeds remain, break the loop since all subsequent elements will also exceed remain.",
            "from": 11,
            "to": 12,
            "yes": "Break out of loop early due to sorted property"
          },
          {
            "label": "Skip Duplicates",
            "note": "If i > start and candidates[i] == candidates[i - 1], skip candidate to avoid duplicate combinations.",
            "from": 13,
            "to": 14,
            "yes": "Skip duplicate element at same tree level"
          },
          {
            "label": "Recurse & Backtrack",
            "note": "Choose candidates[i], subtract value from remain, call backtrack recursively with next index i + 1, then pop element.",
            "from": 15,
            "to": 17
          }
        ]
      }
    ]
  },
  "palindrome-partitioning": {
    "statement": "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
    "given": "a string s",
    "ret": "a list of all possible palindrome partitionings of string s",
    "summary": "Use depth-first search backtracking. For each position, check every possible prefix substring. If it's a palindrome, recursively partition the remaining substring.",
    "starter": "class Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        pass",
    "tests": [
      {
        "label": "s = \"aab\"",
        "inputStr": "{\"s\": \"aab\"}",
        "expectedStr": "[[\"a\", \"a\", \"b\"], [\"aa\", \"b\"]]"
      },
      {
        "label": "s = \"a\"",
        "inputStr": "{\"s\": \"a\"}",
        "expectedStr": "[[\"a\"]]"
      }
    ],
    "approaches": [
      {
        "name": "Backtracking with String Slicing",
        "time": "O(n * 2^n)",
        "space": "O(n)",
        "idea": "For every index in string `s`, partition into prefixes `s[start:i+1]`. Check if prefix is palindrome using string slice reversal (`sub == sub[::-1]`). If valid, append prefix to current path and recursively process suffix.",
        "code": "class Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        res = []\n        \n        def is_palindrome(sub):\n            return sub == sub[::-1]\n        \n        def backtrack(start, path):\n            if start == len(s):\n                res.append(list(path))\n                return\n            for end in range(start + 1, len(s) + 1):\n                sub = s[start:end]\n                if is_palindrome(sub):\n                    path.append(sub)\n                    backtrack(end, path)\n                    path.pop()\n                    \n        backtrack(0, [])\n        return res",
        "steps": [
          {
            "label": "Base Case Reach Target",
            "note": "When start == len(s), the entire string has been partitioned into palindromes. Save path to res.",
            "from": 9,
            "to": 11
          },
          {
            "label": "Iterate Substrings",
            "note": "Try ending positions 'end' from start + 1 to len(s) + 1 to slice candidate prefixes.",
            "from": 12,
            "to": 13
          },
          {
            "label": "Check Palindrome",
            "note": "Validate if sliced substring sub is equal to sub[::-1].",
            "from": 14,
            "to": 14,
            "yes": "Proceed to explore partition",
            "no": "Try next ending position"
          },
          {
            "label": "Recurse and Backtrack",
            "note": "Append valid substring sub to path, call backtrack(end, path), then pop sub to backtrack.",
            "from": 15,
            "to": 17
          }
        ]
      },
      {
        "name": "Backtracking with DP Precomputation (Optimal)",
        "time": "O(n * 2^n)",
        "space": "O(n^2)",
        "idea": "Precompute palindrome information for all substrings `s[i:j+1]` using a 2D Dynamic Programming table in O(n^2) time. Then perform backtracking without spending O(n) checking substring palindrome validity at each branch step.",
        "code": "class Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        n = len(s)\n        dp = [[False] * n for _ in range(n)]\n        for right in range(n):\n            for left in range(right + 1):\n                if s[left] == s[right] and (right - left <= 2 or dp[left + 1][right - 1]):\n                    dp[left][right] = True\n                    \n        res = []\n        def backtrack(start, path):\n            if start == n:\n                res.append(list(path))\n                return\n            for end in range(start, n):\n                if dp[start][end]:\n                    path.append(s[start:end + 1])\n                    backtrack(end + 1, path)\n                    path.pop()\n                    \n        backtrack(0, [])\n        return res",
        "steps": [
          {
            "label": "Precompute DP Table",
            "note": "Build 2D boolean grid dp[left][right] where cell represents if s[left:right+1] is palindrome.",
            "from": 4,
            "to": 8
          },
          {
            "label": "Backtrack Base Case",
            "note": "If start index reaches end of string n, record full path of valid palindromes.",
            "from": 12,
            "to": 14
          },
          {
            "label": "O(1) Palindrome Lookup",
            "note": "Check if dp[start][end] is True in O(1) time instead of slicing and checking string equality.",
            "from": 16,
            "to": 16,
            "yes": "Valid palindrome, advance search",
            "no": "Not a palindrome, continue loop"
          },
          {
            "label": "Recursive Backtracking",
            "note": "Append substring, recursively search suffix starting at end + 1, then pop substring.",
            "from": 17,
            "to": 19
          }
        ]
      }
    ]
  },
  "letter-combinations-of-a-phone-number": {
    "statement": "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.",
    "given": "a string digits containing digits from 2-9",
    "ret": "a list of all possible letter combinations as strings",
    "summary": "Recursively explore or iteratively build all character combinations mapped to each input digit using backtracking or queue-based generation.",
    "starter": "class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        pass",
    "tests": [
      {
        "label": "digits = \"23\"",
        "inputStr": "{\"digits\": \"23\"}",
        "expectedStr": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
      },
      {
        "label": "digits = \"\"",
        "inputStr": "{\"digits\": \"\"}",
        "expectedStr": "[]"
      },
      {
        "label": "digits = \"2\"",
        "inputStr": "{\"digits\": \"2\"}",
        "expectedStr": "[\"a\",\"b\",\"c\"]"
      }
    ],
    "approaches": [
      {
        "name": "Iterative Queue / BFS",
        "time": "O(4^n * n)",
        "space": "O(4^n)",
        "idea": "Start with a list containing an empty string. For each digit, pop each existing partial combination, append each mapped letter, and push the new combinations back into the list.",
        "code": "class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        if not digits:\n            return []\n        mapping = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'}\n        res = [\"\"]\n        for digit in digits:\n            next_res = []\n            for comb in res:\n                for char in mapping[digit]:\n                    next_res.append(comb + char)\n            res = next_res\n        return res",
        "steps": [
          {
            "label": "Check Empty Input",
            "note": "Return [] immediately if digits is empty.",
            "from": 3,
            "to": 4,
            "yes": "digits is empty, return []",
            "no": "digits is non-empty, continue"
          },
          {
            "label": "Initialize Mapping & Queue",
            "note": "Define digit-to-letter dict and seed res with [\"\"].",
            "from": 5,
            "to": 6
          },
          {
            "label": "Iterate Digits",
            "note": "Outer loop iterates over each input digit.",
            "from": 7,
            "to": 8
          },
          {
            "label": "Expand Combinations",
            "note": "For each combination in res, append each character mapped to the current digit.",
            "from": 9,
            "to": 11
          },
          {
            "label": "Return Result",
            "note": "Return final list of combinations when loop finishes.",
            "from": 13,
            "to": 13
          }
        ]
      },
      {
        "name": "Backtracking (DFS - Optimal)",
        "time": "O(4^n * n)",
        "space": "O(n)",
        "idea": "Use Depth-First Search with backtracking to construct combinations letter by letter until the path length equals the length of digits.",
        "code": "class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        if not digits:\n            return []\n        mapping = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'}\n        res = []\n        def backtrack(index, path):\n            if index == len(digits):\n                res.append(\"\".join(path))\n                return\n            for char in mapping[digits[index]]:\n                path.append(char)\n                backtrack(index + 1, path)\n                path.pop()\n        backtrack(0, [])\n        return res",
        "steps": [
          {
            "label": "Check Base Input",
            "note": "Handle edge case for empty string input.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Base Case Reach",
            "note": "Check if current index equals digits length.",
            "from": 8,
            "to": 10,
            "yes": "Full combination formed; join and store in res",
            "no": "Continue expanding next digit choices"
          },
          {
            "label": "Branch Exploration",
            "note": "Loop through all letters for mapping[digits[index]].",
            "from": 11,
            "to": 12
          },
          {
            "label": "Recursion & Backtrack",
            "note": "Push character to path, recurse to index + 1, and pop character to reset state.",
            "from": 13,
            "to": 14
          }
        ]
      }
    ]
  },
  "n-queens": {
    "statement": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.",
    "given": "an integer n representing board dimensions (n x n)",
    "ret": "a list of all distinct board configurations solving the N-Queens puzzle",
    "summary": "Place queens row-by-row using backtracking while tracking occupied columns and diagonals in hash sets for O(1) conflict validation.",
    "starter": "class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        pass",
    "tests": [
      {
        "label": "n = 4",
        "inputStr": "{\"n\": 4}",
        "expectedStr": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]"
      },
      {
        "label": "n = 1",
        "inputStr": "{\"n\": 1}",
        "expectedStr": "[[\"Q\"]]"
      }
    ],
    "approaches": [
      {
        "name": "Backtracking with Matrix Validation",
        "time": "O(N!)",
        "space": "O(N^2)",
        "idea": "Place queens row by row. For every cell (r, c), iterate backward up the column and diagonals on the 2D grid to check for placement conflicts.",
        "code": "class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        res = []\n        board = [[\".\"] * n for _ in range(n)]\n        def is_safe(r, c):\n            for i in range(r):\n                if board[i][c] == 'Q': return False\n                if c - (r - i) >= 0 and board[i][c - (r - i)] == 'Q': return False\n                if c + (r - i) < n and board[i][c + (r - i)] == 'Q': return False\n            return True\n        def backtrack(r):\n            if r == n:\n                res.append([\"\".join(row) for row in board])\n                return\n            for c in range(n):\n                if is_safe(r, c):\n                    board[r][c] = 'Q'\n                    backtrack(r + 1)\n                    board[r][c] = '.'\n        backtrack(0)\n        return res",
        "steps": [
          {
            "label": "Initialize Board",
            "note": "Create an n x n board initialized with '.'",
            "from": 3,
            "to": 4
          },
          {
            "label": "Safety Check",
            "note": "Check straight up and both upper-diagonal directions for 'Q'.",
            "from": 5,
            "to": 10
          },
          {
            "label": "Backtrack Base Condition",
            "note": "If r == n, a valid configuration is found.",
            "from": 12,
            "to": 14,
            "yes": "Convert board rows to strings and append to output",
            "no": "Try placing a queen in columns 0..n-1"
          },
          {
            "label": "Place and Recurse",
            "note": "If safe, set 'Q', backtrack on r + 1, then clear to '.'",
            "from": 16,
            "to": 18
          }
        ]
      },
      {
        "name": "Backtracking with Hash Sets (Optimal)",
        "time": "O(N!)",
        "space": "O(N)",
        "idea": "Track occupied columns, positive diagonals (r + c), and negative diagonals (r - c) using set lookups to achieve O(1) placement validation.",
        "code": "class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        cols = set()\n        posDiag = set()\n        negDiag = set()\n        res = []\n        board = [[\".\"] * n for _ in range(n)]\n        def backtrack(r):\n            if r == n:\n                res.append([\"\".join(row) for row in board])\n                return\n            for c in range(n):\n                if c in cols or (r + c) in posDiag or (r - c) in negDiag:\n                    continue\n                cols.add(c)\n                posDiag.add(r + c)\n                negDiag.add(r - c)\n                board[r][c] = \"Q\"\n                backtrack(r + 1)\n                cols.remove(c)\n                posDiag.remove(r + c)\n                negDiag.remove(r - c)\n                board[r][c] = \".\"\n        backtrack(0)\n        return res",
        "steps": [
          {
            "label": "Initialize Sets",
            "note": "Create sets for cols, posDiag (r + c), and negDiag (r - c).",
            "from": 3,
            "to": 6
          },
          {
            "label": "Base Case Check",
            "note": "If r reaches n, construct board response and store.",
            "from": 9,
            "to": 11
          },
          {
            "label": "Conflict Validation",
            "note": "Check if column c or diagonals are in tracked sets.",
            "from": 13,
            "to": 14,
            "yes": "Conflict detected, skip column",
            "no": "No conflict, proceed to place queen"
          },
          {
            "label": "Update Sets & Place Queen",
            "note": "Add c, r+c, r-c to sets, place 'Q', and recurse to next row.",
            "from": 15,
            "to": 19
          },
          {
            "label": "Backtrack Reset",
            "note": "Remove c, r+c, r-c from sets and restore cell to '.'.",
            "from": 20,
            "to": 23
          }
        ]
      }
    ]
  },
  "max-area-of-island": {
    "statement": "You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical). You may assume all four edges of the grid are surrounded by water. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid. If there is no island, return 0.",
    "given": "an m x n binary matrix grid where 1 is land and 0 is water",
    "ret": "an integer representing the maximum area of an island",
    "summary": "Iterate through every grid cell, triggering a DFS or BFS traversal from unvisited land cells ('1') to calculate connected component size, keeping track of the max area found.",
    "starter": "class Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        pass",
    "tests": [
      {
        "label": "grid = [[0,0,1,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0]]",
        "inputStr": "{\"grid\": [[0,0,1,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0]]}",
        "expectedStr": "3"
      },
      {
        "label": "grid = [[0,0,0,0,0,0,0,0]]",
        "inputStr": "{\"grid\": [[0,0,0,0,0,0,0,0]]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "BFS with Queue",
        "time": "O(m * n)",
        "space": "O(m * n)",
        "idea": "Traverse grid cells; when encountering a 1, launch Breadth-First Search (BFS) using a queue to explore all connected land cells and sink them by changing 1 to 0.",
        "code": "from collections import deque\n\nclass Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        rows, cols = len(grid), len(grid[0])\n        max_area = 0\n        for r in range(rows):\n            for c in range(cols):\n                if grid[r][c] == 1:\n                    area = 0\n                    queue = deque([(r, c)])\n                    grid[r][c] = 0\n                    while queue:\n                        curr_r, curr_c = queue.popleft()\n                        area += 1\n                        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                            nr, nc = curr_r + dr, curr_c + dc\n                            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                                grid[nr][nc] = 0\n                                queue.append((nr, nc))\n                    max_area = max(max_area, area)\n        return max_area",
        "steps": [
          {
            "label": "Grid Scan Loop",
            "note": "Iterate through each cell (r, c) in the grid.",
            "from": 7,
            "to": 9,
            "yes": "Cell contains land (1), launch BFS",
            "no": "Water cell (0), skip"
          },
          {
            "label": "BFS Queue Init & Sink",
            "note": "Initialize queue with starting land cell and mark as 0 (visited).",
            "from": 10,
            "to": 12
          },
          {
            "label": "Pop Queue & Expand",
            "note": "Pop cell, increment area counter, check 4-directional neighbors.",
            "from": 13,
            "to": 19
          },
          {
            "label": "Update Global Max",
            "note": "Update max_area with area of component after BFS completion.",
            "from": 20,
            "to": 20
          }
        ]
      },
      {
        "name": "Recursive DFS (In-place Marking - Optimal)",
        "time": "O(m * n)",
        "space": "O(m * n)",
        "idea": "Perform recursive Depth-First Search for each land cell (1), marking visited cells as 0 to avoid extra visited space and returning total cell counts recursively.",
        "code": "class Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        rows, cols = len(grid), len(grid[0])\n        def dfs(r, c):\n            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 0:\n                return 0\n            grid[r][c] = 0\n            return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)\n        \n        max_area = 0\n        for r in range(rows):\n            for c in range(cols):\n                if grid[r][c] == 1:\n                    max_area = max(max_area, dfs(r, c))\n        return max_area",
        "steps": [
          {
            "label": "DFS Boundary & Water Check",
            "note": "Return 0 if cell coordinates are out of bounds or cell is water (0).",
            "from": 5,
            "to": 6,
            "yes": "Out of bounds or water, return 0",
            "no": "Valid land cell, continue DFS"
          },
          {
            "label": "Mark Visited",
            "note": "Mutate cell grid[r][c] to 0 to prevent re-visiting.",
            "from": 7,
            "to": 7
          },
          {
            "label": "Recurse 4 Directions",
            "note": "Return 1 + sum of DFS calls in down, up, right, left directions.",
            "from": 8,
            "to": 8
          },
          {
            "label": "Scan Matrix & Compute Max",
            "note": "Trigger DFS on each unvisited land cell and compute maximum island area.",
            "from": 11,
            "to": 14
          }
        ]
      }
    ]
  },
  "surrounded-regions": {
    "statement": "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region. Any 'O' connected to the boundary is NOT surrounded.",
    "given": "an m x n matrix board containing 'X' and 'O'",
    "ret": "None (modify board in-place)",
    "summary": "Traverse from all boundary cells containing 'O' using DFS/BFS to mark them as safe. Then scan the entire board: capture remaining 'O's into 'X's and revert safe cells back to 'O'.",
    "starter": "class Solution:\n    def solve(self, board: list[list[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        pass",
    "tests": [
      {
        "label": "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        "inputStr": "{\"board\": [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]}",
        "expectedStr": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]"
      },
      {
        "label": "board = [[\"X\"]]",
        "inputStr": "{\"board\": [[\"X\"]]}",
        "expectedStr": "[[\"X\"]]"
      }
    ],
    "approaches": [
      {
        "name": "brute force",
        "time": "O((M * N)^2)",
        "space": "O(M * N)",
        "idea": "For every cell containing 'O', run a separate traversal (DFS or BFS) to check if it can reach the boundary. If the traversal reaches a boundary cell, the region is unsafe. Otherwise, flip all cells in that component to 'X'.",
        "code": "class Solution:\n    def solve(self, board: list[list[str]]) -> None:\n        if not board or not board[0]:\n            return\n        rows, cols = len(board), len(board[0])\n        \n        for r in range(rows):\n            for c in range(cols):\n                if board[r][c] == 'O':\n                    visited = set()\n                    is_surrounded = True\n                    stack = [(r, c)]\n                    region = []\n                    \n                    while stack:\n                        curr_r, curr_c = stack.pop()\n                        if (curr_r, curr_c) in visited:\n                            continue\n                        visited.add((curr_r, curr_c))\n                        region.append((curr_r, curr_c))\n                        \n                        if curr_r in (0, rows - 1) or curr_c in (0, cols - 1):\n                            is_surrounded = False\n                            \n                        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                            nr, nc = curr_r + dr, curr_c + dc\n                            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] == 'O':\n                                stack.append((nr, nc))\n                                \n                    if is_surrounded:\n                        for fr, fc in region:\n                            board[fr][fc] = 'X'",
        "steps": [
          {
            "label": "Iterate grid cells",
            "note": "Loop through every cell (r, c) looking for an uncaptured 'O'.",
            "from": 6,
            "to": 8
          },
          {
            "label": "Check initial cell",
            "note": "If cell contains 'O', initialize search state (visited set, region list, is_surrounded flag).",
            "from": 8,
            "to": 12,
            "yes": "Cell is 'O', start graph traversal.",
            "no": "Cell is 'X', continue to next cell."
          },
          {
            "label": "Traverse component",
            "note": "Pop current coordinate from stack, check if it hits boundary, and add valid neighbors.",
            "from": 14,
            "to": 26
          },
          {
            "label": "Capture surrounded region",
            "note": "If the component traversal never touched a boundary, flip all collected region cells to 'X'.",
            "from": 28,
            "to": 30,
            "yes": "is_surrounded is True, flip cells to 'X'.",
            "no": "Component is connected to boundary, leave unchanged."
          }
        ]
      },
      {
        "name": "boundary dfs / safe marking",
        "time": "O(M * N)",
        "space": "O(M * N)",
        "idea": "Instead of checking every 'O', reverse the logic: any 'O' on the boundary and any 'O' connected to it can NEVER be captured. Run DFS starting only from boundary 'O' cells, temporarily marking them as 'E' (escaped). Finally, convert remaining 'O's to 'X's, and 'E's back to 'O's.",
        "code": "class Solution:\n    def solve(self, board: list[list[str]]) -> None:\n        if not board or not board[0]:\n            return\n        rows, cols = len(board), len(board[0])\n        \n        def dfs(r, c):\n            if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != 'O':\n                return\n            board[r][c] = 'E'\n            dfs(r + 1, c)\n            dfs(r - 1, c)\n            dfs(r, c + 1)\n            dfs(r, c - 1)\n            \n        for r in range(rows):\n            dfs(r, 0)\n            dfs(r, cols - 1)\n        for c in range(cols):\n            dfs(0, c)\n            dfs(rows - 1, c)\n            \n        for r in range(rows):\n            for c in range(cols):\n                if board[r][c] == 'O':\n                    board[r][c] = 'X'\n                elif board[r][c] == 'E':\n                    board[r][c] = 'O'",
        "steps": [
          {
            "label": "Boundary DFS helper",
            "note": "Define DFS function to change reachable 'O's from border into temporary state 'E'.",
            "from": 6,
            "to": 13
          },
          {
            "label": "Trigger DFS on borders",
            "note": "Call DFS for every border cell (first/last row and first/last column).",
            "from": 15,
            "to": 20
          },
          {
            "label": "Scan grid and capture",
            "note": "Iterate all cells: turn unvisited 'O's into 'X' (captured) and restore 'E's back to 'O' (safe).",
            "from": 22,
            "to": 27
          }
        ]
      }
    ]
  },
  "rotting-oranges": {
    "statement": "You are given an m x n grid where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
    "given": "an m x n grid containing values 0 (empty), 1 (fresh), or 2 (rotten)",
    "ret": "minimum number of minutes until no fresh oranges remain, or -1",
    "summary": "Use multi-source BFS starting simultaneously from all initially rotten oranges. Spread rot level-by-level (minute-by-minute) until fresh orange count hits zero or queue empties.",
    "starter": "class Solution:\n    def orangesRotting(self, grid: list[list[int]]) -> int:\n        pass",
    "tests": [
      {
        "label": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "inputStr": "{\"grid\": [[2,1,1],[1,1,0],[0,1,1]]}",
        "expectedStr": "4"
      },
      {
        "label": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "inputStr": "{\"grid\": [[2,1,1],[0,1,1],[1,0,1]]}",
        "expectedStr": "-1"
      },
      {
        "label": "grid = [[0,2]]",
        "inputStr": "{\"grid\": [[0,2]]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "brute force / repeated scan",
        "time": "O((M * N)^2)",
        "space": "O(M * N)",
        "idea": "In each step (representing 1 minute), scan the grid to find all current rotten oranges, identify neighboring fresh oranges, convert them to rotten, and increment the time. Repeat until no new oranges rot in a pass.",
        "code": "class Solution:\n    def orangesRotting(self, grid: list[list[int]]) -> int:\n        rows, cols = len(grid), len(grid[0])\n        minutes = 0\n        \n        while True:\n            to_rot = []\n            for r in range(rows):\n                for c in range(cols):\n                    if grid[r][c] == 2:\n                        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                            nr, nc = r + dr, c + dc\n                            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                                to_rot.append((nr, nc))\n            if not to_rot:\n                break\n            for r, c in to_rot:\n                grid[r][c] = 2\n            minutes += 1\n            \n        for r in range(rows):\n            for c in range(cols):\n                if grid[r][c] == 1:\n                    return -1\n        return minutes",
        "steps": [
          {
            "label": "Minute loop",
            "note": "Outer loop scans the entire grid repeatedly until no new fresh oranges are adjacent to rotten ones.",
            "from": 6,
            "to": 7
          },
          {
            "label": "Collect newly rotten candidates",
            "note": "Identify all fresh oranges (1) adjacent to rotten oranges (2) and stage them in `to_rot`.",
            "from": 8,
            "to": 14
          },
          {
            "label": "Check termination",
            "note": "If no new fresh oranges can be rotted this minute, break from the loop.",
            "from": 15,
            "to": 16,
            "yes": "to_rot is empty, break loop.",
            "no": "New oranges found, continue rotting process."
          },
          {
            "label": "Apply state changes",
            "note": "Mutate staged coordinates to rotten (2) and increment minute count.",
            "from": 17,
            "to": 19
          },
          {
            "label": "Final freshness check",
            "note": "Scan grid for remaining fresh oranges. Return -1 if any exist, else return total minutes.",
            "from": 21,
            "to": 25
          }
        ]
      },
      {
        "name": "multi-source bfs",
        "time": "O(M * N)",
        "space": "O(M * N)",
        "idea": "Perform a multi-source Breadth-First Search. Add all initially rotten oranges to a queue and count fresh oranges. Process the queue level-by-level, rotting adjacent fresh oranges and pushing them to the queue until all fresh oranges are rotted or queue is empty.",
        "code": "from collections import deque\n\nclass Solution:\n    def orangesRotting(self, grid: list[list[int]]) -> int:\n        rows, cols = len(grid), len(grid[0])\n        queue = deque()\n        fresh = 0\n        \n        for r in range(rows):\n            for c in range(cols):\n                if grid[r][c] == 2:\n                    queue.append((r, c))\n                elif grid[r][c] == 1:\n                    fresh += 1\n                    \n        if fresh == 0:\n            return 0\n            \n        minutes = 0\n        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]\n        \n        while queue and fresh > 0:\n            minutes += 1\n            for _ in range(len(queue)):\n                r, c = queue.popleft()\n                for dr, dc in directions:\n                    nr, nc = r + dr, c + dc\n                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:\n                        grid[nr][nc] = 2\n                        fresh -= 1\n                        queue.append((nr, nc))\n                        \n        return minutes if fresh == 0 else -1",
        "steps": [
          {
            "label": "Initialize queue and count fresh",
            "note": "Scan grid once to store initial rotten positions in queue and count initial fresh oranges.",
            "from": 9,
            "to": 14
          },
          {
            "label": "Check edge case",
            "note": "If fresh orange count is 0, return 0 immediately.",
            "from": 16,
            "to": 17,
            "yes": "fresh == 0, return 0.",
            "no": "Fresh oranges present, proceed to BFS."
          },
          {
            "label": "BFS level-by-level expansion",
            "note": "Process all queue items for current minute level. Decrement fresh count and rot adjacent fresh cells.",
            "from": 22,
            "to": 31
          },
          {
            "label": "Return result",
            "note": "If fresh orange count reaches 0, return total minutes elapsed; otherwise, return -1.",
            "from": 33,
            "to": 33
          }
        ]
      }
    ]
  },
  "walls-and-gates": {
    "statement": "You are given an m x n grid rooms initialized with these possible values: -1 (wall/obstacle), 0 (gate), 2147483647 (empty room, INF). Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should remain INF.",
    "given": "an m x n grid rooms containing -1 (wall), 0 (gate), and 2147483647 (empty room)",
    "ret": "None (modify rooms in-place)",
    "summary": "Push all gate locations into a queue and run a multi-source BFS. Explore empty neighboring rooms, updating their values with incremental distance from nearest gate.",
    "starter": "class Solution:\n    def wallsAndGates(self, rooms: list[list[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify rooms in-place instead.\n        \"\"\"\n        pass",
    "tests": [
      {
        "label": "rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
        "inputStr": "{\"rooms\": [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]}",
        "expectedStr": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]"
      },
      {
        "label": "rooms = [[-1]]",
        "inputStr": "{\"rooms\": [[-1]]}",
        "expectedStr": "[[-1]]"
      }
    ],
    "approaches": [
      {
        "name": "brute force / search from every room",
        "time": "O((M * N)^2)",
        "space": "O(M * N)",
        "idea": "For every empty room cell (INF), perform a BFS to find the shortest path to any gate (0). Update the cell with the found shortest distance.",
        "code": "from collections import deque\n\nclass Solution:\n    def wallsAndGates(self, rooms: list[list[int]]) -> None:\n        if not rooms or not rooms[0]:\n            return\n        rows, cols = len(rooms), len(rooms[0])\n        INF = 2147483647\n        \n        for r in range(rows):\n            for c in range(cols):\n                if rooms[r][c] == INF:\n                    queue = deque([(r, c, 0)])\n                    visited = {(r, c)}\n                    found = False\n                    while queue and not found:\n                        curr_r, curr_c, dist = queue.popleft()\n                        if rooms[curr_r][curr_c] == 0:\n                            rooms[r][c] = dist\n                            found = True\n                            break\n                        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                            nr, nc = curr_r + dr, curr_c + dc\n                            if 0 <= nr < rows and 0 <= nc < cols and rooms[nr][nc] != -1 and (nr, nc) not in visited:\n                                visited.add((nr, nc))\n                                queue.append((nr, nc, dist + 1))",
        "steps": [
          {
            "label": "Find empty room",
            "note": "Iterate grid and locate cells initialized with value INF.",
            "from": 10,
            "to": 12,
            "yes": "Cell is empty room, start search.",
            "no": "Cell is wall or gate, continue."
          },
          {
            "label": "Run BFS from room",
            "note": "Initialize queue and visited set to search for nearest gate.",
            "from": 13,
            "to": 16
          },
          {
            "label": "Check for gate reached",
            "note": "When a gate (0) is popped from queue, record distance and break search.",
            "from": 18,
            "to": 21,
            "yes": "Gate found, assign minimum distance.",
            "no": "Continue expanding neighboring empty rooms."
          },
          {
            "label": "Enqueue valid neighbors",
            "note": "Push adjacent unvisited non-wall cells into queue with dist + 1.",
            "from": 22,
            "to": 25
          }
        ]
      },
      {
        "name": "multi-source bfs from gates",
        "time": "O(M * N)",
        "space": "O(M * N)",
        "idea": "Start simultaneously from all gates (0). Push all gate coordinates to a queue. For each step, pop a cell and update adjacent empty rooms (INF) with current cell value + 1, adding updated rooms to the queue.",
        "code": "from collections import deque\n\nclass Solution:\n    def wallsAndGates(self, rooms: list[list[int]]) -> None:\n        if not rooms or not rooms[0]:\n            return\n        rows, cols = len(rooms), len(rooms[0])\n        queue = deque()\n        \n        for r in range(rows):\n            for c in range(cols):\n                if rooms[r][c] == 0:\n                    queue.append((r, c))\n                    \n        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]\n        INF = 2147483647\n        \n        while queue:\n            r, c = queue.popleft()\n            for dr, dc in directions:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < rows and 0 <= nc < cols and rooms[nr][nc] == INF:\n                    rooms[nr][nc] = rooms[r][c] + 1\n                    queue.append((nr, nc))",
        "steps": [
          {
            "label": "Collect all gate positions",
            "note": "Scan grid and enqueue all cells containing gate value 0.",
            "from": 10,
            "to": 13
          },
          {
            "label": "Multi-source BFS traversal",
            "note": "Pop cell (r, c) from front of queue and iterate through 4-directional neighbors.",
            "from": 18,
            "to": 21
          },
          {
            "label": "Update empty rooms",
            "note": "If neighboring cell is unvisited empty room (INF), set its distance to current distance + 1 and push it to queue.",
            "from": 22,
            "to": 24,
            "yes": "Neighbor is INF, set distance and append to queue.",
            "no": "Neighbor is wall (-1), gate (0), or already updated room."
          }
        ]
      }
    ]
  },
  "course-schedule-ii": {
    "statement": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i. Return the ordering of courses you should take to finish all courses. If it is impossible to finish all courses, return an empty array. If there are multiple valid answers, return any of them.",
    "given": "an integer numCourses and a list of directed prerequisite pairs prerequisites",
    "ret": "a list of integers representing a valid course order, or an empty list if impossible",
    "summary": "Use Kahn's Algorithm (BFS with in-degree tracking) or Topological Sort via DFS to find a valid ordering or detect cycles.",
    "starter": "class Solution:\n    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n        pass",
    "tests": [
      {
        "label": "numCourses = 2, prerequisites = [[1,0]]",
        "inputStr": "{\"numCourses\": 2, \"prerequisites\": [[1,0]]}",
        "expectedStr": "[0, 1]"
      },
      {
        "label": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "inputStr": "{\"numCourses\": 4, \"prerequisites\": [[1,0],[2,0],[3,1],[3,2]]}",
        "expectedStr": "[0, 1, 2, 3]"
      },
      {
        "label": "numCourses = 1, prerequisites = []",
        "inputStr": "{\"numCourses\": 1, \"prerequisites\": []}",
        "expectedStr": "[0]"
      }
    ],
    "approaches": [
      {
        "name": "DFS Topological Sort with Cycle Detection",
        "time": "O(V + E)",
        "space": "O(V + E)",
        "idea": "Build an adjacency list and perform DFS on each node. Maintain three states (unvisited, visiting, visited) to detect cycles. If a cycle is detected, return an empty list. Otherwise, append completed nodes to the output list.",
        "code": "def findOrder(numCourses, prerequisites):\n    adj = {i: [] for i in range(numCourses)}\n    for crs, pre in prerequisites:\n        adj[crs].append(pre)\n    output = []\n    visit, cycle = set(), set()\n    def dfs(crs):\n        if crs in cycle:\n            return False\n        if crs in visit:\n            return True\n        cycle.add(crs)\n        for pre in adj[crs]:\n            if not dfs(pre):\n                return False\n        cycle.remove(crs)\n        visit.add(crs)\n        output.append(crs)\n        return True\n    for c in range(numCourses):\n        if not dfs(c):\n            return []\n    return output",
        "steps": [
          {
            "label": "Build adjacency list",
            "note": "Map each course to its prerequisites",
            "from": 2,
            "to": 4
          },
          {
            "label": "Check current cycle status",
            "note": "If course is in active recursive stack, a cycle exists",
            "from": 8,
            "to": 9,
            "yes": "Cycle detected, return False",
            "no": "Proceed to check if already visited"
          },
          {
            "label": "Check visited status",
            "note": "If course is already fully processed, skip duplicate work",
            "from": 10,
            "to": 11,
            "yes": "Already processed, return True"
          },
          {
            "label": "Recurse on prerequisites",
            "note": "Mark current as visiting and recursively visit all dependencies",
            "from": 12,
            "to": 15
          },
          {
            "label": "Finalize node",
            "note": "Remove course from cycle set, mark visited, and append to topological output",
            "from": 16,
            "to": 19
          },
          {
            "label": "Run DFS for all courses",
            "note": "Loop through all course IDs 0 to numCourses - 1",
            "from": 20,
            "to": 22
          }
        ]
      },
      {
        "name": "Kahn's Algorithm (BFS In-Degree)",
        "time": "O(V + E)",
        "space": "O(V + E)",
        "idea": "Calculate the in-degree of every node. Add nodes with 0 in-degree to a BFS queue. Process nodes from the queue, reducing the in-degree of their neighbors, and queue any neighbor whose in-degree reaches 0.",
        "code": "from collections import deque\ndef findOrder(numCourses, prerequisites):\n    adj = {i: [] for i in range(numCourses)}\n    in_degree = [0] * numCourses\n    for dest, src in prerequisites:\n        adj[src].append(dest)\n        in_degree[dest] += 1\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    order = []\n    while queue:\n        curr = queue.popleft()\n        order.append(curr)\n        for neighbor in adj[curr]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    return order if len(order) == numCourses else []",
        "steps": [
          {
            "label": "Build graph and in-degrees",
            "note": "Construct directed graph src -> dest and record incoming edge counts for each course",
            "from": 3,
            "to": 7
          },
          {
            "label": "Initialize queue",
            "note": "Collect all courses that have 0 prerequisites (in-degree == 0)",
            "from": 8,
            "to": 8
          },
          {
            "label": "Process queue",
            "note": "Pop course from queue and add it to the execution order",
            "from": 10,
            "to": 12
          },
          {
            "label": "Decrement neighbor in-degrees",
            "note": "Reduce in-degree of dependent courses; if 0, push to queue",
            "from": 13,
            "to": 16
          },
          {
            "label": "Verify result validity",
            "note": "Return order if all courses were visited, otherwise return [] due to cycle",
            "from": 17,
            "to": 17
          }
        ]
      }
    ]
  },
  "redundant-connection": {
    "statement": "In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that appears last in the input.",
    "given": "a 2D list of integers edges representing an undirected graph with one extra edge",
    "ret": "a list of two integers representing the redundant edge",
    "summary": "Use Disjoint Set Union (Union-Find) to process edges sequentially. The first edge connecting two nodes already in the same set forms a cycle.",
    "starter": "class Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        pass",
    "tests": [
      {
        "label": "edges = [[1,2],[1,3],[2,3]]",
        "inputStr": "{\"edges\": [[1,2],[1,3],[2,3]]}",
        "expectedStr": "[2, 3]"
      },
      {
        "label": "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
        "inputStr": "{\"edges\": [[1,2],[2,3],[3,4],[1,4],[1,5]]}",
        "expectedStr": "[1, 4]"
      }
    ],
    "approaches": [
      {
        "name": "DFS Cycle Search per Edge",
        "time": "O(N^2)",
        "space": "O(N)",
        "idea": "For each edge (u, v), perform a DFS starting from u to check if v is already reachable through the existing graph. If reachable, (u, v) is redundant. Otherwise, add (u, v) to the graph.",
        "code": "def findRedundantConnection(edges):\n    adj = {}\n    def dfs(src, target, visited):\n        if src == target: return True\n        visited.add(src)\n        for neighbor in adj.get(src, []):\n            if neighbor not in visited:\n                if dfs(neighbor, target, visited): return True\n        return False\n    for u, v in edges:\n        if u in adj and v in adj and dfs(u, v, set()):\n            return [u, v]\n        adj.setdefault(u, []).append(v)\n        adj.setdefault(v, []).append(u)\n    return []",
        "steps": [
          {
            "label": "Iterate through edges",
            "note": "Inspect each edge sequentially",
            "from": 10,
            "to": 10
          },
          {
            "label": "Check reachability",
            "note": "If both endpoints exist in adjacency list, run DFS to see if a path exists between u and v",
            "from": 11,
            "to": 12,
            "yes": "Path exists; this edge creates a cycle and is returned immediately"
          },
          {
            "label": "Execute DFS traversal",
            "note": "Traverse graph depth-first starting from src looking for target node",
            "from": 3,
            "to": 9
          },
          {
            "label": "Add edge to graph",
            "note": "If no path exists, insert edge into the adjacency list bidirectionally",
            "from": 13,
            "to": 14
          }
        ]
      },
      {
        "name": "Union-Find (Disjoint Set Union)",
        "time": "O(N * alpha(N))",
        "space": "O(N)",
        "idea": "Maintain parent array. For each edge, find roots of both nodes. If roots match, they belong to the same component and this edge is redundant. Otherwise, union the sets.",
        "code": "def findRedundantConnection(edges):\n    parent = [i for i in range(len(edges) + 1)]\n    def find(n):\n        if parent[n] != n:\n            parent[n] = find(parent[n])\n        return parent[n]\n    def union(n1, n2):\n        p1, p2 = find(n1), find(n2)\n        if p1 == p2:\n            return False\n        parent[p2] = p1\n        return True\n    for u, v in edges:\n        if not union(u, v):\n            return [u, v]\n    return []",
        "steps": [
          {
            "label": "Initialize Union-Find",
            "note": "Set parent of each node to itself",
            "from": 2,
            "to": 2
          },
          {
            "label": "Process edge",
            "note": "Attempt to union the components containing node u and node v",
            "from": 12,
            "to": 13
          },
          {
            "label": "Find root with path compression",
            "note": "Recursively find representative root and compress path",
            "from": 3,
            "to": 6
          },
          {
            "label": "Check component roots in union",
            "note": "Compare roots p1 and p2 of both endpoints",
            "from": 7,
            "to": 11,
            "yes": "p1 == p2 means nodes already connected; return False to flag redundant edge",
            "no": "Set parent[p2] = p1 and return True"
          },
          {
            "label": "Return redundant edge",
            "note": "Return the first edge where union returns False",
            "from": 14,
            "to": 14
          }
        ]
      }
    ]
  },
  "word-ladder": {
    "statement": "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter, every si is in wordList, and sk == endWord. Given beginWord, endWord, and wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
    "given": "strings beginWord and endWord, and a list of valid words wordList",
    "ret": "an integer representing the minimum length of the transformation sequence",
    "summary": "Model words as nodes and single-letter transformations as edges, then perform Breadth-First Search (BFS) to find the shortest path.",
    "starter": "class Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        pass",
    "tests": [
      {
        "label": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "inputStr": "{\"beginWord\": \"hit\", \"endWord\": \"cog\", \"wordList\": [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]}",
        "expectedStr": "5"
      },
      {
        "label": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "inputStr": "{\"beginWord\": \"hit\", \"endWord\": \"cog\", \"wordList\": [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "Standard BFS with Wildcard Pattern Preprocessing",
        "time": "O(M^2 * N)",
        "space": "O(M^2 * N)",
        "idea": "Precompute generic word patterns (e.g., 'h*t') to quickly find 1-letter transformation neighbors during BFS exploration.",
        "code": "from collections import deque, defaultdict\ndef ladderLength(beginWord, endWord, wordList):\n    if endWord not in wordList: return 0\n    patterns = defaultdict(list)\n    for word in wordList:\n        for j in range(len(word)):\n            patterns[word[:j] + \"*\" + word[j+1:]].append(word)\n    queue = deque([(beginWord, 1)])\n    visited = {beginWord}\n    while queue:\n        word, level = queue.popleft()\n        if word == endWord: return level\n        for j in range(len(word)):\n            pattern = word[:j] + \"*\" + word[j+1:]\n            for nei in patterns[pattern]:\n                if nei not in visited:\n                    visited.add(nei)\n                    queue.append((nei, level + 1))\n            patterns[pattern] = []\n    return 0",
        "steps": [
          {
            "label": "Check endWord existence",
            "note": "If endWord is not in wordList, transformation is impossible",
            "from": 3,
            "to": 3
          },
          {
            "label": "Preprocess patterns",
            "note": "Group words by wildcard patterns (e.g. *ot -> hot, dot, lot)",
            "from": 4,
            "to": 7
          },
          {
            "label": "Initialize queue",
            "note": "Push beginWord with path length 1 into BFS queue and mark visited",
            "from": 8,
            "to": 9
          },
          {
            "label": "Process BFS node",
            "note": "Pop current word and length; return length if endWord is reached",
            "from": 10,
            "to": 12
          },
          {
            "label": "Explore neighbors via patterns",
            "note": "Generate patterns for current word, add unvisited neighbor words to queue, and clear pattern list to prevent duplicate traversal",
            "from": 13,
            "to": 19
          }
        ]
      },
      {
        "name": "Bidirectional BFS",
        "time": "O(M^2 * N)",
        "space": "O(M * N)",
        "idea": "Search simultaneously from beginWord and endWord, always expanding the smaller frontier set to drastically reduce search space.",
        "code": "def ladderLength(beginWord, endWord, wordList):\n    wordSet = set(wordList)\n    if endWord not in wordSet: return 0\n    front, back = {beginWord}, {endWord}\n    length = 1\n    while front and back:\n        if len(front) > len(back):\n            front, back = back, front\n        next_front = set()\n        for word in front:\n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    nxt = word[:i] + c + word[i+1:]\n                    if nxt in back: return length + 1\n                    if nxt in wordSet:\n                        wordSet.remove(nxt)\n                        next_front.add(nxt)\n        front = next_front\n        length += 1\n    return 0",
        "steps": [
          {
            "label": "Initialize sets",
            "note": "Convert wordList to set; initialize front set with beginWord and back set with endWord",
            "from": 2,
            "to": 5
          },
          {
            "label": "Swap frontiers",
            "note": "Always expand from the smaller frontier set to minimize branching factor",
            "from": 7,
            "to": 8
          },
          {
            "label": "Generate candidate transformations",
            "note": "Try changing each character of word to all 26 lowercase alphabet letters",
            "from": 10,
            "to": 13
          },
          {
            "label": "Check intersection",
            "note": "If candidate word is in back frontier, return length + 1",
            "from": 14,
            "to": 14,
            "yes": "Both frontiers met; return shortest total transformation steps"
          },
          {
            "label": "Advance frontier",
            "note": "Add valid words from wordSet to next_front set and remove from wordSet to mark visited",
            "from": 15,
            "to": 17
          },
          {
            "label": "Update level",
            "note": "Set front to next_front and increment path length counter",
            "from": 18,
            "to": 19
          }
        ]
      }
    ]
  },
  "network-delay-time": {
    "statement": "You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target. We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.",
    "given": "a list of directed edges times, total nodes n, and start node k",
    "ret": "the minimum time for all nodes to receive the signal, or -1 if unreachable",
    "summary": "This is a single-source shortest path problem on a weighted directed graph. We can use Dijkstra's algorithm with a min-heap to greedily find the shortest travel time to all nodes.",
    "starter": "def networkDelayTime(times: list[list[int]], n: int, k: int) -> int:\n    pass",
    "tests": [
      {
        "label": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        "inputStr": "{\"times\": [[2,1,1],[2,3,1],[3,4,1]], \"n\": 4, \"k\": 2}",
        "expectedStr": "2"
      },
      {
        "label": "times = [[1,2,1]], n = 2, k = 1",
        "inputStr": "{\"times\": [[1,2,1]], \"n\": 2, \"k\": 1}",
        "expectedStr": "1"
      },
      {
        "label": "times = [[1,2,1]], n = 2, k = 2",
        "inputStr": "{\"times\": [[1,2,1]], \"n\": 2, \"k\": 2}",
        "expectedStr": "-1"
      }
    ],
    "approaches": [
      {
        "name": "Bellman-Ford Algorithm",
        "time": "O(V * E)",
        "space": "O(V)",
        "idea": "Initialize all node distances to infinity except the source node k which is set to 0. Relax all edges n - 1 times.",
        "code": "def networkDelayTime(times: list[list[int]], n: int, k: int) -> int:\n    dist = [float('inf')] * (n + 1)\n    dist[k] = 0\n    for _ in range(n - 1):\n        for u, v, w in times:\n            if dist[u] != float('inf') and dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n    max_dist = max(dist[1:])\n    return max_dist if max_dist != float('inf') else -1",
        "steps": [
          {
            "label": "Initialize distances",
            "note": "Set dist array size to n+1 filled with infinity, and dist[k] = 0.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Relax edges",
            "note": "Loop n - 1 times over all edges (u, v, w) to relax distances.",
            "from": 4,
            "to": 7,
            "yes": "Updated dist[v] if shorter path via dist[u] + w was found."
          },
          {
            "label": "Compute answer",
            "note": "Find the maximum distance among nodes 1 to n. Return -1 if any node remains unreachable.",
            "from": 8,
            "to": 9
          }
        ]
      },
      {
        "name": "Dijkstra's Algorithm (Min-Heap)",
        "time": "O((E + V) log V)",
        "space": "O(V + E)",
        "idea": "Build an adjacency list and use a min-heap priority queue to greedily process the unvisited node with the smallest distance.",
        "code": "import collections\nimport heapq\n\ndef networkDelayTime(times: list[list[int]], n: int, k: int) -> int:\n    graph = collections.defaultdict(list)\n    for u, v, w in times:\n        graph[u].append((v, w))\n    \n    pq = [(0, k)]\n    visited = {}\n    \n    while pq:\n        time, node = heapq.heappop(pq)\n        if node in visited:\n            continue\n        visited[node] = time\n        for neighbor, weight in graph[node]:\n            if neighbor not in visited:\n                heapq.heappush(pq, (time + weight, neighbor))\n                \n    return max(visited.values()) if len(visited) == n else -1",
        "steps": [
          {
            "label": "Build graph",
            "note": "Construct adjacency list mapping node u to list of (v, weight).",
            "from": 5,
            "to": 7
          },
          {
            "label": "Initialize heap and visited",
            "note": "Push initial pair (0, k) into min-heap and set up empty visited map.",
            "from": 9,
            "to": 10
          },
          {
            "label": "Pop node from heap",
            "note": "Extract smallest distance node from pq. Skip if already visited.",
            "from": 12,
            "to": 15
          },
          {
            "label": "Traverse neighbors",
            "note": "For each neighbor, push cumulative travel time to min-heap if not visited.",
            "from": 16,
            "to": 18
          },
          {
            "label": "Return result",
            "note": "If visited count equals n, return maximum time recorded; otherwise return -1.",
            "from": 20,
            "to": 20
          }
        ]
      }
    ]
  },
  "min-cost-to-connect-all-points": {
    "statement": "You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi]. The cost of connecting two points [xi, yi] and [xj, yj] is the Manhattan distance between them: |xi - xj| + |yi - yj|. Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.",
    "given": "an array of 2D coordinates points",
    "ret": "the minimum cost to connect all points into a single connected component",
    "summary": "This is a Minimum Spanning Tree (MST) problem on a complete graph. We can use Prim's algorithm with a min-heap or Kruskal's algorithm with Union-Find.",
    "starter": "def minCostConnectPoints(points: list[list[int]]) -> int:\n    pass",
    "tests": [
      {
        "label": "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
        "inputStr": "{\"points\": [[0,0],[2,2],[3,10],[5,2],[7,0]]}",
        "expectedStr": "20"
      },
      {
        "label": "points = [[3,12],[-2,5],[-4,1]]",
        "inputStr": "{\"points\": [[3,12],[-2,5],[-4,1]]}",
        "expectedStr": "18"
      }
    ],
    "approaches": [
      {
        "name": "Kruskal's Algorithm (Union-Find)",
        "time": "O(N^2 log N)",
        "space": "O(N^2)",
        "idea": "Generate all N*(N-1)/2 edges, sort them by distance, and add edges to the MST using Union-Find to avoid cycles.",
        "code": "def minCostConnectPoints(points: list[list[int]]) -> int:\n    n = len(points)\n    edges = []\n    for i in range(n):\n        for j in range(i + 1, n):\n            dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])\n            edges.append((dist, i, j))\n    edges.sort()\n    \n    parent = list(range(n))\n    def find(i):\n        if parent[i] == i:\n            return i\n        parent[i] = find(parent[i])\n        return parent[i]\n        \n    total_cost, edges_used = 0, 0\n    for cost, u, v in edges:\n        root_u, root_v = find(u), find(v)\n        if root_u != root_v:\n            parent[root_u] = root_v\n            total_cost += cost\n            edges_used += 1\n            if edges_used == n - 1:\n                break\n    return total_cost",
        "steps": [
          {
            "label": "Generate and sort edges",
            "note": "Calculate Manhattan distance for all point pairs and sort edges by weight.",
            "from": 2,
            "to": 8
          },
          {
            "label": "Initialize Union-Find structure",
            "note": "Set parent array where each element points to itself.",
            "from": 10,
            "to": 15
          },
          {
            "label": "Iterate edges and union components",
            "note": "Process edges sequentially; if endpoints are not connected, union them and add cost.",
            "from": 17,
            "to": 24
          },
          {
            "label": "Return total cost",
            "note": "Return total cost after n - 1 edges are added.",
            "from": 25,
            "to": 25
          }
        ]
      },
      {
        "name": "Prim's Algorithm (Min-Heap)",
        "time": "O(N^2 log N)",
        "space": "O(N^2)",
        "idea": "Start from point 0 and greedily pick the minimum weight edge that connects an unvisited point to the current MST using a min-heap.",
        "code": "import heapq\n\ndef minCostConnectPoints(points: list[list[int]]) -> int:\n    n = len(points)\n    visited = set()\n    min_heap = [(0, 0)]  # (cost, point_index)\n    total_cost = 0\n    \n    while len(visited) < n:\n        cost, u = heapq.heappop(min_heap)\n        if u in visited:\n            continue\n        visited.add(u)\n        total_cost += cost\n        \n        for v in range(n):\n            if v not in visited:\n                dist = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])\n                heapq.heappush(min_heap, (dist, v))\n                \n    return total_cost",
        "steps": [
          {
            "label": "Initialize Prim's state",
            "note": "Create min_heap containing initial tuple (0, 0) and empty visited set.",
            "from": 4,
            "to": 7
          },
          {
            "label": "Pop smallest distance node",
            "note": "Extract element from min-heap, skip if point is already in MST.",
            "from": 9,
            "to": 12
          },
          {
            "label": "Add point to MST",
            "note": "Add point to visited set and accumulate cost.",
            "from": 13,
            "to": 14
          },
          {
            "label": "Push adjacent edges",
            "note": "Calculate distance to all unvisited nodes and push into min-heap.",
            "from": 16,
            "to": 19
          },
          {
            "label": "Return result",
            "note": "Return accumulated total cost when all points are visited.",
            "from": 21,
            "to": 21
          }
        ]
      }
    ]
  },
  "reconstruct-itinerary": {
    "statement": "You are given a list of airline tickets where tickets[i] = [from_i, to_i] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it. All of the tickets belong to a man who departs from 'JFK', thus, the itinerary must begin with 'JFK'. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. You must use all the tickets once and only once.",
    "given": "a list of flight tickets [from_airport, to_airport]",
    "ret": "a list of airport codes representing the lexicographically smallest complete itinerary",
    "summary": "This problem asks for an Eulerian Path in a directed graph starting at 'JFK'. We sort destination lists lexicographically and perform a DFS with Hierholzer's algorithm.",
    "starter": "def findItinerary(tickets: list[list[str]]) -> list[str]:\n    pass",
    "tests": [
      {
        "label": "tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]",
        "inputStr": "{\"tickets\": [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]}",
        "expectedStr": "[\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]"
      },
      {
        "label": "tickets = [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]",
        "inputStr": "{\"tickets\": [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]}",
        "expectedStr": "[\"JFK\",\"ATL\",\"JFK\",\"SFO\",\"ATL\",\"SFO\"]"
      }
    ],
    "approaches": [
      {
        "name": "Backtracking DFS",
        "time": "O(E^d)",
        "space": "O(V + E)",
        "idea": "Build an adjacency list sorted lexicographically. Perform a standard backtracking DFS to find a path that consumes all tickets.",
        "code": "import collections\n\ndef findItinerary(tickets: list[list[str]]) -> list[str]:\n    adj = collections.defaultdict(list)\n    for src, dst in sorted(tickets):\n        adj[src].append(dst)\n        \n    route = [\"JFK\"]\n    total_tickets = len(tickets)\n    \n    def dfs(curr):\n        if len(route) == total_tickets + 1:\n            return True\n        if curr not in adj:\n            return False\n            \n        destinations = list(adj[curr])\n        for i, next_dest in enumerate(destinations):\n            adj[curr].pop(i)\n            route.append(next_dest)\n            if dfs(next_dest):\n                return True\n            route.pop()\n            adj[curr].insert(i, next_dest)\n        return False\n        \n    dfs(\"JFK\")\n    return route",
        "steps": [
          {
            "label": "Construct sorted graph",
            "note": "Sort tickets first to ensure destinations are processed in lexicographical order.",
            "from": 4,
            "to": 6
          },
          {
            "label": "Check base case",
            "note": "If route contains total_tickets + 1 elements, valid path found.",
            "from": 11,
            "to": 12,
            "yes": "Return True to signal completion."
          },
          {
            "label": "Backtrack choices",
            "note": "Try each available flight edge, pop from adjacency list, and recurse.",
            "from": 16,
            "to": 22
          },
          {
            "label": "Return path",
            "note": "Execute DFS starting from JFK and return reconstructed route.",
            "from": 24,
            "to": 25
          }
        ]
      },
      {
        "name": "Hierholzer's Algorithm (Hierholzer DFS)",
        "time": "O(E log E)",
        "space": "O(V + E)",
        "idea": "Sort target destinations in reverse lexicographical order to pop from the end in O(1). Traverse nodes via DFS until stuck, then post-order append nodes to result list and reverse.",
        "code": "import collections\n\ndef findItinerary(tickets: list[list[str]]) -> list[str]:\n    adj = collections.defaultdict(list)\n    for u, v in sorted(tickets, reverse=True):\n        adj[u].append(v)\n        \n    route = []\n    def dfs(airport):\n        while adj[airport]:\n            next_dest = adj[airport].pop()\n            dfs(next_dest)\n        route.append(airport)\n        \n    dfs(\"JFK\")\n    return route[::-1]",
        "steps": [
          {
            "label": "Build adjacency lists",
            "note": "Sort tickets in reverse order so the smallest string is at the end of the list for fast pop().",
            "from": 4,
            "to": 6
          },
          {
            "label": "Eulerian path DFS traversal",
            "note": "Greedily pop available destinations from current node and recursively call DFS.",
            "from": 9,
            "to": 12
          },
          {
            "label": "Post-order append",
            "note": "When a node has no outgoing edges left, append it to route.",
            "from": 13,
            "to": 13
          },
          {
            "label": "Reverse and return",
            "note": "The post-order traversal yields the Eulerian path in reverse order; reverse it before returning.",
            "from": 15,
            "to": 16
          }
        ]
      }
    ]
  },
  "swim-in-rising-water": {
    "statement": "You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j). The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares at most t. You can swim infinite distances in zero time. You must stay within the boundaries of the grid during your swim. Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).",
    "given": "a 2D integer array grid of size n x n",
    "ret": "the minimum time required to swim from (0, 0) to (n - 1, n - 1)",
    "summary": "Use Dijkstra's algorithm with a min-heap to explore grid locations, keeping track of the maximum elevation encountered along the path to reach the destination with the minimal time.",
    "starter": "class Solution:\n    def swimInWater(self, grid: list[list[int]]) -> int:",
    "tests": [
      {
        "label": "grid = [[0,2],[1,3]]",
        "inputStr": "{\"grid\": [[0, 2], [1, 3]]}",
        "expectedStr": "3"
      },
      {
        "label": "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
        "inputStr": "{\"grid\": [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]}",
        "expectedStr": "16"
      }
    ],
    "approaches": [
      {
        "name": "Binary Search + DFS",
        "time": "O(N^2 log(N^2))",
        "space": "O(N^2)",
        "idea": "Binary search for the answer T between max(grid[0][0], grid[N-1][N-1]) and N*N - 1. For each midpoint target T, run a standard DFS or BFS to see if a path exists from start to end using only cells with elevation <= T.",
        "code": "class Solution:\n    def swimInWater(self, grid: list[list[int]]) -> int:\n        n = len(grid)\n        def can_reach(t):\n            if grid[0][0] > t:\n                return False\n            visited = set([(0, 0)])\n            stack = [(0, 0)]\n            while stack:\n                r, c = stack.pop()\n                if r == n - 1 and c == n - 1:\n                    return True\n                for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                    nr, nc = r + dr, c + dc\n                    if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:\n                        if grid[nr][nc] <= t:\n                            visited.add((nr, nc))\n                            stack.append((nr, nc))\n            return False\n\n        low, high = grid[0][0], n * n - 1\n        ans = high\n        while low <= high:\n            mid = (low + high) // 2\n            if can_reach(mid):\n                ans = mid\n                high = mid - 1\n            else:\n                low = mid + 1\n        return ans",
        "steps": [
          {
            "label": "Define binary search range",
            "note": "Set low to grid[0][0] and high to n*n - 1 as upper bound.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Calculate mid point",
            "note": "Calculate mid time t = (low + high) // 2.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Run DFS check",
            "note": "Test if bottom-right can be reached in time mid using grid traversal.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Branch on feasibility",
            "note": "If reached, save answer and shrink upper bound; else grow lower bound.",
            "from": 4,
            "to": 5,
            "yes": "Path exists: ans = mid, high = mid - 1",
            "no": "Path blocked: low = mid + 1"
          },
          {
            "label": "Return minimum target time",
            "note": "Return final optimal time when binary search terminates.",
            "from": 5,
            "to": 6
          }
        ]
      },
      {
        "name": "Modified Dijkstra's Algorithm",
        "time": "O(N^2 log N)",
        "space": "O(N^2)",
        "idea": "Use a min-heap to explore path elevations greedily. Always expand the cell with the lowest water level required so far. The time to reach a neighbor is max(current_time, neighbor_elevation).",
        "code": "import heapq\n\nclass Solution:\n    def swimInWater(self, grid: list[list[int]]) -> int:\n        n = len(grid)\n        pq = [(grid[0][0], 0, 0)]\n        visited = set([(0, 0)])\n        \n        while pq:\n            t, r, c = heapq.heappop(pq)\n            if r == n - 1 and c == n - 1:\n                return t\n            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:\n                    visited.add((nr, nc))\n                    heapq.heappush(pq, (max(t, grid[nr][nc]), nr, nc))\n        return -1",
        "steps": [
          {
            "label": "Initialize Priority Queue",
            "note": "Push starting cell (grid[0][0], 0, 0) into min-heap and mark visited.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Pop lowest elevation cell",
            "note": "Pop (t, r, c) with the smallest required water elevation.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Check destination",
            "note": "If reached (n-1, n-1), return current max water elevation t.",
            "from": 3,
            "to": 4,
            "yes": "Target cell popped: return t",
            "no": "Continue expanding adjacent neighbors"
          },
          {
            "label": "Explore 4 directions",
            "note": "For valid unvisited neighbors, compute max elevation needed and push into PQ.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Loop until reached",
            "note": "Repeat queue popping and push steps until bottom-right is reached.",
            "from": 5,
            "to": 2
          }
        ]
      }
    ]
  },
  "cheapest-flights-within-k-stops": {
    "statement": "There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from_i, to_i, price_i] indicates that there is a flight from city from_i to city to_i with cost price_i. You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.",
    "given": "n cities, flights array where flights[i] = [from, to, price], src, dst, and k",
    "ret": "the cheapest price from src to dst with at most k stops, or -1 if no such route exists",
    "summary": "Use the Bellman-Ford dynamic programming approach relaxed exactly K+1 times to find the minimum distance within K stops.",
    "starter": "class Solution:\n    def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:",
    "tests": [
      {
        "label": "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
        "inputStr": "{\"n\": 4, \"flights\": [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], \"src\": 0, \"dst\": 3, \"k\": 1}",
        "expectedStr": "700"
      },
      {
        "label": "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        "inputStr": "{\"n\": 3, \"flights\": [[0, 1, 100], [1, 2, 100], [0, 2, 500]], \"src\": 0, \"dst\": 2, \"k\": 1}",
        "expectedStr": "200"
      },
      {
        "label": "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0",
        "inputStr": "{\"n\": 3, \"flights\": [[0, 1, 100], [1, 2, 100], [0, 2, 500]], \"src\": 0, \"dst\": 2, \"k\": 0}",
        "expectedStr": "500"
      }
    ],
    "approaches": [
      {
        "name": "Bellman-Ford / BFS Relaxations",
        "time": "O(K * E)",
        "space": "O(V)",
        "idea": "Maintain a distance array initialized to infinity except for the source city. Run k + 1 iterations. In each iteration, copy the distances and relax all edges based on the distances from the previous iteration to prevent using more stops than allowed.",
        "code": "class Solution:\n    def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:\n        prices = [float('inf')] * n\n        prices[src] = 0\n        \n        for _ in range(k + 1):\n            tmp_prices = list(prices)\n            for u, v, p in flights:\n                if prices[u] == float('inf'):\n                    continue\n                if prices[u] + p < tmp_prices[v]:\n                    tmp_prices[v] = prices[u] + p\n            prices = tmp_prices\n            \n        return prices[dst] if prices[dst] != float('inf') else -1",
        "steps": [
          {
            "label": "Initialize distances",
            "note": "Set prices[src] = 0 and all other cities to infinity.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Outer loop k + 1 times",
            "note": "Loop k + 1 times to allow up to k stops (k + 1 edges).",
            "from": 2,
            "to": 3
          },
          {
            "label": "Copy price state",
            "note": "Create tmp_prices copy so updates rely only on prices from the previous stop count.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Relax edges",
            "note": "Iterate all flights (u, v, p) and update tmp_prices[v] if prices[u] + p is lower.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Update prices array",
            "note": "Replace prices with tmp_prices after processing all edges.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Return result",
            "note": "Return prices[dst] if reachable, otherwise -1.",
            "from": 6,
            "to": 7
          }
        ]
      },
      {
        "name": "Modified Dijkstra Algorithm",
        "time": "O(E * K log(E * K))",
        "space": "O(V * K)",
        "idea": "Use a Priority Queue storing (cost, node, stops). Keep track of minimum stops required for each node to prune unpromising paths.",
        "code": "import heapq\nfrom collections import defaultdict\n\nclass Solution:\n    def findCheapestPrice(self, n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:\n        adj = defaultdict(list)\n        for u, v, w in flights:\n            adj[u].append((v, w))\n            \n        pq = [(0, src, 0)]  # cost, current_node, stops\n        stops_arr = [float('inf')] * n\n        \n        while pq:\n            cost, u, stops = heapq.heappop(pq)\n            if u == dst:\n                return cost\n            if stops > k or stops >= stops_arr[u]:\n                continue\n            stops_arr[u] = stops\n            for v, w in adj[u]:\n                heapq.heappush(pq, (cost + w, v, stops + 1))\n                \n        return -1",
        "steps": [
          {
            "label": "Build Adjacency Graph",
            "note": "Build graph mapping city -> list of (neighbor, price).",
            "from": 1,
            "to": 2
          },
          {
            "label": "Initialize Priority Queue",
            "note": "Push (cost=0, src, stops=0) into min-heap.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Pop cheapest state",
            "note": "Extract element with lowest cost from PQ.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Check Destination",
            "note": "If destination reached first, return its total cost.",
            "from": 4,
            "to": 5,
            "yes": "Target found: return cost",
            "no": "Continue exploring neighbors"
          },
          {
            "label": "Prune by stops",
            "note": "Skip if stops > k or if we already visited this city with fewer stops.",
            "from": 5,
            "to": 6
          },
          {
            "label": "Push neighbors to PQ",
            "note": "Push all valid outgoing neighbors with incremented stops and updated cost.",
            "from": 6,
            "to": 3
          }
        ]
      }
    ]
  },
  "min-cost-climbing-stairs": {
    "statement": "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.",
    "given": "an integer array cost where cost[i] is the cost of ith step on a staircase",
    "ret": "the minimum cost to reach the top of the floor",
    "summary": "Use dynamic programming where the cost to reach step i is cost[i] + min(dp[i-1], dp[i-2]).",
    "starter": "class Solution:\n    def minCostClimbingStairs(self, cost: list[int]) -> int:",
    "tests": [
      {
        "label": "cost = [10,15,20]",
        "inputStr": "{\"cost\": [10, 15, 20]}",
        "expectedStr": "15"
      },
      {
        "label": "cost = [1,100,1,1,1,100,1,1,100,1]",
        "inputStr": "{\"cost\": [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]}",
        "expectedStr": "6"
      }
    ],
    "approaches": [
      {
        "name": "Top-Down DP with Memoization",
        "time": "O(N)",
        "space": "O(N)",
        "idea": "Define a recursive helper min_cost(i) that calculates the minimum cost to reach the top starting from index i. Store results in a memoization dictionary to avoid redundant computations.",
        "code": "class Solution:\n    def minCostClimbingStairs(self, cost: list[int]) -> int:\n        memo = {}\n        def dp(i):\n            if i >= len(cost):\n                return 0\n            if i in memo:\n                return memo[i]\n            memo[i] = cost[i] + min(dp(i + 1), dp(i + 2))\n            return memo[i]\n        \n        return min(dp(0), dp(1))",
        "steps": [
          {
            "label": "Initialize memoization table",
            "note": "Create hash map memo to cache completed step calculations.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Base case check",
            "note": "If step index i >= len(cost), cost is 0 (already reached the top).",
            "from": 2,
            "to": 3,
            "yes": "Return 0",
            "no": "Proceed to cache check / recurrence"
          },
          {
            "label": "Recurrence calculation",
            "note": "Compute current step cost plus min of jumping 1 step or 2 steps.",
            "from": 3,
            "to": 4
          },
          {
            "label": "Return top entry point min",
            "note": "Return min(dp(0), dp(1)) to decide starting position.",
            "from": 4,
            "to": 5
          }
        ]
      },
      {
        "name": "Bottom-Up DP (Constant Space)",
        "time": "O(N)",
        "space": "O(1)",
        "idea": "Iterate backwards through the array. Keep two variables representing the minimum cost to reach the top from the next two steps, updating them dynamically.",
        "code": "class Solution:\n    def minCostClimbingStairs(self, cost: list[int]) -> int:\n        first, second = 0, 0\n        for i in range(len(cost) - 1, -1, -1):\n            current = cost[i] + min(first, second)\n            second = first\n            first = current\n        return min(first, second)",
        "steps": [
          {
            "label": "Initialize DP variables",
            "note": "Set first = 0, second = 0 representing cost beyond the last step.",
            "from": 1,
            "to": 2
          },
          {
            "label": "Iterate backwards",
            "note": "Loop through cost array from index n-1 down to 0.",
            "from": 2,
            "to": 3
          },
          {
            "label": "Calculate current step optimal cost",
            "note": "Compute current step cost + min(first, second).",
            "from": 3,
            "to": 4
          },
          {
            "label": "Shift state variables",
            "note": "Set second = first, and first = current step optimal cost.",
            "from": 4,
            "to": 5
          },
          {
            "label": "Return overall minimum cost",
            "note": "Return min(first, second) which holds optimal solution from step 0 and 1.",
            "from": 5,
            "to": 6
          }
        ]
      }
    ]
  },
  "partition-equal-subset-sum": {
    "statement": "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
    "given": "an array of positive integers nums",
    "ret": "true if nums can be partitioned into two equal sum subsets, false otherwise",
    "summary": "Check if the total sum is even; if so, reduce the problem to 0/1 Knapsack to find if a subset sums to total_sum // 2 using dynamic programming.",
    "starter": "class Solution:\n    def canPartition(self, nums: list[int]) -> bool:\n        pass",
    "tests": [
      {
        "label": "nums = [1,5,11,5]",
        "inputStr": "{\"nums\": [1, 5, 11, 5]}",
        "expectedStr": "true"
      },
      {
        "label": "nums = [1,2,3,5]",
        "inputStr": "{\"nums\": [1, 2, 3, 5]}",
        "expectedStr": "false"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force (Recursive Backtracking)",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Explore all subsets recursively. At each element, choose either to include it in the subset target or exclude it.",
        "code": "class Solution:\n    def canPartition(self, nums: list[int]) -> bool:\n        total = sum(nums)\n        if total % 2 != 0:\n            return False\n        target = total // 2\n        \n        def dfs(i, current_sum):\n            if current_sum == target:\n                return True\n            if i >= len(nums) or current_sum > target:\n                return False\n            return dfs(i + 1, current_sum + nums[i]) or dfs(i + 1, current_sum)\n        \n        return dfs(0, 0)",
        "steps": [
          {
            "label": "check sum parity",
            "note": "If total sum is odd, equal partition is impossible.",
            "from": 3,
            "to": 5,
            "yes": "Return False directly if sum is odd.",
            "no": "Proceed to calculate half target."
          },
          {
            "label": "set target",
            "note": "Target for each subset is total sum divided by 2.",
            "from": 6,
            "to": 6
          },
          {
            "label": "base case match",
            "note": "Check if current sum equals target.",
            "from": 9,
            "to": 10,
            "yes": "Found valid subset, return True."
          },
          {
            "label": "base case invalid",
            "note": "Out of bounds or current sum exceeded target.",
            "from": 11,
            "to": 12,
            "yes": "Return False for this recursion path."
          },
          {
            "label": "recursive branching",
            "note": "Branch into including nums[i] vs excluding nums[i].",
            "from": 13,
            "to": 13
          }
        ]
      },
      {
        "name": "Optimal DP (Set Iteration)",
        "time": "O(n * target)",
        "space": "O(target)",
        "idea": "Use a hash set to maintain all reachable subset sums. Iterate through each number in nums and generate new reachable sums.",
        "code": "class Solution:\n    def canPartition(self, nums: list[int]) -> bool:\n        total = sum(nums)\n        if total % 2 != 0:\n            return False\n        target = total // 2\n        dp = {0}\n        for num in nums:\n            next_dp = set()\n            for t in dp:\n                if t + num == target:\n                    return True\n                next_dp.add(t + num)\n                next_dp.add(t)\n            dp = next_dp\n        return target in dp",
        "steps": [
          {
            "label": "check parity & compute target",
            "note": "Verify total sum is even and divide by 2.",
            "from": 3,
            "to": 6
          },
          {
            "label": "initialize DP set",
            "note": "Start with base sum 0 in the set.",
            "from": 7,
            "to": 7
          },
          {
            "label": "iterate numbers",
            "note": "Process each element in nums one by one.",
            "from": 8,
            "to": 8
          },
          {
            "label": "check target reachability",
            "note": "Early exit if adding num reaches target.",
            "from": 11,
            "to": 12,
            "yes": "Return True immediately."
          },
          {
            "label": "update sum set",
            "note": "Include both new sum (t + num) and existing sum (t).",
            "from": 13,
            "to": 15
          }
        ]
      }
    ]
  },
  "best-time-to-buy-and-sell-stock-with-cooldown": {
    "statement": "You are given an array prices where prices[i] is the price of a given stock on the i-th day. Find the maximum profit you can achieve. You may complete as many transactions as you like with the restriction that after you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).",
    "given": "an array of stock prices prices",
    "ret": "the maximum profit achievable under the transaction rules",
    "summary": "Track three state variables for each day: holding stock, sold/cooldown, and reset/ready to buy.",
    "starter": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "prices = [1,2,3,0,2]",
        "inputStr": "{\"prices\": [1, 2, 3, 0, 2]}",
        "expectedStr": "3"
      },
      {
        "label": "prices = [1]",
        "inputStr": "{\"prices\": [1]}",
        "expectedStr": "0"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force (Recursive DFS)",
        "time": "O(2^n)",
        "space": "O(n)",
        "idea": "Recursively decide at each day whether to Buy, Sell, or Cooldown (skip day).",
        "code": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        def dfs(i, buying):\n            if i >= len(prices):\n                return 0\n            if buying:\n                buy = dfs(i + 1, False) - prices[i]\n                cooldown = dfs(i + 1, True)\n                return max(buy, cooldown)\n            else:\n                sell = dfs(i + 2, True) + prices[i]\n                cooldown = dfs(i + 1, False)\n                return max(sell, cooldown)\n        return dfs(0, True)",
        "steps": [
          {
            "label": "base case check",
            "note": "If index goes past prices array, profit is 0.",
            "from": 4,
            "to": 5
          },
          {
            "label": "buying decision state",
            "note": "When in buying state, compare buying now vs doing nothing.",
            "from": 6,
            "to": 9
          },
          {
            "label": "selling decision state",
            "note": "When in selling state, selling forces i+2 jump for 1-day cooldown.",
            "from": 10,
            "to": 13
          },
          {
            "label": "start recursion",
            "note": "Begin at day 0 in buying state.",
            "from": 14,
            "to": 14
          }
        ]
      },
      {
        "name": "Optimal State Machine DP",
        "time": "O(n)",
        "space": "O(1)",
        "idea": "Maintain three state DP variables: held (holding stock), sold (just sold today), and cooldown (ready to buy). Update state values iteratively.",
        "code": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        if not prices:\n            return 0\n        held = -float('inf')\n        sold = 0\n        cooldown = 0\n        for price in prices:\n            prev_sold = sold\n            sold = held + price\n            held = max(held, cooldown - price)\n            cooldown = max(cooldown, prev_sold)\n        return max(sold, cooldown)",
        "steps": [
          {
            "label": "check empty prices",
            "note": "If no prices exist, profit is 0.",
            "from": 3,
            "to": 4
          },
          {
            "label": "initialize states",
            "note": "held = -infinity, sold = 0, cooldown = 0.",
            "from": 5,
            "to": 7
          },
          {
            "label": "calculate sold state",
            "note": "New sold state value is previous held value + price.",
            "from": 9,
            "to": 10
          },
          {
            "label": "calculate held state",
            "note": "Max of keeping held stock or buying stock today after cooldown.",
            "from": 11,
            "to": 11
          },
          {
            "label": "calculate cooldown state",
            "note": "Max of previous cooldown state or transitioning from yesterday's sold.",
            "from": 12,
            "to": 12
          },
          {
            "label": "return max profit",
            "note": "Max total profit is either in sold state or ready/cooldown state.",
            "from": 13,
            "to": 13
          }
        ]
      }
    ]
  },
  "coin-change-ii": {
    "statement": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. You may assume that you have an infinite number of each kind of coin.",
    "given": "an integer amount and an array of integers coins",
    "ret": "the number of combinations that make up that amount",
    "summary": "Solve using 1D unbounded knapsack dynamic programming where dp[i] represents combinations to reach amount i, iterating outer loop over coins to avoid permutation duplicates.",
    "starter": "class Solution:\n    def change(self, amount: int, coins: list[int]) -> int:\n        pass",
    "tests": [
      {
        "label": "amount = 5, coins = [1,2,5]",
        "inputStr": "{\"amount\": 5, \"coins\": [1, 2, 5]}",
        "expectedStr": "4"
      },
      {
        "label": "amount = 3, coins = [2]",
        "inputStr": "{\"amount\": 3, \"coins\": [2]}",
        "expectedStr": "0"
      },
      {
        "label": "amount = 10, coins = [10]",
        "inputStr": "{\"amount\": 10, \"coins\": [10]}",
        "expectedStr": "1"
      }
    ],
    "approaches": [
      {
        "name": "Brute Force (DFS Backtracking)",
        "time": "O(2^(amount / min_coin))",
        "space": "O(amount / min_coin)",
        "idea": "Recursively explore taking current coin or skipping to next coin.",
        "code": "class Solution:\n    def change(self, amount: int, coins: list[int]) -> int:\n        def dfs(i, rem):\n            if rem == 0:\n                return 1\n            if rem < 0 or i >= len(coins):\n                return 0\n            return dfs(i, rem - coins[i]) + dfs(i + 1, rem)\n        return dfs(0, amount)",
        "steps": [
          {
            "label": "exact target match",
            "note": "Remaining amount reached 0, count as 1 valid combination.",
            "from": 4,
            "to": 5,
            "yes": "Return 1."
          },
          {
            "label": "out of bounds check",
            "note": "Remaining amount < 0 or coin index out of bounds.",
            "from": 6,
            "to": 7,
            "yes": "Return 0."
          },
          {
            "label": "recursive step",
            "note": "Sum combinations of reusing current coin + skipping current coin.",
            "from": 8,
            "to": 8
          },
          {
            "label": "entry point",
            "note": "Start DFS from coin index 0 and target amount.",
            "from": 9,
            "to": 9
          }
        ]
      },
      {
        "name": "Optimal DP (1D Unbounded Knapsack)",
        "time": "O(n * amount)",
        "space": "O(amount)",
        "idea": "Build DP table dp of size amount + 1. Outer loop over coins ensures combinations (not permutations) are counted.",
        "code": "class Solution:\n    def change(self, amount: int, coins: list[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n        for coin in coins:\n            for i in range(coin, amount + 1):\n                dp[i] += dp[i - coin]\n        return dp[amount]",
        "steps": [
          {
            "label": "initialize DP array",
            "note": "Create dp table of size amount + 1 populated with 0s.",
            "from": 3,
            "to": 3
          },
          {
            "label": "set base case",
            "note": "dp[0] = 1 because there is 1 way to make amount 0 (using no coins).",
            "from": 4,
            "to": 4
          },
          {
            "label": "outer coin loop",
            "note": "Iterate through each coin denomination.",
            "from": 5,
            "to": 5
          },
          {
            "label": "inner amount loop",
            "note": "Update dp values from coin up to target amount.",
            "from": 6,
            "to": 7
          },
          {
            "label": "return result",
            "note": "dp[amount] holds the total combinations.",
            "from": 8,
            "to": 8
          }
        ]
      }
    ]
  }
};
