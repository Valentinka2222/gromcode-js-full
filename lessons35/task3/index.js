import { onSearchUser } from './requests.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
showUserBtnElem.addEventListener('click', onSearchUser);

window.addEventListener('unhandledrejection', function (event) {
  alert(event.promise);
});
