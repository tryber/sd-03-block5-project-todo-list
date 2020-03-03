function adicionarValor() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let listaTarefaLi = document.createElement('li');
  listaTarefaLi.innerHTML = itensLista;
  let ol = document.getElementById('lista-tarefas');
  ol.appendChild(listaTarefaLi);
}