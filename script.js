// Grab objects
const grabButton = document.getElementById('criar-tarefa');
const grabInput = document.getElementById('texto-tarefa');
const grabList = document.getElementById('lista-tarefas');

// Functions
function addTodo() {
  const createLi = document.createElement('li');
  createLi.innerText = grabInput.value;
  grabList.appendChild(createLi);
  grabInput.value = '';
  // If clicked, color grey
  for (let i = 0; i < grabList.children.length; i++) {
    grabList.children[i].addEventListener('click', function(e) {
      if (grabList.children[i].className != 'selected') {
        grabList.children[i].className += 'selected';
      }
    });
  }
}

// Event listener
grabButton.addEventListener('click', addTodo);
