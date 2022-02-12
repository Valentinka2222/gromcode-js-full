const getRandomNumbers = (length, from, to) => {
  let arr = [];
  let rand = 0;
  if (to - from >= 1) {
    for (let i = 0; i < length - 1; i++) {
      rand = Math.ceil(Math.random() * Math.floor(to - from) + from);

      arr[i] = rand;
      arr.push(rand);
    }
  } else {
    return null;
  }
  return arr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
