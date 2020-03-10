let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let caixaTexto = document.querySelector('#texto-tarefa');
let addLista = document.querySelector('#lista-tarefas');
let checkLi = document.querySelector('li');
let checkOl = document.querySelector('ol');

function criaTarefa() {
  criarLista = document.createElement('li');
  criarLista.innerHTML = caixaTexto.value;
  addLista.appendChild(criarLista);
  limpaCaixa();
  criarLista.addEventListener('click', highTask);
  criarLista.addEventListener('dblclick', check);
}

function highTask(event) {
  event.target.classList.toggle('backgroundgcolor');
}

function check(event) {
  event.target.classList.toggle('completed');
}

botaoCriarTarefa.addEventListener('click', criaTarefa);

function limpaCaixa() {
  caixaTexto.value = '';
}

let apagarBtn = document.querySelector('#apaga-tudo');
apagarBtn.addEventListener('click', function() {
  checkOl.innerHTML = '';
});

let tedBtn = document.querySelector('#remover-finalizados');
tedBtn.addEventListener('click', function() {
  const elementsToRemove = document.getElementsByClassName('completed');
  while (elementsToRemove.length > 0) {
    document.querySelector('#lista-tarefas').removeChild(elementsToRemove[0]);
  }
});