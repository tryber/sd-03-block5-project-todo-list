

const criarTarefa = document.getElementById("criar-tarefa");

let textoTarefa = document.getElementById("texto-tarefa")

let ol = document.getElementById("lista-tarefas")

criarTarefa.addEventListener("click", function(){
    //textoTarefa = document.getElementById("texto-tarefa").value
    let li = document.createElement("li")
    li.textContent = textoTarefa.value
    ol.appendChild(li)
    //textoTarefa.value = ""  -> assim não deu
    li.addEventListener("click",function(){
    selected(li)
    })
    li.addEventListener('dblclick', function(){
    completed(li)
    })
    document.getElementById("texto-tarefa").value = ""
    
})
function selected (x){
    let remove = document.getElementsByClassName("selected")
    if ( remove.length > 0 && x.classList.contains("selected")){
        x.classList.remove("selected")
    } 
    else if (remove.length > 0){
        let remove = document.getElementsByClassName("selected")
        remove[0].classList.remove("selected")
        x.classList.add("selected")
    } 
    else if (remove.length == 0){
        x.classList.add("selected")
    }
    
}
function completed (li){
    if (li.classList.contains("completed")){
        li.classList.remove("completed")
    }
    else {li.classList.add("completed")}

}


