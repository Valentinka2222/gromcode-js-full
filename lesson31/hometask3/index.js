'use strict';

export const delay = (time) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return p;
};
delay(3000).then(() => console.log('Done'));
