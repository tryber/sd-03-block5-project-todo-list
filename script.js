const input = document.getElementById('texto-tarefa');
const btnEnviar = document.getElementById('criar-tarefa');
const addList = document.getElementById('lista-tarefas');

const btnBlackOut = document.getElementById('apaga-tudo');

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

window.onload = function () {
	btnEnviar.addEventListener('click', adicionarlista);
	btnBlackOut.addEventListener('click', blackout);
	
} 