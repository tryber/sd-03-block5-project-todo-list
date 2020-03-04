
let tarefa = document.getElementById("texto-tarefa");

let botaoAdicionar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click",function(s){
    adicionarItemLista(criarItemLista(pegarValorTarefa()));
});

function pegarValorTarefa(){
    return tarefa.value;
}
function criarItemLista(texto){
    let item = document.createElement("li");
    item.innerHTML = texto;
    return item;
}
function adicionarItemLista(item){
     lista.appendChild(item);
}

