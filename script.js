document.addEventListener('DOMContentLoaded', () =>  {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    })

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Жою';
        deleteButton.addEventListener('click', () => {
          taskList.removeChild(li);
        })
          li.appendChild(deleteButton);
          taskList.appendChild(li)
    }
})