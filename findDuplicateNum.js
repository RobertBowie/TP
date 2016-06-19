/*
Given an array nums containing n + 1 integers where each integer is between 1 and n
(inclusive), prove that at least one duplicate number must exist. Assume that there
is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n^2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // define our search range
  var low = 1;
  var high = nums.length - 1;
  var mid, count;
  // until we are left with one number
  while (low < high) {
    count = 0;
    mid = Math.floor(low + (high - low)/2);
    // count the nums that are <= mid
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }
    // refine the search range
    if (count <= mid) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

let test = [1,3,2,4,5,4];
console.log(findDuplicate(test));
let test2 = [1,3,4,2,2];
console.log(findDuplicate(test2));
