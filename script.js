const criarTarefa = document.querySelector("#criar-tarefa");
const textoTarefa = document.querySelector("#texto-tarefa");
const listaOrdenada = document.querySelector("ol");

criarTarefa.addEventListener("click", function textonaLista() {
  const itemLista = document.createElement("li");
  itemLista.innerText = textoTarefa.value;
  itemLista.className = "tarefa";
  textoTarefa.value = "";
  listaOrdenada.appendChild(itemLista);
  listaOrdenada.querySelectorAll("li").forEach(singleClickTarefa);
  listaOrdenada.querySelectorAll("li").forEach(doubleClickTarefa);
});

const botaoApagarTudo = document.querySelector("#apaga-tudo");

botaoApagarTudo.addEventListener("click", function apagarTudo() {
  listaOrdenada.innerHTML = "";
});
