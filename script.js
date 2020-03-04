let botoes = document.querySelectorAll(".botao-model");
let caixaDeTexto = document.querySelector("#texto-tarefa");
let listaDeTarefas = document.querySelector("#lista-tarefas");
let divDaLista = document.getElementById("background-list");
let listSize = 0;
botoes[0].addEventListener("click", function(){
    listSize++;
    console.log(listSize);
    let tarefa = document.createElement("li");
    tarefa.className = "item";
    listaDeTarefas.appendChild(tarefa);
    tarefa.innerHTML = caixaDeTexto.value;
    caixaDeTexto.value = '';
 
})
for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("mouseover", function(){
        botoes[i].style.cursor = "pointer";
    })
}
let tarefas = document.querySelector("ol").childNodes;
botoes[0].addEventListener("click", function(){
    for(let i = 1; i <= listSize; i++){
        tarefas[i].addEventListener("click", function(){
            tarefas[i].style.backgroundColor = "rgb(128,128,128)";
        })
    }
})
botoes[0].addEventListener("click", function(){
    for(let i = 1; i <= listSize; i++){
        tarefas[i].addEventListener("dblclick", function(){
            tarefas[i].className = "item completed"
        })
    }
})


botoes[1].addEventListener("click", function(){
        
})