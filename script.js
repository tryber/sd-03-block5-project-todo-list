
let selecionado;
let tarefa = document.getElementById("texto-tarefa");
let botaoAdicionar = document.getElementById("criar-tarefa");
let botaoLimparTudo = document.getElementById("apaga-tudo");
let botaoLimparFinalizados = document.getElementById("remover-finalizados");
let lista = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click",function(s){
    adicionarItemLista(criarItemLista(pegarValorTarefa()));
    limparInputTarefas();
});
botaoLimparTudo.addEventListener("click",function(s){
    limparLista(lista);
});

function pegarValorTarefa(){
    return tarefa.value;
}

function criarItemLista(texto){
    let item = document.createElement("li");
    item.innerHTML = texto;
    adicionarEvento("click",item,alterarCorFundoItem);
    adicionarEvento("dblclick",item,riscoItem);
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
         
        funcao(elemento);console.log(s.target);
     });
}

function alterarCorFundoItem(item){

    if(item.style.backgroundColor == "rgb(128, 128, 128)" )
    item.style.backgroundColor = "";
    else
      item.style.backgroundColor = "rgb(128,128,128)";
}

function riscoItem(item){
   if(item.classList.contains("completed"))
   item.classList.remove("completed");
   else  item.classList.add("completed");
}

function limparItensFinalizados(){
     
}
function limparLista(lista){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
      }
}