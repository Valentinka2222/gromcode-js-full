'use strict';

export function squaredNumbers() {
  const elementList = document.querySelectorAll('li');
  let array = Array.from(elementList);
  array.map((elem) => {
    const number = elem.dataset.number;
    elem.dataset.squaredNumber = number * number;
  });

  return elementList;
}
