const listaTarefa = document.getElementById("lista-tarefas");
const tarefa = document.getElementById("texto-tarefa");

function addTarefa() {
  const lista = document.createElement("li");
  lista.className = "cursor"
  listaTarefa.appendChild(lista, tarefa);
  lista.innerText = tarefa.value;

  tarefa.value = "";
}
