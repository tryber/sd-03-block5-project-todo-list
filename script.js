
const texto = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');

function listarTarefas() {
  const item1 = document.createElement('li');
  lista.appendChild(item1);
  item1.textContent = texto.value;
  item1.classList.add('listaTarefa');
  document.getElementById('texto-tarefa').value = '';
}

botaoTarefa.addEventListener('click', listarTarefas);

function apagarTudo() {
  while (lista.firstChild) {
    lista.removeChild(lista.lastChild);
  }
}

botaoApagaTudo.addEventListener('click', apagarTudo);

const lis = document.getElementsByClassName('listaTarefa');

function addFundoCinza() {
  for (let l = 0; l < lis.length; l += 1) {
  lis[l].classList.add('selected');
  }
};

lista.addEventListener('click', addFundoCinza);

function addRiscado() {
  for (let l = 0; l < lis.length; l += 1) {
  lis[l].classList.add('completed');
  }
}

function removeRiscado() {
  for (let = 0; l < lis.length; l += 1) {
    lis[l].classList.remove('completed');
  }
}

lista.addEventListener('dblclick', addRiscado);
