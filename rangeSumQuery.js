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

/*
  Here is an object oriented approach to building a NumArr data structure.  When initializing a NumArr using
  the pseudo-classical pattern, we are able to utilize the sumRange method of NumArr to deliver the sum in
  constant time.
*/

function NumArr(nums) {
  this.nums = nums;
  this._preComp = nums.slice();
  for (var i = 1; i < this._preComp.length; i++) {
    this._preComp[i] += this._preComp[i - 1];
  }
};

NumArr.prototype = {
  contructor: NumArr,
  sumRange: function(start, end) {
    if (start === 0) { return this._preComp[end] }
    return this._preComp[end] - this._preComp[start - 1];
  }
};


// Tests:
nums = new NumArr([-2, 0, 3, -5, 2, -1]);
console.log(nums)
console.log(nums.sumRange(0, 2)); // -> 1
console.log(nums.sumRange(2, 5)); // -> -1
console.log(nums.sumRange(0, 5)); // -> -3
