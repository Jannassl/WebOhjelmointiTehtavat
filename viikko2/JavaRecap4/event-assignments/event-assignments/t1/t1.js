// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
let ulElement = document.querySelector('ul');


for(let todo of todoList){
  let checkedAttribute = todo.completed ? 'checked' : '';
  ulElement.insertAdjacentHTML('beforeend', `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${checkedAttribute}>
      <label for="todo-${todo.id}">${todo.task}</label>
      <button class="delete-btn">Delete</button>
    </li>
  `);

  let checkbox = document.querySelector(`#todo-${todo.id}`);
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });

  let deleteBtn = document.querySelector(`#todo-${todo.id}`).nextElementSibling;
  deleteBtn.addEventListener('click', () => {
  todoList = todoList.filter(t => t.id !== todo.id);
  ulElement.removeChild(deleteBtn.parentElement);
  console.log(todoList);
});
}

let addButton = document.getElementById("target2");


addButton.addEventListener('click', function() {
  dialog.showModal();
});

let saveButton = document.getElementById("target1");
let inputField = document.querySelector("dialog input");
let dialog = document.querySelector("dialog");
let nextId = todoList.length + 1;

saveButton.addEventListener('click', function(event) {
  event.preventDefault();
  let newTodo = {
    id: nextId++,
    task: inputField.value,
    completed: false
  };
  todoList.push(newTodo);
  console.log(todoList);

  ulElement.insertAdjacentHTML('beforeend', `
    <li>
      <input type="checkbox" id="todo-${newTodo.id}">
      <label for="todo-${newTodo.id}">${newTodo.task}</label>
      <button class="delete-btn">Delete</button>
    </li>
  `);

  let li = ulElement.lastElementChild;
  let checkbox = li.querySelector('input');
  let deleteBtn = li.querySelector('.delete-btn');

  checkbox.addEventListener('change', () => {
    newTodo.completed = checkbox.checked;
    console.log(todoList);
  });

  deleteBtn.addEventListener('click', () => {
    todoList = todoList.filter(t => t.id !== newTodo.id);
    ulElement.removeChild(li);
    console.log(todoList);
  });

  inputField.value = '';
  dialog.close();
});
