const botao = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function funAdicionar(event) {
  let tagli = document.createElement('li');
  tagli.innerHTML = input.value;
  lista.appendChild(tagli);
  input.value = '';
};

botao.addEventListener('click', funAdicionar);
