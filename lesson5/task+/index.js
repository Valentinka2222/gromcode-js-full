/**
 * @param {number} num
 * @return {undefined}
 */

function getPrimes(num) {
  let primeNum = 0;
  let counter = 0;
  if (num <= 2) {
    return undefined;
  }
  for (let i = 2; i <= num; ++i) {
    counter = 0;
    if (i < 2) {
      continue;
    }
    for (let j = 2; j <= num; ++j) {
      if (i >= j && i % j === 0) {
        ++counter;
      }
    }
    if (counter === 1) {
      primeNum = i;
      console.log(primeNum);
    }
  }
}
getPrimes(7);
