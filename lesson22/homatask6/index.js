const bodyBtn = document.querySelector('body');
function handleClick(event) {
  console.log(event.target.textContent);
}
bodyBtn.addEventListener('click', handleClick);
