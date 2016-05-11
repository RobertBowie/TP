/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  
};

// Test:

var test1 = [1, 1, 2, 3, 3];
var test2 = [1, 2, 3, 2, 1];
var test3 = [10, 20, 20, 10, 5, 7, 8, 5, 8];
var test4 = [2, 3, 2];

console.log(singleNumber(test1)); // 2
console.log(singleNumber(test2)); // 3
console.log(singleNumber(test3)); // 7
console.log(singleNumber(test4)); // 3
