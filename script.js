const botaoAdicionar = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');

const textoTarefa = document.getElementById('texto-tarefa');

botaoAdicionar.addEventListener('click', () => {
  const itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  listaTarefas.appendChild(itemLista);
  textoTarefa.value = ''
  itemListaBackground();
  itemListaLineThrough();
});

function itemListaBackground() {
  for (let i = 0; i < listaTarefas.children.length; i += 1) {
    listaTarefas.children[i].addEventListener('click', (event) => {
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function itemListaLineThrough() {
  for (let i = 0; i < listaTarefas.children.length; i += 1) {
    listaTarefas.children[i].addEventListener('dblclick', (event) => {
      if (event.target.getAttribute('class') == 'completed') {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}




