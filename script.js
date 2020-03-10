const text = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function inserirItem() {
  const item = document.createElement('li');
  item.innerText = text.value;
  list.appendChild(item);
  text.value = '';

  item.addEventListener('click', selecionarItem);
};

function selecionarItem(e) {
  e.target.style.backgroundColor = 'rgb(128,128,128)';
};

window.onload = function () {
  criar.addEventListener('click', inserirItem);
};
