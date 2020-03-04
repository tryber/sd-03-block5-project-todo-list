const criar_tarefa = document.querySelector('#criar-tarefa');
const texto_tarefa = document.querySelector('#texto-tarefa');
const lista_tarefas = document.querySelector('#lista-tarefas');

criar_tarefa.addEventListener('click', criarTarefa);

// Função: cria nova tarefa abaixo, e limpa input de texto.
function criarTarefa() {
    // Cria tarefa
    let tarefa = document.createElement('li');
    lista_tarefas.appendChild(tarefa).innerHTML = texto_tarefa.value;
    // Limpa input
    texto_tarefa.value = '';
    // Adiciona classe 'cinza' e 'cursor'
    tarefa.addEventListener('click', tarefaCinza);
    tarefa.classList.add('cursor');
}

// Função: ao clicar na tarefa, deixar cinza.
function tarefaCinza() {
    this.className = 'selected';
}