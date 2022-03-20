'use-strick';

function getTitle() {
  let elementTitle = document.querySelector('.title');
  return elementTitle.textContent;
}
getTitle();

function getDescription() {
  let element = document.querySelector('.about');

  return element.innerText;
}
getDescription();

function getPlans() {
  let elementPlans = document.querySelector('.plans');

  return elementPlans.innerHTML;
}
getPlans();

function getGoal() {
  let elementGoal = document.querySelector('.goal');

  return elementGoal.outerHTML;
}
getGoal();
export { getDescription, getGoal, getPlans, getTitle };
