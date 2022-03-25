const btnelem = document.querySelector('.btn');
const bodyBtn = document.querySelector('body');
const handleClick = (event) => {
  if (btnelem) {
    console.log(event.target.textContent);
  }
};
bodyBtn.addEventListener('click', handleClick);
