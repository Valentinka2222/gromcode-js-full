/**
 * @param {number} num
 * @return {number[]}
 */

const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  } else {
    const absoluteValues = arr.map((num) => {
      if (Number.parseFloat(num)) {
        return Math.abs(num);
      } else {
        return null;
      }
    });
    return Math.max(...absoluteValues);
  }
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([]));
