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
};