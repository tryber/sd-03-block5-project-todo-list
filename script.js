listaDeTarefas = []
listaDeTarefasMarcadas = []
var i = 0

var botaoCriar = document.getElementById('criar-tarefa')
var olId = document.getElementById("lista-tarefas")
var completed = document.getElementsByClassName('completed')
var deleteAll = document.getElementById('apaga-tudo')
// var riscado = false
// var backgroundTarefa = 'white'

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

function identifyObj(event) {
  var pickId = event.target.id;
  var corDeFundoTarefa = document.getElementById(pickId).style.backgroundColor
  if (corDeFundoTarefa = 'rgb(128,128,128)') {
    corDeFundoTarefa = 'white'
  }
}

function changeColorLi(event) {
      var pegaId = event.target.id;
      document.getElementById(pegaId).classList.toggle('selected');
      }



function deleteTasks() {
  var elemento = document.getElementById("lista-tarefas");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function riscaTexto(event) {
  var getId = event.target.id;
  document.getElementById(getId).classList.toggle('completed');
}

function limpaTexto(event) {

  var limpa = event.target.id;
  var teste = document.getElementById(limpa)
  limpa.classList.add('incompleta')
}

function pickObj(e) {
  var idSelect = (e.target.id);
  objPicked = idSelect
  var taskRemoved = document.getElementById('objPicked')
  console.log(taskRemoved)
}

botaoCriar.addEventListener('click', type);
olId.addEventListener('click', changeColorLi)
deleteAll.addEventListener('click', deleteTasks)
olId.addEventListener('dblclick', riscaTexto)
