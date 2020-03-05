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
  taskPreText = "";
  liElem.id = i;
  i += 1;
  liElem.addEventListener("click", selected);
  liElem.addEventListener("dblclick", completed);
}

function deleteAllTasks() {
  let listParent = document.getElementById("lista-tarefas");
  while (listParent.firstChild) {
    listParent.removeChild(listParent.firstChild);
  }
}

function removeCompleted() {
  let listCompleted = document.querySelectorAll("li");
  for (let i = 0; i < listCompleted.length; i++) {
    if (listCompleted[i].classList.contains("completed")) {
      listCompleted[i].remove();
    }
  }
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
