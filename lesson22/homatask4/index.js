const btnElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');
const inputText = () => {
  console.log(inputElem.value);
};
btnElem.addEventListener('click', inputText);
