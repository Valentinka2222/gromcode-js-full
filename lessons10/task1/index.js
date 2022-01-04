const numbers = [1, 'text', 2.7, '13', 90, null, undefined];
const getFiniteNumbers = (arr) => {
  let result = [];
  arr.map((elem) => {
    if (Number.isFinite(elem)) {
      return result.push(elem);
    }
  });
  return result;
};
console.log(getFiniteNumbers(numbers));
const getFiniteNumbersV2 = (arr) => {
  let result = [];
  arr.map((elem) => {
    if (isFinite(elem)) {
      return result.push(elem);
    }
  });
  return result;
};
console.log(getFiniteNumbersV2(numbers));
const getNaN = (arr) => {
  let result = [];
  arr.map((elem) => {
    if (Number.isNaN(elem)) {
      return result.push(elem);
    }
  });
  return result;
};
console.log(getNaN(numbers));
const getNaNV2 = (arr) => {
  let result = [];
  arr.map((elem) => {
    if (isNaN(elem)) {
      return result.push(elem);
    }
  });
  return result;
};
console.log(getNaNV2(numbers));
const getIntegers = (arr) => {
  let result = [];
  arr.map((elem) => {
    if (Number.isInteger(elem)) {
      return result.push(elem);
    }
  });
  return result;
};
console.log(getIntegers(numbers));
