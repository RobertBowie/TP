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
  // in most cases the num % 9 is the digital root of num

  // edge cases:
  // num === 0

    // return 0

  // num % 9 === 0

    // return 9

  // return num % 9

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
