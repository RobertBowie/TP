const Test = require('./test.js');

/*
1) Pipelining

var result = pipeline(obj
                         , fn1
                         , fn2
                         , fn3
                         , fn4);
for instance:

pipeline([1,2,3,4,5,6] // seed
    , rest // first function to apply
    , rest // second function to apply
    , rest // ..
    , rest
    , first);
=> 5
2) Composition: it should return a function that is the composition of a list of functions,
where each function consumes the return value of the function that follows.

var compositionFn = compose(fn4, fn3, fn2, fn1);
var result = compositionFn(obj);
for instance

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);
welcome('moe');
=> 'hi: MOE!'
*/

function pipeline(seed, ...args) {
  if (arguments.length === 0) {
    return;
  }
  if (arguments.length === 1) {
    return seed;
  }
  // returns the result of the functions applied to the seed
  return args.reduce((prev, curr) => curr(prev), seed);
};

function compose(...args) {
  // returns a function that will be applied to a seed eventually
  return function(arg) {
    return args.reduceRight((prev, curr) => curr(prev), arg);
  }
};

// Test
Test.expect(pipeline() === void 0, 'It should handle when there is no seed and no function')
Test.assertEquals(pipeline(42), 42, 'It should handle when only the seed is specified')
Test.assertEquals(pipeline(42, function(n) { return -n; }), -42, 'It should handle when a seed and a function are specified')
Test.assertEquals(pipeline(42, function(n) { return -n; }, function(n) { return n + 1}), -41, 'It should handle when a seed and functions are specified')

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);
Test.assertEquals(welcome('moe'), 'hi: MOE!', 'It should execute compsed functions, each consuming the result of the next')
