
let tarefa = document.getElementById("texto-tarefa");

let botaoAdicionar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click",function(s){
    adicionarItemLista(criarItemLista(pegarValorTarefa()));
    limparInputTarefas();
});

function pegarValorTarefa(){
    return tarefa.value;
}
function criarItemLista(texto){
    let item = document.createElement("li");
    item.innerHTML = texto;
    adicionarEvento("click",item,alterarCorFundoItem);
    adicionarEvento("dblclick",item,riscarItem);
    return item;
}
function adicionarItemLista(item){
     lista.appendChild(item);
}
function limparInputTarefas(){
    tarefa.value = "";
}
function adicionarEvento(evento,elemento,funcao){
     elemento.addEventListener(evento,function(s){
        funcao(elemento);
     });
}
function alterarCorFundoItem(item){
     item.style.backgroundColor = "rgb(128,128,128)";
}
function riscarItem(item){
    item.style.textDecoration = "line-through";
}

