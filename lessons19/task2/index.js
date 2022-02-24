'use strick';

export function getOwnProps(obj) {
  let arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) !== 'function') {
      arr = arr.concat(prop);
      return arr;
    }
  }
}
const vehicle = {
  name: 'igor',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
console.log(getOwnProps(vehicle));
