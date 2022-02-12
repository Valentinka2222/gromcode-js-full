const splitText = (str, len) => {
  let startPosition = 0;
  const strArr = [];
  if (typeof str != 'string') {
    return null;
  } else {
    while (true) {
      if (len === undefined) {
        len = 10;
      }
      let chunk = str.substr(startPosition, len);

      if (chunk.length === 0) {
        break;
      }
      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPosition += len;
    }
  }
  return strArr.join('\n');
};
console.log(splitText('erttw qqwrt', 4));
