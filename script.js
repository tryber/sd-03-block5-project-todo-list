var i, lista = document.getElementById("lista-tarefas");
//document.getElementById("criar-tarefa").addEventListener("click",insereitem());

function insereItem() {
    //  Abaixo, um recurso que impede que a função atribuida seja executada junto com os comandos desta
    var textoCaixa = document.getElementById("texto-tarefa").value;
    if (textoCaixa) {
        let item = document.createElement("li");
        item.innerText = textoCaixa;
        item.onclick = "mudaCorFundo()";
        item.addEventListener('click', function () { mudaCorFundo(item) });
        item.addEventListener('dblclick', function () { marcaCompletado(item) });
        lista.appendChild(item);
        document.getElementById("texto-tarefa").value = "";
    }
    else
        alert("Digite algo para adicionar");
    document.getElementById("texto-tarefa").focus();
}

function mudaCorFundo(item) {
    item.classList.add("cinza");
}

function marcaCompletado(item) {
    if (item.classList.contains("completed"))
        item.classList.remove("completed");
    else
        item.classList.add("completed");
}

//function apagaItem() {
//    let itemSelecionado
//}

function apagaFinalizados() {
    var listaCompleta = document.getElementsByClassName("completed");
    let elementos = listaCompleta.length;
    while (listaCompleta.length > 0)
        listaCompleta[0].remove();
}

function apagaTudo() {
    while (lista.hasChildNodes())
        lista.removeChild(lista.firstChild);
}
