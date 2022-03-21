export function setButton(buttonText) {
  const elementBody = document.querySelector('body');
  const elementButton = document.createElement('button');
  elementButton.innerHTML = buttonText;
  elementBody.append(elementButton);
}
setButton('check');
