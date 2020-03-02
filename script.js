const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

button.addEventListener('click', function(){
    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    lista.append(newLi);
    input.value = '';
});
