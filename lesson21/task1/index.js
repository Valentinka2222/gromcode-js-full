'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */

let myNode = document.querySelector('.list');

function removeLi() {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
removeLi();

const renderTasks = (tasksList) => {
  const listElement = document.querySelector('.list');

  const listItemsElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');

      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');

      listItemElem.append(checkboxElem, text);
      console.log(listItemElem);
      return listItemElem;
    });

  listElement.append(...listItemsElements);
};
renderTasks(tasks);
