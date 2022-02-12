const splitString = (str, len) => {
  let strArr = [];
  let startPosition = 0;
  if (str.length === len) {
    strArr.push(str);
  }
  if (len === undefined) {
    len = 10;
  }
  if (typeof str !== 'string') {
    return null;
  } else if (str.length % len === 0) {
    str = str;
  } else if (len < str.length / 2) {
    str =
      str +
      str[str.length - 1]
        .slice(-1, 0)
        .concat('.')
        .repeat(len - (str.length % len));
    console.log(str.length);
  } else {
    str =
      str +
      str[str.length - 1]
        .slice(-1, 0)
        .concat('.')
        .repeat(len - (str.length - len));
    console.log(str.length);
  }

  while (len < str.length) {
    let chunk = str.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += len;
  }

  return strArr;
};
console.log(splitString('erttwqqwrt', 3));
