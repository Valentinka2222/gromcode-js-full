import { createUser, getUser } from './usersGateway.js';

const baseUrl = 'https://626567dd94374a2c506ffa47.mockapi.io/newUser';

export const getValueInput = () => {
  const email = document.querySelector('input[name = "email"]');
  const name = document.querySelector('input[name = "name"]');
  const password = document.querySelector('input[name = "password"]');

  const user = {
    email: email.value,
    name: name.value,
    password: password.value,
  };

  createUser(user).then(() => getUser());

  fetch(baseUrl).then((response) => {
    if (response.ok) {
      email.value = '';
      name.value = '';
      password.value = '';
    }
  });

  getUser().then((res) => alert(JSON.stringify(res)));
};
