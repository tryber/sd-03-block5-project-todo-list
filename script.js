let ct = document.getElementById('criar-tarefa');
let tt = document.getElementById('texto-tarefa');
let at = document.getElementById('apaga-tudo');
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
    if (li.style.textDecoration == 'line-through') {
      li.style.textDecoration = 'none';
    }else{
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
