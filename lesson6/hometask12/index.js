function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  for (let num of array) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}
console.log(removeDuplicates([2, 3, 3, 4, 4, 4, 5, 6, 7]));
