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
  var result = '';
  if (x < 0) {
    result += '-';
    x = Math.abs(x);
  }
  while (x) {
    result += x % 10;
    x = Math.floor(x / 10);
  }
  return +result;
};

console.log(reverse(123));
console.log(reverse(-123));
