const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-73-77',
  },
  {
    name: 'Angelina',
    phoneNumber: '777-78-77',
  },
  {
    name: 'Tomas',
    phoneNumber: '777-77-77',
  },
];

const sortContacts = (arr, direction) => {
  if (!Array.isArray(arr)) {
    return null;
  } else if (direction === true || direction === undefined) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  } else if (direction === false) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
  }
};

console.log(sortContacts(contacts));
