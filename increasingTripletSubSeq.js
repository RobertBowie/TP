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
  var lowest = null;
  var mid = null;
  var inSeries = false;
  // Iterate over nums:
  for (var i = 0; i < nums.length; i++) {
    // num = nums[iteration]
    var num = nums[i];
    // if no lowest
    if (lowest === null) {
      // lowest = num
      lowest = num;
    } else if (mid === null && num > lowest) { // else if mid isn't set and num > lowest
      // mid = num
      mid = num;
    } else if (mid !== null && num > mid) { // else if mid is set and num > mid
      // return true
      return true;
    } else if (mid !== null && num < mid) { // else if mid is set and num < mid
      // set lowest
      lowest = num;
      // reset mid
      mid = null;
    }
  }
  // when all else fails return false
  return false;
};


// Test:

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [5, 4, 3, 7, 12, 2];
var arr3 = [-1, 0, 1, -4, -3, -5, -2];
var arr4 = [5, 4, 3, 2, 1];
var arr5 = [0, 0, 1, 1, 1, 0, 1];
var arr6 = [1, 3, 2, 5, 4, 7, 6];

// Should return true:
if (increasingTriplet(arr1)) { console.log('Pass for input: ' + arr1) } else { console.log('Failed with Input: ' + arr1 + ' Output: ' + increasingTriplet(arr1)) };
if (increasingTriplet(arr2)) { console.log('Pass for input: ' + arr2) } else { console.log('Failed with Input: ' + arr2 + ' Output: ' + increasingTriplet(arr2)) };
if (increasingTriplet(arr3)) { console.log('Pass for input: ' + arr3) } else { console.log('Failed with Input: ' + arr3 + ' Output: ' + increasingTriplet(arr3)) };
// Should return false:
if (!increasingTriplet(arr4)) { console.log('Pass for input: ' + arr4) } else { console.log('Failed with Input: ' + arr4 + ' Output: ' + increasingTriplet(arr4)) };
if (!increasingTriplet(arr5)) { console.log('Pass for input: ' + arr5) } else { console.log('Failed with Input: ' + arr5 + ' Output: ' + increasingTriplet(arr5)) };
if (!increasingTriplet(arr6)) { console.log('Pass for input: ' + arr6) } else { console.log('Failed with Input: ' + arr6 + ' Output: ' + increasingTriplet(arr6)) };
