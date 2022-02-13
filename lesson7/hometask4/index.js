function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice();
}
const arr = [5, 7, 4, 9, 2];
console.log(cloneArr(arr));
