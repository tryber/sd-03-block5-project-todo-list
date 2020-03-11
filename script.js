const text = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimparLista = document.getElementById('apaga-tudo')

function selecionarItem(e) {
  e.target.style.backgroundColor = 'rgb(128,128,128)';
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
  item.addEventListener('dbclick', riscar);
}

function remover() {
  list.remove(list);
  location.reload();
}

window.onload = function () {
  criar.addEventListener('click', inserirItem);
  btnLimparLista.addEventListener('click', remover);
};
