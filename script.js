let taskPreText;
let i = 0;

function setTaskText() {
  taskPreText = document.getElementById("texto-tarefa").value;
}

function createTask() {
  let liElem = document.createElement("li");
  let olElem = document.getElementById("lista-tarefas");
  liElem.innerText = taskPreText;
  olElem.appendChild(liElem);
  document.getElementById("texto-tarefa").value = "";
  liElem.id = i;
  i++;
}

function deleteAllTasks() {
  alert("Removed all tasks!");
}

function removeCompleted() {
  alert("Removed all completed tasks!");
}
