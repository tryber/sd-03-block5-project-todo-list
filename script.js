const botaoAdicionar = document.getElementById('criar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');

const textoTarefa = document.getElementById('texto-tarefa');

botaoAdicionar.addEventListener('click', () => {
  const itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  listaTarefas.appendChild(itemLista);
  textoTarefa.value = null;
});

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




