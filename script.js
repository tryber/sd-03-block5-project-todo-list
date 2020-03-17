const lista = document.getElementById('lista-tarefas');
let limpar = document.getElementById('apaga-tudo');
let remover = document.getElementById('remover-finalizados');

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
        if (newItem.classList.contains("check")) {
            newItem.classList.remove("check");
        }
        else {
            newItem.classList.add('check');
        }
  })
  limpar.addEventListener('click',function(){
    document.querySelectorAll('.lista').forEach(e => e.remove());
  })
  remover.addEventListener('click',function(){
    document.querySelectorAll('.check').forEach(e => e.remove());
  })
}

