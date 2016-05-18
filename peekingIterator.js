/*
Given an Iterator class interface with methods: next() and hasNext(), design and implement
a PeekingIterator that support the peek() operation -- it essentially peek() at the element
that will be returned by the next call to next().

Here is an example. Assume that the iterator is initialized to the beginning of the list: [1, 2, 3].

Call next() gets you 1, the first element in the list.

Now you call peek() and it returns 2, the next element. Calling next() after that still return 2.

You call next() the final time and it returns 3, the last element. Calling hasNext() after that should return false.
*/

function Iterator(arr) {
  this.arr = arr;
};

Iterator.prototype = {
  constructor: Iterator,
  next: function() {
    return this.arr.shift();
  },
  hasNext: function() {
    return this.arr.length > 0;
  }
};

function PeekingIterator(arr) {
  Iterator.call(this, arr);
  this.arr = arr;
};

PeekingIterator.prototype = Object.create(Iterator.prototype);
PeekingIterator.prototype.constructor = PeekingIterator;
PeekingIterator.prototype.peek = function() {
  return this.arr[0];
};

// Test:

var testArr = [1, 2, 3];
// var testIterator = new Iterator(testArr);
// console.log(testIterator.next());
var testPeeker = new PeekingIterator(testArr);
console.log(testPeeker.next(), testPeeker.peek(), testPeeker.next(), testPeeker.next(), testPeeker.hasNext());
