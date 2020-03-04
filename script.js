// verifica se existe lista salva e seta na página
if (localStorage.getItem('listaSalva')) {
    const listaSalva = localStorage.getItem('listaSalva');
    adicionarTarefaSalva(listaSalva);
}


//elementos
const inputText = document.querySelector('#texto-tarefa');
const listaOrd = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const botaoApagarTudo = document.querySelector('#apaga-tudo');
const botaoRemoverFin = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
let itemDeLista = null;


//eventListeners

botaoCriarTarefa.addEventListener('click', adicionarTarefa);
botaoApagarTudo.addEventListener('click', apagarLista);
botaoRemoverFin.addEventListener('click', apagarFinalizados);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);



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

function adicionarTarefaSalva(listaSalva) {
    let lista = document.getElementById('lista-tarefas');
    lista.innerHTML = listaSalva;
}

function salvarTarefas() {
    const lista = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('listaSalva',lista);
}


function apagarLista() {
    while (listaOrd.hasChildNodes()) {
        listaOrd.removeChild(listaOrd.firstChild);
    }
    localStorage.removeItem('listaSalva');
}


function apagarFinalizados() {
    let lista = document.querySelectorAll('li');
    for (i = lista.length-1; i>=0; i-=1){
        if(lista[i].classList.contains('completed')) {
            lista[i].remove();
        }
    }
}


function criarEventListenerLi(li) {
    li.addEventListener('click', alterarClasseCheck);
    li.addEventListener('dblclick', alterarClasseComplete);
}

function limpaCaixaTexto (){
    inputText.value = '';
}

function adicionaClasseAoLi(li){
    li.classList.add('unchecked');
}

function alterarClasseCheck(event) {
    if(event.target.classList.contains('unchecked')) {
        event.target.classList.remove('unchecked');
        event.target.classList.add('checked');
    } else {
        event.target.classList.remove('checked');
        event.target.classList.add('unchecked');
    }
}

function alterarClasseComplete(event) {
    if(event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}