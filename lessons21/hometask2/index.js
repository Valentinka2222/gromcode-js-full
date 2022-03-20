'use strict';

export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
getItemsList();
export function getItemsArray() {
  const elementsArray = document.querySelectorAll('.tool');
  let NodeList = Array.from(elementsArray);

  console.dir(elementsArray);

  return NodeList;
}
getItemsArray();
