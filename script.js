const blista = document.getElementById('criar-tarefa');
const olista = document.getElementById('lista-tarefas');
const texttarefa = document.getElementById('texto-tarefa');
const dlista = document.getElementById('apaga-tudo');



blista.addEventListener('click', function() {
    const lisTarefa = document.createElement('li');
    olista.appendChild(lisTarefa);
    lisTarefa.className = "listA"
    lisTarefa.innerText = texttarefa.value;
    texttarefa.value = " ";
});


dlista.addEventListener('click', function() {
    olista.innerHTML = " ";
});