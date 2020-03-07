const listaTarefa = document.getElementById("lista-tarefas");
const tarefa = document.getElementById("texto-tarefa");
const limpar = document.getElementById("apaga-tudo");

function addTarefa() {
  const lista = document.createElement("li");
  lista.className = "cursor item";
  listaTarefa.appendChild(lista, tarefa);
  lista.innerText = tarefa.value;
  tarefa.value = "";
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", bgGray);
  }
}

function limpaLita() {
  for (let i = 0; i < listaTarefa.childNodes.length; i += 0) {
    listaTarefa.removeChild(listaTarefa.childNodes[i]);
  }
}

function bgGray() {
  event.target.className = "grey";
}
