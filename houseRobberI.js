/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint
stopping you from robbing each of them is that adjacent houses have
security system connected and it will automatically contact the police
if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money
of each house, determine the maximum amount of money you can rob tonight
without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 1) { return 0; }
  if (nums.length === 1) { return nums[0]; }
  // track sums
  var withPrev = nums[0];
  var withoutPrev = 0;
  var tempWithout;
  // iterate through nums
  for (var i = 1; i < nums.length; i++) {
    tempWithout = Math.max(withPrev, withoutPrev);
    // set withPrev by adding without and current element
    withPrev = withoutPrev + nums[i];
    // set withoutPrev to the larger of with and without at the start of this iteration
    withoutPrev = tempWithout;
  }
  // return the larger of with and without
  return Math.max(withPrev, withoutPrev);
};

// Test:
var houses1 = [1, 2, 50, 50, 5, 10, 12, 20, 30, 20, 50, 10, 5, 2, 0, 5, 10];
console.log(rob(houses1)); // 163

var houses2 = [5, 5, 10, 40, 50, 35];
console.log(rob(houses2)); // 80

var houses3 = [];
console.log(rob(houses3)); // 0

var houses4 = [1000];
console.log(rob(houses4)); // 1000
