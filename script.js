// Add a "completed" symbol when clicking on a list item
let list = document.querySelector('ol');
list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completed');
  }
}, false);

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('selected');
    }
  }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("texto-tarefa").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Escreva para adicionar!");
  } else {
    document.getElementById("lista-tarefas").appendChild(li);
  }
  document.getElementById("texto-tarefa").value = "";
}

const apagatudo = document.getElementById('apaga-tudo');

apagatudo.addEventListener('click', function(){
    while (list.firstChild) {
        list.removeChild(list.lastChild);
      }
});

const apagafinalizados = document.getElementById('remover-finalizados');

apagafinalizados.addEventListener('click', function(){
    let finalizados = document.querySelectorAll('.completed');
    [].forEach.call(finalizados, finalizado => {
        list.removeChild(finalizado);
    })
});

const apagaselecionados = document.getElementById('remover-selecionado');

apagaselecionados.addEventListener('click', function(){
    let selecionados = document.querySelectorAll('.selected');
    [].forEach.call(selecionados, selecionado => {
        list.removeChild(selecionado);
    })
});

document.getElementById("texto-tarefa").addEventListener('keypress', function(event) { 
  if (event.keyCode === 13) { 
      newElement();
  } 
}); 