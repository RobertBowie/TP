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
  // Iterate through the string:
  for (var i = 0; i < s.length; i++) {
    // Handle second half of the vowel swap:
    if (i in startVowels) {
      result += startVowels[i];
      console.log('added ', startVowels[i], ' to result');
      continue;
    }
    // Once we encounter a vowel:
    if (s[i] in vowels) {
      singleVowel = true;
      console.log('s[i] is a vowel: ', s[i]);
      // Iterate through the string in reverse:
      for (var j = endIndex; j > i; j--) {
        // because we are looking at the second half we know the prior vowel is not dead middle
        // Once we encounter another vowel:
        if (s[j] in vowels) {
        console.log('s[j] is a vowel: ', s[j]);
          // Store and swap the vowels
          startVowels[j] = s[i];
          console.log(startVowels);
          result += s[j];
          singleVowel = false;
          // Update the endIndex:
          endIndex = j - 1;
          break;
        }
      }

      // add a vowel that can't be swapped to result
      if (singleVowel) {
        result += s[i];
      }
    } else { // Not a vowel, add to result:
      console.log('adding ', s[i], ' to result');
      result += s[i];
    }
  }
  return result;
};


// Test:

var test1 = "hello";
console.log(reverseVowels(test1));
var test2 = "leetcode";
console.log(reverseVowels(test2));
var test3 = "abcde";
console.log(reverseVowels(test3));
var test4 = "aeiou";
console.log(reverseVowels(test4));
var test5 = "e.";
console.log(reverseVowels(test5));
var test6 = "uaAU";
console.log(reverseVowels(test6));
