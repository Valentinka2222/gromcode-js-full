const sortDesc = (numbers) => {
  return numbers.slice().sort((a, b) => b - a);
};
const arr = [3, 45, 2, 6, 466, 78, 99];

console.log(sortDesc(arr));
