const tarefaInput = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

const botaoTarefa = document.getElementById('criar-tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoApagaFinalizados = document.getElementById('remover-finalizados');
const botaoApagaSelecionados = document.getElementById('remover-selecionado');
const botaoSalvaLista = document.getElementById('salvar-tarefas');
const botaoMoveCima = document.getElementById('mover-cima');
const botaoMoveBaixo = document.getElementById('mover-baixo');

const listaSalva = localStorage.getItem('lista');
if (listaSalva) {
  listaTarefas.innerHTML = listaSalva;
}

function completedItem(item) {
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

function selectedItem(item) {
  if (item.classList.contains('selected')) {
    item.classList.remove('selected');
  } else {
    item.classList.add('selected');
  }
}

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('dblclick', function () {
    completedItem(item);
  });
  item.addEventListener('click', function () {
    selectedItem(item);
  });
}

function apagaTudo() {
  const lista = document.getElementsByTagName('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    lista[i].remove();
  }
  localStorage.clear();
}

function apagaFinalizados() {
  const lista = document.getElementsByTagName('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    if (lista[i].classList.contains('completed')) {
      lista[i].remove();
    }
  }
}

function apagaSelecionados() {
  const lista = document.getElementsByTagName('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    if (lista[i].classList.contains('selected')) {
      lista[i].remove();
    }
  }
}

function salvaLista() {
  localStorage.clear();
  localStorage.setItem('lista', listaTarefas.innerHTML);
}

function moverCima() {
  const itemS = document.querySelector('.selected');
  const primeiro = listaTarefas.firstChild;
  if (itemS && itemS !== primeiro) {
    listaTarefas.insertBefore(itemS, itemS.previousElementSibling);
  } else {
    alert('Não é possível mover esse item para cima!');
  }
}

function moverBaixo() {
  const itemS = document.querySelector('.selected');
  const ultimo = listaTarefas.lastChild;
  if (itemS && itemS !== ultimo) {
    listaTarefas.insertBefore(itemS.nextElementSibling, itemS);
  } else {
    alert('Não é possível mover esse item para baixo!');
  }
}

botaoTarefa.addEventListener('click', criaTarefa);
botaoApagaTudo.addEventListener('click', apagaTudo);
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
botaoApagaSelecionados.addEventListener('click', apagaSelecionados);
botaoSalvaLista.addEventListener('click', salvaLista);
botaoMoveCima.addEventListener('click', moverCima);
botaoMoveBaixo.addEventListener('click', moverBaixo);
