function adicionarValor() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  let ol = document.getElementById('lista-tarefas');
  ol.appendChild(li);
  li.textContent = itensLista;
}
