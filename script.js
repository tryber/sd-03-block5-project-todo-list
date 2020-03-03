window.onload = function() {



    let addTaskBtn = document.getElementById('criar-tarefa');

    function createList() {
        //Armazena Conteudo da caixa de input
        //Cria novo elemento li
        //Insere conteúdo (valor do Taskinput)
        let taskInput = document.getElementById('texto-tarefa').value;
        let liElement = document.createElement("li");
        liElement.innerHTML = taskInput;

        //Limpa a caixa de input
        document.getElementById("texto-tarefa").value = '';
        //Adiciona o nó li ao elemento ol
        document.getElementById('lista-tarefas').appendChild(liElement);

    }
    addTaskBtn.addEventListener("click", createList);

}