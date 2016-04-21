/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
  // var to store all sums
  var sums = [];
  var closestSum;
  var smallestDiff = Number.POSITIVE_INFINITY;
  // calculate all sums
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      sums.push(nums[i] + nums[j] + nums[j + 1]);
    }
  }
  // calculate the sum closest to the target and return it
  sums.forEach(function(sum) {
    var currDiff = target - sum;
    if (currDiff < smallestDiff) {
      closestSum = sum;
      smallestDiff = currDiff;
    }
  });
  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));