/*
Rotate an array of n elements to the right by k steps.

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
  // return the first k elements of nums appended to the end
  return nums.concat(nums.splice(0, k));
};

// Test:
var test1 = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(test1, 4)); // [5,6,7,1,2,3,4]

var test2 = [1, 2, 3];
console.log(rotate(test2, 7));
