window.onload = function(){
    function selected (x){
        if (document.getElementsByClassName("selected").length > 0){
        let selected = document.getElementsByClassName("selected")
        selected[0].classList.remove("selected")
        }
        x.classList.add("selected")
    }

    function completed (x){
        if (x.classList.contains("completed")) {
            x.classList.remove("completed")
        } else {
        x.classList.add("completed")    
        }
    }

    let adicionar = document.getElementById("criar-tarefa")

    adicionar.addEventListener('click', function (){
        let input = document.getElementById("texto-tarefa")
        let item = document.createElement("li")
        item.innerText = input.value
        document.getElementById("lista-tarefas").appendChild(item)
        item.addEventListener('click', function (){ selected(item)})
        item.addEventListener('dblclick', function (){ completed(item)})
        input.value = ''
    })

    function removeAll (){
        let lista = document.getElementById("lista-tarefas")
        while (lista.firstChild){
            lista.removeChild(lista.lastChild)
        }
    }

    let clearList = document.getElementById("apaga-tudo")
    clearList.addEventListener('click', removeAll)
    
    function removeCompleted (){
        let completed = document.getElementsByClassName("completed")

        while (completed[0]){
            completed[0].parentNode.removeChild(completed[0])
        }
    }

    let clearCompleted = document.getElementById("remover-finalizados")
    clearCompleted.addEventListener('click', removeCompleted)
}