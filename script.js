let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let caixaTexto = document.querySelector('#texto-tarefa');
let addLista = document.querySelector('#lista-tarefas');

function criaTarefa() {
  criarLista = document.createElement('li');
  criarLista.innerHTML = caixaTexto.value;
  addLista.appendChild(criarLista);
  limpaCaixa();
  criarLista.addEventListener('click', highTask);
  criarLista.addEventListener('dblclick', check);
}

function highTask(event) {
  event.target.classList.toggle('bgcolor');
}

function check(event) {
  event.target.classList.toggle('completed');
}

botaoCriarTarefa.addEventListener('click', criaTarefa);

function limpaCaixa() {
  caixaTexto.value = '';
}
