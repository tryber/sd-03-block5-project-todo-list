const tarefaInput = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
  item.addEventListener('click', function (event) {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
}

function apagaTudo() {
  for (let i = 0; i > document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li').remove();
  }
}

botaoTarefa.addEventListener('click', criaTarefa);
botaoApagaTudo.addEventListener('click', apagaTudo);
