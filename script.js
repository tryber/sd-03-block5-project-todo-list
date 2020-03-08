const botaoCriar = document.querySelector('#criar-tarefa');
const botaoApagar = document.querySelector('#apaga-tudo');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function funBackground(event) {
  event.target.classList.toggle('selecionada');
}

function funRiscado(event) {
  event.target.classList.toggle('completed');
}

function funAdicionar() {
  const tagli = document.createElement('li');
  tagli.innerHTML = input.value;
  lista.appendChild(tagli);
  tagli.addEventListener('click', funBackground);
  tagli.addEventListener('dblclick', funRiscado);
  input.value = '';
}

function funApagar() {
  lista.innerHTML = '';
}

botaoCriar.addEventListener('click', funAdicionar);
botaoApagar.addEventListener('click', funApagar);
