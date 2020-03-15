function adicionarTarefa() {
    var text = document.getElementById('texto-tarefa').value; 
    var itemLista = document.createTextNode(text);
    var newItem = document.createElement("li");
    newItem.appendChild(itemLista);
    document.getElementById('lista-tarefas').appendChild(newItem);
    document.getElementById('texto-tarefa').value= '';
}

function select () {
    document.getElementById('item-lista').style.backgroundColor = "gray";
    var sel = document.getElementsByTagName("li")
   /*  sel.className += "selected" */
    sel.classList.add("selected")
    document.getElementsByClassName('selected').style.color = "red";
}

function clear () {
    document.querySelectorAll('#lista-tarefas').innerHTML = "";
}
console.log("hello, world")
