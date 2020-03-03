const tarefaInput = document.getElementById('texto-tarefa');
const botaoTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoApagaFinalizados = document.getElementById('remover-finalizados');

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('dblclick', function () {
    if (item.classList.contains('completed')) {
      item.classList.remove('completed');
    } else {
      item.classList.add('completed');
    }
  });
  item.addEventListener('click', function () {
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    } else {
      item.classList.add('selected');
    }
  });
}

function apagaTudo() {
  const lista = document.getElementsByTagName('li');
  let elementos = lista.length - 1;
  for (let i = elementos ; i >= 0 ; i -= 1) {
    lista[i].remove();
  }
}

function apagaFinalizados() {
    const lista = document.getElementsByTagName('li');
    let elementos = lista.length - 1;
    for (let i = elementos ; i >= 0 ; i -= 1) {
        if(lista[i].classList.contains('completed')) {
            lista[i].remove();
        }
    }
}

botaoTarefa.addEventListener('click', criaTarefa);
botaoApagaTudo.addEventListener('click', apagaTudo);
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);
