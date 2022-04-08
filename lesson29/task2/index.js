'use strict';

export const pinger = (count, period) => {
  let i = count;
  if (--i > 0) {
    console.log('Ping');
  }
  const interval = setInterval(() => {
    console.log('Ping');
  }, period);
  setTimeout(() => {
    clearInterval(interval);
  }, count * period);
};
pinger(5, 1000);
