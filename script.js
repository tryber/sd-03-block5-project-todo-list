// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let btnclose = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  btnclose.className = "close";
  btnclose.appendChild(txt);
  myNodelist[i].appendChild(btnclose);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

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

  let btnclose = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  btnclose.className = "close";
  btnclose.appendChild(txt);
  li.appendChild(btnclose);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
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