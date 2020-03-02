// Grab objects
const addButton = document.getElementById('criar-tarefa');
const deleteButton = document.getElementById('apaga-tudo');
const removeCompleted = document.getElementById('remover-finalizados');
const grabInput = document.getElementById('texto-tarefa');
const grabList = document.getElementById('lista-tarefas');

// Functions
function addTodo() {
  const createLi = document.createElement('li');
  createLi.innerText = grabInput.value;
  grabList.appendChild(createLi);
  grabInput.value = '';
  createLi.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
  createLi.addEventListener('click', function(event) {
    if (event.target.classList.contains('selected')) {
    } else {
      event.target.classList.add('selected');
    }
  });
}

function deleteAll() {
  for (let i = document.querySelectorAll('li').length; i >= 1; i--) {
    document.querySelector('li').remove();
  }
}

function removeComp() {
  for (let i = document.querySelectorAll('li').length - 1; i >= 0; i--) {
    if (document.querySelectorAll('li')[i].classList.contains('completed')) {
      document.querySelectorAll('li')[i].remove();
    }
  }
}

// Event listener
addButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteAll);
removeCompleted.addEventListener('click', removeComp);
