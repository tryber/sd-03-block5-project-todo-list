function armazenaLimpa() {
  const tarefa = document.getElementsByClassName('tarefa')[0];
  const lista = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
  const elementos = document.createElement('li');
  if (tarefa.value === '') {
    // do nothing 
  }else {
    elementos.innerHTML = tarefa.value;
    lista.appendChild(elementos);
    tarefa.value = '';
  }
}

function mudaIcone() {
  const muda = document.getElementsByClassName('button');
  muda[0].style.cursor = 'pointer';
  muda[1].style.cursor = 'pointer';
  muda[2].style.cursor = 'pointer';
}
