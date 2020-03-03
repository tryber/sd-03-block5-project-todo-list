function makeToDo() {
  // adiciona funcao ao botao
  const inputElement = document.getElementById('texto-tarefa'); 
  const inputedToDo = inputElement.value;
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  
  list.appendChild(item);
  item.innerText = inputedToDo;
  inputElement.value = ""
}

function ONLOAD() {
  const buttonMakeToDo = document.getElementById('criar-tarefa');
  buttonMakeToDo.addEventListener('click',makeToDo);
}

window.onload = ONLOAD()