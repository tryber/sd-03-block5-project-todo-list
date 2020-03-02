// variáveis

//elementos
const inputText = document.querySelector('#texto-tarefa');
const listaOrd = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
let itemDeLista = null;


//eventListeners

botaoCriarTarefa.addEventListener('click', adicionarTarefa)



//funções

function adicionarTarefa() {
    let textoDigitado = inputText.value;
    itemDeLista = document.createElement('li');
    itemDeLista.innerHTML = (textoDigitado);
    listaOrd.appendChild(itemDeLista);
    adicionaClasseAoLi(itemDeLista);
    limpaCaixaTexto();
    criarEventListenerLi(itemDeLista);
}


function criarEventListenerLi(li) {
    li.addEventListener('click', alterarClasse);
    console.log('Event Listener criado');
}

function limpaCaixaTexto (){
    inputText.value = '';
    console.log('input text apagado');
}

function adicionaClasseAoLi(li){
    li.classList.add('unchecked');
}

function alterarClasse(event) {
    if(event.target.classList == 'unchecked') {
        event.target.classList.remove('unchecked');
        event.target.classList.add('checked');
    } else {
        event.target.classList.remove('checked');
        event.target.classList.add('unchecked');
    }
}