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
let tarefas = document.querySelector("ol").childNodes;
botaoAddTarefa.addEventListener("click", function(){
    for(let i = 1; i < tarefas.length; i++){
        tarefas[i].addEventListener("click", function(){
            tarefas[i].style.backgroundColor = "rgb(128,128,128)";
        })
        tarefas[i].addEventListener("dblclick", function(){
            if(tarefas[i].className == "completed"){
                tarefas[i].className = "";
            }
            else{
            tarefas[i].className = "completed";
            }
        })
    }
})



