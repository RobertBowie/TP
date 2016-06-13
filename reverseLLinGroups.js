/*
Reverse a Linked List in groups of given size
Given a linked list, write a function to reverse every k nodes (where k is an input to the function).

Example:
Inputs:  1->2->3->4->5->6->7->8->NULL and k = 3 
Output:  3->2->1->6->5->4->8->7->NULL. 

Inputs:   1->2->3->4->5->6->7->8->NULL and k = 5
Output:  5->4->3->2->1->8->7->6->NULL. 
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function reverseInGroups(listNode, k) {
  
};

function basicReverse(listNode) {
  
};

// Test
function ListNode(val) {
  this.val = val;
  this.next = null;
};

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

LinkedList.prototype = {
  constructor: LinkedList,
  prepend: function(val) {
    // insert the val at the start of the list (or head if no nodes)

  },
  append: function(val) {
    // attach val at end of list (or head if no nodes)

  },
  getLength: function() {
    // return this.size

  },
  removeFirst: function() {
    // remove and return the first item in the list (or null if no items)

  },
  removeLast: function() {
    // remove and return the last item in the list (or null if no items)

  },
  print: function() {
    // console.log the elements of the list
  }
}
// 1->2->3  >>>  3->2->1
var simpleTest = new LinkedList();
simpleTest.append(2);
simpleTest.append(3);
simpleTest.print();
basicReverse(simpleTest);
simpleTest.print();
