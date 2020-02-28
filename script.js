var numb = 1;
function adicionar(){
    let txt_pre_definido = document.getElementById('input').value;
    let t= document.getElementById("lista").innerHTML += `<div class='lista' id='${numb}'>${numb} - ${txt_pre_definido} <button class="btnapagar" onclick='apaga(${numb})'></button> <button type="submit" class="btntachado" id="btntachado" onclick="cor(${numb})"></button><hr></div>`;
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
        if (ids == numero) {
            divs[id].style.textDecoration = "line-through";
            divs[id].style.color = "red";
        break;
        }
    }
}