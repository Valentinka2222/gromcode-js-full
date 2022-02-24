'use strick';

export class Wallet {
  constructor() {
    this.balance = 0;
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  windraw(amount) {
    if (amount > this.balance) {
      console.log('No enough funds');
      return;
    }
    this.balance -= amount;
  }
}
export { Wallet };
