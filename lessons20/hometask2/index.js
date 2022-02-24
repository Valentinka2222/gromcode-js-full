/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }
  getUserNames() {
    return this._users.map(({ name }) => name);
  }
  getUserIds() {
    return this._users.map(({ id }) => id);
  }
  getUserNameById(value) {
    return this._users.filter((el) => el.id === value).map((el) => el.name);
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
export { User, UserRepository };
const user1 = new UserRepository(user);
console.log(user1.getUserIds);
console.log(user1.getUserIds);
/*const users = {
  id: 56,
  name: 'jjj',
};
function getUserNameById(value) {
  if (users.id === value) {
    return users.name;
  }
}
console.log(getUserNameById(56));*/
