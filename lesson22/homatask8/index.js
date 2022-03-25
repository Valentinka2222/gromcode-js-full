const checkboxElem = document.querySelector('.task-status');
function handleClick(event) {
  if (event.target.checked === true) {
    console.log('true');
  } else {
    console.log('false');
  }
}
checkboxElem.addEventListener('change', handleClick);
