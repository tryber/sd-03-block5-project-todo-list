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

botaoAddTarefa.addEventListener("click", function(){
    var tarefas = document.querySelector("ol").childNodes;7
    for(let i = 1; i < tarefas.length; i++){
     console.log(tarefas[i].innerHTML);
        tarefas[i].addEventListener("click", function(){
            tarefas[i].style.color = "rgb(128,128,128)";
        })
    }
})



