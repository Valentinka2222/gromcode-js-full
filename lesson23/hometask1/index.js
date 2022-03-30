const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.setAttribute('data-status', 'notDone');
      if (done) {
        checkbox.setAttribute('data-status', 'done');
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);
      checkbox.addEventListener('click', function getCheckboxStatus() {
        if (checkbox.checked) {
          checkbox.setAttribute('data-status', 'done');
          listItemElem.classList.add('list__item_done');
        } else {
          checkbox.setAttribute('data-status', 'notDone');
          listItemElem.classList.remove('list__item_done');
        }
      });

      console.log(checkbox);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);
const inputElem = document.querySelector('.task-input');
const inputText = () => {
  if (inputElem.value.length === 0) {
    return;
  }
  const newTask = [
    {
      text: inputElem.value,
    },
  ];
  renderTasks(newTask);
  inputElem.value = '';
};

inputText();
inputElem.addEventListener('change', inputText);

// put your code here
