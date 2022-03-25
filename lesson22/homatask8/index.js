const checkboxElem = document.querySelector('.task-status');
function handleClick(event) {
  if (checkboxElem.checked) {
    console.log('true', event.target.checked);
  } else {
    console.log('false', event.target.checked);
  }
}
checkboxElem.addEventListener('change', handleClick);
