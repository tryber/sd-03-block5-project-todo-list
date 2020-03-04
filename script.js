function doubleClick(event) {
  event.target.classList.toggle('completed');
}

function simpleClick() {
    if (document.getElementsByClassName('grey')[0] != null) { 
      document.getElementsByClassName('grey')[0].classList.remove('grey'); 
    }
    event.target.classList.add('grey');
}

function createItem() {
  const newItemContent = document.querySelector('#texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerText = newItemContent;
  document.getElementById('lista-tarefas').appendChild(newItem);
  document.querySelector('#texto-tarefa').value = '';
  newItem.addEventListener('dblclick', doubleClick);
  newItem.addEventListener('click', simpleClick);
}

function clearList() {
  const itemList = document.querySelector('#lista-tarefas');
  itemList.innerHTML = '';
}

function removeCompletedItem() {
  const elementsToRemove = document.getElementsByClassName('completed');
  while (elementsToRemove.length > 0) {
    document.querySelector('#lista-tarefas').removeChild(elementsToRemove[0]);
  }
}

function removeSelectedItem() {
  const elementsToRemove = document.getElementsByClassName('grey');
  while (elementsToRemove.length > 0) {
    document.querySelector('#lista-tarefas').removeChild(elementsToRemove[0]);
  }
}

function moveItemUp() {
  const elementToMove = document.querySelector('.grey');
  if (elementToMove) {
    if (elementToMove.previousElementSibling) {
      elementToMove.parentNode.insertBefore(elementToMove, elementToMove.previousElementSibling);
    }
  }
}

function moveItemDown() {
  const elementToMove = document.querySelector('.grey');
  if (elementToMove) {
    if (elementToMove.nextElementSibling) {
      elementToMove.parentNode.insertBefore(elementToMove.nextElementSibling, elementToMove);
    }
  }
}

function saveList() {
  const currentList = document.querySelector('#lista-tarefas');
  localStorage.setItem('saveItens', currentList.innerHTML);
}

const addItem = document.getElementById('criar-tarefa');
addItem.addEventListener('click', createItem);

const clearAll = document.querySelector('#apaga-tudo');
clearAll.addEventListener('click', clearList);

const removeCompleted = document.querySelector('#remover-finalizados');
removeCompleted.addEventListener('click', removeCompletedItem);

const removeSelected = document.querySelector('#remover-selecionado');
removeSelected.addEventListener('click', removeSelectedItem);

const moveUp = document.querySelector('#mover-cima');
moveUp.addEventListener('click', moveItemUp);

const moveDown = document.querySelector('#mover-baixo');
moveDown.addEventListener('click', moveItemDown);

const currentList = localStorage.saveItens;
if (currentList) {
  document.querySelector('#lista-tarefas').innerHTML = currentList;
  const savedItens = document.querySelectorAll('li');
  for (let i = 0; i < savedItens.length; i += 1) {
    savedItens[i].addEventListener('dblclick', doubleClick);
    savedItens[i].addEventListener('click', simpleClick);
  }
}
const saveItens = document.querySelector('#salvar-tarefas');
saveItens.addEventListener('click', saveList);
