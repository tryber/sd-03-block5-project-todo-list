const botaoAdicionar = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');

const textoTarefa = document.getElementById('texto-tarefa');

function adicionarItemALista() {
  botaoAdicionar.addEventListener('click', () => {
    const itemLista = document.createElement('li');
    itemLista.innerText = textoTarefa.value;
    listaTarefas.appendChild(itemLista);
    textoTarefa.value = null;
  });
}

adicionarItemALista();

function itemListaBackground() {
  listaTarefas.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}

itemListaBackground();

function itemListaLineThrough() {
  listaTarefas.addEventListener('dblclick', (event) => {
    if (event.target.getAttribute('class') == 'completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

itemListaLineThrough();

const botaoApagarTudo = document.getElementById('apaga-tudo');

function apagarLista() {
  botaoApagarTudo.addEventListener('click', () => {
    while (listaTarefas.children.length > 0) {
      listaTarefas.removeChild(listaTarefas.children[0])
    }
  })
}

apagarLista();

const botaoApagarFinalizados = document.getElementById('remover-finalizados');

function apagarFinalizados() {
  botaoApagarFinalizados.addEventListener('click', () => {
    for (let i = listaTarefas.children.length - 1; i >= 0; i -= 1) {
      if (listaTarefas.children[i].getAttribute('class') == 'completed') {
        listaTarefas.removeChild(listaTarefas.children[i])
      }
    }
  })
}

apagarFinalizados();
