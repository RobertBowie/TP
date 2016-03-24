/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function(nums) {
  // Set up variables:
  var lowest = Number.MAX_VALUE;
  var mid = Number.MAX_VALUE;;
  // Iterate over nums:
  for (var i = 0; i < nums.length; i++) {
    // num = nums[iteration]
    var num = nums[i];
    // if num <= lowest
    if (num <= lowest) {
      // lowest = num
      lowest = num;
    } else if (num < mid) { // else if num < mid
      // mid = num
      mid = num;
    } else if (num > mid) {// else if num > mid
      // return true
      return true;
    }
  }
  // when all else fails return false
  return false;
};
