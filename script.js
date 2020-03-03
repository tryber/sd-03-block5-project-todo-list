window.onload = function(){
  const texto = document.querySelector('#texto-tarefa');
  const botaoTarefa = document.getElementById('criar-tarefa');

  const lista = document.getElementById('lista-tarefas');

  function listarTarefas () {
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.innerHTML = texto.value;
  }
  botaoTarefa.addEventListener("click", listarTarefas)


}
