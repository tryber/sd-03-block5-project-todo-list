function selectItem() {
  // adiciona background ao item selecionado
  const selectedItem = document.getElementsByClassName('selected-item')[0];
  if (selectedItem) selectedItem.classList.remove('selected-item');

  event.target.classList.add('selected-item');  
}

function makeToDo() {
  // adiciona funcao ao botao
  const inputElement = document.getElementById('texto-tarefa'); 
  const inputedToDo = inputElement.value;
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');

  list.appendChild(item);
  item.addEventListener('click', selectItem);
  item.innerText = inputedToDo;

  inputElement.value = '';
}

function ONLOAD() {
  const buttonMakeToDo = document.getElementById('criar-tarefa');
  buttonMakeToDo.addEventListener('click', makeToDo);
}

window.onload = ONLOAD();
