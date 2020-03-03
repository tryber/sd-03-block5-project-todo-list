let addItem = document.getElementById("criar-tarefa");
addItem.addEventListener("click", function(){
    let newItemContent = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement("li");
    newItem.innerText = newItemContent;
    document.getElementById("lista-tarefas").appendChild(newItem);
    document.querySelector("#texto-tarefa").value = "";
    newItem.addEventListener("dblclick", function(){
        newItem.classList.toggle("completed");
        if (newItem.classList == "completed") {
            newItem.style.textDecoration = "line-through";
        } else {
            newItem.style.removeProperty("text-decoration");
        }
    })
    newItem.addEventListener("click", function(){
        newItem.classList.toggle("grey");
        if (newItem.classList == "grey") {
        } else {
            newItem.style.removeProperty("background-color");
        }
    })
})

let clearAll = document.querySelector("#apaga-tudo");
clearAll.addEventListener("click", function(){
    let itemList = document.querySelector("#lista-tarefas");
    itemList.innerHTML = "";
})
let removeCompleted = document.querySelector("#remover-finalizados");
removeCompleted.addEventListener("click", function(){
    let elementsToRemove = document.getElementsByClassName("completed");
    while (elementsToRemove.length > 0) {
        document.querySelector("#lista-tarefas").removeChild(elementsToRemove[0]);
    }
})
let removeSelected = document.querySelector("#remover-selecionado");
removeSelected.addEventListener("click", function(){
    let elementsToRemove = document.getElementsByClassName("grey");
    while (elementsToRemove.length > 0) {
        document.querySelector("#lista-tarefas").removeChild(elementsToRemove[0]);
    }
})
let moveUp = document.querySelector("#mover-cima");
moveUp.addEventListener("click", function(){
    let elementToMove = document.getElementsByClassName("grey");
    let completeList = document.querySelectorAll("li");
    for (i = 0; i < completeList.length; i += 1){
        if (completeList[i].classList == "grey"){
            let toMoveUp = completeList[i].innerText;
            let toMoveDown = completeList[i-1].innerText;
            completeList[i].innerText = toMoveDown;
            completeList[i-1].innerText = toMoveUp;
            completeList[i].classList.remove("grey");
            completeList[i-1].classList.add("grey");
            break
        }
    }
})
let moveDown = document.querySelector("#mover-baixo");
moveDown.addEventListener("click", function(){
    let elementToMove = document.getElementsByClassName("grey");
    let completeList = document.querySelectorAll("li");
    for (i = 0; i < completeList.length; i += 1){
        if (completeList[i].classList == "grey"){
            let toMoveUp = completeList[i+1].innerText;
            let toMoveDown = completeList[i].innerText;
            completeList[i].innerText = toMoveUp;
            completeList[i+1].innerText = toMoveDown;
            completeList[i].classList.remove("grey");
            completeList[i+1].classList.add("grey");
            break
        }
    }
})
