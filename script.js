let addItem = document.getElementById("criar-tarefa");
addItem.addEventListener("click", function(){
    let newItemContent = document.querySelector("#texto-tarefa").value;
    let newItem = document.createElement("li");
    newItem.innerText = newItemContent;
    document.getElementById("lista-tarefas").appendChild(newItem);
    newItem.addEventListener('click', function(){
        newItem.classList.toggle("completed");
        if (newItem.classList == "completed") {
            newItem.style.textDecoration = "line-through";
        } else {
            newItem.style.textDecoration = "none";
        }
    })
})