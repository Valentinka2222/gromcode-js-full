export const wallet = {
  transactions: [4, 54, 23, 58],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
console.log(wallet.getMin());
