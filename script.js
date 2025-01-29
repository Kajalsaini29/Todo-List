const addTask = () => {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    const taskList = document.getElementById('todo-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="actions">
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
      </div>
    `;

    taskList.appendChild(listItem);
    input.value = '';
  };

  const deleteTask = (button) => {
    const task = button.parentElement.parentElement;
    task.remove();
  };

  const editTask = (button) => {
    const task = button.parentElement.parentElement;
    const taskText = task.querySelector('.task-text');
    const newTaskText = prompt('Edit your task:', taskText.textContent);

    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskText.textContent = newTaskText.trim();
    }
  };

