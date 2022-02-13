const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const getCustomersList = (obj) => {
  let copyObj = {};
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      copyObj[key] = Object.assign({}, obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }
  let array = [];
  console.log(obj);
  array = Object.values(copyObj);
  array.forEach((element, i) => {
    element.id = Object.keys(copyObj)[i];
  });
  array.sort((a, b) => a.age - b.age);

  return array;
};
console.log(getCustomersList(customers));
