//  Flatten a binary search tree to a linked list, in place:

// Output: flattened tree

// Input: Binary tree

// Constraints: in place

// Edge Cases: 

//     {val: 1, right: null, left: null}  ->  {val: 1, right: null, left: null}

//     {val: 1, right: {val: 3, right: null, left: null}, left: {val: 2, right: null, left: null}}
//  -> {val: 1, right: {val: 2, right: {val: 3, right: null, left: null}, left: null}, left: null}
/*
       1
      /\
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

// given the root node, and optional child node (node.right)

// set temp var to curr right node
// set temp var to curr left node

// Base case:  when both r&l are null and [there are no other nodes the current level]

// set left prop to null

// set right to tempLeft

// recurse: pass in each child

*/

function flattenTree(node) {
  if (!hasAChild(node)) { return };
  var oldRight = node.right;
  // if node.left.left is null
  if (node.left && node.left.left === null) {
    // set node.right = node.left
    node.right = node.left;
    // clear node.left
    node.left = null;
    // node.right.right = oldRight
    node.right.right = oldRight;
  }
  // recurse
  flattenTree(node.right);
};

function hasAChild(node) {
  return node.right || node.left;
};

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


// {val: 1, right: {val: 3, right: null, left: null}, left: {val: 2, right: null, left: null}};
var testTree = new Tree(2);
testTree.addChild(1);
testTree.addChild(3);
console.log(testTree);
flattenTree(testTree.root);
console.log(testTree.root);