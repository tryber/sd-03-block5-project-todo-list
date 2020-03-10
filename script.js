    window.onload = function (){
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

    function removeSelected (){
        let selected = document.getElementsByClassName("selected")

        selected[0].parentNode.removeChild(selected[0])
    }

    let clearSelected = document.getElementById("remover-selecionado")
    clearSelected.addEventListener('click', removeSelected)


    let salvarTarefas = document.getElementById('salvar-tarefas');
    let moverCima = document.getElementById('mover-cima');
    let moverBaixo = document.getElementById('mover-baixo');
    let listaTarefas = document.getElementById('lista-tarefas')
    
    salvarTarefas.addEventListener('click',function(){
        localStorage.setItem('salvar', listaTarefas.innerHTML);
    })
    
    if(localStorage.getItem('salvar')){
        listaTarefas.innerHTML = localStorage.getItem('salvar');
    }
    
    moverCima.addEventListener('click',function(){
        let children = document.querySelector('#lista-tarefas');
        let up = document.getElementsByClassName('selected')[0];
        children.insertBefore(up,up.previousSibling);
    })
    
    moverBaixo.addEventListener('click',function(){
        let children = document.querySelector('#lista-tarefas');
        let up = document.getElementsByClassName('selected')[0];
        children.insertBefore(up,up.nextSibling.nextSibling);
    })
}