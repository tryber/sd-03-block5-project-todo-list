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
        newItem.classList.toggle("gray");
        if (newItem.classList == "gray") {
            newItem.style.backgroundColor = "rgb(128,128,128)";
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
