//add tarefa a lista
let criarTarefa = document.querySelector("#criar-tarefa");
let textoTarefa = document.querySelector("#texto-tarefa");
let listaOrdenada = document.querySelector("ol");

criarTarefa.addEventListener("click", function textonaLista() {
  let itemLista = document.createElement("li");
  itemLista.innerText = textoTarefa.value;
  listaOrdenada.appendChild(itemLista);
  textoTarefa.value = "";
 });

 // apagar tarefas
const botaoApagarTudo = document.querySelector("#apaga-tudo");

botaoApagarTudo.addEventListener("click", function apagarTudo() {
  listaOrdenada.innerHTML = "";
});

const cursor = document.querySelector('.class');

document.addEventListener('mousemove', e =>{
  cursor.setAttribute("style", "top:" +e.pageY+"px; left:"+e.pageX+"px;")
})