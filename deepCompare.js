/* Write a function that compares the keys and values of two objects, returning true if they are equal */

function deepCompare(ob1, ob2) {
  var result = true;
  forEach(ob1, (val, key, collection) => {
    if (key in ob2) {
      // check the val against val
      if (val !== ob2[key]) {
        result = false;
      }
    } else {
      result = false;
    }
  });
  return result;
};

// Helper
function forEach(ob, cb) {
  for (var key in ob) {
    cb(ob[key], key, ob);
  }
};

// Test:
console.log(deepCompare({name: 'Bruce'}, {name: 'Bruce'})); // True
console.log(deepCompare({name: 'Bruce'}, {name: 'Steven'})); // False
console.log(deepCompare({member: {name: 'Bruce', job: 'Hunter'}}, {member: {name: 'Bruce', job: 'Hunter'}})); // True
console.log(deepCompare({member: {name: 'Bruce', job: 'Hunter'}}, {member: {name: 'Tom', job: 'Seeker'}})); // False
