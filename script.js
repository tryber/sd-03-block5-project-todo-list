const botaoCria = document.getElementById('criar-tarefa');
const botaoApaga = document.getElementById('apaga-tudo');
const listaOrdenada = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');

function oneClick() {
    let tarefas = document.querySelectorAll('.completed');

    for (let i = 0; i < tarefas.length; i += 1) {
        if (tarefas[i].style.backgroundColor == '#808080') {
            tarefas[i].addEventListener('click', function () {
                tarefas[i].style.backgroundColor = '#ffffff';
            });
        } else {
            tarefas[i].addEventListener('click', function () {
                tarefas[i].style.backgroundColor = '#808080';
            });
        }
    }
}

function twoClick() {
    let tarefas = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefas.length; i += 1) {
        tarefas[i].addEventListener('dblclick', function () {
            tarefas[i].style.textDecoration = "line-through"
        });
    }
}

botaoCria.addEventListener('click', function () {
    const novaTarefa = document.createElement('li');
    novaTarefa.classList = 'completed';
    const inputTexto = document.getElementById('texto-tarefa').value;
    novaTarefa.innerHTML = inputTexto;
    listaOrdenada.appendChild(novaTarefa);
    texto.value = ' ';

    oneClick();
    twoClick();
});

botaoApaga.addEventListener('click', function () {
    listaOrdenada.innerHTML = ' ';
});

