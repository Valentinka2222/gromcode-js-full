'use strict';

export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
getItemsList();
export function getItemsArray() {
  const NodeList = document.querySelectorAll('.tool');

  let elementArray = Array.from(NodeList);
  console.dir(elementArray);
  return elementArray;
}
getItemsArray();
