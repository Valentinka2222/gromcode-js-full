const handleClick = (event) => {
  if (event.target.nodeName === 'BUTTON') {
    console.log(event.target.textContent);
  }
};

document.body.addEventListener('click', handleClick);
