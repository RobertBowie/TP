/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var temp = n;
  while (temp > 1) {
    temp = temp / 3;
  }
  return temp % 1 === 0;
};

console.log(isPowerOfThree(3));
console.log(isPowerOfThree(6));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(28));
console.log(isPowerOfThree(81));
