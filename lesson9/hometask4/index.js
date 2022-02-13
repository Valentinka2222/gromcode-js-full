const getPeople = (obj) => {
  let arr = [];
  let values = Object.values(obj);
  values.forEach((el) => Object.values(el));
  values
    .reduce((acc, element) => {
      return acc.concat(element);
    }, [])
    .map((elem) => arr.push(elem.name));
  return arr;
};
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasy1' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
console.log(getPeople(rooms));
