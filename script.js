let botaoCria = document.getElementById('criar-tarefa');
let botaoApaga = document.getElementById('apaga-tudo')
let listaOrdenada = document.getElementById('lista-tarefas');

botaoCria.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    novaTarefa.classList = 'tarefa';
    let inputTexto = document.getElementById('texto-tarefa').value;
    novaTarefa.innerHTML = inputTexto;
    listaOrdenada.appendChild(novaTarefa);
});

botaoApaga.addEventListener('click', function () {
    listaOrdenada.innerHTML = ' ';
})