import { fetchRepositories, fetchUserData } from './gateways.js';

import { renderRepos, cleanReposList } from './repos.js';

import { renderUserData } from './user.js';

import { showSpinner, hiddenSpinner } from './spiner.js';

const defaultUser = {
  avatar_url: 'https://avatars.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;

  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hiddenSpinner();
    });
};
showUserBtnElem.addEventListener('click', onSearchUser);
