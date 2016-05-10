/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  
};

// Test:

function ListNode(val) {
  this.val = val;
  this.next = null;
};

var list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

var list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = ListNode(6);

console.log(mergeTwoLists(list1, list2)); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
