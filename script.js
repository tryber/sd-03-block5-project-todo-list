let textoDigitado = document.getElementById("texto-tarefa");
let clickButton = document.querySelector("#criar-tarefa");
let incluiItem = document.querySelector("#lista-tarefas");

function coloreItemLista(e) {
    e.target.classList.add('cinza');
}

function riscaItemLista(e) {
    e.target.classList.add('completed');
}

function adicionaItem() {
    let criaLista = document.createElement("li");
    criaLista.innerHTML = textoDigitado.value;
    incluiItem.appendChild(criaLista);
    textoDigitado.value = "";

    criaLista.addEventListener("click", coloreItemLista);
    criaLista.addEventListener("dblclick", riscaItemLista);
    };
clickButton.addEventListener("click", adicionaItem);
