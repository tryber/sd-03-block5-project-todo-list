const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
let items = document.querySelectorAll('li');

button.addEventListener('click', function(){
    if(input.value != ''){
        let newLi = document.createElement('li');
        lista.appendChild(newLi);
        newLi.innerHTML = input.value;
        input.value = '';
        items = document.querySelectorAll('li');
    }
});

[].forEach.call(items, item => {
    item.addEventListener('click', function(){
        this.style.backgroundColor = 'rgb(128,128,128)';
    });
});
