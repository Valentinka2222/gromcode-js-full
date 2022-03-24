const btnElem = document.querySelector('.single-use-btn');

const oneEvent = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', oneEvent);
};
btnElem.addEventListener('click', oneEvent);
