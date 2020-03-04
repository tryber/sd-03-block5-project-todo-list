const listaTarefa = document.getElementById("lista-tarefa");
const tarefa = document.getElementById("texto-tarefa")

function addTarefa() {
  const lista = document.createElement("li");
  listaTarefa.appendChild(lista, tarefa);
  lista.innerText = tarefa.value;

  tarefa.value=''
}

