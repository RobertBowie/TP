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
  if (s.length !== t.length) { return false; }
  var letterFreq = {};
  for (var j = 0; j < s.length; j++) {
    var sLetter = s[j];
    if (!(sLetter in letterFreq)) {
      letterFreq[sLetter] = 1;
    } else {
    letterFreq[sLetter]++;
    }
  }
  for (var i = 0; i < t.length; i++) {
    var letter = t[i];
    if (!(letter in letterFreq)) {
      return false;
    }
    if (letterFreq[letter] === 1) {
      delete letterFreq[letter];
      continue;
    }
    letterFreq[letter]--;
  }
  return Object.keys(letterFreq).length === 0 && letterFreq.constructor === Object;
};

// Test
var a1 = "anagram";
var b1 = "nagaram";
console.log(isAnagram(a1, b1));
