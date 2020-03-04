function doubleClick (event) {
    event.target.classList.toggle("completed");
}

function simpleClick (event){
    event.target.classList.toggle("grey");
}

function createItem (event){
    let newItemContent = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement("li");
    newItem.innerText = newItemContent;
    document.getElementById("lista-tarefas").appendChild(newItem);
    document.querySelector("#texto-tarefa").value = "";
    newItem.addEventListener("dblclick", doubleClick)
    newItem.addEventListener("click", simpleClick)
}

function clearList (event){
    let itemList = document.querySelector("#lista-tarefas");
    itemList.innerHTML = "";
}

function removeCompletedItem (event){
    let elementsToRemove = document.getElementsByClassName("completed");
    while (elementsToRemove.length > 0) {
        document.querySelector("#lista-tarefas").removeChild(elementsToRemove[0]);
    }
}

function removeSelectedItem (event){
    let elementsToRemove = document.getElementsByClassName("grey");
    while (elementsToRemove.length > 0) {
        document.querySelector("#lista-tarefas").removeChild(elementsToRemove[0]);
    }
}

function moveItemUp (event){
    let elementToMove = document.querySelector(".grey");
    if (elementToMove) {
        if (elementToMove.previousElementSibling) {
            elementToMove.parentNode.insertBefore(elementToMove, elementToMove.previousElementSibling);
        }
    }
}

function moveItemDown (event){
    let elementToMove = document.querySelector(".grey");
    if (elementToMove) {
        if (elementToMove.nextElementSibling) {
            elementToMove.parentNode.insertBefore(elementToMove.nextElementSibling, elementToMove);
        }
    }
}

function saveList (event){
    let currentList = document.querySelector("#lista-tarefas");
    localStorage.setItem("saveItens", currentList.innerHTML);
}

let addItem = document.getElementById("criar-tarefa");
addItem.addEventListener("click", createItem);

let clearAll = document.querySelector("#apaga-tudo");
clearAll.addEventListener("click", clearList);

let removeCompleted = document.querySelector("#remover-finalizados");
removeCompleted.addEventListener("click", removeCompletedItem);

let removeSelected = document.querySelector("#remover-selecionado");
removeSelected.addEventListener("click", removeSelectedItem);

let moveUp = document.querySelector("#mover-cima");
moveUp.addEventListener("click", moveItemUp);

let moveDown = document.querySelector("#mover-baixo");
moveDown.addEventListener("click", moveItemDown);

let currentList = localStorage.saveItens;
if (currentList) {
    document.querySelector("#lista-tarefas").innerHTML = currentList;
    let savedItens = document.querySelectorAll("li");
    for (i = 0; i < savedItens.length; i += 1){
        savedItens[i].addEventListener("dblclick", doubleClick);
        savedItens[i].addEventListener("click", simpleClick);
    }
}
let saveItens = document.querySelector("#salvar-tarefas");
saveItens.addEventListener("click", saveList);
