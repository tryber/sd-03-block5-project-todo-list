

let botaoCriarTarefa = document.getElementById('criar-tarefa');
let textoInput = document.getElementById('texto-tarefa');  
let listaTarefas = document.getElementById('lista-tarefas');
let botaoApagaTarefas = document.getElementById('apaga-tudo');
let botaoApagaTarefasCompletas = document.getElementById('remover-finalizados');
let itemList;
let botaosavalTarefas = document.getElementById('salvar-tarefas');
let botaoMoverCima = document.getElementById('mover-cima');
let botaoMoverBaixo = document.getElementById('mover-baixo');
let removerSelecionado = document.getElementById('remover-selecionado');
let liFilho;
let element = {position:0,
               element:"",
               text:"",
               class:""
};

let selected = document.querySelectorAll('#selected');

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
})

botaoMoverCima.addEventListener('click', function(){
 

})

botaoMoverBaixo.addEventListener('click', function(){
  
 

})

removerSelecionado.addEventListener('click', function(){
  
 

})

function taxarTexto(evento) {
let decoration =   evento.target.style.textDecoration;
console.log(decoration);
if(decoration == 'line-through'){
evento.target.style.textDecoration = '';
evento.target.classList.remove('completed');
console.log("strike")
} else if (decoration != 'line-through'){
  evento.target.style.textDecoration = 'line-through';
  evento.target.classList.add('completed');
}
}

function mudaCor(evento){
  selected = document.querySelectorAll('#selected'); 
  console.log(selected.length);    
    if(selected.length < 1){
    evento.target.setAttribute('id','selected');
    console.log('menor que 1 ',selected.length);
    selected = document.querySelectorAll('#selected');
} else{
  selected[0].setAttribute('id','');
  evento.target.setAttribute('id','selected');


}
    
 
   // console.log('maior que 1 ',selected);
   // selected[0].setAttribute('id','selected');
    //evento.target.classList.add('selected');
  
  }

