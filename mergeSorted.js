/*
The name of the function in this example is "mergesorted".
It should return a big sorted array from two smaller sorted arrays: e.g.

mergesorted([1,2],[3,4]) //should: [1,2,3,4]

mergesorted([1,2],[3]) //should: [1,2,3]

mergesorted([1],[2, 3]) //should: [1,2,3]

Since this function is being used in an algorithm, try to optimize for
speed and browse the solutions when you're done to see how others approached
the problem.
*/

// TODO: implement 'mergesorted'
// assume: a and b are both arrays, consisting entirely of integers,
// both arrays are sorted and contain at least 1 integer.
// Do not use Array.sort
function mergesorted(a, b) {
  let result = [];
  // while our lists have contents
  while (a.length || b.length) {
    // Take the lower of the first number in a or b
    if (a[0] <= b[0]) {
      // add to result array
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  return result;
}

// Test
console.log(mergesorted([1, 2, 3], [1, 2, 3])); // [1, 1, 2, 2, 3, 3]
