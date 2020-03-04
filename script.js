let taskPreText;
let i = 0;

function setTaskText() {
  taskPreText = document.getElementById("texto-tarefa").value;
}

function createTask() {
  const liElem = document.createElement("li");
  const olElem = document.getElementById("lista-tarefas");
  liElem.innerText = taskPreText;
  olElem.appendChild(liElem);
  document.getElementById("texto-tarefa").value = "";
  liElem.id = i;
  i += 1;
  liElem.addEventListener("click", selected);
}

function deleteAllTasks() {
  alert("Removed all tasks!");
}

function removeCompleted() {
  alert("Removed all completed tasks!");
}
function selected() {
  let getId = event.target.id;
  document.getElementById(getId).classList.toggle("selected");
}
