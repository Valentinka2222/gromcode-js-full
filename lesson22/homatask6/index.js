const bodyBtn = document.querySelector('body');

const handleClick = (event) => {
  if (event.target.nodeName === 'BUTTON') {
    console.log(event.target.textContent);
  }
};
bodyBtn.addEventListener('click', handleClick);
