const todoList = document.getElementById('lista-tarefas');
const createTask = document.getElementById('criar-tarefa');

function addTask() {
  const taskText = document.getElementById('texto-tarefa').value;
  let newTask = document.createElement('li');
  let taskNode = document.createTextNode(taskText);
  newTask.appendChild(taskNode);
  todoList.appendChild(newTask);
  taskText = '';
}

createTask.addEventListener('click', addTask);
