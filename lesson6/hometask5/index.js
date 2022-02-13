// put your code here
const numbers = [2, 3, 4, 5];

function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    let b = numbers.length - 1;
    arr[i] = numbers[b - i];
  }
  return arr;
}
console.log(reverseArray(numbers));
