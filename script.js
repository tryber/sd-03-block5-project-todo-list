
const criarTarefa = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("texto-tarefa");
const removerFinalizados = document.getElementById("remover-finalizados")
const ol = document.getElementById("lista-tarefas");
const salvarTarefas = document.getElementById("salvar-tarefas");

criarTarefa.addEventListener("click", function () {
  listaTarefas = document.getElementById("texto-tarefa").value;
  var li = document.createElement("li");
  li.textContent = listaTarefas;
  ol.appendChild(li);

  document.getElementById("texto-tarefa").value = "";

  li.style.cursor = "pointer";

  li.addEventListener("click", function () {
    li.style.backgroundColor = "rgb(128,128,128)";
  })

  let selecionar = li;
  selecionar.addEventListener("dblclick", function () {
    if (li.classList.contains("completed")) {
      li.classList.remove("completed")
    }
    else {
      li.classList.add("completed")
    }
  })

})

const apagaTudo = document.getElementById("apaga-tudo");

apagaTudo.addEventListener("click", function () {
  location.reload(true);
})
