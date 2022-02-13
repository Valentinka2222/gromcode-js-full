'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  let obj = {};

  let newObj = keysList.reduce((key, index) => {
    index = keysList.indexOf(key);

    console.log(obj);

    return obj;
  });
  keysList.forEach((key, i) => (newObj[key] = valuesList[i]));
  return newObj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
