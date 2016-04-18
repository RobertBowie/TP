/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  var results = [];
  var depth = 1;
  var maxDepth = 0;
  function treeWalker(node, depth) {
    if (node === undefined) { return; }
    if (maxDepth < depth) {
      results.push(node.val);
      maxDepth = depth;
    }
    if (node.right) {
      treeWalker(node.right, depth + 1);
    }
    if (node.left) {
      treeWalker(node.left, depth + 1);
    }
    
  }
  treeWalker(root, depth);
  return results;
};


// Test it

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var testTree = new TreeNode(1);
testTree.right = new TreeNode(3);
testTree.left = new TreeNode(2);
testTree.left.right = new TreeNode(5);
testTree.right.right = new TreeNode(4);

console.log(rightSideView(testTree));
