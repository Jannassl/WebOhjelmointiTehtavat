// array for todo list
const todoList = [
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

let ulElement = document.querySelector("ul");

for(let todo of todoList){
  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = todo.id;
  if (todo.completed){
    checkbox.checked = true;
  }
  let label = document.createElement('label');
  label.htmlFor = todo.id;
  label.textContent = todo.task;

  li.appendChild(checkbox);
  li.appendChild(label);

  ulElement.appendChild(li);
}
