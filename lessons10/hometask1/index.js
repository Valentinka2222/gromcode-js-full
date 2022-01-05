/**
 * @param {number} num
 * @return {number[]}
 */

const getTotalPrice = (arr) => {
  const absoluteValues = arr.reduce((acc, num) => {
    if (Number.parseFloat(num)) {
      acc += num;
      return Number(acc.toFixed(2));
    }
  });
  return '$' + absoluteValues;
};

// examples
console.log(getTotalPrice([1.555, 10, 3])); // ===> 10
