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
    if (event.target.classList.item(0) == 'selecionado' || event.target.classList.item(1) == 'selecionado') {
      event.target.classList.remove('selecionado');
    } else {
      event.target.classList.add('selecionado');
    }
  });
}

itemListaBackground();

function itemListaLineThrough() {
  listaTarefas.addEventListener('dblclick', (event) => {
    if (event.target.classList.item(0) == 'completed' || event.target.classList.item(1) == 'completed') {
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
      listaTarefas.removeChild(listaTarefas.children[0]);
    }
  });
}

apagarLista();

const botaoApagarFinalizados = document.getElementById('remover-finalizados');

function apagarFinalizados() {
  botaoApagarFinalizados.addEventListener('click', () => {
    for (let i = listaTarefas.children.length - 1; i >= 0; i -= 1) {
      if (listaTarefas.children[i].classList.item(0) == 'completed' || listaTarefas.children[i].classList.item(1)) {
        listaTarefas.removeChild(listaTarefas.children[i]);
      }
    }
  });
}

apagarFinalizados();

const botaoApagarSelecionado = document.getElementById('remover-selecionado');

function apagarSelecionado() {
  botaoApagarSelecionado.addEventListener('click', () => {
    for (let i = listaTarefas.children.length - 1; i >= 0; i -= 1) {
      if (listaTarefas.children[i].classList.item(0) == 'selecionado' || listaTarefas.children[i].classList.item(1) == 'selecionado') {
        listaTarefas.removeChild(listaTarefas.children[i]);
      }
    }
  });
}

apagarSelecionado();

const botaoMoverCima = document.getElementById('mover-cima');

function moverParaCima() {
  let itemListaTarefasCima = '';
  botaoMoverCima.addEventListener('click', () => {
    for (let i = 0; i < listaTarefas.children.length; i += 1) {
      if (listaTarefas.children[i].classList.item(0) == 'selecionado' || listaTarefas.children[i].classList.item(1) == 'selecionado') {
        if (i == 0) {
          alert('Não é possível mover este item');
        } else {
          itemListaTarefasCima = listaTarefas.children[i - 1].innerHTML;
          listaTarefas.children[i - 1].innerHTML = listaTarefas.children[i].innerHTML;
          listaTarefas.children[i].innerHTML = itemListaTarefasCima;
          listaTarefas.children[i].classList.remove('selecionado');
          listaTarefas.children[i - 1].classList.add('selecionado');
        }
      }
    }
  });
}

moverParaCima();

const botaoMoverBaixo = document.getElementById('mover-baixo');

function moverParaBaixo() {
  let itemListaTarefasBaixo = '';
  botaoMoverBaixo.addEventListener('click', () => {
    for (let i = listaTarefas.children.length - 1; i >= 0; i -= 1) {
      if (listaTarefas.children[i].classList.item(0) == 'selecionado' || listaTarefas.children[i].classList.item(1) == 'selecionado') {
        if (i == listaTarefas.children.length - 1) {
          alert('Não é possível mover este item')
        } else {
          itemListaTarefasBaixo = listaTarefas.children[i + 1].innerHTML;
          listaTarefas.children[i + 1].innerHTML = listaTarefas.children[i].innerHTML;
          listaTarefas.children[i].innerHTML = itemListaTarefasBaixo;
          listaTarefas.children[i].classList.remove('selecionado');
          listaTarefas.children[i + 1].classList.add('selecionado');
        }
      }
    }
  });
}

moverParaBaixo();
