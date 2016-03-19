/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

function sumRange(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += nums[i];
  }
  return sum;
};

// Tests:
nums = [-2, 0, 3, -5, 2, -1];

console.log(sumRange(0, 2)); // -> 1
console.log(sumRange(2, 5)); // -> -1
console.log(sumRange(0, 5)); // -> -3
