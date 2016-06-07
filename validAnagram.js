/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // basic check: are the inputs of equal length
  if (s.length !== t.length) { return false; }

  // populate an object with the contents of s
  var letterFreq = {};
  s.split('').forEach(function(letter) {
    // if the letter isn't in letterFreq
    if (!(letter in letterFreq)) {
      letterFreq[letter] = 1;
    } else {
    // otherwise increment freq
    letterFreq[letter]++;
    }
  });

  // for each letter in t
  for (var i = 0; i < t.length; i++) {
    var letter = t[i];
    // if the letter isn't in letterFreq
    if (!(letter in letterFreq)) {
      // return false
      return false;
    }
    // otherwise if the freq is 1
    if (letterFreq[letter] === 1) {
      // delete the key
      delete letterFreq[letter];
      continue;
    }
    // or decrement the value of the freq
    letterFreq[letter]--;
  }

  // return true if letterFreq is empty else false
  return Object.keys(letterFreq).length === 0 && letterFreq.constructor === Object;
};

// Test
var a1 = "anagram";
var b1 = "nagaram";
console.log(isAnagram(a1, b1));
