const numbers = [1, 2.7, 3.2, -19.1, 90, 3.1492, -10.5, -19.99];
const getParsedIntegers = (arr) => {
  let result = [];
  arr.map((elem) => result.push(Number.parseInt(elem)));
  return result;
};
console.log(getParsedIntegers(numbers));

const getParsedIntegersV2 = (arr) => {
  let result = [];
  arr.map((elem) => result.push(parseInt(elem)));
  return result;
};
console.log(getParsedIntegersV2(numbers));
const getParsedFloats = (arr) => {
  const result = [];
  arr.map((elem) => result.push(Number.parseFloat(elem)));
  return result;
};
console.log(getParsedFloats(numbers));
const getParsedFloatsV2 = (arr) => {
  const result = [];
  arr.map((elem) => result.push(parseFloat(elem)));
  return result;
};
console.log(getParsedFloatsV2(numbers));
