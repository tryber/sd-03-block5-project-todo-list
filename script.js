let botao = document.querySelector("#criar-tarefa");
let exibeLista = document.querySelector("#lista-tarefas");
let pegaTexto = document.querySelector("#texto-tarefa");

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


botao.addEventListener("click", criaLista);