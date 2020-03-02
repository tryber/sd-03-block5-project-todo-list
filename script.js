// variáveis

//elementos
const inputText = document.querySelector('#texto-tarefa');
const listaOrd = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');

//eventListeners

botaoCriarTarefa.addEventListener("click", adicionarTarefa)


//funções

function adicionarTarefa() {
    let textoDigitado = inputText.value;
    let itemDeLista = document.createElement('li');
    itemDeLista.innerHTML = textoDigitado;
    listaOrd.appendChild(itemDeLista);
    limpaCaixaTexto();
}

function limpaCaixaTexto (){
    inputText.value = '';
}