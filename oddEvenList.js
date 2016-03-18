/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
};

var oddEvenList = function(head) {
  // make sure we have valid input
  if (!head) { return null }
  // init vars for odd and even tracking
  var odd = head;
  var even = head.next;
  var secondHalf = even;
  // go though the list until we hit null
  while (even !== null && even.next !== null) {
    //set odd.nexts to odd.next.next
    odd.next = odd.next.next;
    // set even.nexts to even.next.next
    even.next = even.next.next;
    // move odd and even pointers
    odd = odd.next;
    even = even.next;
  }
  odd.next = secondHalf;
  return head;
};

function llLogger(head) {
  var pointer = head;
  while (pointer.next) {
    console.log(pointer.val);
    pointer = pointer.next;
  }
  console.log(pointer.val);
};

var testHead = new ListNode(1);
testHead.next = new ListNode(2);
testHead.next.next = new ListNode(3);
testHead.next.next.next = new ListNode(4);
testHead.next.next.next.next = new ListNode(5);
testHead.next.next.next.next.next = new ListNode(6);
llLogger(testHead);
console.log('--------------------------');
oddEvenList(testHead);
llLogger(testHead);
