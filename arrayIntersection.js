/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // assuming the intersection is NOT index sensitive:
  var results = [];
  var numSet1 = {};
  var numSet2 = {};
  // for each element of each array
    // populate numSet
  nums1.forEach( num => numSet1[num] = true );
  nums2.forEach( num => numSet2[num] = true );
  // add intersecting keys into results as numbers
  for (var key1 in numSet1) {
    if (key1 in numSet2) {
      results.push(+key1);
    }
  }
  return results;
};

// Test:
var test1a = [1, 2, 2, 1];
var test1b = [2, 2];
console.log(intersection(test1a, test1b)); // [2]

var test2a = [1, 2];
var test2b = [2, 1];
console.log(intersection(test2a, test2b)); // [1, 2]
