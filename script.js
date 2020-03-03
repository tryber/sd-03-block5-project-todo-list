let botaoAddTarefa = document.querySelector(".botao-model");
let caixaDeTexto = document.querySelector("#texto-tarefa");
let listaDeTarefas = document.querySelector("#lista-tarefas");
botaoAddTarefa.addEventListener("click", function(){
    let tarefa = document.createElement("li");
    listaDeTarefas.appendChild(tarefa);
    tarefa.innerHTML = caixaDeTexto.value;
    caixaDeTexto.value = '';
})

botaoAddTarefa.addEventListener("mouseover", function(){
    botaoAddTarefa.style.cursor = "pointer";
    
})
console.log(botaoAddTarefa);
console.log(caixaDeTexto);