const lista = document.querySelector('#lista-tarefas');
const btnCriar = document.querySelector('#criar-tarefa');
const texto = document.querySelector('#texto-tarefa');

btnCriar.addEventListener("click", addLista)

function addLista(){
let novoItem = document.createElement('li')
novoItem.innerHTML = texto.value

document.querySelector("#lista-tarefas").appendChild(novoItem)
}