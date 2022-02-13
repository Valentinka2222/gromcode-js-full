function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.reduce((total, elem) => total + elem);
  return res;
}

console.log(sum([23, 43, 456, 77, 88]));
