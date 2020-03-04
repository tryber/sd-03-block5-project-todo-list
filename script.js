let txtInput = document.getElementById("texto-tarefa");
let txtTarefa = document.getElementById("criar-tarefa");
let listando = document.getElementById("lista-tarefas");

txtTarefa.addEventListener("click", addinput);

function addinput () {
    let list = document.createElement("li");
    list.className = "seta"
    let iten = txtInput.value
    let addIten = document.createTextNode(iten);
    list.appendChild(addIten)   ;
    listando.appendChild(list);
    txtInput.value = ""
    txtInput.focus ()
}

listando.addEventListener("click", function (backg) {
    let fundo = backg.target; 
    fundo.className = "marcado"

})

listando.addEventListener("dblclick", function (event) {
    let marc = event.target; 
    marc.className = "completed"

})

