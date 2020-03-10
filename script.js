function addOverClass(x) {
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
  for (let i in completed) {
    completed[i].remove();
  }
});

document.getElementById('remover-selecionado').addEventListener('click',function(){
  const selecionado = document.querySelectorAll('.selected');
  for (let i in selecionado) {
    selecionado[i].remove();
    }
  })

document.querySelector('#salvar-tarefas').addEventListener('click', function(){
  const selected = document.querySelectorAll('.selected');
  for(let i =0; i < selected.length; i+=1){
    localStorage[i]= selected[i].innerHTML;
  }

})

/* function remover (alvo){
  let alvo = document.querySelectorAll('.' + alvo);
  for (let i in alvo) {
    alvo[i].remove();
  }
} */
