ct = document.getElementById('criar-tarefa');
tt = document.getElementById('texto-tarefa');
ct.addEventListener('click', criarTarefa);

function criarTarefa() {
  let li = document.createElement('li');
  document.getElementById('lista-tarefas').appendChild(li);
  li.innerHTML = tt.value;
}
