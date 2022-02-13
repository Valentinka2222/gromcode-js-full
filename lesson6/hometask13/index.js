function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  for (let num of array) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  let len = newArr.length;

  return len;
}

console.log(uniqueCount([2, 3, 3, 4, 4, 4, 5, 6, 7]));
