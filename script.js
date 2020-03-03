const tarefaInput = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoApagaFinalizados = document.getElementById('remover-finalizados');
const botaoApagaSelecionados = document.getElementById('remover-selecionado');
const botaoSalva = document.getElementById('salvar-tarefas');
const botaoMoveCima = document.getElementById('mover-cima');
const botaoMoveBaixo = document.getElementById('mover-baixo');

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('dblclick', function () {
    if (item.classList.contains('completed')) {
      item.classList.remove('completed');
    } else {
      item.classList.add('completed');
    }
  });
  item.addEventListener('click', function () {
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    } else {
      item.classList.add('selected');
    }
  });
}

function apagaTudo() {
  const lista = document.getElementsByTagName('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    lista[i].remove();
  }
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

function moverCima() {
  const ol = document.querySelector('ol');
  const lista = document.querySelectorAll('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i > 0; i -= 1) {
    if (lista[i].classList.contains('selected')) {
      ol.insertBefore(lista[i], lista[i - 1]);
    }
  }
}

function moverBaixo() {
  const ol = document.querySelector('ol');
  const lista = document.querySelectorAll('li');
  const elementos = lista.length - 1;
  for (let i = elementos; i >= 0; i -= 1) {
    if (lista[i].classList.contains('selected')) {
      ol.insertBefore(lista[i - 1], lista[i]);
    }
  }
}

botaoTarefa.addEventListener('click', criaTarefa);
botaoApagaTudo.addEventListener('click', apagaTudo);
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
botaoApagaSelecionados.addEventListener('click', apagaSelecionados);
botaoMoveCima.addEventListener('click', moverCima);
botaoMoveBaixo.addEventListener('click', moverBaixo);
