export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
};
console.log(user.getFullName());
