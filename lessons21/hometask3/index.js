'use-strick';

export function getTitle() {
  let elementTitle = document.querySelector('.title').textContent;
  console.dir(elementTitle);
  return elementTitle;
}
getTitle();

export function getDescription() {
  let element = document.querySelector('.about').innerText;
  console.dir(element);
  return element;
}
getDescription();

export function getPlans() {
  let elementPlans = document.querySelector('.plans').innerHTML;
  console.dir(elementPlans);
  return elementPlans;
}
getPlans();

export function getGoal() {
  let elementGoal = document.querySelector('.goal').outerHTML;
  console.dir(elementGoal);
  return elementGoal;
}
getGoal();
