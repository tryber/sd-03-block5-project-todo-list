window.onload = function(){
  const texto = document.querySelector('#texto-tarefa');
  const botaoTarefa = document.getElementById('criar-tarefa');

  const lista = document.getElementById('lista-tarefas');

  function listarTarefas () {
    let item1 = document.createElement("li");
    item1.textContent = texto.value;
    lista.appendChild(item1);
    document.getElementById('texto-tarefa').value = "";
  }

  botaoTarefa.addEventListener("click", listarTarefas);

  const apagaTudo = document.getElementById('apaga-tudo');
  apagaTudo.addEventListener('click', function(){
    location.reload(true);
  });


}
