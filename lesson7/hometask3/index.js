function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = arr.slice().map((num) => {
    if (num % 2 === 0) {
      num = num + delta;
    }
    return num;
  });
  return copy;
}
const arr = [5, 7, 4, 9, 2];
console.log(increaseEvenEl(arr, 20));
