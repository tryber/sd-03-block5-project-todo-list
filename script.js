function selectItem() {
  // adiciona background ao item selecionado e retira do ultimo
  const selectedItem = document.getElementsByClassName('selected-item')[0];
  if (selectedItem) selectedItem.classList.remove('selected-item');

  event.target.classList.add('selected-item');
}

function completedItens() {
  const itemClass = event.target.classList;
  if (itemClass.contains('completed')) itemClass.remove('completed');
  else itemClass.add('completed');
}

function makeToDo() {
  // adiciona funcao ao botao de criar elemento e apagar o texto do input
  const inputElement = document.getElementById('texto-tarefa');
  const inputedToDo = inputElement.value;
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');

  list.appendChild(item);
  item.addEventListener('click', selectItem);
  item.addEventListener('dblclick', completedItens);
  item.innerText = inputedToDo;

  inputElement.value = '';
}


function clearList() {
  const list = document.getElementById('lista-tarefas');
  const itens = list.children;
  const total = list.childElementCount;
  for (let index = (total - 1); index >= 0; index -= 1) {
    list.removeChild(itens[index]);
  }
}

function clearCompleted() {
  const list = document.getElementById('lista-tarefas');
  const elements = document.querySelectorAll('#lista-tarefas > li.completed');
  for (let index = (elements.length - 1); index >= 0; index -= 1) {
    list.removeChild(elements[index]);
  }
}

function saveList() {
  const list = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('LastSave', list);
}

function recoverList() {
  const container = document.getElementById('lista-tarefas');
  const recoveredList = window.localStorage.getItem('LastSave');

  container.innerHTML = recoveredList;

  for (const item of container.children) {
    item.addEventListener('click', selectItem);
    item.addEventListener('dblclick', completedItens);
  }
}

function upWard() {
  const selectedItem = document.getElementsByClassName('selected-item')[0];
  selectedItem.parentElement.insertBefore(selectedItem, selectedItem.previousElementSibling);
}

function downWard() {
  const selectedItem = document.getElementsByClassName('selected-item')[0];
  const nextItem = selectedItem.nextElementSibling;
  
  if (nextItem !== selectedItem.parentElement.lastChild.nextElementSibling) {
    selectedItem.parentElement.insertBefore(nextItem, selectedItem);
  }
  else {
    selectedItem.parentElement.insertBefore(selectedItem, selectedItem.parentElement.firstChild);
  }
}

function removeSelected() {
  document.getElementsByClassName('selected-item')[0].remove();
}

function ONLOAD() {
  recoverList();

  const buttonMakeToDo = document.getElementById('criar-tarefa');
  buttonMakeToDo.addEventListener('click', makeToDo);

  const buttonClearAll = document.getElementById('apaga-tudo');
  buttonClearAll.addEventListener('click', clearList);

  const buttonClearCompleted = document.getElementById('remover-finalizados');
  buttonClearCompleted.addEventListener('click', clearCompleted);

  const buttonSaveList = document.getElementById('salvar-tarefas');
  buttonSaveList.addEventListener('click', saveList);
  //botoes cima e baixo
  const buttonUpWard = document.getElementById('mover-cima');
  buttonUpWard.addEventListener('click', upWard);
  const buttonDownWard = document.getElementById('mover-baixo');
  buttonDownWard.addEventListener('click', downWard);

  const buttonRemoveSelected = document.getElementById('remover-selecionado');
  buttonRemoveSelected.addEventListener('click', removeSelected);
}

window.onload = ONLOAD();
