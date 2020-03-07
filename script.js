function addOverClass(x) {
  x.addEventListener('click', function () {

    x.classList.add('over');
  });
/*   x.addEventListener('mouseout', function () {

    x.classList.remove('over');
  }); */
  x.addEventListener('dblclick', function () {

    x.classList.toggle('selected');
  });
/*   x.addEventListener('click', function(){
    x.remove()
  }) */

}

function newTask() {
  const li = document.createElement('li');
  let inputValue = document.getElementById('texto-tarefa');
  const text = document.createTextNode(inputValue.value);
  const ol = document.getElementById('lista-tarefas');
  li.onmouseouver;
  addOverClass(li);
  li.appendChild(text);
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = '';


}

let criarTask = document.getElementById('criar-tarefa');
criarTask.addEventListener('click', newTask);

const apagarTudo = document.getElementById('apaga-tudo');
let li = document.getElementsByTagName('li');

apagarTudo.addEventListener('click', function () {
  document.getElementById('lista-tarefas').remove();
  let newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  document.getElementById('container').appendChild(newOl);

});
const removerFin = document.getElementById('remover-finalizados');

removerFin.addEventListener('click', function () {
  let selected = document.querySelectorAll('.selected');
  for (let i in selected) {
    selected[i].remove();
  }
});

