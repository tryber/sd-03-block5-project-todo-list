const text = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimparLista = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const btnSelecionados = document.getElementById('remover-selecionado');
const btnSalvar = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');

function selecionarItem(e) {
  let selecionadoCinza = document.getElementsByClassName('cinza');
  for (let i = 0; i < selecionadoCinza.length; i += 1) {
    selecionadoCinza[i].classList.remove('cinza');  
  }
  e.target.classList.add('cinza');
}

function riscar(e) {
  e.target.classList.toggle('completed');
}

function inserirItem() {
  const item = document.createElement('li');
  item.innerText = text.value;
  list.appendChild(item);
  text.value = '';

  item.addEventListener('click', selecionarItem);
  item.addEventListener('dblclick', riscar);
}

function remover() {
  const elements = list.children;
  let first = elements[0];
  while (first) {
    first.remove();
    first = elements[0];
  }
}

function removerFinalizados() {
  const elements = document.getElementsByClassName('completed');
  let first = elements[0];
  while (first) {
    first.remove();
    first = elements[0];
  }
}

function removerSelecionados() {
  const elements = document.getElementsByClassName('cinza');
  let first = elements[0];
  while (first) {
    first.remove();
    first = elements[0];
  }
}

function salvar() {
  localStorage.setItem('lista', list.innerHTML);
}

function listaSalva() {
  const listFromStorage = localStorage.getItem('lista');
  if (listFromStorage) {
    list.innerHTML = listFromStorage;
  }
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', selecionarItem);
    listItems[i].addEventListener('dblclick', riscar);
  }
}

function moverCima() {
  const selecionado = document.querySelector('.cinza');
  if (selecionado) {
    if (selecionado.previousElementSibling) {
      selecionado.parentNode.insertBefore(selecionado, selecionado.previousElementSibling);
    } else {
      alert('Não é possível mover esta tarefa para cima');
    }
  }
}

function moverBaixo() {
  const selecionado = document.querySelector('.cinza');
  if (selecionado) {
    if (selecionado.nextElementSibling) {
      selecionado.parentNode.insertBefore(selecionado.nextElementSibling, selecionado);
    } else {
      alert('Não é possível mover esta tarefa para baixo');
    }
  }
}

window.onload = function () {
  criar.addEventListener('click', inserirItem);
  btnLimparLista.addEventListener('click', remover);
  btnFinalizados.addEventListener('click', removerFinalizados);
  btnSelecionados.addEventListener('click', removerSelecionados);
  btnSalvar.addEventListener('click', salvar);
  btnMoverCima.addEventListener('click', moverCima);
  btnMoverBaixo.addEventListener('click', moverBaixo);
  listaSalva();
};
