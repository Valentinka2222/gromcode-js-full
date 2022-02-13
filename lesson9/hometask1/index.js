function getKeys(obj) {
  const keys = Object.keys(obj);
  keys.forEach((key) => console.log(key));
}

const user = {
  name: 'Tom',
  age: 17,
  surname: 'Ivanov',
};
getKeys(user);
