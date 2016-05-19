/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
  Invert a binary tree.

       4
     /   \
    2     7
   / \   / \
  1   3 6   9

      to

       4
     /   \
    7     2
   / \   / \
  9   6 3   1

*/
var invertTree = function(root) {
  // Base case:
  if (root.right === null && root.left === null) {
    return root;
  }
  var temp = root.right
  root.right = root.left;
  root.left = temp;
  // Recurse:
  invertTree(root.right);
  invertTree(root.left);
  return root;
};

//-------------------------------------------
// Node Tests:
//-------------------------------------------

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

var testTree = new TreeNode(4);
// testTree.left = new TreeNode(2);
// testTree.right = new TreeNode(7);
// testTree.left.left = new TreeNode(1);
// testTree.left.right = new TreeNode(3);
// testTree.right.left = new TreeNode(6);
// testTree.right.right = new TreeNode(9);

console.log(testTree);
console.log('----------');
console.log(invertTree(testTree));