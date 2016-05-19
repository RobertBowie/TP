/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   nums.forEach(function(number, i, arr) {
//     if (number === 0) {
//       arr.push(arr.splice(i, 1)[0]);
//     }
//   });
// };


// // Test:
// var nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums) // [1, 3, 12, 0, 0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Solve without using any array prototype methods:
/*var moveZeroes = function(nums) {
  // iterate through nums
  for (var i = 0; i < nums.length; i++) {
    // if num is 0
    if (nums[i] === 0) {
      // perform pairwise swaps until the 0 is at the end
      for (var j = i; j < nums.length - 1; j++) {
        // if (nums[j + 1] === 0) { continue; }
        nums[j] = nums[j + 1];
        nums[j + 1] = 0;
        // console.log(nums);
      }
    }
  }
};
*/

var moveZeroes = function(nums) {
  var count = 0;
  // iterate through nums
  for (var i = 0; i < nums.length; i++) {
    console.log(nums, i, count);
    // if nums[i] is 0
    if (nums[i] === 0) {
      count++;
    }
    // if count is not 0 and num is not 0
    if (count !== 0 && nums[i] !== 0) {
      // move num back count spaces and replace num with 0
      nums[i - count] = nums[i];
      nums[i] = 0;
    }
  }
};


// Test:
var nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums) // [1, 3, 12, 0, 0]

var nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2); // [1, 0, 0]
