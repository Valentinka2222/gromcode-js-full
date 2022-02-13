'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */

function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  let start = 0;
  let arr = [...numbers];
  for (let i = 0; i <= numbers.length; i++) {
    start = arr.shift(0);
    arr.push(start);
  }
  return arr;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
