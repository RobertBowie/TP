/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var counter = 0;
  // create a matrix
  var zigzagMatrix = [];
  for (var i = numRows; i > 0; i--) {
    zigzagMatrix.push([]);
  }
  // iterate through string s
  for (var i = 0; i < s.length; i++) {
    if (counter < numRows) {
      // populate matrix
      zigzagMatrix[counter].push(s[i]);
      counter++;
    } else {
      counter -= 2;
      zigzagMatrix[counter].push(s[i]);
      counter--;
    }
  }
  console.log(zigzagMatrix);
  // return re-ordered items
  return zigzagMatrix.map(function(arr) {
    return arr.join('');
  }).join('');
};

// Test:
console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
