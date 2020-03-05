let i, lista = document.getElementById("lista-tarefas");
//document.getElementById("criar-tarefa").addEventListener("click",insereitem());

window.onload = function() {
    for (i = 0 ; i < localStorage.length ; i++) {
        let item = document.createElement("li");
        item.innerText = localStorage.getItem(`I${i}`);
        item.onclick = "mudaCorFundo()";
        item.addEventListener('click', function () { selecionaItem(item) });
        item.addEventListener('dblclick', function () { marcaCompletado(item) });
        lista.appendChild(item);
        }
}

function insereItem() {
    //  Abaixo, um recurso que impede que a função atribuida seja executada junto com os comandos desta
    var textoCaixa = document.getElementById("texto-tarefa").value;
    if (textoCaixa) {
        let item = document.createElement("li");
        item.innerText = textoCaixa;
        item.onclick = "mudaCorFundo()";
        item.addEventListener('click', function () { selecionaItem(item) });
        item.addEventListener('dblclick', function () { marcaCompletado(item) });
        lista.appendChild(item);
        document.getElementById("texto-tarefa").value = "";
    }
    else
        alert("Digite algo para adicionar");
    document.getElementById("texto-tarefa").focus();
}

function armazenaItens() {
    let tamLista = lista.childElementCount;
    for (i = 0 ; i < tamLista ; i++)
        localStorage.setItem(`I${i}`,lista.childNodes[i].textContent);
}

function selecionaItem(item) {
    if (item.classList.contains("cinza"))
        item.classList.remove("cinza");
    else
        item.classList.add("cinza");
}

function marcaCompletado(item) {
    if (item.classList.contains("completed"))
        item.classList.remove("completed");
    else
        item.classList.add("completed");
}

function apagaItem() {
    let itenSelecionados = document.getElementsByClassName("cinza");
    while(itenSelecionados.length > 0)
        itenSelecionados[0].remove();
}

function apagaFinalizados() {
    var listaCompleta = document.getElementsByClassName("completed");
    let elementos = listaCompleta.length;
    while (listaCompleta.length > 0)
        listaCompleta[0].remove();
}

function apagaLS () {
    localStorage.clear();
}

function apagaTudo() {
    while (lista.hasChildNodes())
        lista.removeChild(lista.firstChild);
}
