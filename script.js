const lista = document.getElementById('lista-tarefas');

function adicionarTarefa() {
    
    /* var itemLista = document.createTextNode(text); */
    var newItem = document.createElement("li");
    var text = document.getElementById('texto-tarefa').value; 
    newItem.innerHTML = text;
   /*  newItem.appendChild(itemLista); */
    document.getElementById('lista-tarefas').appendChild(newItem);
    document.getElementById('texto-tarefa').value= '';
}

console.log("hello, world")
