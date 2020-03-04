//ideia do Luis
let i = 0;
let oList = document.getElementById('lista-tarefas');

function raschunhoTarefa() {
    window.text = document.querySelector('#texto-tarefa').value;
}

function addTarefa() {
    let novaTarefa = document.createElement('LI');
    let conteudoTarefa = document.createTextNode(text);
    novaTarefa.appendChild(conteudoTarefa);
    document.getElementById('lista-tarefas').appendChild(novaTarefa);
    novaTarefa.classList.add('itemLista');
    document.getElementById('texto-tarefa').value = '';
    novaTarefa.id = i;
    i++;
    console.log('criado a li ' + novaTarefa);
}

function apagaTudo() {
    let a = document.getElementById('lista-tarefas');
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }

}

function selecionada() {
    var pegarId = event.target.id;
    document.getElementById(pegarId).classList.toggle('deixaCinza');

}

function riscadinha() {
    var pegarId2 = event.target.id;
    document.getElementById(pegarId2).classList.toggle('completed');
}

function removeCompletos() {
    let b = document.querySelectorAll('.itemLista')
    console.log

}