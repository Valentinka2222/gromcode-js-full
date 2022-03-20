'use-strick';

export function getTitle() {
  let text = document.querySelector('.title').textContent;
  console.dir(text);
}
getTitle();

export function getDescription() {
  return document.querySelector('.about').innerText;
}
getDescription();

export function getPlans() {
  return document.querySelector('.plans').innerHTML;
}
getPlans();

export function getGoal() {
  return document.querySelector('.goal').outerHTML;
}
getGoal();
