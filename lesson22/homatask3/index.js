const checkboxElem = document.querySelector('.task-status');
const statusCheckbox = () => {
  if (checkboxElem.checked === true) {
    console.log('true');
  } else {
    console.log('false');
  }
};
checkboxElem.addEventListener('click', statusCheckbox);
