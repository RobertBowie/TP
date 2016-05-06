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

  // if nums is uneven

    // set iterations = nums.length - 1;

  // else

    // set iterations = nums.length

  // iterate through nums, iterations times

    // track temp = larger of with and without

    // set with = without + nums[i]

    // set without = temp

  // return larger of with and without

};

// Test:

var houses1 = [5, 5, 10, 40, 50, 35, 20];
console.log(rob(houses1)); // 80

var houses2 = [1, 2, 3, 4, 5];
console.log(rob(houses2)); // 6

var houses3 = [2, 6, 4, 8];
console.log(rob(houses3)); // 14
