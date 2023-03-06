// references to the form and task list
const form = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');

// Add event listener to form to handle form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get references to form inputs
  const taskNameInput = document.getElementById('task-name');
  const dueDateInput = document.getElementById('due-date');

  // Create new list item element and add it to the task list
  const taskListItem = document.createElement('li');

  // Create a checkbox element and add it to the list item
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    taskListItem.style.textDecoration = 'line-through';
  } else {
    taskListItem.style.textDecoration = 'none';
  }
  });
  taskListItem.appendChild(checkbox);

// Add the task name and due date to the list item
const taskName = document.createElement('span');
taskName.innerText = taskNameInput.value + ' - ' + dueDateInput.value;
taskListItem.appendChild(taskName);

  // Create a delete button element and add it to the list item
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskListItem);
  });
  taskListItem.appendChild(deleteButton);

  taskList.appendChild(taskListItem);

  // Clear the form inputs
  taskNameInput.value = '';
  dueDateInput.value = '';
});
