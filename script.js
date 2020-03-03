let botao = document.getElementById("enviar");
let pegaTexto = document.querySelector("#texto-tarefa");
let exibeLista = document.querySelector("#lista-tarefas");




function criaLista(){

    let criaLi = document.createElement("li");
    criaLi.innerHTML = pegaTexto.value;
    exibeLista.appendChild(criaLi);

    pegaTexto.value = null;

}
    
    
botao.addEventListener("click", criaLista);