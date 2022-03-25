const btnElem = document.querySelector('.btn');
const bodyBtn = document.querySelector('body');
const handleClick = (event) => {
  if (btnElem) {
    console.log(event.target.textContent);
  }
};
bodyBtn.addEventListener('click', handleClick);
