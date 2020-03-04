const criar_tarefa = document.querySelector('#criar-tarefa');
const texto_tarefa = document.querySelector('#texto-tarefa');
const lista_tarefas = document.querySelector('#lista-tarefas');

criar_tarefa.addEventListener('click', criarTarefa);

// Função: cria novo item abaixo, e limpa input de texto.
function criarTarefa() {
    let tarefa = document.createElement('li')
    lista_tarefas.appendChild(tarefa).innerHTML = texto_tarefa.value;

    texto_tarefa.value = '';
}