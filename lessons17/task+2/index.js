const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
};
const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NASDAQ',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation}`);
  },
};
const func = transaction.printTransaction();

export const bind = function (func, context) {
  const bindArgs = [].slice.call(arguments, 2);
  return function () {
    const fnArgs = [].slice.call(arguments);
    return func.apply(context, bindArgs.concat(fnArgs));
  };
};
bind();
