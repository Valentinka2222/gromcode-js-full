function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let el of arr) {
    sum += el;
  }
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSum([2, 5, 5]));
