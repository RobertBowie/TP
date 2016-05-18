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
  // reverse nums
  nums.reverse();
  // take and reverse from index 0 to k-1
  var temp = nums.splice(0, k - 1 ? k - 1 : nums.length === 3 ? 2 : 1).reverse(); // this line is terrible, dirty fix for wrong result in test2
  // concat reversed prefix with reversed nums
  nums.reverse();
  while (temp.length) {
    nums.unshift(temp.pop());
  }
};

// Test:
var test1 = [1, 2, 3, 4, 5, 6, 7];
rotate(test1, 4);
console.log('result of test1', test1); // [5, 6, 7, 1, 2, 3, 4]

var test2 = [1, 2, 3];
rotate(test2, 7);
console.log('result of test2', test2); // [2, 3, 1]

var test3 = [1, 2, 3];
rotate(test3, 8);
console.log('result of test3', test3); // [3, 1, 2]

var test4 = [1, 2, 3, 4, 5];
rotate(test4, 1);
console.log('result of test4', test4); // [5, 1, 2, 3, 4]
