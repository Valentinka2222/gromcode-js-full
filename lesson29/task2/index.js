'use strict';

export const pinger = (count, period) => {
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};
