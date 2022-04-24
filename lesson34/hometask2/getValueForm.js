import { createUser, getUser } from './usersGateway.js';

export const getValueInput = () => {
  const email = document.querySelector('input[name = "email"]');
  const name = document.querySelector('input[name = "name"]');
  const password = document.querySelector('input[name = "password"]');

  const user = {
    email: email.value,
    name: name.value,
    password: password.value,
  };
  createUser(user)
    .then(() => getUser())
    .then((users) => alert(users));
};
