'use-strick';

export function getTitle() {
  let elementTitle = document.querySelector('.title').textContent;

  return elementTitle;
}
getTitle();

export function getDescription() {
  let element = document.querySelector('.about').innerText;

  return element;
}
getDescription();

export function getPlans() {
  let elementPlans = document.querySelector('.plans').innerHTML;
  return elementPlans;
}
getPlans();

export function getGoal() {
  let elementGoal = document.querySelector('.goal').outerHTML;

  return elementGoal;
}
getGoal();
