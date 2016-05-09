/*
Given a digit string, return all possible letter combinations that the number could represent.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var digitArr = digits.split(''); // ['2', '3']
  var buttonValues = digitArr.map(function(digit) {
    return phonePadMap[digit];
  });
  var results = [];
  buildCombos('', buttonValues);
  // recursion function
  function buildCombos(stringSoFar, buttonValues) {
    var values = buttonValues[0];
    // base case: we are on the final button
    if (buttonValues.length === 1) {
      // append each letter on final button to stringSoFar and add each to results
      values.forEach(function(val) {
        results.push(stringSoFar + val);
      });
      return;
    }
    // otherwise build result string using each letter on current key and recursing
    values.forEach(function(val) {
      buildCombos(stringSoFar + val, buttonValues.slice(1));
    });
  };
  return results;
};

var phonePadMap = {
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

// Test:
console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
console.log(letterCombinations('5471'));
console.log(letterCombinations('123456789'));
