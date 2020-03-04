let botaoAdd = document.getElementById("criar-tarefa")
let inputTexto = document.getElementById("texto-tarefa").value
let lista = document.getElementById("lista-tarefas")

let listaTexto = document.createTextNode("oi")

function addText(){
   let inputTexto = document.getElementById("texto-tarefa").value
   let listaAdd = document.createElement("li")
   lista.appendChild(listaAdd,inputTexto)
   listaAdd.innerText = inputTexto
}