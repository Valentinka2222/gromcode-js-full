'use strist';

export const createCalculator = () => {
  let num = 0;
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

  let e = decrease(3);
  console.log(e);

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
        return num;
      } else {
        return num;
      }
    default:
      num = 0;
  }

  return { getMemo, reset, decrease, add };
};

const calculator1 = createCalculator();
const calculator2 = createCalculator();
