let tarefaInput = document.getElementById("texto-tarefa");
const botaoTarefa = document.getElementById("criar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

function criaTarefa() {
  let item = document.createElement("li");
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
  item.addEventListener('click', function(event) {
    if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
}

botaoTarefa.addEventListener("click", criaTarefa);


