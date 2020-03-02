var lista = document.getElementById("lista-tarefas");
var textoCaixa = document.getElementById("texto-tarefa").value;
//document.getElementById("criar-tarefa").addEventListener("click",insereitem());

function insereItem() {
    let item = document.createElement("li");
    item.textContent = textoCaixa;
    item.onclick = "mudaCorFundo()";
    lista.appendChild(item);
}
function mudaCorFundo() {
    //    self.style.backgroundColor = "gray";
    console.log("Teste");
}