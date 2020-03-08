const botao = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
let lis = document.querySelectorAll('li');

function funAdicionar() {
  const tagli = document.createElement('li');
  tagli.innerHTML = input.value;
  lista.appendChild(tagli);
  tagli.addEventListener('click', funBackground);
  tagli.addEventListener('dblclick', funRiscado);
  input.value = '';
}

function funBackground(event) {
  event.target.classList.add('selecionada');
}

function funRiscado(event) {
  event.target.classList.add('completed');
}

botao.addEventListener('click', funAdicionar);
