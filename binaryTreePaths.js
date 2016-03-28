/*
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
  var allPaths = [];
  function treeWalker(node, pathSoFar){
    var path = pathSoFar || '';
    // if we are on a leaf return the path
    if (!node.left && !node.right) {
      path += node.val;
      allPaths.push(path);
      return;
    }
    path += node.val + ' -> ';
    if (node.left) {
      treeWalker(node.left, path);
    }
    if (node.right) {
      treeWalker(node.right, path);
    }
  }
  treeWalker(root);
  return allPaths;
};
