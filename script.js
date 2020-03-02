let tarefaInput = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criaTarefa() {
  let item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = "";

botaoTarefa.addEventListener('click', criaTarefa);


