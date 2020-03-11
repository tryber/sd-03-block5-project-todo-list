let textoDigitado = document.getElementById("texto-tarefa");
let clickButtonAdicionar = document.querySelector("#criar-tarefa");
let incluiItem = document.querySelector("#lista-tarefas");

function coloreItemLista(e) {
    e.target.classList.add('cinza');
}

function riscaItemLista(e) {
    e.target.classList.add('completed');
}

function reverteRiscaItemLista(e) {
    e.target.classList.remove('completed');
}

function adicionaItem() {
    let criaLista = document.createElement("li");
    criaLista.innerHTML = textoDigitado.value;
    incluiItem.appendChild(criaLista);
    textoDigitado.value = "";

    criaLista.addEventListener("click", coloreItemLista);
    criaLista.addEventListener("dblclick", riscaItemLista);
    };
clickButtonAdicionar.addEventListener("click", adicionaItem);

let clickButtonLimpaConcluidos = document.querySelector("#remover-finalizados");
let clickButtonLimpaTodos = document.querySelector("#apaga-tudo");

/*function limpaRiscados() {
    let finalizados = document.querySelectorAll(".completed");
    finalizados.remove();
}
clickButtonLimpaConcluidos.addEventListener("click", limpaRiscados);*/

function limpaConcluidos() {
    for (let i = document.querySelectorAll(".completed").length; i>=0; i--) {
        document.querySelector(".completed").remove();
    }
}
clickButtonLimpaConcluidos.addEventListener("click", limpaConcluidos);

function limpaTodos() {
    for (let i = document.querySelectorAll("li").length; i>=0; i--) {
        document.querySelector("li").remove();
    }
}
clickButtonLimpaTodos.addEventListener("click", limpaTodos);
