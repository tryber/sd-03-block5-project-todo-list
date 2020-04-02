const input = document.getElementById('texto-tarefa');
const btnEnviar = document.getElementById('criar-tarefa');
const addList = document.getElementById('lista-tarefas');

const btnBlackOut = document.getElementById('apaga-tudo');
const btnFatallyt = document.getElementById('remover-finalizados');
const btnSelecionado = document.getElementById('remover-selecionado');

//Bonus
const btnCima = document.getElementById('mover-cima');
const btnBaixo = document.getElementById('mover-baixo');

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
}

function removeSelect() {
	console.log('agora 3')
	const marcado = document.getElementsByClassName('cinza');
	
	for (let i = 0; i < marcado.length; i += 1){
		marcado[i].remove();
	}
}

function moverCima() {
	const selected = document.getElementsByClassName('cinza')[0];
	const superior = selected.previousElementSibling;

	const lista = document.getElementById('lista-tarefas');

	if(superior != null){
		lista.insertBefore(selected, superior);
	}else alert('Nao é possivel mover para cima')
}

function moverBaixo() {
	const selected = document.getElementsByClassName('cinza')[0];
	const inferior = selected.nextElementSibling;

	const lista = document.getElementById('lista-tarefas');

	if(inferior != null){
		lista.insertBefore(inferior, selected);
	}else alert('Nao é possivel mover para baixo')
}

window.onload = function () {
	btnEnviar.addEventListener('click', adicionarlista);
	btnBlackOut.addEventListener('click', blackout);	
	btnFatallyt.addEventListener('click', removechecked);
	btnSelecionado.addEventListener('click', removeSelect);
	btnCima.addEventListener('click', moverCima);
	btnBaixo.addEventListener('click', moverBaixo);
} 
