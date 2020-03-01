let lista = document.querySelector("#lista-tarefas");
let btnCriar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');

btnCriar.addEventListener("click", addLista)
btnCriar.addEventListener("click", function() {
  document.querySelector('#texto-tarefa').value=' '
})
function addLista(){
let novoItem = document.createElement('li')
novoItem.innerHTML = texto.value

document.querySelector("#lista-tarefas").appendChild(novoItem)

}