var botaoAdd = document.getElementById("criar-tarefa");
var lista = document.getElementById("lista-tarefas");
var novoItem = document.getElementById("texto-tarefa");
var botaoLimpar = document.getElementById("apaga-tudo");

botaoAdd.addEventListener('click', function(){
    var newLi = document.createElement("li");
    newLi.addEventListener("dblclick", function() {
        if (newLi.classList.contains("completed")){
          newLi.classList.remove("completed");
        } else { 
            newLi.classList.add("completed");
  }})
    lista.appendChild(newLi);
    newLi.innerHTML = novoItem.value;
    novoItem.value = ""
})
    botaoLimpar.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(function (e) { e.remove(); });
        });

        botaoLimpar.addEventListener('dblclick', () => {
         document.querySelectorAll('li').forEach(function (e) { e.remove(); });});
 


