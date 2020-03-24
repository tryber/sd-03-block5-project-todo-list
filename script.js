const lista = document.getElementById('lista-tarefas');
let limpar = document.getElementById('apaga-tudo');
let remover = document.getElementById('remover-finalizados');
let cleanSelect = document.getElementById('remover-selecionado');
let listaTarefas = document.getElementById('lista-tarefas');

console.log("hello, world")
function adicionarTarefa () {
  var newItem = document.createElement("li");
  newItem.innerHTML = document.getElementById('texto-tarefa').value; 
  newItem.className = "lista";
  document.getElementById('lista-tarefas').appendChild(newItem);
  document.getElementById('texto-tarefa').value= '';
  newItem.addEventListener('click', function () {
    let selected = document.getElementsByClassName('selected');
    if(selected.length==1){
      selected[0].classList.remove('selected');
      newItem.classList.add('selected');
        }
    else{
      newItem.classList.add('selected');
        }
    })
  newItem.addEventListener('dblclick', function(){
        if (newItem.classList.contains("completed")) {
            newItem.classList.remove("completed");
        }
        else {
            newItem.classList.add('completed');
        }
  })
  limpar.addEventListener('click',function(){
    document.querySelectorAll('.lista').forEach(e => e.remove());
  })
  remover.addEventListener('click',function(){
    document.querySelectorAll('.completed').forEach(e => e.remove());
  })
  cleanSelect.addEventListener('click',function(){
    document.querySelectorAll('.selected').forEach(e => e.remove());
  })
  
}
function save(){
localStorage.setItem('salvar', listaTarefas.innerHTML);
}
