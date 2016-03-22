// Flatten a binary search tree to a linked list, in place:

// Output: Flattened tree that resembles a linked list

// Input: Binary tree

// Constraints: In place

// I/O: 

//     {val: 1, right: {val: 3, right: null, left: null}, left: {val: 2, right: null, left: null}}
//  -> {val: 1, right: {val: 2, right: {val: 3, right: null, left: null}, left: null}, left: null}

/*

       1
      / \
     2   5
    / \ / \
   3  4 6  7

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

function flattenTree(node) {
  // if a node has no children -> return
  if (!hasAChild(node)) { return };
  // recurse to the second furthest .left
  if (node.left && node.left.left !== null) {
    flattenTree(node.left);
  }
  // save the current .right and its children for transplant
  var oldRight = node.right;
  // overwrite the current .right
  node.right = node.left;
  // clear node.left
  node.left = null;
  // add oldRight to the end of the .rights
  if (oldRight !== null) {
    appendToRightmost(oldRight, node);
    flattenTree(oldRight);
  }
};

// ---------------------------------------------
// Helper Functions:
// ---------------------------------------------

function appendToRightmost(toAppend, prevNode) {
  var tempNode = prevNode;
  if (tempNode.right === null) {
    tempNode.right = toAppend;
  } else {
    tempNode = tempNode.right;
    appendToRightmost(toAppend, tempNode);
  }
};

function hasAChild(node) {
  return node && node.right !== null || node.left !== null;
};

// ---------------------------------------------
// Very basic pseudo-classical Tree for testing
// ---------------------------------------------

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

function Tree(val){
  this.root = new TreeNode(val);
};


Tree.prototype = {
  contructor: Tree,
  addChild: function(val, node) {
    node = node || this.root;
    var child = new TreeNode(val);
    if (val < node.val) {
      if (node.left === null) {
        node.left = child;
        return;
      }
      this.addChild(val, node.left);
    } else {
      if (node.right === null) {
        node.right = child;
        return;
      }
      this.addChild(val, node.right);
    }
  }
};


// {root: {val: 1, right: {val: 5, right: {val: 7, right: null, left: null}, left: {val: 6, right: null, left: null}}, left: {val: 2, right: {val: 4, right: null, left: null}, left: {val: 3, right: null, left: null}}}};
