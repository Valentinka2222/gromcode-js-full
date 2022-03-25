const inputElem = document.querySelector('.text-input');
function handleClick(event) {
  console.log(event.target.value);
}
inputElem.addEventListener('change', handleClick);
