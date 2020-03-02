let tarefaInput = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criaTarefa() {
  let item = document.createElement('li');
  item.innerText = tarefaInput.value;
  item.className = 'listItem'
  listaTarefas.appendChild(item);
  tarefaInput.value = null;
}

botaoTarefa.addEventListener('click', criaTarefa);

const item = document.getElementsByTagName('li');

function coloreFundo() {
    item.style.backgroundColor = 'rgb(128, 128, 128)';
}

item.addEventListener('click', coloreFundo);
