function addOverClass(x) {
  x.addEventListener('click', function () {
    x.classList.add('over');
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
  addOverClass(li);
  li.appendChild(text);
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

const criarTask = document.getElementById('criar-tarefa');
criarTask.addEventListener('click', newTask);

const apagarTudo = document.getElementById('apaga-tudo');

apagarTudo.addEventListener('click', function () {
  document.getElementById('lista-tarefas').remove();
  let newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  document.getElementById('container').appendChild(newOl);
});

const removerFin = document.getElementById('remover-finalizados');
removerFin.addEventListener('click', function () {
  const completed = document.querySelectorAll('.completed');
  for (i in completed) {
    completed[i].remove();
  }
});

document.getElementById('remover-selecionado').addEventListener('click',function(){
  const selecionado = document.querySelectorAll('.over');
  for (i in selecionado) {
    selecionado[i].remove();
    }
  })


/* function remover (alvo){
  let alvo = document.querySelectorAll('.' + alvo);
  for (let i in alvo) {
    alvo[i].remove();
  }
} */
