export const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};
const counters1 = makeCounter();
const counters2 = makeCounter();
console.log(counters1());
console.log(counters2());
