import { createReposElem } from './createRep.js';

import { fetchUserData, fetchRep } from './requests.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
const userAvatarElem = document.querySelector('.user__avatar');

userAvatarElem.src = defaultAvatar;
export const renderUserData = (userData) => {
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');
  createReposElem();
  const userReposUrlElem = document.querySelector('.repos_url');
  const { name, location, repos_url, avatar_url } = userData;
  userLocationElem.textContent = location ? `from ${location}` : '';
  userReposUrlElem.textContent = repos_url;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  console.log(userData);
  fetchUserData(name);

  fetchRep(name);
  const successRequest = Promise.resolve(userData);
  successRequest.then((data) => {
    if (data) {
      const spinnerElem = document.querySelector('.spinner');
      spinnerElem.classList.add('spinner_hidden');
    }
  });

  const failedRequest = Promise.reject(new Error('Failed to load data'));
  failedRequest.catch((err) => {
    alert(err.message);
  });
};
