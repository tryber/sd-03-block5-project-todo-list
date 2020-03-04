const botaoAdd = document.getElementById("criar-tarefa")
const inputTexto = document.getElementById("texto-tarefa").value
const lista = document.getElementById("lista-tarefas")

function addText(){
   const inputTexto = document.getElementById("texto-tarefa").value
   const listaAdd = document.createElement("li")
   lista.appendChild(listaAdd,inputTexto)
   listaAdd.innerText = inputTexto
}
function limpar (){
   const inputTexto = document.getElementById("texto-tarefa").value = ''

}