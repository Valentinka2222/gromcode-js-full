export function setTitle(text) {
  const elementTitle = document.querySelector('.title');
  elementTitle.textContent = text;
}
setTitle('Hello');
