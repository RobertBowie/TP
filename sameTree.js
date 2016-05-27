/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // if the trees are both null they are the same
  if (p === null && q === null) {
  return true;
  // else if both trees exist and have values
  } else if ((!!p && !!q) && (p.val !== undefined && q.val !== undefined)) {
    // if the values are equal
    if (p.val === q.val) {
      // recurse
      if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) { return true; }
    }
  }
  // else the trees are different
  return false;
};
