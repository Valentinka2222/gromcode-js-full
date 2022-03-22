'use strict';

export function getSection(num) {
  const elemSpan = document.querySelector(`span[data-number="${num}"]`);

  if (elemSpan) {
    return elemSpan.parentNode.getAttribute('data-section');
  }
}
getSection(1);
