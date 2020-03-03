


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

    
    bullet.addEventListener("click", changeColor)
    function changeColor(){
        bullet.style.backgroundColor = "rgb(128,128,128)"
    }
    
    bullet.addEventListener("dblclick", lineThrough)
    function lineThrough() {
        if (bullet.classList == "tarefa completed"){
            bullet.classList.remove("completed")
        }else{bullet.classList.add("completed")}
        
    }
}


// posso usar o bullet.classList.toggle("class") ou bullet.class.contains("")


let eraseButton = document.getElementById("apaga-tudo")
eraseButton.addEventListener("click", deleteAll)

function deleteAll() {
    document.getElementById("lista-tarefas").innerHTML = ""
}


let eraseCompleted = document.getElementById("remover-finalizados")
eraseCompleted.addEventListener("click", removeCompleted)

function removeCompleted() {
    document.querySelectorAll('.completed').forEach(function(selected){
        selected.remove()
        })
    }



        
    


  
