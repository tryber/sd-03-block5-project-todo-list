//add tarefa a lista
let criarTarefa = document.querySelector("#criar-tarefa");
let textoTarefa = document.querySelector("#texto-tarefa");
let listaOrdenada = document.querySelector("ol");


criarTarefa.addEventListener("click", function textonaLista() {
  let itemLista = document.createElement("li");
  itemLista.className = "cursor";
  itemLista.innerText = textoTarefa.value;
  listaOrdenada.appendChild(itemLista);
  textoTarefa.value = "";
});
// apagar tarefas
const botaoApagarTudo = document.querySelector("#apaga-tudo");

botaoApagarTudo.addEventListener("click", function apagarTudo() {
  listaOrdenada.innerHTML = "";
});

