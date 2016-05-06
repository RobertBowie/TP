/*
Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found
himself a new place for his thievery so that he will not get
too much attention. This time, all houses at this place are
arranged in a circle. That means the first house is the neighbor
of the last one. Meanwhile, the security system for these houses
remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of
money of each house, determine the maximum amount of money you
can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // Use the same system from house robber I
  var withPrev = nums[0];
  var without = 0;
  var temp;
  var numHouses = nums.length;
  var iterations;
  // if nums is uneven
  if (numHouses % 2 !== 0) {
    // set iterations = nums.length - 1;
    iterations = numHouses - 1;
  } else { // else
    // set iterations = nums.length
    iterations = numHouses;
  }
  // iterate through nums, iterations times
  for (i = 1; i < iterations; i++) {
    // track temp = larger of with and without
    temp = Math.max(withPrev, without);
    // set with = without + nums[i]
    withPrev = without + nums[i];
    // set without = temp
    without = temp;
  }
  // return larger of with and without
  return Math.max(withPrev, without);
};

// Test:

var houses1 = [5, 5, 10, 40, 50, 35, 20];
console.log(rob(houses1)); // 80

var houses2 = [1, 2, 3, 4, 5];
console.log(rob(houses2)); // 6

var houses3 = [2, 6, 4, 8];
console.log(rob(houses3)); // 14
