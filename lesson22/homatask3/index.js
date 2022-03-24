const checkboxElem = document.querySelector('.task-status');
const statusCheckbox = () => {
  if (checkboxElem.checked === true) {
    console.log(checkboxElem.value);
    console.log('true');
  } else {
    console.log(checkboxElem.value);
    console.log('false');
  }
};
const inputText = () => {
  console.log(checkboxElem.checked);
};
checkboxElem.addEventListener('click', statusCheckbox);
checkboxElem.addEventListener('change', inputText);
