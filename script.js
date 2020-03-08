const criar = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const limpar = document.getElementById('apaga-tudo');
// const finalizador = document.getElementById('remover-finalizados'); //adicionar funcao
const listaTarefa = document.getElementById('lista-tarefas');

function limpaLista() {
  for (let i = 0; i < listaTarefa.childNodes.length; i += 0) {
    listaTarefa.removeChild(listaTarefa.childNodes[i]);
  }
}

function bgGray() {
  event.target.className = 'grey';
}

function tick() {
  event.target.className = 'completed';
}

function addTarefa() {
  const lista = document.createElement('li');
  lista.className = 'cursor item';
  listaTarefa.appendChild(lista);
  lista.innerHTML = tarefa.value;
  tarefa.value = '';
  lista.addEventListener('click', bgGray);

}

criar.addEventListener('click', addTarefa);
limpar.addEventListener('click', limpaLista);
