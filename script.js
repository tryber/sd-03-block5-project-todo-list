
let selecionado;
let tarefa = document.getElementById("texto-tarefa");
let botaoAdicionar = document.getElementById("criar-tarefa");
let botaoLimparTudo = document.getElementById("apaga-tudo");
let botaoLimparSelecionado = document.getElementById("remover-selecionado");
let botaoLimparFinalizados = document.getElementById("remover-finalizados");
let lista = document.getElementById("lista-tarefas");
let completed = document.getElementsByClassName("completed");
let acima = document.getElementById("mover-cima");
let abaixo = document.getElementById("mover-baixo");

botaoAdicionar.addEventListener("click",function(s){
    adicionarItemLista(criarItemLista(pegarValorTarefa()));
    limparInputTarefas();
});
botaoLimparTudo.addEventListener("click",function(s){
    limparLista(lista);
});
botaoLimparFinalizados.addEventListener("click",function(s){
    limparItensFinalizados(completed);
});
botaoLimparSelecionado.addEventListener("click",function(s){
    removerSelecionados(lista);
});
acima.addEventListener("click",function(s){
    moverItem("acima",lista);
});
function pegarValorTarefa(){
    return tarefa.value;
}
abaixo.addEventListener("click",function(s){
    moverItem("abaixo",lista);
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
    if(item.classList.contains("selected")){
    item.classList.remove("selected");
    removeSelected();
    }
    else{
    item.classList.add("selected");
    addSelected(item);
    }
}
function addSelected(item){
    if(selecionado){
          selecionado.classList.remove("selected");
          selecionado = item;return;
    }
      if(item.classList.contains("selected")){    
          selecionado = item;return;
      }     
}
function removeSelected(){
    selecionado = undefined;
}

function riscoItem(item){
   if(item.classList.contains("completed"))
   item.classList.remove("completed");
   else  item.classList.add("completed");
}

function limparItensFinalizados(completed){
while(completed[0]){
    console.log(completed[0]);
    lista.removeChild(completed[0])
      }
}
function limparLista(lista){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
      }
}
function removerSelecionados(lista){
    if(selecionado){
        console.log(selecionado);
        lista.removeChild(selecionado);    
    }
}
function moverItem(direcao,lista){
    if(direcao == "acima"){
    let acima = selecionado.previousElementSibling;
    lista.insertBefore(selecionado,acima);
    }
    if(direcao == "abaixo"){
    let abaixo = selecionado.nextElementSibling;
    lista.insertBefore(abaixo,selecionado);
    }
}