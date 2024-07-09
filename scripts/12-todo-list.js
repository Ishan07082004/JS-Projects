const todoList = [{
  name: 'do boxing',
  dueDate: '2024-07-02'
},{
  name: 'study js',
  dueDate: '2024-02-07'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todoList.splice(${index}, 1);
        renderTodoList();
      " class = "delete-todo-button">
        Delete
      </button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML
}

function AddTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';
  renderTodoList();
}