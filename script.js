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
  createLi.addEventListener('dblclick', function(e) {
    if (createLi.classList.contains('line-through')) {
      createLi.classList.remove('line-through');
    } else {
      createLi.classList.add('line-through');
    }
  });
  createLi.addEventListener('click', function(e) {
    if (createLi.classList.contains('selected')) {
    } else {
      createLi.classList.add('selected');
    }
  });
}

// Event listener
grabButton.addEventListener('click', addTodo);
