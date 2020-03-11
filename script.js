let buttonAdicionar = document.getElementById("criar-tarefa");
let text = document.getElementById("texto-tarefa");
buttonAdicionar.addEventListener('click', cliqueAdicionar)
function cliqueAdicionar() {
  if (text.value == ""){
  alert("É necessário descrever a atividade antes de adiciona-la")
  }
  else {
    let itemToDo = document.createElement("li");
    itemToDo.innerHTML = text.value;
    itemToDo.classList.add("item");
    document.getElementById("lista-tarefas").appendChild(itemToDo);
    itemToDo.addEventListener('click', selecionarItem);
    itemToDo.addEventListener('dblclick', finalizarItem);
    text.value = '';
  }
}

let itemSelecionado = document.getElementsByClassName("item");
function selecionarItem() {
  if(this.style.backgroundColor == "rgb(0, 145, 212)") {
    for(let i of itemSelecionado) {
    i.style.backgroundColor = "transparent";
    i.classList.remove("selecionado");
    }
  }
  else {
    this.style.backgroundColor = "rgb(0, 145, 212)";
    this.classList.add("selecionado");
  }
}

function finalizarItem() {
  if(this.style.textDecoration == "line-through") {
    event.target.style.textDecoration = "";
  }
  else {
    this.style.textDecoration = "line-through";
  }
}

let buttonMoverCima = document.getElementById("mover-cima");
buttonMoverCima.addEventListener('click', function() { let itemsSelected = document.querySelector('.selecionado');
const itens = itemsSelected.previousSibling;
  if (itens.innerHTML === undefined) {} 
  else {
    let auxiliar = itens.innerHTML;
    itens.innerHTML = itemsSelected.innerHTML;
    itemsSelected.innerHTML = auxiliar;
    itemsSelected.style.backgroundColor = "transparent";
    itemsSelected.classList.remove("selecionado");
  }
});

let buttonMoverBaixo = document.getElementById("mover-baixo");
buttonMoverBaixo.addEventListener('click', function() { let itemsSelected = document.querySelector('.selecionado'); 
const itens = itemsSelected.nextSibling;
  if (itens === null) {} 
  else {
    let auxiliar = itemsSelected.innerHTML;
    itemsSelected.innerHTML = itens.innerHTML;
    itens.innerHTML = auxiliar;
    itemsSelected.style.backgroundColor = "transparent";
    itemsSelected.classList.remove("selecionado");
  }
})

let buttonRemoveSelecionados = document.getElementById("remover-selecionado");
buttonRemoveSelecionados.addEventListener('click', function() { let selecteds = document.querySelectorAll(".item");
  for(let i of selecteds) {  
    if(i.style.backgroundColor == "rgb(0, 145, 212)") {
      i.remove();
    }
}})

let buttonRemoveFinalizados = document.getElementById("remover-finalizados");
buttonRemoveFinalizados.addEventListener('click', function() { let finalizados = document.querySelectorAll(".item");
  for(let i of finalizados) {  
    if(i.style.textDecoration == "line-through") {
      i.remove();
    }
}})


let buttonApagaTudo = document.getElementById("apaga-tudo");
buttonApagaTudo.addEventListener('click', function() { let listItems = document.querySelectorAll(".item");
  for(let i of listItems) {  
    i.remove();
  }
})


