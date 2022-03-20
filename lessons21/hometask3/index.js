'use-strick';

export function getTitle() {
  let textContent = document.querySelector('.title').textContent;
  console.dir(textContent);

  return textContent;
}
getTitle();

export function getDescription() {
  let innerText = document.querySelector('.about').innerText;

  return innerText;
}
getDescription();

export function getPlans() {
  let innerHTML = document.querySelector('.plans').innerHTML;
  return innerHTML;
}
getPlans();

export function getGoal() {
  let outerHTML = document.querySelector('.goal').outerHTML;

  return outerHTML;
}
getGoal();
