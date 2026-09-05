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
  }
};
