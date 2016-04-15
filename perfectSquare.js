/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  // vars to hold primes and queue
  var prime = [];
  var queue = {};
  // generate the prime numbers that can sum to n
  var sqrt = Math.sqrt(n);
  for (var i = 1; i < sqrt; i++) {
    prime.push()
  }
  // set queue[n] to true
  queue[n] = true;
  // return a call to treeWalker(object, depth) starting with queue, 1
  return treeWalker(queue, 1);
  // treeWalker(object, depth)
  function treeWalker(object, depth) {
    // define/init vars
    var tempQueue = {};
    // iterate over the keys of the passed in object
    for (availPrime in object) {
      // for each element in primes
      for (var i = 0; i < prime.length; i++) {
        // store Math.floor(key) - prime[element]
        var temp = Math.floor(availPrime) - prime[i];
        // if the result is 0
        if (temp === 0) {
          // return current depth
          return depth;
        }
        // if the result is less than 0
        if (temp < 0) {
          // break out of the loop
          break;
        }
        // if the result is greater than 0
        if (temp > 0) {
          // populate a new queue with tmpQueue[result] = true
          tempQueue[temp] = true;
        }
      }
    }
    // return a call to treeWalker(tmpQueue, currDepth + 1)
    return treeWalker(tempQueue, depth + 1);
  };
};

console.log(numSquares(1))