const lista = document.getElementById('lista-tarefas');
let apagaTudo = document.getElementById('apaga-tudo');

function adicionarTarefa () {
  var newItem = document.createElement("li");
  var text = document.getElementById('texto-tarefa').value; 
  newItem.innerHTML = text;
  newItem.className = "lista";
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
  newItem.addEventListener('dblclick', function(){
        if (newItem.classList.contains("check")) {
            newItem.classList.remove("check");
        }
        else {
            newItem.classList.add('check');
        }
  })
  apagaTudo.addEventListener('click' , function(){
      console.log("olaakska");
 })
}

