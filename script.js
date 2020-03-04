let taskPreText;
let i = 0;
let listArray;

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
  liElem.addEventListener("dblclick", completed);
}

function deleteAllTasks() {
  let listArray = document.getElementById("lista-tarefas");
  while (listArray.firstChild) {
    listArray.removeChild(listArray.firstChild);
  }
}

function removeCompleted() {
  alert("Removed all completed tasks!");
}
function selected() {
  let getId = event.target.id;
  document.getElementById(getId).classList.toggle("selected");
}
function completed() {
  let getId = event.target.id;
  document.getElementById(getId).classList.toggle("completed");
  document.getElementById(getId).classList.remove("selected");
}
