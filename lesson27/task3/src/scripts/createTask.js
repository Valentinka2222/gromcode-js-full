import { renderTasks } from './renderer.js';

import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  let taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem = '';
  const tasksList = getItem('taskList') || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('taskList', newTasksList);
  renderTasks();
};
