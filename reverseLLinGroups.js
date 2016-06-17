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

function basicReverse(list) {
  var listNode = list.head;
  var nextNode = listNode.next;
  var tempNode = listNode;
  // for the 1st item set .next to null
  listNode.next = null;
  list.tail = listNode;
  // for each subsequent item
  while (nextNode) {
    var loopTemp = nextNode.next;
    // set .next to the previous item
    nextNode.next = tempNode;
    tempNode = nextNode;
    nextNode = loopTemp;
  }
  list.head = tempNode;
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
    var newNode = new ListNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  },
  append: function(val) {
    // attach val at end of list (or head if no nodes)
    this.size++;
    var newNode = new ListNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
  },
  getLength: function() {
    // return this.size
    return this.size;
  },
  removeFirst: function() {
    // remove and return the first item in the list (or null if no items)
    if (this.head === null) { return; }
    if (this.size === 1) {
      this.tail = null;
    }
    var temp = this.head;
    this.head = this.head.next;
    this.size--;
    return temp.val;
  },
  removeLast: function() {
    // remove and return the last item in the list (or null if no items)
    if (this.tail === null) { return; }
    var temp = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return temp.val;
    }
    var newTail = this.head;
    for (var i = this.size - 2; i > 0; i--) {
      newTail = newTail.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.size--;
    return temp.val;
  },
  print: function() {
    var temp = this.head;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  },
  appendNode: function(node) {
    this.size++;
    if (!(node instanceof ListNode)) {
    node = new ListNode(node);
    }
    if (this.head === null) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = this.tail.next;
  }
}

// 1->2->3  >>>  3->2->1
var simpleTest = new LinkedList();
simpleTest.append(3);
simpleTest.prepend(2);
simpleTest.prepend(1);
simpleTest.prepend(0);
simpleTest.append(4);
simpleTest.print();
basicReverse(simpleTest);
console.log('---');
simpleTest.print();
console.log(simpleTest);
