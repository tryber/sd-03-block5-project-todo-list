let botao = document.querySelector("#enviar");
botao.addEventListener("click", function(){
    let pegaTexto = document.querySelector("#texto-tarefa").value;
    let exibeLista = document.querySelector("#lista");
    let criaLi = document.createElement("li");
    criaLi.innerHTML = pegaTexto;
    exibeLista.appendChild(criaLi);
});