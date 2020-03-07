const listaTarefa = document.getElementById("lista-tarefas");
const tarefa = document.getElementById("texto-tarefa");
const limpar = document.getElementById('apaga-tudo')

function addTarefa() {
  const lista = document.createElement("li");
  lista.className = "cursor"
  listaTarefa.appendChild(lista, tarefa);
  lista.innerText = tarefa.value;
  tarefa.value = "";
}

function limpaLita(){
  for (let i = 0; i<listaTarefa.childNodes.length; i += 0){
    listaTarefa.removeChild(listaTarefa.childNodes[i])
  }
}


