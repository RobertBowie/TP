/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!(root instanceof TreeNode)) { return 0; }
  var maxDepth = 1;
  treeWalker(root, 1);
  function treeWalker(node, depth) {
    // base case:
    if (node.left === null && node.right === null) {
      if (depth > maxDepth) {
        maxDepth = depth;
      }
      return;
    }
    // recurse
    if (node.left) {
      treeWalker(node.left, depth + 1);
    }
    if (node.right) {
      treeWalker(node.right, depth + 1);
    }
  };
  return maxDepth;
};

// Test:

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var test1 = new TreeNode(1);
test1.right = new TreeNode(3);
test1.left = new TreeNode(2);
test1.left.left = new TreeNode(4);
test1.left.left.right = new TreeNode(7);

console.log(maxDepth(test1)); // 4

var test2;

console.log(maxDepth(test2));
