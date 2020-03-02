// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let i;
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
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}