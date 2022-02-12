const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let res;
  switch (operator) {
    case '+':
      res = Number(a) + Number(b);
      break;
    case '-':
      res = Number(a) - Number(b);
      break;
    case '*':
      res = Number(a) * Number(b);
      break;
    case '/':
      res = Number(a) / Number(b);
      break;
  }
  return `${expression} = ${res}`;
};
console.log(calc('6 / 2'));
