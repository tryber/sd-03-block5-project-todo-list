ct = document.getElementById('criar-tarefa');
tt = document.getElementById('texto-tarefa');
at = document.getElementById('apaga-tudo');
ct.addEventListener('click', criarTarefa);
at.addEventListener('click', apagaTudo);

function criarTarefa() {
  let li = document.createElement('li');
  document.getElementById('lista-tarefas').appendChild(li);
  li.innerHTML = tt.value;
  tt.value = '';
}

function apagaTudo() {
  let a = document.getElementById('lista-tarefas');
  while (a.hasChildNodes()) {
    a.removeChild(a.firstChild);
  }
}

