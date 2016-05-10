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
  var mergedList;
  // Handle bad input
  if (l1) {
    mergedList = new ListNode(l1.val);
    if (l2) {
      mergedList.next = new ListNode(l2.val);
    } else { // missing l2
      listWalker(l1.next, null, mergedList);
      return mergedList;
    }
  } else if (l2) {
    mergedList = new ListNode(l2.val)
    if (!l1) { // missing l1
      listWalker(null, l2.next, mergedList);
      return mergedList;
    }
  }
  var l1next = l1 ? l1.next : null;
  var l2next = l2 ? l2.next : null;
  listWalker(l1next, l2next, mergedList.next);

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
  var outputString = '';
  while (node !== null) {
    outputString += node.val;
    node = node.next;
    if (node) {
      outputString += ' -> ';
    }
  }
  console.log(outputString);
  console.log('------------------------');
};

var list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

var list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

listLog(mergeTwoLists(list1, list2)); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

var list3 = new ListNode(1);
list3.next = new ListNode(3);
list3.next.next = new ListNode(5);

var list4 = new ListNode(2);

listLog(mergeTwoLists(list3, list4)); // 1 -> 2 -> 3 -> 5

var list5 = new ListNode(10);
var list6 = new ListNode(4);

listLog(mergeTwoLists(list5, list6)); // 10 -> 4

var list7 = new ListNode(1);
list7.next = new ListNode(2);
list7.next.next = new ListNode(3);
list7.next.next.next = new ListNode(4);
list7.next.next.next.next = new ListNode(5);

var list8 = null;

listLog(mergeTwoLists(list7, list8)); // 1 -> 2 -> 3 -> 4 -> 5

var list9 = new ListNode(1);
list9.next = new ListNode(2);
list9.next.next = new ListNode(3);
list9.next.next.next = new ListNode(4);
list9.next.next.next.next = new ListNode(5);9
var list10 = null;

listLog(mergeTwoLists(list10, list9)); // 1 -> 2 -> 3 -> 4 -> 5
