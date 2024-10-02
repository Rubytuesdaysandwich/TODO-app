const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.querySelector('.the-todo-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const dueDate = taskDate.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = `${taskText} (Due: ${dueDate})`;

        const removeButton = document.createElement('span');
        removeButton.textContent = ' ❌';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
        taskDate.value = ''; // Clear date input
    }
});