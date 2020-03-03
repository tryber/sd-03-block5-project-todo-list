listaDeTarefas = []

var botaoCriar = document.getElementById('criar-tarefa')

function type() {

  var textTask = document.getElementById("texto-tarefa").value;
  var li = document.createElement("li");
  var text = document.createTextNode(textTask);
  li.appendChild(text);
  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = '';
  listaDeTarefas.push(li)

  console.log('oi criado a li ' + li)
  console.log(listaDeTarefas[i])


}

funtion remove () {
    
}

botaoCriar.addEventListener('click', type);
