module.exports = {
  expect: function(expression, message) {
    if (!!expression) {
      console.log('√ - Test Passed');
      return;
    }
    console.log('X - ' + message);
  },
  assertEquals: function(arg1, arg2, message) {
    if (arg1 == arg2) {
      console.log('√ - Test Passed');
      return;
    }
    console.log('X - \'' + message + '\' Expected ' + arg2 + ', got ' + arg1);
  }
}