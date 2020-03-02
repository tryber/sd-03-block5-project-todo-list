var numb = 1;
function adicionar(){
    let txt_pre_definido = document.getElementById('texto-tarefa').value;
    let t= document.getElementById("lista-tarefas").innerHTML += `<li class='lista' id='${numb}' ondblclick="cor(${numb})" onclick="corFundo(${numb})">${txt_pre_definido} <button class="btnapagar" onclick='apaga(${numb})'></button><hr></li>`;
    document.getElementById('texto-tarefa').value = null;
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
        if(divs[id].style.color == "red"){
            divs[id].style.textDecoration = "none";
            divs[id].style.color = "black";
        }
         else{
         if (ids == numero) {
             divs[id].style.textDecoration = "line-through";
             divs[id].style.color = "red";
         break;
         }
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
