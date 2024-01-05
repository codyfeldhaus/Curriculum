document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addTaskButton');
  const tasksList = document.getElementById('tasksList');
  const newTaskInput = document.getElementById('newTask');

  addButton.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText) {
          const listItem = document.createElement('li');
          listItem.textContent = taskText;
          listItem.addEventListener('click', () => listItem.classList.toggle('completed'));
          tasksList.appendChild(listItem);
          newTaskInput.value = '';
      }
  });
});