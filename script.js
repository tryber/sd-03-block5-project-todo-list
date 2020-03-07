var botao = document.getElementById("criar-tarefa")
var lista = document.getElementById("lista-tarefas")
var novoItem = document.getElementById("texto-tarefa")


botao.addEventListener('click', function(){
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode("algo"));
    lista.appendChild(newLi);
    newLi.innerHTML = novoItem.value;
    novoItem.value = ""
})