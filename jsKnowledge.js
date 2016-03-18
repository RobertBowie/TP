/*
  An exploration of JS questions/topics in my own words.
*/

// What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

/*
  The biggest issue with typeof as an operator in JavaScript is the fact that, other than primitives, everything is an object.
  Using the above method to determine if something is an object will lead to a false positive for null as well as a false negative
  for functions (which are objects).
  A concise method of dealing with the questions of objectiveness is to write a helper function that checks for null and then
  returns true if the typeof operator shows function or object.
*/


/* Uncomment to run in Node or see console output

// Log the results of typeof on various values:
console.log(typeof '');             // string
console.log(typeof function(){});   // function
console.log(typeof 1);              // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object
console.log(typeof {});             // object
console.log(typeof []);             // object

console.log('------------');

// Log the results of using typeof === object:
console.log(typeof '' === 'object');             // false
console.log(typeof function(){} === 'object');   // false
console.log(typeof 1 === 'object');              // false
console.log(typeof true === 'object');           // false
console.log(typeof undefined === 'object');      // false
console.log(typeof null === 'object');           // true
console.log(typeof {} === 'object');             // true
console.log(typeof [] === 'object');             // true

console.log('------------');

function isObject(thingToTest) {
  if (thingToTest === null) { return false }
  return typeof thingToTest === 'object' || typeof thingToTest === 'function';
};

// Log the results of using a more comprehensive helper:
console.log(isObject(''));             // false
console.log(isObject(function(){}));   // true
console.log(isObject(1));              // false
console.log(isObject(true));           // false
console.log(isObject(undefined));      // false
console.log(isObject(null));           // false
console.log(isObject({}));             // true
console.log(isObject([]));             // true
*/
