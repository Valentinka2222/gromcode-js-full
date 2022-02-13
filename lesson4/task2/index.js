// put your code here
let result = 1;
const n = 20;
const m = 10;
for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    result *= i;
  }
}
console.log(result);
