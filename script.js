let botaoCria = document.getElementById('criar-tarefa');
let botaoApaga = document.getElementById('apaga-tudo')
let listaOrdenada = document.getElementById('lista-tarefas');
let texto = document.getElementById('texto-tarefa');

botaoCria.addEventListener('click', function () {
    let novaTarefa = document.createElement('li');
    novaTarefa.classList = 'tarefa';
    let inputTexto = document.getElementById('texto-tarefa').value;
    novaTarefa.innerHTML = inputTexto;
    listaOrdenada.appendChild(novaTarefa);
    texto.value = " ";
});

botaoApaga.addEventListener('click', function () {
    listaOrdenada.innerHTML = ' ';
})

let tarefas = document.querySelectorAll('.tarefa');

for (let i in tarefas.length) {
    tarefas[i].addEventListener('click', function () {
        tarefas[i].style.backgroundColor = "#808080"
    })
    tarefas[i].addEventListener('dblclick', function () {
        
    })
}
