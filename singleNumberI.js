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
  // naive solution (uses extra memory)
  var numFreq = {};
  // build an object containing freq
  nums.forEach(function(num) {
    if (num in numFreq) {
      numFreq[num]++;
    } else {
      numFreq[num] = 1;
    }
    // remove anything that occurs twice, leaving numFreq with our result
    if (numFreq[num] === 2) {
      delete numFreq[num];
    }
  });
  // return the single occurrence
  for (num in numFreq) {
    // coerce string num into a number
    return +num;
  }
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
