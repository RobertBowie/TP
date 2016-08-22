/*
write an Event constructor function, which can be used to make event objects.

An event object should work like this:
- it has a .subscribe() method, which takes a function and stores it as its handler
- it has an .unsubscribe() method, which takes a function and removes it from its handlers
- it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments

As this is an elementary example of events, there are some simplifications:
- all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
- you should not worry about the order of handlers' execution
- the handlers will not attempt to modify an event object (e.g. add or remove handlers)
- the context of handlers' execution is not important
- each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
*/

function Event() {
  
};


// Test

var event = new Event();

function f() {
    f.calls = (f.calls || 0) + 1;
    f.args = Array.prototype.slice.call(arguments);
}

event.subscribe(f);
event.emit(1, 'foo', true);

console.log(f.calls === 1); // calls a handler, should be true
console.log(f.args); // [1, 'foo', true]

event.unsubscribe(f);
event.emit(2);

console.log(f.calls === 1); // no second call, should be true
