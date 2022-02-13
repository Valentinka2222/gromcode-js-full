function filterNames(arr, text) {
  let elem = '';

  const copy = arr.slice().filter((elem) => {
    if (elem.includes(text) && elem.length > 5) {
      console.log(elem);
      return elem;
    }
  });

  return copy;
}
const names = ['john', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
console.log(filterNames(names, 'ya'));
