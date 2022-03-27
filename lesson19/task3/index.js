'use strick';

export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (value) {
  if (value < 0) {
    return false;
  }
  this.age = value;
  if (value >= 25) {
    this.requestNewPhoto();
  }
  return value;
};
const user1 = new User('Tom', 25);
console.log(user1);
user1.sayHi();
user1.setAge(10);
console.log(user1.age);
console.log(user1);
