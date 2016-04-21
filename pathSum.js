/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all
the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  var hasPath = false;

  treeWalker(root, 0);

  return hasPath;

  // Utilities:
  function treeWalker(node, currSum) {
    currSum += node.val;
    if (isLeaf(node) && currSum === sum) { hasPath = true; return; }
    if (node.left !== null) {
      treeWalker(node.left, currSum);
    }
    if (node.right !== null) {
      treeWalker(node.right, currSum);
    }
  };

  function isLeaf(node) { return (node.left === null && node.right === null); };
};



// Testing:
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var tree = new TreeNode(5);
tree.right = new TreeNode(8);
tree.left = new TreeNode(4);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.right.right = new TreeNode(1);
tree.left.left = new TreeNode(11);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
/*
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
*/
console.log(hasPathSum(tree, 22)); // true
console.log(hasPathSum(tree, 26)); // true
console.log(hasPathSum(tree, 28)); // false
console.log(hasPathSum(tree, 0)); // false
