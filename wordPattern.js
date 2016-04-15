/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var strArr = str.split(' ');
  var pattLen = pattern.length;
  var associations = {};
  // The most basic check: compare the length of pattern to the length of str
  if (pattLen !== strArr.length) { return false; }
  // Iterate over pattern and build an object that holds associations
  for (var i = 0; i < pattLen; i++) {
    var pattChar = pattern[i];
    var strWord = strArr[i];
    if (pattChar in associations) {
      if (associations[pattChar] !== strWord) { return false; }
    } else {
      // make sure the values in associations are unique
      for (var key in associations) {
        if (associations[key] === strWord) { return false; }
      }
      associations[pattChar] = strWord;
    }
  }
  return true;
};


var pattern, str;
pattern = "abba", str = "dog cat cat dog";
console.log(wordPattern(pattern, str));

pattern = "abba", str = "dog cat cat fish";
console.log(wordPattern(pattern, str));

pattern = "aaaa", str = "dog cat cat dog";
console.log(wordPattern(pattern, str));

pattern = "abba", str = "dog dog dog dog";
console.log(wordPattern(pattern, str));

pattern = "abb", str = "dog dog dog dog";
console.log(wordPattern(pattern, str));
