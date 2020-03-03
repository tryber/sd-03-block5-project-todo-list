let txtInput = document.getElementById("texto-tarefa");
let txtTarefa = document.getElementById("criar-tarefa");
let listando = document.getElementById("lista-tarefas");

txtTarefa.addEventListener("click", addinput);

function addinput () {
    let list = document.createElement("li");
    let iten = txtInput.value
    let addIten = document.createTextNode(iten);
    list.appendChild(addIten);
    listando.appendChild(list);
    txtInput.value = " "
    txtInput.focus ()
}
