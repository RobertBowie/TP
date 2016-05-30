/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers,
each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (typeof num !== 'string') { throw Error('Input must be a string.'); }
  // store num length
  var length = num.length;
  // find the first number using length-1/2
  for (var i = 1; i <= (length - 1)/2; i++) {
    // break if num[0] is 0 and length is more than 1
    if (num[0] === '0' && i >= 2) { break; }
    // find the second number
    for (var j = i + 1; length - j >= j - i && length - j >= i; j++) {
      // break if the second number starts with 0 if its length > 1
      if (num[i] === '0' && j - i >= 2) { break; }
      // num1 = +num.substring(0, i)
      var num1 = +num.substring(0, i);
      // num2 = +num.substring(i, j)
      var num2 = +num.substring(i, j);
      // remains = num.substring(j)
      var remains = num.substring(j);
      // if additive(remains, num1, num2) return true
      if (additive(remains, num1, num2)) {
        return true;
      }
    }
  }
  // else return false
  return false;
  // additive string check function
  function additive(str, num1, num2) {
    // base case
    if (str === '') { return true; }
    var sum = num1 + num2;
    var sumStr = '' + sum;
    var sumLen = sumStr.length;
    // if str[0] doesn't match sum
    if (str.substring(0, sumLen) !== sumStr) {
      // return false
      return false;
    }
    // return the result of recursing
    return additive(str.substring(sumLen), num2, sum);
  }
};

console.log(isAdditiveNumber('112358'));
console.log(isAdditiveNumber('011235'));
// console.log(isAdditiveNumber(112358));
