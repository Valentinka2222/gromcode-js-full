import { createReposElem } from './createRep.js';

import { fetchUserData, fetchRep } from './requests.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
userAvatarElem.src = defaultAvatar;

export const renderUserData = (userData) => {
  createReposElem();

  const userReposUrlElem = document.querySelector('.repos_url');
  const { avatar_url, name, location, repos_url } = userData;
  userLocationElem.textContent = location ? `from ${location}` : '';
  userReposUrlElem.textContent = repos_url;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  const successRequest = Promise.resolve(userData);
  successRequest.then((data) => {
    if (data) {
      const spinnerElem = document.querySelector('.spinner');
      spinnerElem.classList.add('spinner_hidden');
    }
  });

  fetchUserData(name);

  fetchRep(name);
};
