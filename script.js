
var textoTarefa = document.getElementById("texto-tarefa")

var criarTarefa = document.getElementById("criar-tarefa");

var ol = document.getElementById("lista-tarefas")

criarTarefa.addEventListener("click", function(){ //Primeiro evento é criar a tarefa
    
    var li = document.createElement("li")
    li.textContent = textoTarefa.value
    ol.appendChild(li) //Alocando a lista criada na tag de lista ordenada
    
    li.addEventListener("click",function(){
    selected(li) //adiciona a classe selected na li
    })
    li.addEventListener('dblclick', function(){
    completed(li) //adiciona a classe completed na li
    })
    document.getElementById("texto-tarefa").value = ""
    
}) //Primeira tarefa a ser executada é a de colocar o texto na lista e classificá-lo

function selected (clicar){ //Função para selecionar
    var remove = document.getElementsByClassName("selected")
    if ( remove.length > 0 && clicar.classList.contains("selected")){
        clicar.classList.remove("selected")
    } 
    else if (remove.length > 0){
        remove[0].classList.remove("selected")
        clicar.classList.add("selected")
    } 
    else if (remove.length == 0){
        clicar.classList.add("selected")
    }
    
}
function completed (li){ //Função para sublinhar
    if (li.classList.contains("completed")){
        li.classList.remove("completed")
    }
    else {li.classList.add("completed")}
}

let apagaTudo = document.getElementById("apaga-tudo")
apagaTudo.addEventListener('click',function(){
document.querySelectorAll('li').forEach(e => e.remove())
})

let removerFinalizados = document.getElementById("remover-finalizados") 
removerFinalizados.addEventListener('click',function(){
document.querySelectorAll('.completed').forEach(e => e.remove());})
