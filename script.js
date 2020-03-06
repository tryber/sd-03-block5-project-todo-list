

function newTask() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('texto-tarefa').value;
  let text = document.createTextNode(inputValue);
  /*   console.log(document.getElementById('lista-tarefas')
   */
  let ol = document.getElementById('lista-tarefas');
  li.onmouseouver;
  addOverClass(li)
  li.appendChild(text);
  ol.appendChild(li);
  inputValue = "";

}

function addOverClass(x) {
  x.addEventListener('mouseover', function () {

    x.classList.add('over')
  })
  x.addEventListener('mouseout', function () {

    x.classList.remove('over')
  })
  x.addEventListener('dblclick', function () {

    x.classList.toggle('selected')
  })

}
let criarTask = document.getElementById('criar-tarefa')
criarTask.addEventListener('click', newTask)

const apagarTudo = document.getElementById('apaga-tudo')
let li = document.getElementsByTagName('li')

apagarTudo.addEventListener('click', function () {
  document.getElementById('lista-tarefas').remove();
  newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  console.log(newOl)
  document.getElementById('container').appendChild(newOl);
})
const removerFin = document.getElementById('remover-finalizados')

removerFin.addEventListener('click', function () {
  let selected = document.querySelectorAll('.selected')
  for (let i in selected) {
    selected[i].remove()
    console.log(selected)
  }
})
