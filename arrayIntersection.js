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
  // assuming the intersection is index sensitive:
  var results = [];
  // for each element of one array
  for (var i = 0; i < nums1.length; i++) {
    if (nums1[i] === undefined || nums2[i] === undefined) { break; }
    // if the corresponding element in the other array is ===
    if (nums1[i] === nums2[i]) {
      // push into results
      results.push(nums1[i]);
    }
  }

  return results;
};

// Test:
var test1a = [1, 2, 2, 1];
var test1b = [2, 2];
console.log(intersection(test1a, test1b));
