const transaction = ['  1.9 ', '16.4', 17, ' 1 dollar '];

const cleanTransactionsList = (arr) => {
  let arr2 = [];
  arr.filter((element) => {
    if (typeof element === 'number') {
      arr2.push(`$${element.toFixed(2)}`);
    } else if (typeof element === 'string' && !isNaN(element)) {
      arr2.push('$' + Number(element.trim().split(' ').join('')).toFixed(2));
    }
  });
  return arr2;
};

console.log(cleanTransactionsList(transaction));
