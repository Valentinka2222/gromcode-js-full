/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (numb) => {
  const p = new Promise((resolve) => {
    return resolve(numb);
  });
  return p;
};

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
