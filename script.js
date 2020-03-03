function raschunhoTarefa() {
    window.text = document.querySelector('#texto-tarefa').value;
    document.querySelector('#rascunho').innerHTML = text;

}


function addTarefa() {
    let novaTarefa = document.createElement('LI');
    let conteudoTarefa = document.createTextNode(text);
    novaTarefa.appendChild(conteudoTarefa);
    document.getElementById('lista-tarefas').appendChild(novaTarefa);
    novaTarefa.classList.add('itemLista');
    document.getElementById('texto-tarefa').value = '';
}

function apagaTudo() {
    let a = document.getElementById('lista-tarefas');
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }

}

function marked() {


}