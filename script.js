let textoDigitado = document.getElementById("texto-tarefa");
let clickButton = document.querySelector("#criar-tarefa");
let incluiItem = document.querySelector("#lista-tarefas");

function adicionaItem() {
    let criaLista = document.createElement("li");
    criaLista.innerHTML = textoDigitado.value;
    incluiItem.appendChild(criaLista);
    };
clickButton.addEventListener("click", adicionaItem);