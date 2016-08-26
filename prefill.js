/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/
function prefill(n, v) {
  if (n === Infinity || n === true || n === false || +n % 1 !== 0 || typeof +n !== 'number' || n < 0) { throw TypeError(n + ' is invalid') }
  if (arguments.length === 1) { const v = undefined }
  let outputArr = new Array(+n);
  outputArr.fill(v);
  return outputArr;
};

// Test
console.log(prefill(3,1)); // [1,1,1]

console.log(prefill(2,"abc")); // ['abc','abc']

console.log(prefill("1", 1)); // [1]

console.log(prefill(3, prefill(2,'2d'))); // [['2d','2d'],['2d','2d'],['2d','2d']]

// console.log(prefill("xyz", 1)); // throws TypeError with message "xyz is invalid"

console.log(prefill(Infinity, undefined));
