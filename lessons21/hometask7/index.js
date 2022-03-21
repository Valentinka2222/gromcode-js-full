export function createButton(buttonText) {
  const elementBody = document.querySelector('body');
  const elementButton = document.createElement('button');
  elementButton.textContent = buttonText;
  elementBody.append(elementButton);
  console.log(elementButton);
}
createButton('Hello');
