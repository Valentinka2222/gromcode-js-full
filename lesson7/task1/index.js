const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

const arr = [2, 89, 4, 24, 564, 24];
console.log(getSpecialNumbers(arr));
