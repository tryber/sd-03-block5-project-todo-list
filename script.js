const botaoAdd = document.getElementById("criar-tarefa")
const inputTexto = document.getElementById("texto-tarefa")
const lista = document.getElementById("lista-tarefas")

function addText(){
   const listaAdd = document.createElement("li")
   lista.appendChild(listaAdd,inputTexto)
   listaAdd.innerText = inputTexto.value
   inputTexto.value = ''
}
