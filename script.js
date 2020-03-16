const text = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimparLista = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const btnSelecionados = document.getElementById('remover-selecionado');
const btnSalvar = document.getElementById('salvar-tarefas');

function selecionarItem(e) {
  e.target.classList.toggle('cinza');
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
  list.remove(list);
  location.reload();
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
  const listaFromStorage = localStorage.getItem('lista');
  if (listFromStorage) {
    list.innerHTML = listFromStorage
  }
}

window.onload = function () {
  criar.addEventListener('click', inserirItem);
  btnLimparLista.addEventListener('click', remover);
  btnFinalizados.addEventListener('click', removerFinalizados);
  btnSelecionados.addEventListener('click', removerSelecionados);
  btnSalvar.addEventListener('click', salvar);
  listaSalva();
};
