function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = arr.slice().map((elem) => elem * elem);
  return copy;
}
const arr = [5, 7, 4, 9, 2];
console.log(squareArray(arr));
