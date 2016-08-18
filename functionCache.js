/*
If you are calculating complex things or execute time-consuming API calls,
you sometimes want to cache the results. In this case we want you to create
a function wrapper, which takes a function and caches its results depending
on the arguments, that were applied to the function.

Example:
*/
const complexFunction = function(arg1, arg2) { return arg1 + arg2 };
const cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments
console.log(cachedFunction('foo', 'baz')); // complex function should not be invoked again, instead the cached result should be returned

cachedFunction(4, 10);
cachedFunction(4, 10);
cachedFunction(5, 10);
cachedFunction(5, 10);


function cache(func) {
  // store args and return values
  let store = {};

  return function(...args) {
    console.log('arguments to internal function are:', args);
    // build a key from the args array
    let key = '';
    args.forEach( arg => key += arg + '_');
    console.log('key happens to be: ', key);
    // if we have called it in the past with given args
    if (key in store) {
      //  return the result from prev call
      console.log('not called, returned stored result');
      return store[key];
    } else { // else
      // call with given args and store result
      console.log('called and stored');
      return store[key] = func(...args);
    }
  };
};
