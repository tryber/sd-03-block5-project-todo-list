const lista = document.getElementById('lista-tarefas');

function adicionarTarefa() {
  var newItem = document.createElement("li");
  var text = document.getElementById('texto-tarefa').value; 
  newItem.innerHTML = text;
    
  document.getElementById('lista-tarefas').appendChild(newItem);
  document.getElementById('texto-tarefa').value= '';
  newItem.addEventListener('click', function () {
    let selected = document.getElementsByClassName('selected');
    if(selected.length==1){
      selected[0].classList.remove('selected');
      newItem.classList.add('selected');
        }
    else{
      newItem.classList.add('selected');
        }
    })
}







console.log("hello, world")
