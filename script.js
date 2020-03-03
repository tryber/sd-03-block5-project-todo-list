var lista = document.getElementById("lista-tarefas");
//document.getElementById("criar-tarefa").addEventListener("click",insereitem());

function insereItem() {
    //  Abaixo, uma gambiarra que impede que a função atribuida seja executada junto com os comandos desta
    var textoCaixa = document.getElementById("texto-tarefa").value;
    let item = document.createElement("li");
    item.innerText = textoCaixa;
    item.onclick = "mudaCorFundo()";
    item.addEventListener('click', function () { mudaCorFundo(item) });
    item.addEventListener('dblclick', function () { marcaCompletado(item) });
    lista.appendChild(item);
    document.getElementById("texto-tarefa").value = "";
}

function mudaCorFundo(item) {
    item.classList.add("cinza");
    console.log(item);
}

function marcaCompletado(item) {
    item.classList.add("completed");
    console.log(item);
}

function apagaFinalizados() {
    var itemCompletado = document.getElementsByClassName("completed")
    itemCompletado.remove(self);
}

function apagaTudo() {
    lista.removeChild();
}