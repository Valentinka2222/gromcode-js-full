'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

const superRound = (num, prec) => {
  let res = 10;
  for (let i = 1; i < prec; i++) {
    res *= 10;
  }

  const roundNum = [
    Math.floor(num * res) / res,
    Math.trunc(num * res) / res,
    Math.ceil(num * res) / res,
    Math.round(num * res) / res,
    Number(num.toFixed(prec)),
  ];
  return roundNum;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
