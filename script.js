window.onload = function() {
    function createList() {
        //Armazena Conteudo da caixa de input
        //Cria novo elemento li
        //Insere conteúdo (valor do Taskinput)
        let taskInput = document.getElementById('texto-tarefa').value;
        let liElement = document.createElement("li");
        liElement.innerHTML = taskInput;
        //Adiciona a classe btn para adicionar cursor pointer.
        liElement.classList.add("btn");
        //Adicionar fundo cinza ao elemento.

        liElement.addEventListener('click', event => {
            liElement.style.backgroundColor = "rgb(128,128,128)"
        });

        //Risca Item selecionado com duplo-click (adicionando a classe completed)
        liElement.addEventListener('dblclick', event => {
            if (liElement.classList.contains('completed')) {
                liElement.classList.remove("completed");

            } else {
                liElement.classList.add("completed");
            }
        });
        //Limpa a caixa de input
        document.getElementById("texto-tarefa").value = '';
        //Adiciona o nó li ao elemento ol
        document.getElementById('lista-tarefas').appendChild(liElement);

    }

    let addTaskBtn = document.getElementById('criar-tarefa');
    addTaskBtn.addEventListener("click", createList);

}