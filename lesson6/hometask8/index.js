const array = [2, 7, 4, 12, 9, 1000];

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    newArr.push(array[i]);
  }
  return newArr;
}
console.log(sortAsc(array));
console.log(sortDesc(array));
function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    newArr.push(array[i]);
  }
  return newArr;
}
