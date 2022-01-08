const countOccurrences = (text, str) => {
  if (text === undefined) {
    text = '';
  }
  if (str.length === 0) {
    return null;
  } else {
    let count = str.split(text).length - 1;
    return count;
  }
};

console.log(countOccurrences('yt', 'crytrieyt'));
