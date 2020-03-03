window.onload = function(){

  const texto = document.getElementById('texto-tarefa');
  const botaoTarefa = document.getElementById('criar-tarefa');
  const lista = document.getElementById('lista-tarefas');

  function listarTarefas () {
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.textContent = texto.value;
    document.getElementById('texto-tarefa').value = "";
  }

  botaoTarefa.addEventListener('click', listarTarefas);

  const apagaTudo = document.getElementById('apaga-tudo');

  apagaTudo.addEventListener('click', function(){
    location.reload(true);
  });

  // function removeAll (){
  //   let lista = document.getElementById("lista-tarefas")
  //   while (lista.firstChild){
  //   lista.removeChild(lista.lastChild)
  //   }
  //   }

}
