'use-strick';

export function getTitle() {
  let elementContent = document.querySelector('.title');
  let text = elementContent.textContent;

  return text;
}
getTitle();

export function getDescription() {
  let element = document.querySelector('.about');
  let text = element.innerText;

  return text;
}
getDescription();

export function getPlans() {
  let elementPlans = document.querySelector('.plans');
  let text = elementPlans.innerHTML;

  return text;
}
getPlans();

export function getGoal() {
  let elementGoal = document.querySelector('.goal');
  let text = elementGoal.outerHTML;
  return text;
}
getGoal();
