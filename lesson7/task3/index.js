const flatArray = (arr) => {
  const flatArray = arr.slice().reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flatArray.sort((a, b) => a - b);
};

const arr = [43, 45, 67, [1, 246, 44, 3], 45];
console.log(flatArray(arr));
