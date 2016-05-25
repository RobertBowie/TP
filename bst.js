/*
Implement a binary search tree.  Lookup, insert and delete. (print?)
All vals to the left are lesser.
All vals to the right are greater.

Add functionality. (AVL, Red-Black etc.)
*/

TreeNode = function (val) {
  this.val = val;
  this.right = this.left = null;
};

BST = function () {
  this.root = null;
};

BST.prototype = {
  constructor: BST,
  lookup: function (val, node) {
    // recurse through the tree and return true or false
    node = node === undefined ? this.root : node;
    // if root !== null
    if (node !== null) {
      // if root.val === val
      if (node.val === val) {
        // return true
        return true;
      } else { // else
        // if val < root.val
        if (val < node.val) {
          // check the left subtree
          return this.lookup(val, node.left);
        }
        // if val > root.val
        if (val > node.val) {
          // check the right subtree
          return this.lookup(val, node.right);
        }
      }
    }
    return false;
  },
  insert: function (val, node) {
    // check where to insert and make a new TreeNode there

    // if root === null
    if (this.root === null) {
      // root = new TreeNode(val)
      this.root = new TreeNode(val);
      return;
    }
    node = node || this.root;
    // throw an error in case of duplicate
    if (node.val === val) { throw new Error("Value is already in BST"); }
    // if val < root.val
    if (val < node.val) {
      // if root.left === null
      if (node.left === null) {
        // insert new TreeNode(val)
        node.left = new TreeNode(val);
        return;
      } else { // else
        // call root.left.insert(val)
        this.insert(val, node.left);
        return;
      }
    }
    // if val > root.val
    if (val > node.val) {
      // if root.right === null
      if (node.right === null) {
        // insert new TreeNode(val)
        node.right = new TreeNode(val);
        return;
      } else { // else
        // call root.right.insert(val)
        this.insert(val, node.right);
        return;
      }
    }
  },
  delete: function (val, node, parent) {
    node = node === undefined ? this.root : node;
    var currVal = node.val;
    if (node === null) { return; }
    // if root is the only value and is to be deleted
    if (this.root.val === val && this.root.left === null && this.root.right === null) {
      this.root = null;
    } else if (currVal === val) { // if node.val matches val
      if (node.left === null && node.right === null) { // if the node to delete is a leaf
        // set the node's link from parent to null
        if (currVal < parent.val) { parent.left = null; }
        if (currVal > parent.val) { parent.right = null; }
        // if parent.val === currVal we are mid delete and should set parent.right
        if (currVal === parent.val) { parent.right = null; }
      } else if (node.right !== null && node.left === null) { // if the node to delete has only right child
        // set the node's link from parent to right child
        if (currVal < parent.val) { parent.left = node.right; }
        if (currVal > parent.val) { parent.right = node.right; }
      } else if (node.right === null && node.left !== null) { // if the node to delete has only left child
        // set the node's link from parent to left child
        if (currVal < parent.val) { parent.left = node.left; }
        if (currVal > parent.val) { parent.right = node.left; }
      } else if (node.left && node.right) { // if the node has two children
        // overwrite the current node val with the min val in the right subtree
        var min = this.findMin(node.right);
        node.val = min;
        // delete the min val
        this.delete(min, node.right, node);
      }
    } else {
      // recurse left or right
      if (val < currVal && node.left !== null) {
        this.delete(val, node.left, node);
      }
      if (val > currVal && node.right !== null) {
        this.delete(val, node.right, node);
      }
    }
  },
  findMin: function(node) {
    // base case:
    if (node.left === null) { return node.val; }
    // recurse:
    return this.findMin(node.left);
  },
  print: function() {
    console.log(this.root);
  }
}

/*
       5
      / \
     4   7
    /   / \
   3   6   8
*/

// Test:
var testBST = new BST;
testBST.insert(5);
testBST.insert(4);
testBST.insert(3);
testBST.insert(7);
testBST.insert(8);
testBST.insert(6);
testBST.delete(7);
// testBST.print();


/*
                10
               /  \
              5    15
             / \   / \
            3   6 13 20
                 /   /
                12  18
*/
var test2 = new BST;
test2.insert(10);
test2.insert(5);
test2.insert(15);
test2.insert(3);
test2.insert(6);
test2.insert(13);
test2.insert(20);
test2.insert(12);
test2.insert(18);
test2.delete(15);
test2.print();
