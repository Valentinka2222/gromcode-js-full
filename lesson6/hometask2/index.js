'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let num of arr) {
    num *= num;
    newArr.push(num);
  }
  return newArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
