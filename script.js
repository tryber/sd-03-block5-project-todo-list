var numb = 1;
function adicionar(){
    let txt_pre_definido = document.getElementById('texto-tarefa').value;
    let t= document.getElementById("lista-tarefas").innerHTML += `<li class='lista' id='${numb}' ondblclick="cor(${numb})">${txt_pre_definido}<button class="btnapagar" onclick='apaga(${numb})'></button></li><hr>`;
    document.getElementById('texto-tarefa').value = "";
    numb++;
 }
               
function apaga(numero){
let divs = document.getElementsByClassName("lista");
    for (let id = 0; id < divs.length; id++) {
        let ids = divs[id].getAttribute('id');
        if (ids == numero) {
        divs[id].parentNode.removeChild(divs[id]);
        break;
        }
    }
}

function cor(numero){
    let divs = document.getElementsByClassName("lista");
    for (let id = 0; id < divs.length; id++) {
        let ids = divs[id].getAttribute('id');
        if(divs[id].className == "lista"){
            divs[id].className = "finalizado";
        }
        else if(divs[id].className == "finalizado"){
            divs[id].className = "lista";
        }
    }
}

function apagarTudo(){
    let e = document.querySelector("ol"); 
    let child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    }
}

/*let overLista = document.getElementsByClassName('lista');
overLista.document.addEventListener('click', function(){
  for (let i = 0; i < overLista.length; i++){
    let id = overLista[i].getAttribute('id');
    if(overLista[i].className == 'lista'){
        overLista[i].className = 'bgc';
        alert('deu');
    }
    else if(overLista[i].className == 'bgc'){
        overLista[i].className == 'bgc';
        alert('certo')
    }
  } 
});*/ 

