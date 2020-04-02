const input = document.getElementById('texto-tarefa');
const btnEnviar = document.getElementById('criar-tarefa');
const addList = document.getElementById('lista-tarefas');

const btnBlackOut = document.getElementById('apaga-tudo');
const btnFatallyt = document.getElementById('remover-finalizados');
const btnSelecionado = document.getElementById('remover-selecionado');

function trocaCorFundo(e) {
	const addBackground = document.getElementsByClassName('cinza');
	
	for(let i = 0; i < addBackground.length; i += 1){
		addBackground[i].classList.remove('cinza');
	}
	e.target.classList.add('cinza');
}

function adicionarlista() {
	const criarItemLi = document.createElement('li');

	criarItemLi.innerText = input.value;
	addList.appendChild(criarItemLi);
	input.value = '';

	criarItemLi.addEventListener('click', trocaCorFundo);
	criarItemLi.addEventListener('dblclick', riscarItem);
}

function riscarItem(e) {
	e.target.classList.toggle('completed');
}

function blackout() {
	const lista = document.getElementsByTagName('ol');
	
	for (let i = 0; i < lista.length; i += 1) {
		lista[i].remove();
	}
}

function removechecked() {
	const riscado = document.getElementsByClassName('completed');
	let valorprimeiro = riscado[0];

	while (valorprimeiro){
		valorprimeiro.remove();
		valorprimeiro = riscado[0];
	}
	// for (let i = 0; i < riscado.length; i += 1){
	// 	riscado[i].remove();
	// }
}

function removeSelect() {
	const marcado = document.getElementsByClassName('cinza');
	
	for (let i = 0; i < marcado.length; i += 1){
		marcado[i].remove();
	}
}

window.onload = function () {
	btnEnviar.addEventListener('click', adicionarlista);
	btnBlackOut.addEventListener('click', blackout);	
	btnFatallyt.addEventListener('click', removechecked);
	btnSelecionado.addEventListener('click', removeSelect);
} 