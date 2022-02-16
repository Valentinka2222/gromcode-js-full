'use strict';
let num = 0;
const createCalculator = () => {
  num = 0;

  const reset = () => (num = 0);
  switch (typeof function () {} === 'function') {
    case add:
      num = d;
      break;
    case decrease:
      num = e;
      break;
    case reset:
      num = 0;
      break;
    case getMemo:
      if (num === d) {
        return d;
      } else {
        return e;
      }
  }

  function add(addNum) {
    num += addNum;
    addNum++;
    return num;
  }

  let d = add(5);
  console.log(d);

  function decrease(decreaseNum) {
    num -= decreaseNum;
    decreaseNum++;
    return num;
  }
  function getMemo(value) {
    value = num;
    return num;
  }

  let e = decrease(5);
  console.log(e);

  return { getMemo, reset, e, d };
};
const calculator = createCalculator();

export function add(addNum) {
  num += addNum;
  addNum++;
  return num;
}
export const reset = () => (num = 0);

export function getMemo(value) {
  value = num;
  return num;
}
export function decrease(decreaseNum) {
  num -= decreaseNum;
  decreaseNum++;
  return num;
}
