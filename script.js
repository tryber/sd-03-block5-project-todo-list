
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');

botaoCriarTarefa.addEventListener('click', function (){ 
  if(textoInput.value != ""){     
  listaTarefas.appendChild(document.createElement('li')).innerHTML = textoInput.value;
  console.log(document.getElementById('lista-tarefas'));
  textoInput.value ="";
  }else{
   alert('Favor digitar um valor valido !');

  }
})