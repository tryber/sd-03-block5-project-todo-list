function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  let ol = document.getElementById('lista-tarefas');
  li.textContent = itensLista;
  ol.appendChild(li);
}
