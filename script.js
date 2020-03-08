const criar = document.getElementById('cria-tarefa')
const limpar = document.getElementById('apaga-tudo');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa');

function bgGray() {
  event.target.className = 'grey';
}

function tick() {
  event.target.className = 'completed';
}

function addTarefa() {
  const lista = document.createElement('li');
  lista.className = 'cursor item';
  listaTarefa.appendChild(lista, tarefa);
  lista.innerText = tarefa.value;
  tarefa.value = ' ';
  // const items = document.getElementsByClassName('item');
  lista.addEventListener('click', bgGray);
    // items[i].addEventListener('dblclick', tick);

}

function limpaLita() {
  for (let i = 0; i < listaTarefa.childNodes.length; i += 0) {
    listaTarefa.removeChild(listaTarefa.childNodes[i]);
  }
}

// criar.addEventListener('click', addTarefa )
// limpar.addEventListener('click', apagaTudo);
