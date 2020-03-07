const ct = document.getElementById('criar-tarefa');
const tt = document.getElementById('texto-tarefa');
const at = document.getElementById('apaga-tudo');
const rf = document.getElementById('remover-finalizados');
ct.addEventListener('click', criarTarefa);
at.addEventListener('click', apagaTudo);

function criarTarefa() {
  let li = document.createElement('li');
  document.getElementById('lista-tarefas').appendChild(li);
  li.innerHTML = tt.value;
  tt.value = '';

  li.addEventListener('click', function bg() {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  li.addEventListener('dblclick', function line() {
    if (li.style.textDecoration === 'line-through') {
      li.style.textDecoration = 'none';
      li.classList.remove('completed');
    }else {
      li.style.textDecoration = 'line-through';
      li.classList = 'completed';
    }
  });
}

function apagaTudo() {
  let a = document.getElementById('lista-tarefas');
  while (a.hasChildNodes()) {
    a.removeChild(a.firstChild);
  }
}

rf.addEventListener('click', () => {
  document.querySelectorAll('li').forEach(function (e) {
    if (e.classList.contains('completed')) {
      e.remove();
    }
  });
});
