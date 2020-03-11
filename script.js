// Váriaveis globais que fundamentam o funcionamento da lista
const createTask = document.getElementById('criar-tarefa');
const eraseTask = document.getElementById('apaga-tudo');
const eraseSelectedTask = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

// função para transformar o fundo das tarefas já cumpridas
function singleClick() {
  const tasks = document.querySelectorAll('.completed');

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].style.backgroundColor === '#808080') {
      tasks[i].addEventListener('click', function() {
        tasks[i].style.backgroundColor = '#ffffff';
      });
    } else {
      tasks[i].addEventListener('click', function() {
        tasks[i].style.backgroundColor = '#808080';
      });
    }
  }
}
// função para riscar tarefas concluidas
function doubleClick() {
  const tasks = document.querySelectorAll('.completed');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].style.textDecoration === 'line-through') {
      tasks[i].style.textDecoration = 'none';
    } else {
      tasks[i].addEventListener('dblclick', function() {
        tasks[i].style.textDecoration = 'line-through';
      });
    }
  }
}

// Event Listeners
createTask.addEventListener('click', function() {
  const newTask = document.createElement('li');
  newTask.classList = 'completed';
  const inputText = document.getElementById('texto-tarefa').value;
  newTask.innerHTML = inputText;
  taskList.appendChild(newTask);
  text.value = '';
  singleClick();
  doubleClick();
});

eraseTask.addEventListener('click', function() {
  taskList.innerHTML = '';
});

eraseSelectedTask.addEventListener('click', function() {
  let tasks = document.querySelectorAll('.completed');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].style.textDecoration === 'line-through') {
      taskList.removeChild(tasks[i]);
    }
  }
});
