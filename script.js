

let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');
let botaoApagaTarefas = document.getElementById('apaga-tudo');
let botaoApagaTarefasCompletas = document.getElementById('remover-finalizados');
let itemList;
let botaosavalTarefas = document.getElementById('salvar-tarefas');
let liFilho;
let element = {position:0,
               element:"",
               text:"",
               class:""
};
window.onload = function (){
  let listaObj = JSON.parse(localStorage.getItem('elementos-1'));
 
  for(i=0; i < localStorage.length; i++) {
    let listaObj = JSON.parse(localStorage.getItem('elementos-'+ i));
    
    liFilho =  listaTarefas.appendChild(document.createElement('li'))

    if(listaObj.class == 'li-class-complete' + i){  
      console.log(listaObj.text);
      liFilho.innerHTML= listaObj.text;
      liFilho.setAttribute('class','completed');
      liFilho.style.textDecoration = 'line-through';
      console.log("aqui");
    }else{
      liFilho.innerHTML=listaObj.text;
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
    element['element'] = 'li';
    element['class'] = 'li-class-complete' + i;
    element['text'] = elementoschild[i].innerHTML;
    element['position'] = i ;
    localStorage.setItem('elementos-' + i, JSON.stringify( element));
   
  }else {
    element.element = 'li';
    element.class = null; 
    element.text = elementoschild[i].innerHTML;
    element.position = i ;
    localStorage.setItem('elementos-' + i,JSON.stringify( element));
   }
  
  
 }    
 console.log(element);
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