/*
If you are calculating complex things or execute time-consuming API calls,
you sometimes want to cache the results. In this case we want you to create
a function wrapper, which takes a function and caches its results depending
on the arguments, that were applied to the function.

Example:
*/
const complexFunction = function(arg1, arg2) { return arg1 + arg2 };
const cachedFunction = cache(complexFunction);

const reverse = function(argArr) { return argArr.reverse(); };
const cachedReverse = cache(reverse);

console.log(cachedReverse([3,2,1]));
console.log(cachedReverse([3,2,1]));
console.log(cachedReverse(["foo","bar","baz"]));
console.log(cachedReverse(["foo","bar","baz"]));

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments
console.log(cachedFunction('foo', 'baz')); // complex function should not be invoked again, instead the cached result should be returned

function cache(func) {
  let store = {};

  return function(...args) {
    let key = '';
    key += this;
    args.forEach( arg => key += JSON.stringify(arg) + '_');

    if (key in store) {
      return store[key];
    } else {
      return store[key] = func(...args);
    }
  };
};
