const input = document.getElementById('texto-tarefa');
const btnEnviar = document.getElementById('criar-tarefa');
const addList = document.getElementById('lista-tarefas');

window.onload = function () {
  btnEnviar.addEventListener('click', adicionarlista);
} 

function adicionarlista() {
	const criarItemLi = document.createElement('li');

	criarItemLi.innerText = input.value;
	addList.appendChild(criarItemLi);
	input.value = '';
}

