const criar_tarefa = document.querySelector('#criar-tarefa');
const texto_tarefa = document.querySelector('#texto-tarefa');
const lista_tarefas = document.querySelector('#lista-tarefas');
const apaga_tudo = document.querySelector('#apaga-tudo');
const tarefas = document.getElementsByTagName('li');

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
    tarefa.addEventListener('click', tarefaCinza);
    tarefa.addEventListener('dblclick', tarefaFeita);

}

let click_1 = true;
// Função: ao clicar na tarefa, deixar cinza.
function tarefaCinza() {
    if (click_1 == true) {
        this.classList.add('selected');
        click_1 = false;
    } else {
        this.classList.remove('selected');
        click_1 = true;
    }
}

let click_2 = true;
// Função: ao clicar 2x na tarefa, riscar.
function tarefaFeita() {
    if (click_2 == true) {
        this.classList.add('completed');
        click_2 = false;
    } else {
        this.classList.remove('completed');
        click_2 = true;
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