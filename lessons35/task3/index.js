import { onSearchUser } from './requests.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
showUserBtnElem.addEventListener('click', onSearchUser);
const userNameInputElem = document.querySelector('.name-form__input');
const spinner = () => {
  const spinnerElem = document.querySelector('.spinner');
  spinnerElem.classList.remove('spinner_hidden');
};

userNameInputElem.addEventListener('click', spinner);

window.addEventListener('unhandledrejection', function (event) {
  alert(event.promise);
});
