/*
Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // sort nums
  var sortedNums = nums.sort(function(a, b) { return a - b; });
  // shift off sortedNums into a var num
  var num = sortedNums.shift();
  // while sortedNums.length
  while (sortedNums.length) {
    // if num !== sortedNums[0]
    if (num !== sortedNums[0]) {
      // return num
      return num;
    } else { // else
      // shift 3 times, storing in num
      sortedNums.shift();
      sortedNums.shift();
      num = sortedNums.shift();
    }
  }
  return num;
};

// Test:
var list1 = [1, 1, 1, 2, 3, 3, 3];
console.log(singleNumber(list1)); // 2

var list2 = [2, 3, 4, 3, 4, 3, 4];
console.log(singleNumber(list2)); // 2


var list3 = [7, 8, 9, 8, 10, 9, 10, 11, 7, 10, 9, 8, 7];
console.log(singleNumber(list3)); // 11

var list4 = [1];
console.log(singleNumber(list4)); // 1
