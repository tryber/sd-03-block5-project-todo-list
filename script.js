var botaoAdd = document.getElementById("criar-tarefa");
var lista = document.getElementById("lista-tarefas");
var novoItem = document.getElementById("texto-tarefa");
var botaoLimpar = document.getElementById("apaga-tudo");


botaoAdd.addEventListener('click', function(){
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode("algo"));
    lista.appendChild(newLi);
    newLi.innerHTML = novoItem.value;
    novoItem.value = ""
})

botaoLimpar.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(function (e) { e.remove(); });
  });