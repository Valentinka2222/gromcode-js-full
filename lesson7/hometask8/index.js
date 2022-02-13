function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((sum, elem) => sum + elem) / arr.length;
}
const arr = [3, 65, 34, 6];
console.log(arrAverage(arr));
