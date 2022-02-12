export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
}
const arr = [5, 7, 4, 9, 2];
console.log(reverseArray(arr));
