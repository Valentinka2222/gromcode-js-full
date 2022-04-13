'use strict';

export const asyncCalculator = (numbr) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value:${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value * value;
            console.log(`Squared value:${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(
      (value) =>
        new Promise((resolve) => {
          const result = value * 2;
          console.log(`Doubled value:${result}`);
          resolve(result);
        }),
    );

  return p;
};
asyncCalculator(5).then((data) => console.log(data));
