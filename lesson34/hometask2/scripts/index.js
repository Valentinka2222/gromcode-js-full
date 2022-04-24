import { getValueInput } from './getValueForm.js';

const formControlElem = document.querySelector('form');
const registerButtonElem = document.querySelector('.submit-button');

export const validator = () => {
  const isvalid = document.querySelector('form').reportValidity();
  if (isvalid) {
    registerButtonElem.removeAttribute('disabled');
  }
};

formControlElem.addEventListener('input', validator);
registerButtonElem.addEventListener('click', getValueInput);