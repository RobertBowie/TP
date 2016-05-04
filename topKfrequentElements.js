/*
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var sortedFreq;
  var results = [];
  var elementFreq = {};
  // iterate through nums to populate element freq
  nums.forEach(function(number) {
    if (number in elementFreq) {
      elementFreq[number]++;
    } else {
      elementFreq[number] = 1;
    }
  });
  // build freq array with descending freq
  sortedFreq = Object.keys(elementFreq).sort(function(a, b) { return elementFreq[b] - elementFreq[a] } );
  // k based for loop
  for (var i = 0; i < k; i++) {
    // add sortedFreq[i] to results
    results.push(+sortedFreq[i]);
  }
  // return results
  return results;
};

// Test:

var test = [1,1,1,2,2,3];
console.log(topKFrequent(test, 2)); // [1,2]

var test2 = [5, 5, 5, 2, 2, 7, 7, 7, 7];
console.log(topKFrequent(test2, 3));

var test3 = [1, 1, 1, 1, 3, 3, 3, 3];
console.log(topKFrequent(test3, 2));

var test4 = [1, 2, 3, 4, 5, 6, 6, 2, 2, 7, 8, 2, 15, 5, 1, 1, 3, 14, 200, 8, 7, 6, 5, 4, 2, 1];
console.log(topKFrequent(test4, 4));
