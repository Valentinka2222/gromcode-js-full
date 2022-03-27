export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    acc += elem * elem;
    return acc;
  }, 0);
}
console.log(sumOfSquares(1, 2, 3, 4));
