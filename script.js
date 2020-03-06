

let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');
let botaoApagaTarefas = document.getElementById('apaga-tudo');
let botaoApagaTarefasCompletas = document.getElementById('remover-finalizados');
let itemList;
let botaosavalTarefas = document.getElementById('salvar-tarefas');
let liFilho;
window.onload = function (){
  for(i=0; i < localStorage.length; i++) {
    liFilho =  listaTarefas.appendChild(document.createElement('li'))
    console.log(localStorage.key(i));

    if(localStorage.key(i) == 'li-class-complete' + i){
     
      liFilho.innerHTML= localStorage.getItem('li-class-complete' + i);
      liFilho.setAttribute('class','completed');
      liFilho.style.textDecoration = 'line-through';
      console.log("aqui");
    }else{
      liFilho.innerHTML=localStorage.getItem('li' + i);
     }  
  }
    
   liFilho = document.querySelectorAll('#lista-tarefas li');
   for(x=0; x< liFilho.length; x++){
   liFilho[x].addEventListener('click', mudaCor);
   liFilho[x].addEventListener('dblclick', taxarTexto);
}}



botaoCriarTarefa.addEventListener('click', function () { 
  if(textoInput.value != ""){  
    itemList = document.createElement('li'); 
    itemList.addEventListener('click',  mudaCor);   
    itemList.addEventListener('dblclick',  taxarTexto);
    listaTarefas.appendChild(itemList).innerHTML = textoInput.value;
    console.log(document.getElementById('lista-tarefas'));
    textoInput.value ="";
  }else{
   alert('Favor digitar um valor valido !');
  }
})

botaoApagaTarefasCompletas.addEventListener('click', removerTerminados);
 
 function removerTerminados(){
  let listaCompletos = document.querySelectorAll('#lista-tarefas > li.completed');
  console.log( document.querySelectorAll('#lista-tarefas > li.completed'));
  for(i = 0;i <= listaCompletos.length; i++){
    if(listaCompletos[i] == null){
     console.log("nulo");
    }else{
    listaCompletos[i].parentNode.removeChild(listaCompletos[i]);
  }}

 }


botaoApagaTarefas.addEventListener('click', function(){
listaTarefas.innerHTML="";
})


botaosavalTarefas.addEventListener('click', function(){
let elementoschild = document.querySelectorAll('#lista-tarefas li'); 
 for (i=0; i< elementoschild.length; i++){ 
    if(elementoschild[i].getAttribute('class') == 'completed'){
   // localStorage.removeItem('li' + i,elementoschild[i].innerHTML); 
    localStorage.setItem('li-class-complete' + i,elementoschild[i].innerHTML);
  }else {
    //localStorage.removeItem('li-class-complete' + i,elementoschild[i].innerHTML);
    localStorage.setItem('li' + i,elementoschild[i].innerHTML);
   }  
 }
})

function taxarTexto(evento) {
let decoration =   evento.target.style.textDecoration;
console.log(decoration);
if(decoration == 'line-through'){
evento.target.style.textDecoration = '';
evento.target.setAttribute('class', '');
console.log("strike")
} else if (decoration != 'line-through'){
  evento.target.style.textDecoration = 'line-through';
  evento.target.setAttribute('class', 'completed');
}
}

function mudaCor(evento){
  let color = event.target.style.backgroundColor;
  console.log(color);
  if(color == 'rgb(128, 128, 128)'){
  evento.target.style.backgroundColor='rgb(255,255,255)';
  } else if(evento.target.style.backgroundColor != 'rgb(128, 128, 128)'){
    evento.target.style.backgroundColor='rgb(128,128,128)';
  }}