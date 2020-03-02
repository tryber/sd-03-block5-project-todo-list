const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

button.addEventListener('click', function(){
    if(input.value != ''){
        let newLi = document.createElement('li');
        lista.appendChild(newLi);
        newLi.innerHTML = input.value;
        input.value = '';
        let items = document.querySelectorAll('li');
    }
});

items = document.querySelectorAll('li');
[].forEach.call(items, item => {

    item.addEventListener('click', function(){
        this.className = 'selected';
    });
});
