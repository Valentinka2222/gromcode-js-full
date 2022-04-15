'use strict';

export const delay = (time) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return p;
};
delay(300).then(() => console.log('Done'));
