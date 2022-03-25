const btnElem = document.querySelector('.btn');

const handleClick = (event) => {
  if (event.target.classList.contains('btn')) {
    console.log(event.target.textContent);
  }
};

document.body.addEventListener('click', handleClick);
