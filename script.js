
const texto = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoveFinalizado = document.getElementById('remover-finalizados');
const botaoRemoveSelecionado = document.getElementById('remover-selecionado');

function listarTarefas() {
  const item1 = document.createElement('li');
  lista.appendChild(item1);
  item1.textContent = texto.value;
  document.getElementById('texto-tarefa').value = '';

  item1.addEventListener('click', function () {
    item1.classList.contains('selected') ? item1.classList.remove('selected') : item1.classList.add('selected');
    // if (item1.classList.contains('selected')) {
    //   item1.classList.remove('selected');
    // } else {
    //   item1.classList.add('selected');
    // }
  });

  item1.addEventListener('dblclick', function () {
    if (item1.classList.contains('completed')) {
      item1.classList.remove('completed');
    } else {
      item1.classList.add('completed');
    }
  });
  botaoRemoveFinalizado.addEventListener('click', function () {
    if (item1.classList.contains('completed')) {
      lista.removeChild(item1);
    }
  });
  botaoRemoveSelecionado.addEventListener('click', function () {
    if (item1.classList.contains('selected')) {
      lista.removeChild(item1);
    }
  });
}

botaoTarefa.addEventListener('click', listarTarefas);


function apagarTudo() {
  while (lista.firstChild) {
    lista.removeChild(lista.lastChild);
  }
}

botaoApagaTudo.addEventListener('click', apagarTudo);
