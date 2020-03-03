listaDeTarefas = []
var i = 0

var botaoCriar = document.getElementById('criar-tarefa')
var idr = document.getElementById('taskPlace')
var olId = document.getElementById("lista-tarefas")
var completed = document.getElementsByClassName('completed')

function type() {

  var textTask = document.getElementById("texto-tarefa").value;
  var li = document.createElement("li");
  var text = document.createTextNode(textTask);
  li.appendChild(text);
  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = '';
  listaDeTarefas.push(li)
  li.id = 'liId' + i
    ++i
  console.log('criado a li ' + li)

}

function identifyObj(event) {
  var pickId = event.target.id;
  document.getElementById(pickId).style.background = 'green'
}

function changeColorLi(event) {
  var pickId = event.target.id;
  if ((document.getElementById(pickId).style.background = 'rgb(128,128,128)' )===true) {document.getElementById(pickId).style.background = 'white' } else {ocument.getElementById(pickId).style.background = 'rgb(128,128,128)' }

}

function pickObj(e) {
  var idSelect = (e.target.id);
  objPicked = idSelect
  var taskRemoved = document.getElementById('objPicked')
  console.log(taskRemoved)
}


botaoCriar.addEventListener('click', type);

olId.addEventListener('click', changeColorLi)
