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
    x = round(x / 10);
  }
  return result;
};

function round(x) {
  if (x === 0) { return 0; }
  if (x > 0) { return Math.floor(x); }
  if (x < 0) { return Math.ceil(x); }
};

console.log(reverse(123));
console.log(reverse(-123));

// Runtime on leetcode: 172ms
