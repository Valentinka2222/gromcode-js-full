export function setButton(buttonText) {
  const elementBody = document.querySelector('body');
  elementBody.innerHTML = buttonText;
}
setButton('<button>button text </button>');
