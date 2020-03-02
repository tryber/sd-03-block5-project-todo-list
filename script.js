let lista = document.getElementById('lista-tarefas');
let selected;

function addTODO() {
  let tarefa = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';

  //adicionando tarefa a lista
  let item = document.createElement('li');
  item.innerText = tarefa;
  item.className = "item";
  item.addEventListener('click',function (e) {
    e.target.style.backgroundColor = 'rgb(128,128,128)';
    selected = e.target;
  })
  item.addEventListener("dblclick", completedMark)


  lista.appendChild(item);
}

function completedMark(e) {
  e.target.classList.add("completed")
}

function clearAll() {
  while(lista.firstChild){
    lista.removeChild(lista.firstChild)
  }
}

function clearCompleted() {
  let completedTasks = document.getElementsByClassName("completed");
while(completedTasks[0]){
  lista.removeChild(completedTasks[0])
}
}

function moveUP(){
  if (selected && selected != lista.firstChild){
    lista.insertBefore(selected,selected.previousElementSibling)
  }
}
function moveDown() {
  if(selected && selected != lista.lastChild){
    lista.insertBefore(selected,selected.nextElementSibling.nextElementSibling)
  }
}

function removeSelected() {
  lista.removeChild(selected);
  selected = undefined;
}


