export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let res = arr.reduce((a, b) => (Math.abs(a) < Math.abs(b) ? a : b));

  return res * res;
};
