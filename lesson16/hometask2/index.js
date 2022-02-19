/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

/*var foo = 1;
function bar() {
  return true ? 1 : 10;
}
var foo = bar();
console.log(foo);
export default { foo };*/

const bar = () => {
  return true ? 1 : 10;
};
const foo = bar();
console.log(foo);
export default foo;
