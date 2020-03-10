const texto_tarefa = document.querySelector('#texto-tarefa');
const lista_tarefas = document.querySelector('#lista-tarefas');
const criar_tarefa = document.querySelector('#criar-tarefa');
const apaga_tudo = document.querySelector('#apaga-tudo');
const remover_finalizados = document.querySelector("#remover-finalizados");

// ================================ Botão "Criar Tarefa" ================================

criar_tarefa.addEventListener('click', criarTarefa);

function criarTarefa() {
    // Cria tarefa
    let tarefa = document.createElement('li');
    lista_tarefas.appendChild(tarefa).innerHTML = texto_tarefa.value;
    // Limpa input
    texto_tarefa.value = '';
    // Tarefa transforma ponteiro em "mãozinha"
    tarefa.classList.add('cursor');
    // Eventos para selecionar e riscar tarefa
    tarefa.addEventListener('click', tarefaSelecionada);
    tarefa.addEventListener('dblclick', tarefaFinalizada);

}

let clickSelecionar = true;
// Função: ao clicar na tarefa, deixar cinza.
function tarefaSelecionada() {
    if (clickSelecionar == true) {
        this.classList.add('selected');
        clickSelecionar = false;
    } else {
        this.classList.remove('selected');
        clickSelecionar = true;
    }
}

let clickFinalizar = true;
// Função: ao clicar 2x na tarefa, riscar.
function tarefaFinalizada() {
    if (clickFinalizar == true) {
        this.classList.add('completed');
        clickFinalizar = false;
    } else {
        this.classList.remove('completed');
        clickFinalizar = true;
    }
}

// ================================ Botão "Apagar Tudo" ================================

apaga_tudo.addEventListener('click', apagarTudo);

function apagarTudo() {
    // Função: ao clicar no botão "Apagar Tudo", excluir todas as tarefas.
    while (lista_tarefas.firstChild) {
        lista_tarefas.removeChild(lista_tarefas.lastChild);
    }
}

// ================================ Botão "Remver Finalizados" ================================

remover_finalizados.addEventListener('click', apagarFinalizadas);

function apagarFinalizadas() {
    let finalizadas = document.querySelector('.completed');
    console.log(true);
    for (let i = 0; i < 10; i++) {
        lista_tarefas.removeChild(finalizadas);
    }
}