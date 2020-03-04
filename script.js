listaDeTarefas = []
var i = 0

var botaoCriar = document.getElementById('criar-tarefa')
var idr = document.getElementById('taskPlace')
var olId = document.getElementById("lista-tarefas")
var completed = document.getElementsByClassName('completed')
var deleteAll = document.getElementById('apaga-tudo')

function type() {

  var textTask = document.getElementById("texto-tarefa").value;
  var li = document.createElement("li");
  var text = document.createTextNode(textTask);
  li.appendChild(text);
  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = '';
  listaDeTarefas.push(li)
  li.id =  i
    ++i
  console.log('criado a li ' + li)

}

// function identifyObj(event) {
//   var pickId = event.target.id;
//   document.getElementById(pickId).style.background = 'green'
// }

function changeColorLi(event) {
  var pickId = event.target.id;
  document.getElementById(pickId).style.background = 'rgb(128,128,128)'

}

function reverseColorLi(event) {
  var pickId = event.target.id;
  document.getElementById(pickId).style.background = 'white'
}

function deleteTasks() {
  // for (var j = 0; j<listaDeTarefas.length; j += 1){
    
  //   var liDel = document.getElementById("lista-tarefas");
  //   list.removeChild(list.childNodes[j]);
  //   console.log(j)
    
  // } 
  var elemento = document.getElementById("lista-tarefas");
while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
}
}



function pickObj(e) {
  var idSelect = (e.target.id);
  objPicked = idSelect
  var taskRemoved = document.getElementById('objPicked')
  console.log(taskRemoved)
}


botaoCriar.addEventListener('click', type);

olId.addEventListener('click', changeColorLi)
olId.addEventListener('dblclick', reverseColorLi)
deleteAll.addEventListener('click', deleteTasks)
