const lista = document.getElementById('lista-tarefas');
let limpar = document.getElementById('apaga-tudo');
let remover = document.getElementById('remover-finalizados');
let save = document.getElementById('salvar-tarefas');
let movUp = document.getElementById('mover-cima');
let movDown = document.getElementById('mover-baixo');
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
}

function bonus() {
  let salvarTarefas = document.getElementById('salvar-tarefas');
    let moverCima = document.getElementById('mover-cima');
    let moverBaixo = document.getElementById('mover-baixo');
    let removerSelecionado = document.getElementById('remover-selecionado');
  salvarTarefas.addEventListener('click',function(){
    localStorage.setItem('salvar', listaTarefas.innerHTML);
})
if(localStorage.getItem('salvar')){
    listaTarefas.innerHTML = localStorage.getItem('salvar');  
}
moverCima.addEventListener('click',function(){
    let children = document.querySelector('#lista-tarefas');
    let up = document.getElementsByClassName('selected')[0];
    children.insertBefore(up,up.previousSibling);
})
moverBaixo.addEventListener('click',function(){
    let children = document.querySelector('#lista-tarefas');
    let up = document.getElementsByClassName('selected')[0];
    children.insertBefore(up,up.nextSibling.nextSibling);
})
removerSelecionado.addEventListener('click',function(){
    document.querySelectorAll('.selected').forEach(e => e.remove());
})
}




