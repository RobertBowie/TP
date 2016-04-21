/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var paths = [];

  treeWalker(root, 0, []);

  return paths;

  function treeWalker(node, currSum, currPath) {
    currVal = node.val;
    currSum += currVal;
    if (currSum > sum) { return; }
    currPath.push(currVal);
    if (isLeaf(node) && currSum === sum) { paths.push(currPath.slice()); }
    if (node.left !== null) {
      treeWalker(node.left, currSum, currPath);
    }
    if (node.right !== null) {
      treeWalker(node.right, currSum, currPath);
    }
    currPath.pop();
  };
  function isLeaf(node) { return (node.left === null && node.right === null); };
};

// Testing:
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

/*
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
*/
var tree = new TreeNode(5);
tree.right = new TreeNode(8);
tree.left = new TreeNode(4);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.right.left = new TreeNode(5);
tree.right.right.right = new TreeNode(1);
tree.left.left = new TreeNode(11);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);

console.log(pathSum(tree, 22));
