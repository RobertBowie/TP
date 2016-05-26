/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowels = {a: true, e: true, i:true, o: true, u: true, A: true, E: true, I:true, O: true, U: true};
  var startVowels = {};
  var endIndex = s.length - 1;
  var result = '';
  var singleVowel;
  for (var i = 0; i < s.length; i++) {
    if (i in startVowels) {
      result += startVowels[i];
      continue;
    }
    if (s[i] in vowels) {
      singleVowel = true;
      for (var j = endIndex; j > i; j--) {
        if (s[j] in vowels) {
          startVowels[j] = s[i];
          result += s[j];
          singleVowel = false;
          endIndex = j - 1;
          break;
        }
      }
      if (singleVowel) {
        result += s[i];
      }
    } else {
      result += s[i];
    }
  }
  return result;
};


// Test:

var test1 = "hello";
console.log(reverseVowels(test1)); // holle
var test2 = "leetcode";
console.log(reverseVowels(test2)); // leotcede
var test3 = "abcde";
console.log(reverseVowels(test3)); // ebcda
var test4 = "aeiou";
console.log(reverseVowels(test4)); // uoiea
var test5 = "e.";
console.log(reverseVowels(test5)); // e.
var test6 = "uaAU";
console.log(reverseVowels(test6)); // UAau
