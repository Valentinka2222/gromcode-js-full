function withdraw(clients, balances, client, amount) {
  for (let i = 0; i <= clients.length; i++) {
    let result = 0;
    for (let j = i; j <= balances.length; j++) {
      if (amount < balances[j] && client === clients[i]) {
        result = balances[j] - amount;
        balances[j] = result;
        console.log(balances);
        return result;
      } else if (amount > balances[j]) {
        return -1;
      }
    }
  }
}

console.log(
  withdraw(
    ['Irina', 'Olga', 'Ivan', 'Andrey'],
    [1000, 2000, 4000, 7000],
    'Irina',
    700
  )
);
