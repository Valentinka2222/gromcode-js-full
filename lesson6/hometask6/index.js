const numbers = [2, 3, 4, 5];

function cloneArr(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let newCloneArr = [...numbers];

  return newCloneArr;
}
console.log(cloneArr(numbers));
