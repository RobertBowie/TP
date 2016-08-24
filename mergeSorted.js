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
  let reverseA = a.reverse();
  let reverseB = b.reverse();
  // while our lists have contents
  while (reverseA.length > 0 || reverseB.length > 0) {
    const aLength = reverseA.length - 1;
    const bLength = reverseB.length - 1;
    // if there are no numbers left to sort in one array
    if (reverseA.length === 0) {
      result.push(reverseB[bLength]);
      reverseB.length = bLength;
      continue;
    } else if (reverseB.length === 0) {
      result.push(reverseA[aLength]);
      reverseA.length = aLength;
      continue;
    }
    // Take the lower of the last number in a or b
    if (reverseA[aLength] <= reverseB[bLength]) {
      // add to result array
      result.push(reverseA[aLength]);
      reverseA.length = aLength;
    } else {
      result.push(reverseB[bLength]);
      reverseB.length = bLength;
    }
  }
  return result;
}

// Test
console.log(mergesorted([1, 2, 3], [1, 2, 3])); // [1, 1, 2, 2, 3, 3]
