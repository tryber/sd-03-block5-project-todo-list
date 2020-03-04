const botaoAdd = document.getElementById("criar-tarefa");
const inputTexto = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");

function addText() {
   const listaAdd = document.createElement("li");
  listaAdd.className = "cursor"
  lista.appendChild(listaAdd, inputTexto);
  listaAdd.innerText = inputTexto.value;
  inputTexto.value = "";
}

function removeList(){
   for (let i = 0; i < lista.childNodes.length; i += 0){
      lista.removeChild(lista.childNodes[i]);
    }

}
