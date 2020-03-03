function selectItem() {
  // adiciona background ao item selecionado e retira do ultimo
  const selectedItem = document.getElementsByClassName('selected-item')[0];
  if (selectedItem) selectedItem.classList.remove('selected-item');

  event.target.classList.add('selected-item');  
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

function completedItens() {
  const itemClass = event.target.classList;
  if (itemClass.contains('completed')) itemClass.remove('completed');
  else itemClass.add('completed');
}

function clearList() {
  const list = document.getElementById('lista-tarefas');
  const itens = list.children;
  const total = list.childElementCount;
  for (let index = total-1; index >= 0; index -= 1) {
    console.log(itens,index);
    list.removeChild(itens[index]);
  }
}

function ONLOAD() {
  const buttonMakeToDo = document.getElementById('criar-tarefa');
  buttonMakeToDo.addEventListener('click', makeToDo);
}

window.onload = ONLOAD();
