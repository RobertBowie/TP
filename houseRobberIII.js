/*
The thief has found himself a new place for his thievery again.
There is only one entrance to this area, called the "root".
Besides the root, each house has one and only one parent house.
After a tour, the smart thief realized that "these houses form
a binary tree". The police will be contacted if two directly-linked
houses are broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
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
 * @return {number}
 */
var rob = function(root) {
  // if root === null return 0
  if (root === null) { return 0; }
  var currVal = 0;
  // if (left child)
  if (root.left) {
    // add sum of robbed children of root.left to currVal
    currVal += rob(root.left.left) + rob(root.left.right);
  }
  // if (right child)
  if (root.right) {
    // add sum of robbed children of root.right to currVal
    currVal += rob(root.right.left) + rob(root.right.right);
  }
  // return the greater of root.val + currVal and the sum of robbing roots children
  return Math.max(root.val + currVal, rob(root.right) + rob(root.left));
};

// Test:
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

/*
     3
    / \
   2   3
    \   \
     3   1
*/

var test1 = new TreeNode(3);
test1.right = new TreeNode(3);
test1.right.right = new TreeNode(1);
test1.left = new TreeNode(2);
test1.left.right = new TreeNode(3);

console.log(rob(test1)); // 7

/*
     3
    / \
   4   5
  / \   \
 1   3   1
*/
var test2 = new TreeNode(3);
test2.left = new TreeNode(4);
test2.left.left = new TreeNode(1);
test2.left.right = new TreeNode(3);
test2.right = new TreeNode(5);
test2.right.right = new TreeNode(1);

console.log(rob(test2)); // 9
