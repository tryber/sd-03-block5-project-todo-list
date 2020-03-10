let botao = document.querySelector("#criar-tarefa");
let exibeLista = document.querySelector("#lista-tarefas");
let pegaTexto = document.querySelector("#texto-tarefa");
let btapagaTudo = document.querySelector("#apaga-tudo");
let tarefa = document.getElementsByTagName("li");

function itemSelecionado(item) {
    if (item.classList.contains("selected")) {
        item.classList.remove("selected");
    } 
    else {
        item.classList.add("selected");
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

btapagaTudo.addEventListener("click", apagaTudo);
botao.addEventListener("click", criaLista);