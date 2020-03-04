let botao = document.querySelector("#criar-tarefa");
let pegaTexto = document.querySelector("#texto-tarefa");
let exibeLista = document.querySelector("#lista-tarefas");
let btapagaTudo = document.querySelector("#apaga-tudo");
let btapagaSelecionados = document.querySelector("#remover-finalizados");
let tarefa = document.getElementsByTagName("li");


function itemSelecionado(item) {
    if (item.classList.contains("selected")) {
        item.classList.remove("selected");
    } 
    else {
        item.classList.add("selected");
    }
}

function doisCliques(item) {
    if (item.classList.contains("completed")) {
        item.classList.remove("completed");
    } 
    else {
        item.classList.add("completed");
    }
}

function criaLista(){

    let criaLi = document.createElement("li");
    criaLi.innerHTML = pegaTexto.value;
    exibeLista.appendChild(criaLi);

    pegaTexto.value = null;

    criaLi.addEventListener("click", function(){
        itemSelecionado(criaLi);
    });

    criaLi.addEventListener("dblclick", function(){
        doisCliques(criaLi);
    });
}

function apagaTudo() {
    let numTarefas = tarefa.length-1;
    for (let i = numTarefas; i >= 0; i--) {
      tarefa[i].remove();
    }
}

function apagaSelecionados() {
    let numTarefas = tarefa.length - 1;
    for (let i = numTarefas; i >= 0; i--) {
        if (tarefa[i].classList.contains("completed")) {
            tarefa[i].remove();
        }
    }
}
    




btapagaTudo.addEventListener("click", apagaTudo);
btapagaSelecionados.addEventListener("click", apagaSelecionados);
botao.addEventListener("click", criaLista);