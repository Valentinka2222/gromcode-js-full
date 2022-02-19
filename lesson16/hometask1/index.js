export const createArrayOfFunctions = (num) => {
  const arr = [];
  if (!num) {
    return [];
  }
  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
    arr.length = num;
  }

  if (typeof num !== 'number') {
    return null;
  }

  return arr;
};
console.log(createArrayOfFunctions(5)[4]());
