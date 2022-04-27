import { createRepoListElem } from './createRep.js';

import { renderUserData } from './renderer.js';

const baseUrl = 'https://api.github.com/users';

export const fetchUserData = (userName) => {
  return fetch(`${baseUrl}/${userName}`).then((response) => response.json());
};
export const fetchRep = (reposName) => {
  return fetch(`${baseUrl}/${reposName}/repos`).then((response) =>
    response
      .json()
      .then((repos) => repos.map((elem) => createRepoListElem(elem.name))),
  );
};
export const onSearchUser = () => {
  const spinnerElem = document.querySelector('.spinner_hidden');
  const userNameInputElem = document.querySelector('.name-form__input');
  const userName = userNameInputElem.value;
  if (!userName) {
    return;
  }

  fetchUserData(userName).then((userData) => {
    spinnerElem.classList.remove('spinner_hidden');
    renderUserData(userData);
  });

  try {
    fetchRep, fetchUserData;
  } catch (e) {
    alert('Failed to load data');
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }
};
