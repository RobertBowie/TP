/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  // sort nums into sortedNums

  // shift off numbers and store unique numbers in results until results.length is 2

};

// Test:

var test1 = [1, 2, 1, 3, 2, 5];
console.log(singleNumber(test1)); // [3, 5]

var test2 = [3, 4, 7, 4, 9, 3, 2, 2];
console.log(singleNumber(test2)); // [7, 9]