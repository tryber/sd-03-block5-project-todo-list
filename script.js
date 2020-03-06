
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');
let itemList;
botaoCriarTarefa.addEventListener('click', function (){ 
  if(textoInput.value != ""){  
    itemList = document.createElement('li'); 
    itemList.addEventListener('click',  mudaCor);   
    listaTarefas.appendChild(itemList).innerHTML = textoInput.value;
    console.log(document.getElementById('lista-tarefas'));
    textoInput.value ="";
  }else{
   alert('Favor digitar um valor valido !');
  }
})

function mudaCor(evento){
  let color = event.target.style.backgroundColor;
  console.log(color);
  if(color == 'rgb(128, 128, 128)'){
  evento.target.style.backgroundColor='rgb(255,255,255)';
  } else if(evento.target.style.backgroundColor != 'rgb(128, 128, 128)'){
    evento.target.style.backgroundColor='rgb(128,128,128)';
  }}