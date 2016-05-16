/*
Rotate an array of n elements to the left by k steps.

For example, with n = 7 and k = 4, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // handle k larger than nums.length
  if (k > nums.length) { k %= nums.length; }
  // shift() and push() k elements
  for (k; k > 0; k--) {
    nums.push(nums.shift());
  }
};

// Test:
var test1 = [1, 2, 3, 4, 5, 6, 7];
rotate(test1, 4);
console.log(test1); // [5, 6, 7, 1, 2, 3, 4]

var test2 = [1, 2, 3];
rotate(test2, 7);
console.log(test2); // [2, 3, 1]
