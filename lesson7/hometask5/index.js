const withdraw = (clients, balances, client, amount) => {
  if (!Array.isArray(clients, balances)) {
    return null;
  }

  let index = clients.indexOf(client);
  let balance = balances[index] - amount;

  if (balances[index] < amount) {
    return -1;
  }
  balances[index] = balance;

  return balance;
};
const clients = ['Ivan', 'Nina', 'Alla', 'Sergey'];
const balances = [1000, 300, 250, 60];
console.log(withdraw(clients, balances, 'Sergey', 50));
