import { createReposElem } from './createRep.js';

import { fetchUserData, fetchRep } from './requests.js';

const defaultAvatar = 'https://avatars.githubusercontent.com/u10004';

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

userAvatarElem.src = defaultAvatar;

export const renderUserData = (userData) => {
  createReposElem();
  const userReposUrlElem = document.querySelector('.repos_url');
  const { avatar_url, name, location, repos_url } = userData;
  userReposUrlElem.textContent = repos_url;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;

  fetchUserData(name);

  userLocationElem.textContent = location ? `from ${location}` : '';

  fetchRep(name);
};
