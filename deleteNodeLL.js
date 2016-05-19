/*
Write a function to delete a node (except the tail) in a singly
linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given
the third node with value 3, the linked list should become 1 -> 2 -> 4
after calling your function.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // if there is a next value
  if (node.next !== null) {
    // overwrite curr value with next
    node.val = node.next.val;
    node.next = node.next.next;
  }
};

// Test:
function ListNode(val) {
  this.val = val;
  this.next = null;
};

var testList = new ListNode(0);
testList.next = new ListNode(1);
deleteNode(testList);
console.log(testList);
