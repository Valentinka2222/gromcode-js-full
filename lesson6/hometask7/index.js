const arr = [2, 3, 4, 5, 9, 1000];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let min = arr[arr.length - 1];
  for (let j = arr.length - 2; j >= 0; --j) {
    if (arr[j] < min) {
      min = arr[j];
    }
  }
  let sum = 0;
  sum = min + max;
  console.log(sum);

  if (sum < 1000) {
    return false;
  }

  return true;
}

console.log(checker(arr));
