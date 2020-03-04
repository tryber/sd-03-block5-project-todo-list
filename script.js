  const texto = document.getElementById('texto-tarefa');
  const botaoTarefa = document.getElementById('criar-tarefa');
  const lista = document.getElementById('lista-tarefas');

  function listarTarefas () {
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.textContent = texto.value;
    item1.classList.add('li');
    document.getElementById('texto-tarefa').value = "";
  }

  botaoTarefa.addEventListener('click', listarTarefas);

  // let liGray = document.getElementsByClassName('li');

  // liGray.addEventListener('click', function(){
  //   liGray.style.backgroundColor = "rgb (128, 128, 128)";
  // })


  // corLista.addEventListener('click', function(){
  //   item1.style.backgroundColor = 'rgb (128, 128, 128)'
  // })



  function apagarTudo (){
    while (lista.firstChild){
    lista.removeChild(lista.lastChild);
  }
}

   const apagaTudo = document.getElementById('apaga-tudo');
   apagaTudo.addEventListener('click', apagarTudo);


    //location.reload(true);
