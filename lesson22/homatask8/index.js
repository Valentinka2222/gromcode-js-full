const checkboxElem = document.querySelector('.task-status');
function handleClick(event) {
  if (event.target.checked === true) {
    console.log('true');
    console.log(event.target.checked);
  } else {
    console.log('false');
    console.log(event.target.checked);
  }
}
checkboxElem.addEventListener('change', handleClick);
