/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = (num) => {
  let arr = [];
  if (Number.parseFloat(num)) {
    arr = [
      Math.floor(num * 100) / 100,
      Math.trunc(num * 100) / 100,
      Math.ceil(num * 100) / 100,
      Math.round(num * 100) / 100,
      Number(num.toFixed(2)),
    ];
  }
  return arr;
};

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
