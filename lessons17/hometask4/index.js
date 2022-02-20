export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  setFullName(value) {
    let split = value.split(' ');
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

user.setFullName('Ivan Petrov');

console.log(user.firstName);
console.log(user.lastName);
