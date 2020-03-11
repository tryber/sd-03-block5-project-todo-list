
function addClass4Task(x) {
  x.addEventListener('click', function () {
    x.classList.toggle('selected');
  });
  x.addEventListener('dblclick', function () {
    x.classList.toggle('completed');
  });
}

function newTask() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa');
  const text = document.createTextNode(inputValue.value);
  const ol = document.getElementById('lista-tarefas');
  addClass4Task(li);
  li.appendChild(text);
  ol.appendChild(li);
  inputValue.value = '';
}

const criarTask = document.getElementById('criar-tarefa');
criarTask.addEventListener('click', newTask);

const apagarTudo = document.getElementById('apaga-tudo');

apagarTudo.addEventListener('click', function () {
  document.getElementById('lista-tarefas').remove();
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  document.getElementById('container').appendChild(newOl);
});

function removeCompleted() {
  document.querySelectorAll('li').forEach(function (i) {
    if (i.classList.contains('completed')) { i.remove(); }
  });
}
const removeFin = document.getElementById('remover-finalizados');
removeFin.addEventListener('click', removeCompleted);

function removeSelected() {
  document.querySelector('.selected').remove();
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelected);

document.querySelector('#salvar-tarefas').addEventListener('click', function () {
  localStorage.setItem('lista', document.getElementById('lista-tarefas').innerHTML);
});

if (window.localStorage.getItem('lista')) {
  document.getElementById('lista-tarefas').innerHTML = window.localStorage.getItem('lista');
  document.querySelectorAll('li').forEach(function (li) { addClass4Task(li); });
}


document.querySelector('#mover-cima').addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (!!selected.previousElementSibling && selected) {
    selected.parentNode.insertBefore(selected, selected.previousElementSibling);
  }
});

document.getElementById('mover-baixo').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (selected.nextElementSibling) {
      selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    } else {
      selected.parentElement.insertBefore(selected, selected.parentElement.firstChild);
    }
  }
});
