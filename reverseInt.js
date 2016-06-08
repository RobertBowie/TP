/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var result = 0;
  while (x) {
    result = 10 * result + x % 10;
    x = x > 0 ? Math.floor(x / 10) : x < 0 ? Math.ceil(x / 10) : 0;
  }
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));

// Runtime on leetcode: 168ms
