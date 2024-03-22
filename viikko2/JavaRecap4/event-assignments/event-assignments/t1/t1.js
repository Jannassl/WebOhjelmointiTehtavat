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
let ulElement = document.querySelector('ul');
for(let todo of todoList){

  let listItem = `<li>${todo.task} - ${todo.completed ? 'Completed' : 'Not Completed'}</li>`;

  ulElement.insertAdjacentHTML('beforeend', listItem);
}
