const todoList = document.getElementById("lista-tarefas");
const createTask = document.getElementById("criar-tarefa");
const taskText = document.getElementById("texto-tarefa");

function addTask() {
  let newTask = document.createElement("li");
  newTask.innerHTML = taskText;
  todoList.appendChild(newTask);
}

createTask.addEventListener("click", addTask());
