/*
make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

The function will return the value that results from the first parameter being used as a parameter for all of the accepted
function parameters in turn. So:
*/
var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

console.log(compose(5, doubleTheValue)) // should === 10
console.log(compose(5, doubleTheValue, addOneToTheValue)) // should === 11

function compose(val, ...args) {
  if (arguments.length === 1) { return val; }
  let result = val;
  args.forEach( func => result = func(result) );
  return result;
};
