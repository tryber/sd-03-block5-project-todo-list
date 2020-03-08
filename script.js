const criar = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const limpar = document.getElementById('apaga-tudo');
const finalizador = document.getElementById('remover-finalizados');
const listaTarefa = document.getElementById('lista-tarefas');

function limpaLista() {
  for (let i = 0; i < listaTarefa.childNodes.length; i += 0) {
    listaTarefa.removeChild(listaTarefa.childNodes[i]);
  }
}

function bgGray() {
  event.target.classList.add('gray');
}

function addTarefa() {
  const lista = document.createElement('li');
  lista.className = 'cursor';
  listaTarefa.appendChild(lista);
  lista.innerHTML = tarefa.value;
  tarefa.value = '';
  lista.addEventListener('click', bgGray);
  lista.addEventListener('dblclick', function line() {
    if (lista.style.textDecoration === 'line-through') {
      lista.style.textDecoration = 'none';
      lista.classList.remove('completed');
    } else {
      lista.style.textDecoration = 'line-through';
      lista.classList.add('completed');
    }
  });
}

finalizador.addEventListener('click', () => {
  document.querySelectorAll('li').forEach(function (e) {
    if (e.classList.contains('completed')) {
      e.remove();
    }
  });
});

criar.addEventListener('click', addTarefa);
limpar.addEventListener('click', limpaLista);
