'use-strick';

export function getTitle() {
  let elementTitle = document.querySelector('.title');
  return elementTitle.textContent;
}
getTitle();

export function getDescription() {
  let element = document.querySelector('.about');

  return element.innerText;
}
getDescription();

export function getPlans() {
  let elementPlans = document.querySelector('.plans');

  return elementPlans.innerHTML;
}
getPlans();

export function getGoal() {
  let elementGoal = document.querySelector('.goal');

  return elementGoal.outerHTML;
}
getGoal();
