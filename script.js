ct = document.getElementById('criar-tarefa');
ct.addEventListener('click', criarTarefa);

function criarTarefa() {
  let li = document.createElement('li');
  document.getElementById('lista-tarefas').appendChild(li);
}
