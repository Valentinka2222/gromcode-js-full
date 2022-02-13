function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; ++i) {
    sum += i;
  }
  return sum;
}
console.log(sum(5, 7));
function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}
console.log(compareSums(3, 5, 1, 2));
