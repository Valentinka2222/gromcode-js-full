/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  let newObj = {};

  props.forEach((elem) => {
    for (let key in obj) {
      if (elem === key) {
        newObj[key] = obj[key];
      }
    }
  });
  return newObj;
};
