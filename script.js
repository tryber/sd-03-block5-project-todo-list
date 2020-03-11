const botaoAdd = document.getElementById("criar-tarefa");
const inputTexto = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");
const ls = document.getElementsByClassName("ls");

function bgCinza() {
  event.target.classList.add("bgCinza")
}

function completo(){
    event.target.classList.toggle('completo')
}

function addText() {
  const listaAdd = document.createElement("li");
  listaAdd.className = "ls cursor";
  lista.appendChild(listaAdd, inputTexto);
  listaAdd.innerText = inputTexto.value;
  inputTexto.value = "";

  lista.addEventListener('click', bgCinza);

  lista.addEventListener('dblclick', completo)
}

function removeList() {
  for (let i = 0; i < lista.childNodes.length; i += 0) {
    lista.removeChild(lista.childNodes[i]);
  }
}

function bg(l) {
  const lsLista = ls[l].className.split(" ");
  if (lsLista.indexOf("BgCinza") === -1) {
    lsLista[l].className += " " + "BgCinza";
  }
}
for (i = 0; i < ls.length; i += 1) {
  ls[i].addEventListener("click", bg);
}
