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
  createLi.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('line-through')) {
      event.target.classList.remove('line-through');
    } else {
      event.target.classList.add('line-through');
    }
  });
  createLi.addEventListener('click', function(event) {
    if (event.target.classList.contains('selected')) {
    } else {
      event.target.classList.add('selected');
    }
  });
}

// Event listener
grabButton.addEventListener('click', addTodo);
