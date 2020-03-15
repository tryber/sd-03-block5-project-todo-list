function adicionarTarefa() {

    var text = document.getElementById('texto-tarefa').value; 
    var itemLista = document.createTextNode(text);
    var newItem = document.createElement("li");
    newItem.appendChild(itemLista);
    document.getElementById('lista-tarefas').appendChild(newItem);
    document.getElementById('texto-tarefa').value= '';
}

console.log("hello, world")