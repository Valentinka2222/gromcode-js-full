import { createRepoListElem } from './createRep.js';

import { renderUserData } from './renderer.js';

export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json(),
  );
};
export const fetchRep = (reposName) => {
  return fetch(`https://api.github.com/users/${reposName}/repos`).then(
    (response) =>
      response
        .json()
        .then((repos) => repos.map((elem) => createRepoListElem(elem.name))),
  );
};
export const onSearchUser = () => {
  const spinnerElem = document.querySelector('.spinner_hidden');
  const userNameInputElem = document.querySelector('.name-form__input');
  const userName = userNameInputElem.value;

  spinnerElem.classList.remove('spinner_hidden');

  fetchUserData(userName).then((userData) => renderUserData(userData));

  try {
    fetchRep, fetchUserData, onSearchUser;
  } catch (e) {
    alert('Failed to load data');
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }
};
