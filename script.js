listaDeTarefas = []
var i = 0

var botaoCriar = document.getElementById('criar-tarefa')
var idr = document.getElementById('taskPlace')
var olId = document.getElementById("lista-tarefas")
var completed = document.getElementsByClassName('completed')
var deleteAll = document.getElementById('apaga-tudo')
var liCriada = ''
var riscado = false

function type() {

  var textTask = document.getElementById("texto-tarefa").value;
  var li = document.createElement("li");
  var text = document.createTextNode(textTask);
  li.appendChild(text);
  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = '';
  listaDeTarefas.push(li)
  li.id = i
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
  var elemento = document.getElementById("lista-tarefas");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function riscaTexto(event) {
  if (riscado === false){
  var risca = event.target.id;
  var teste = document.getElementById(risca)
  teste.classList.add('completed')}
  riscado = true
  
  }
   


function limpaTexto(event) {
  if (riscado === true){
  var risca = event.target.id;
  var teste = document.getElementById(risca)
  teste.classList.add('incompleta')} 
  riscado = false
  }
   


function pickObj(e) {
  var idSelect = (e.target.id);
  objPicked = idSelect
  var taskRemoved = document.getElementById('objPicked')
  console.log(taskRemoved)
}


botaoCriar.addEventListener('click', type);

olId.addEventListener('click', changeColorLi)
olId.addEventListener('click', reverseColorLi)
deleteAll.addEventListener('click', deleteTasks)
olId.addEventListener('dblclick', riscaTexto)
olId.addEventListener('dblclick', limpaTexto)
