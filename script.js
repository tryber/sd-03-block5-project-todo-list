let blista = document.getElementById('criar-tarefa');
let olista = document.getElementById('lista-tarefas');
let texttarefa = document.getElementById('texto-tarefa');
let dlista = document.getElementById('apaga-tudo');



blista.addEventListener('click', function() {
    let lisTarefa = document.createElement('li');
    olista.appendChild(lisTarefa);
    lisTarefa.innerText = texttarefa.value;
    lisTarefa.classList.add('completed');
    document.getElementById('texto-tarefa').value = '';

    click();
    dblclick();
});


dlista.addEventListener('click', function() {
    olista.innerHTML = " ";
});

function click() {
    let tarefa = document.getElementsByClassName('completed');
    for (let i = 0; i < tarefa.length; i += 1) {
        tarefa[i].addEventListener('click', function() {
            tarefa[i].style.backgroundColor = "#808080";
        })
    }
}

function dblclick() {


    let dobleclick = document.getElementsByClassName('completed');
    for (let l = 0; l < dobleclick.length; l += 1) {
        dobleclick[l].addEventListener('dblclick', function() {
            dobleclick[l].style.textDecoration = "line-through";
        })
    }
}