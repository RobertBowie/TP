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

  // generate the prime numbers that can sum to n

  // set queue[n] to true

  // return a call to treeWalker(object, depth) starting with queue, 1

  // treeWalker(object, depth)

    // define/init vars

    // iterate over the keys of the passed in object

      // for each element in primes

        // store Math.floor(key) - prime[element]

        // if the result is 0

          // return current depth

        // if the result is less than 0

          // break out of the loop

        // if the result is greater than 0

          // populate a new queue with tmpQueue[result] = true

      // return a call to treeWalker(tmpQueue, currDepth + 1)
};
