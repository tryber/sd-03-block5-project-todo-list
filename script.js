
const criarTarefa = document.getElementById("criar-tarefa");

let textoTarefa = document.getElementById("texto-tarefa")

criarTarefa.addEventListener("click", function(){
    textoTarefa = document.getElementById("texto-tarefa").value
    let li = document.createElement("li")
    let ol = document.getElementById("lista-tarefas")
    li.textContent = textoTarefa
    ol.appendChild(li)
    //textoTarefa.value = ""  -> assim não deu
    document.getElementById("texto-tarefa").value = ""
})
