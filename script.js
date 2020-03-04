let button = document.getElementById("criar-tarefa")
button.addEventListener("click", addTask)


function addTask() {

    //criar lista
    let bullet = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(bullet)
    bullet.className = "tarefa"

    let Task = document.getElementById("texto-tarefa").value
    bullet.innerHTML = Task
    document.getElementById("texto-tarefa").value = ""

    // adicionar click
    bullet.addEventListener("click", changeColor)
    function changeColor() {
        bullet.classList.add("selected")
        bullet.style.backgroundColor = "rgb(128,128,128)"
    }

    // adicionar doubleclick
    bullet.addEventListener("dblclick", lineThrough)
    function lineThrough() {
        if (bullet.classList == "tarefa completed" || bullet.classList == "tarefa selected completed") {   // posso usar o bullet.classList.toggle("class") ou bullet.class.contains("")
            bullet.classList.remove("completed")
        } else { bullet.classList.add("completed") }

    }
    // apagar tudo
    let eraseButton = document.getElementById("apaga-tudo")
    eraseButton.addEventListener("click", deleteAll)

    function deleteAll() {
        document.getElementById("lista-tarefas").innerHTML = ""
    }

    //remover completo
    let eraseCompleted = document.getElementById("remover-finalizados")
    eraseCompleted.addEventListener("click", removeCompleted)

    function removeCompleted() {
        document.querySelectorAll('.completed').forEach(function (selected) {
            selected.remove()
        })
    }

    //remover selecionado

    let deleteSelected = document.getElementById("remover-selecionado")
    deleteSelected.addEventListener("click", removeSelected)

    function removeSelected() {
        document.querySelectorAll('.selected').forEach(function (selected) {
            selected.remove()
        })

    }
    //mover pra baixo
    let moveUp = document.getElementById("mover-cima")
    moveUp.addEventListener("click", movUp)

    function movUp(){
        document.querySelectorAll(".selected").forEach(function (selected) {
            
            document.getElementById("lista-tarefas").removeChild(selected.nextElementSibling)
            
        })
    }

     
    
} 
    





