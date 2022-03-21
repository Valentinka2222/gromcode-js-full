export function finishList() {
  const elementList = document.querySelector('.list');
  const elementLi1 = document.createElement('li');
  elementLi1.textContent = '1';
  elementList.prepend(elementLi1);
  const elementSpecial = document.querySelector('.special');
  const elementLi4 = document.createElement('li');
  elementLi4.textContent = '4';
  elementSpecial.before(elementLi4);
  const elementLi6 = document.createElement('li');
  elementLi6.textContent = '6';
  elementSpecial.after(elementLi6);
  const elementLi8 = document.createElement('li');
  elementLi8.textContent = '8';
  elementList.append(elementLi8);
}
finishList();
