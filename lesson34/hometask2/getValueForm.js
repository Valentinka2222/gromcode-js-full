import { createUser, getUser } from './usersGateway.js';

export const getValueInput = () => {
  let email = document.querySelector('input[name = "email"]');
  let name = document.querySelector('input[name = "name"]');
  let password = document.querySelector('input[name = "password"]');

  const user = {
    email: email.value,
    name: name.value,
    password: password.value,
  };

  createUser(user).then(() => getUser());

  email = '';
  name = '';
  password = '';

  getUser().then((res) => alert(JSON.stringify(res)));
};
