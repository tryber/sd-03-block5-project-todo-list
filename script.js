


let button = document.getElementById("criar-tarefa")
button.addEventListener("click", addTask)

function addTask() {
    
    
    let bullet = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(bullet)
    bullet.id = "tarefa"
    bullet.className = "tarefa"

    let Task = document.getElementById("texto-tarefa").value
    bullet.innerHTML = Task
    document.getElementById("texto-tarefa").value = ""

    
}


let listOfTasks = document.querySelectorAll(".tarefa")

for (let i = 0; i < listOfTasks.length; i++){
   let taskSelected = listOfTasks[i]
   taskSelected.getElementsByClassName.background = "red"
    
}
