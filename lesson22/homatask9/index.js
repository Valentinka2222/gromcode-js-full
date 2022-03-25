const divBtn = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.getAttribute('data-page-number'));
}

divBtn.forEach((button) => {
  button.addEventListener('click', handleClick);
});
