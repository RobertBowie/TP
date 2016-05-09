/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // turn num into a string then an array of digits
  var digitArray = ('' + num).split('');
  if (digitArray.length > 1) {
    sum = digitArray.reduce(function(prev, curr) {
      return +prev + +curr;
    });
  }
  if (sum > 9) {
    addDigits(sum);
  }
  return sum;
};

// Test:
console.log(addDigits(38));
/*
10 -> 1
11 -> 2
12 -> 3
13 -> 4
14 -> 5
15 -> 6
//...
19 -> 10 -> 1
20 -> 2
21 -> 3
//...
27 -> 9
28 -> 10 -> 1
29 -> 11 -> 2
30 -> 3
31 -> 4
//...
37 -> 10 -> 1
38 -> 11 -> 2
39 -> 12 -> 3
40 -> 4
41 -> 5
//...
87 -> 15 -> 6
88 -> 16 -> 7
//...
99 -> 18 -> 9
100 -> 1

110 -> 2
111 -> 3

118 -> 10 -> 1

2456 -> 17 -> 8
54729 -> 27 -> 9
*/
