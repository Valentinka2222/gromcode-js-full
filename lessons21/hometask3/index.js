'use-strick';

function getTitle() {
  return document.querySelector('.title').textContent;
}
getTitle();
function getDescription() {
  return document.querySelector('.about').innerText;
}
getDescription();

function getPlans() {
  return document.querySelector('.plans').innerHTML;
}
getPlans();

function getGoal() {
  return document.querySelector('.goal').outerHTML;
}
getGoal();
export { getDescription, getGoal, getPlans, getTitle };
