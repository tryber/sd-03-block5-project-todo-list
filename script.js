function testa() {
    console.log('funciona');
}

function itemSelecionado() {
  const itemClicado = event.srcElement;
  if (itemClicado.className === 'item-selecionado item-taxado') {
    // do nothing
  }
  else {
    itemClicado.className = 'item-selecionado';
  }
}

function taxaItem() {
  const itemClicado = event.srcElement;
  if (itemClicado.className === 'item-selecionado item-taxado') {
    itemClicado.className = 'item-selecionado';
  }
  else if (itemClicado.className === 'item-selecionado') {
    itemClicado.className += ' item-taxado';
  }
  else if (itemClicado.className === '') {
    itemClicado.className = 'item-taxado';
  }
}

function armazenaLimpa() {
  const tarefa = document.getElementsByClassName('tarefa')[0];
  const lista = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
  const elementos = document.createElement('li');
  if (tarefa.value === '') {
    // do nothing 
  }else {
    elementos.addEventListener('click',itemSelecionado);
    elementos.addEventListener('dblclick',taxaItem);
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
