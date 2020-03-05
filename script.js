
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');

botaoCriarTarefa.addEventListener('click', function (){      
  listaTarefas.appendChild(document.createElement('li')).innerText= textoInput.value;
  console.log(document.getElementById('lista-tarefas'));
  textoInput.value ="";


})