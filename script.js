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
  if(this.style.backgroundColor == "rgb(128,128,128)") {
    for(let i of itemSelecionado) {
    i.style.backgroundColor = "transparent";
    i.classList.remove("selecionado");
    }
  }
  else {
    this.style.backgroundColor = "rgb(128,128,128)";
    this.classList.add("selecionado");
  }
}

function finalizarItem() {
  if(this.style.textDecoration == "line-through") {
    event.target.style.textDecoration = "";
    event.target.classList.remove("completed");
  }
  else {
    this.style.textDecoration = "line-through";
    this.classList.add("completed");
  }
}

let buttonMoverCima = document.getElementById("mover-cima");
buttonMoverCima.addEventListener('click', function() { 
  const selectedItem = document.getElementsByClassName('selecionado')[0];
  selectedItem.parentElement.insertBefore(selectedItem, selectedItem.previousElementSibling);
});

let buttonMoverBaixo = document.getElementById("mover-baixo");
buttonMoverBaixo.addEventListener('click', function() { 
  const selectedItem = document.getElementsByClassName('selecionado')[0];
  const nextItem = selectedItem.nextElementSibling;

  if (nextItem !== selectedItem.parentElement.lastChild.nextElementSibling) {
    selectedItem.parentElement.insertBefore(nextItem, selectedItem);
  } else {
    selectedItem.parentElement.insertBefore(selectedItem, selectedItem.parentElement.firstChild);
  }
})

let buttonRemoveSelecionados = document.getElementById("remover-selecionado");
buttonRemoveSelecionados.addEventListener('click', function() {
const elementsToRemove = document.getElementsByClassName('selecionado');
while (elementsToRemove.length > 0) {
  document.querySelector('#lista-tarefas').removeChild(elementsToRemove[0]);
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


