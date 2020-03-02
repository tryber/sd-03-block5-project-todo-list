let lista = document.getElementById('lista-tarefas')

function addTODO() {
  let tarefa = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';

  //adicionando tarefa a lista
  let item = document.createElement('li');
  item.innerText = tarefa;

  lista.appendChild(item);


}
