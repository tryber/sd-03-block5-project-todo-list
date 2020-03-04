window.onload = function(){

  const texto = document.getElementById('texto-tarefa');
  const botaoTarefa = document.getElementById('criar-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const botaoApagaTudo = document.getElementById('apaga-tudo');

  function listarTarefas (){
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.textContent = texto.value;
    item1.classList.add('listaTarefa');
    document.getElementById('texto-tarefa').value = "";
  };

  botaoTarefa.addEventListener('click', listarTarefas);


  function apagarTudo (){
    while (lista.firstChild){
      lista.removeChild(lista.lastChild);
    }
  };

  botaoApagaTudo.addEventListener('click', apagarTudo);



  let lis = document.getElementsByClassName('listaTarefa');

  function addFundoCinza(){
    for (let l = 0; l < lis.length; l += 1){
    lis[l].style.backgroundColor = 'rgb(128,128,128)';
    }
  };

  lista.addEventListener('click', addFundoCinza);





  function addRiscado(){
    lis.classList.add('completed');
  }

  lista.addEventListener('dbclick', addRiscado);

};
