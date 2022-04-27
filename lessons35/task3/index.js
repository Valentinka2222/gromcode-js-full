import { onSearchUser } from './requests.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
showUserBtnElem.addEventListener('click', onSearchUser);

const spinner = () => {
  const spinnerElem = document.querySelector('.spinner');
  spinnerElem.classList.remove('spinner_hidden');
};

showUserBtnElem.addEventListener('click', spinner);

window.addEventListener('unhandledrejection', function (event) {
  alert(event.promise);
});
