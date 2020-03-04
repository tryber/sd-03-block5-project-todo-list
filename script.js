const blista = document.getElementById('criar-tarefa');
const olista = document.getElementById('lista-tarefas');
const texttarefa = document.getElementById('texto-tarefa');
const dlista = document.getElementById('apaga-tudo');
const select = document.getElementsByClassName('selected');

blista.addEventListener('click', function() {
    const lisTarefa = document.createElement('li');
    olista.appendChild(lisTarefa);
    texttarefa.valur = " ";
    lisTarefa.innerText = texttarefa.value;
});

dlista.addEventListener('click', function() {
    olista.innerHTML = " ";
});