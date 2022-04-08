'use strict';

export const pinger = (count, period) => {
  const interval = setInterval(() => {
    console.log('Ping');
  }, period);
  setTimeout(() => {
    clearInterval(interval);
  }, count * period);
};

pinger(5, 1000);
