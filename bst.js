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
    // if root !== null

      // if root.val === val 

        // return (node || true)

      // else

        // if val < root.val

          // check the left subtree

        // if val > root.val

          // check the right subtree

  },
  insert: function (val, node) {
    // check where to insert and make a new TreeNode there

    // if root === null
    if (this.root === null) {
      // root = new TreeNode(val)
      this.root = new TreeNode(val);
      return;
    }
    node = node || this.root;
    // throw an error in case of duplicate
    if (node.val === val) { throw new Error("Value is already in BST"); }
    // if val < root.val
    if (val < node.val) {
      // if root.left === null
      if (node.left === null) {
        // insert new TreeNode(val)
        node.left = new TreeNode(val);
        return;
      } else { // else
        // call root.left.insert(val)
        this.insert(val, node.left);
        return;
      }
    }
    // if val > root.val
    if (val > node.val) {
      // if root.right === null
      if (node.right === null) {
        // insert new TreeNode(val)
        node.right = new TreeNode(val);
        return;
      } else { // else
        // call root.right.insert(val)
        this.insert(val, node.right);
        return;
      }
    }
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
testBST.insert(4);
console.log(testBST); // {root: {val: 5, right: null, left: {val: 4, left: null, right: null}}}
testBST.insert(6);
console.log(testBST); // {root: {val: 5, right: {val: 6, left: null, right: null}, left: {val: 4, left: null, right: null}}}
testBST.insert(7);
console.log(testBST.root.right); // {val: 6, right: {val: 7, left: null, right: null}, left: null}
