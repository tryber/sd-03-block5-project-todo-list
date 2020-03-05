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
  // mesmo usando o getElementsByClass e só dando um remove
  // ou fazendo umas pirueta e pegando o pai e removendo o filho
  // ele n remove, fica dando um undefinid ou sla
  let listCompleted = document.querySelectorAll("li");
  for (let i = listCompleted.length; i > 0; i--) {
    if (listCompleted[i].classList.contains("completed")) {
      listCompleted.listParent.removeChild[i];
    } else {
      console.log("Some shit is happening!");
    }
  }
  console.log(listCompleted);
  /*
  function apagaSelecionados() {
    let numTarefas = tarefa.length - 1;
    for (let i = numTarefas; i >= 0; i--) {
        if (tarefa[i].classList.contains("completed")) {
            tarefa[i].remove();
        }
    }
}
  */
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
