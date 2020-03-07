
const texto = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');

function listarTarefas() {
  const item1 = document.createElement('li');
  lista.appendChild(item1);
  item1.textContent = texto.value;
  item1.classList.add('listaTarefa');
  document.getElementById('texto-tarefa').value = '';

  item1.addEventListener('click', function(){
      item1.classList.add('selected');
    }
  );

  item1.addEventListener('dblclick', function(){
    item1.classList.add('completed');
  });
}

botaoTarefa.addEventListener('click', listarTarefas);

function apagarTudo() {
  while (lista.firstChild) {
    lista.removeChild(lista.lastChild);
  }
}

botaoApagaTudo.addEventListener('click', apagarTudo);
