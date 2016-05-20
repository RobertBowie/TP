/*
Implement a binary search tree.  Lookup, insert and delete. (print?)
All vals to the left are lesser.
All vals to the right are greater.

Add functionality. (AVL, Red-Black etc.)
*/

TreeNode = function (val) {
  this.val = val;
  this.right = this.left = null;
};

BST = function () {
  this.root = null;
};

BST.prototype = {
  constructor: BST,
  lookup: function (val) {
    // recurse through the tree and return the node with val (or false?)
  },
  insert: function (val) {
    // check where to insert and make a new TreeNode there
  },
  delete: function (val) {
    // use lookup to find if val is in tree and delete
  }
}

// Test:
var testBST = new BST;
console.log(testBST); // {root: null}
testBST.insert(5);
console.log(testBST); // {root: {val: 5, right: null, left: null}}
