// Grab objects
const buttons = document.querySelectorAll('button');
const grabInput = document.getElementById('texto-tarefa');
const grabList = document.getElementById('lista-tarefas');
let pegarLi = document.querySelectorAll('li');

// Verify if user have saved list
if (localStorage.getItem('todo-list')) {
  grabList.innerHTML = localStorage.getItem('todo-list');
}

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

// Delete everything
function deleteAll() {
  for (let i = document.querySelectorAll('li').length; i >= 1; i--) {
    document.querySelector('li').remove();
  }
}

// Remove completed items
function removeComp() {
  for (let i = document.querySelectorAll('li').length - 1; i >= 0; i--) {
    if (document.querySelectorAll('li')[i].classList.contains('completed')) {
      document.querySelectorAll('li')[i].remove();
    }
  }
}

// Function save to Do List
function saveTodo() {
  let pegarInner = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('todo-list', pegarInner);
}

// Remove selected function
function removeSelected() {
  pegarLi = document.querySelectorAll('li');
  for (let i = 0; i < pegarLi.length; i += 1) {
    if (pegarLi[i].classList.contains('selected')) {
      pegarLi[i].remove();
    }
  }
}
// Event listener
buttons[0].addEventListener('click', addTodo);
buttons[4].addEventListener('click', deleteAll);
buttons[2].addEventListener('click', removeComp);
buttons[3].addEventListener('click', saveTodo);
buttons[1].addEventListener('click', removeSelected);
