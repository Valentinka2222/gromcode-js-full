/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

// put your code here
function addPropertyV2(userData, userId) {
  let obj = { id: userId };
  return Object.assign(userData, obj);
}
// put your code here
function addPropertyV3(userData, userId) {
  let obj = { ...userData };
  const copy = Object.assign(obj, { id: userId });
  console.log(copy);
  return copy;
}

// put your code here
function addPropertyV4(userData, userId) {
  userData = { id: userId, ...userData };
  console.log(userData);
  return userData;
}
// examples
const user = {
  name: 'Sam',
};
addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
addPropertyV2(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
addPropertyV3(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
addPropertyV4(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
