const textoDigitado = document.getElementById('texto-tarefa');
const clickButtonAdicionar = document.querySelector('#criar-tarefa');
const incluiItem = document.querySelector('#lista-tarefas');

function coloreItemLista(e) {
  e.target.classList.add('cinza');
}

function riscaItemLista(e) {
  e.target.classList.add('completed');
}

function adicionaItem() {
  const criaLista = document.createElement('li');
  criaLista.innerHTML = textoDigitado.value;
  incluiItem.appendChild(criaLista);
  textoDigitado.value = '';

  criaLista.addEventListener('click', coloreItemLista);
  criaLista.addEventListener('dblclick', riscaItemLista);

  const clickButtonLimpaConcluidos = document.querySelector('#remover-finalizados');
  const clickButtonLimpaTodos = document.querySelector('#apaga-tudo');

  function limpaConcluidos() {
    for (let i = document.querySelectorAll('.completed').length; i >= 1; i -= 1) {
      document.querySelector('.completed').remove();
    }
  }
  clickButtonLimpaConcluidos.addEventListener('click', limpaConcluidos);

  function limpaTodos() {
    for (let i = document.querySelectorAll('li').length; i >= 1; i -= 1) {
      document.querySelector('li').remove();
    }
  }
  clickButtonLimpaTodos.addEventListener('click', limpaTodos);
}
clickButtonAdicionar.addEventListener('click', adicionaItem);
