window.onload = function () {

  let textoTarefa = document.getElementById("texto-tarefa");
  let criarTarefas = document.getElementById("criar-tarefa");
  let listaTarefa = document.getElementById("lista-tarefas");
  var li = document.createElement('li');

  //incluindo li na ol

  function listagem() {
    let li = document.createElement("li");
    listaTarefa.appendChild(li);
    li.textContent = textoTarefa.value;
    document.getElementById("texto-tarefa").value = "";
  }
  criarTarefas.addEventListener("click", listagem)

  function apagarLista() {
    while (listaTarefa.firstChild)
      listaTarefa.removeChild(listaTarefa.lastChild);

  };
  let apagaTudo = document.getElementById("apaga-tudo");
  apagaTudo.addEventListener("click", apagarLista);

  let riscalista = li;

  riscalista.addEventListener("click", function () {
    riscalista.style.backgroundColor = 'rgb(128,128,128)'
  });

  riscalista.addEventListener("dblclick", function () {
    if (li.classList.contains("completed")) {
      li.classList.remove("completed")
    }
    else {
      li.classList.add("completed");
    }
  })

}


