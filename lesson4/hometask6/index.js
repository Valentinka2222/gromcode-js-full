// put your code here
let sum = 0;
let div = 0;
let mods = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
  mods = sum % 1234;
  div = (sum - mods) / 1234;
}
if (div > mods) {
  console.log(true);
} else {
  console.log(false);
}
console.log(sum);
console.log(mods);
console.log(div);
