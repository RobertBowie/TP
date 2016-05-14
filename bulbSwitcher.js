/*
There are n bulbs that are initially off. You first turn on all the bulbs.
Then, you turn off every second bulb. On the third round, you toggle every
third bulb (turning on if it's off or turning off if it's on). For the ith
round, you toggle every i bulb. For the nth round, you only toggle the last
bulb. Find how many bulbs are on after n rounds.

  Example:

  Given n = 3. 

  At first, the three bulbs are [off, off, off].
  After first round, the three bulbs are [on, on, on].
  After second round, the three bulbs are [on, off, on].
  After third round, the three bulbs are [on, off, off]. 

  So you should return 1, because there is only one bulb is on.
*/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  // build an array containing bulb state
  var bulbStates = [];
  for (var i = 0; i < n; i++) {
    bulbStates.push(false);
  }
  // for n rounds
  for (var j = 1; j <= n; j++) {
    // toggle jth bulbs
    for (var k = j - 1; k < n; k += j) {
      bulbStates[k] = !bulbStates[k];
    }
  }

  // return the count of true bulbs
  return bulbStates.reduce(function(prev, curr) {
    return curr ? prev + 1 : prev;
  }, 0);

};

console.log(bulbSwitch(3)); // 1
console.log(bulbSwitch(4)); // 2
console.log(bulbSwitch(50)); // 7
console.log(bulbSwitch(9999999)); // 3162
