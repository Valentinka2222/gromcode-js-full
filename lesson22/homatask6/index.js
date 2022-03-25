const bodyBtn = document.querySelectorAll('.btn');

function handleClick(event) {
  console.log(event.target.textContent);
}
bodyBtn.forEach((button) => {
  button.addEventListener('click', handleClick);
});
