// Write a function to print a matrix in a spiral
// For example, if the matrix is
//  1  2  3  4
//  5  6  7  8
//  9 10 11 12
// 13 14 15 16
// the output might be
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// [[1, 2, 3, 4]]
// [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10, 11, 12]]
function printSpiralMatrix(matrix) {
  if (!matrix || matrix.length < 1 || !Array.isArray(matrix)) { return; } // throw an error here?
  var result = '';
  var copy = matrix.slice();
  var commaSpace = ', ';

  matrixWalker(copy);
  // remove the extra commaSpace and print
  console.log(result.slice(0, -2));

  function matrixWalker(matrix) {
    // base case:
    if (matrix.length === 0) { return; }
    // destructively traverse the matrix's outer layer populating result
    // handle top row
    var topRow = matrix[0];
    while (topRow.length) {
      result += topRow.shift();
      result += commaSpace;
      // remove empty array from matrix when done
      if (topRow.length === 0) {
        matrix.shift();
      }
    }
    // handle right rows
    if (matrix.length) {
      for (var i = 0; i < matrix.length; i++) {
        result += matrix[i].pop();
        result += commaSpace;
        // remove array from matrix copy if empty
        if (matrix[i].length === 0) { matrix.splice(i, 1); }
      }
    }
    //handle bottom row
    if (matrix.length) {
      var bottomRow = matrix[matrix.length - 1];
      while (bottomRow.length) {
        result += bottomRow.pop();
        result += commaSpace;
        // remove empty array from matrix when done
        if (bottomRow.length === 0) {
          matrix.pop();
        }
      }
    }
    // handle left rows
    if (matrix.length) {
      for (var i = matrix.length - 1; i >= 0; i--) {
        result += matrix[i].shift();
        result += commaSpace;
        // remove array from matrix copy if empty
        if (matrix[i].length === 0) { matrix.splice(i, 1); }
      }
    }

    // recurse
    matrixWalker(matrix);
  };
};

// Test:
var test1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(printSpiralMatrix(test1));

var test2 = [[1, 2, 3, 4]];
console.log(printSpiralMatrix(test2));

var test3 = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
console.log(printSpiralMatrix(test3));