
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');

botaoCriarTarefa.addEventListener('click', function (){ 
  if(textoInput.value != ""){  
   let itemList = document.createElement('li'); 
   itemList.addEventListener('click',  mudaCor);   
  listaTarefas.appendChild(itemList).innerHTML = textoInput.value;
  console.log(document.getElementById('lista-tarefas'));
  textoInput.value ="";
  }else{
   alert('Favor digitar um valor valido !');
  }
})

function mudaCor(evento){
  if(evento.target.style.backgroundColor == 'rgb(128,128,128)'){
  evento.target.style.backgroundColor='rgb(255,255,255)';
  } else {

    evento.target.style.backgroundColor='rgb(128,128,128)';
  }}