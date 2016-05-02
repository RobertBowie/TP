/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head, leftSide) {
  // base case
  if (head === undefined || head === null || head.val === null) { return; }
  // iterate through (using two pointers?) in order to find the middle of the list
  var pointer0;
  var pointer1 = head;
  var pointer2 = head;
  var left = leftSide || false;
  while (pointer2.next !== null && pointer2.next.next !== null) {
    pointer0 = pointer1;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  // handle if it is the left side
  if (pointer2.next !== null && left) {
    pointer0 = pointer1;
    pointer1 = pointer1.next;
  }
  // start building bst using the mid value (pointer1) as the root
  var currBstNode = new TreeNode(pointer1.val);
  console.log(pointer1);
  pointer1.val = null;
  // set pointer to midpoint to null to split the list
  if (pointer0) {
    pointer0.next = null;
  }
  // set .left and .right of root to sortedListToBST() of each half list
  currBstNode.left = sortedListToBST(head, true);
  currBstNode.right = sortedListToBST(pointer1.next);
  return currBstNode;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

// Testing

function ListNode(val) {
    this.val = val;
    this.next = null;
};

// 1 -> 2 -> 3 -> 4 -> 5
var testList = new ListNode(1);
testList.next = new ListNode(2);
testList.next.next = new ListNode(3);
testList.next.next.next = new ListNode(4);
testList.next.next.next.next = new ListNode(5);
testList.next.next.next.next.next = new ListNode(6);
testList.next.next.next.next.next.next = new ListNode(7);

/*
            1
             \
              2
               \
                3
                 \
                  4
                   \
                    5
                     \
                      6
                       \
                        7
*/

/*
            4
           / \
          2   6
         /\   /\
        1  3 5  7
*/

console.log(sortedListToBST(testList));
