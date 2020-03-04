const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const clearAllBtn = document.getElementById('apaga-tudo');
const clearCompletedBtn = document.getElementById('remover-finalizados');

addBtn.addEventListener('click', criarTarefa);
clearAllBtn.addEventListener('click', clearAll);
clearCompletedBtn.addEventListener('click', clearCompleted)


function criarTarefa() {
    let listItem = document.createElement('li');
    listItem.innerHTML = input.value;
    document.getElementById('lista-tarefas').appendChild(listItem);
    listItem.className = 'item';

    var items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', grey);
    items[i].addEventListener('dblclick', tick)
    }
    input.value = '';
}

function grey() {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function tick() {
    event.target.className = 'completed'
    let completeItems = document.getElementsByClassName('completed');
    for (let i = 0; i < completeItems.length; i++) {
        completeItems[i].addEventListener('dblclick', untick);
    }
}

function untick() {
    event.target.className = '';
}

function clearAll() {
    document.getElementById('lista-tarefas').innerHTML = '';
}

function clearCompleted() {
    completeItems = document.getElementsByClassName('completed');
    for (let i = 0; i <= completeItems.length; i++) {
    completeItems[i].remove(i);
    }
}