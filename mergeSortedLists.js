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
  var mergedList = new ListNode(l1.val);
  mergedList.next = new ListNode(l2.val);
  var listEnd = mergedList.next;

  listWalker(l1.next, l2.next, listEnd);

  function listWalker(l1, l2, endNode) {
    // base case: we have exhausted both lists
    if (l1 === null && l2 === null) {
      return;
    }
    // if we still have l1 items
    if (l1) {
      // add one to mergedList
      endNode.next = new ListNode(l1.val);
      endNode = endNode.next;
    }
    // if we still have l2 items
    if (l2) {
      // add one to mergedList
      endNode.next = new ListNode(l2.val);
      endNode = endNode.next;
    }
    // recurse sending through l1.next and l2.next or null and new endNode
    var listOneNext = l1 === null ? null : l1.next;
    var listTwoNext = l2 === null ? null : l2.next;
    listWalker(listOneNext, listTwoNext, endNode);
  };

  return mergedList;

};

// Test:

function ListNode(val) {
  this.val = val;
  this.next = null;
};

function listLog(node) {
  while (node !== null) {
    console.log(node.val);
    node = node.next;
  }
};

var list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

var list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

listLog(mergeTwoLists(list1, list2)); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
