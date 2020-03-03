const lista = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;

function testa() {
  console.log('funciona');
}

function armazenaLimpa() {
  const tarefa = document.getElementsByClassName('tarefa')[0];
  const elementos = document.createElement('li');
  if (tarefa.value === '') {
    // do nothing
  } else {
    elementos.addEventListener('click', itemSelecionado);
    elementos.addEventListener('dblclick', taxaItem);
    elementos.innerHTML = tarefa.value;
    elementos.className = 'elemento';
    lista.appendChild(elementos);
    tarefa.value = '';
  }
}

function itemSelecionado() {
  const itemClicado = event.srcElement;
  if (itemClicado.className === 'elemento item-selecionado completed') {
    // do nothing
  } else {
    itemClicado.className = 'elemento item-selecionado';
  }
}

function taxaItem() {
  const itemClicado = event.srcElement;
  if (itemClicado.className === 'elemento item-selecionado completed') {
    itemClicado.className = 'elemento item-selecionado';
  } else if (itemClicado.className === 'elemento item-selecionado') {
    itemClicado.className += ' completed';
  } else if (itemClicado.className === 'elemento') {
    itemClicado.className += ' completed';
  }
}

function mudaIcone() {
  const muda = document.getElementsByClassName('button');
  muda[0].style.cursor = 'pointer';
  muda[1].style.cursor = 'pointer';
  muda[2].style.cursor = 'pointer';
}

function apagaTudo() {
  lista.innerHTML='';
}

let removeFinalizados = document.getElementById('remover-finalizados');

removeFinalizados.addEventListener('click', function() {

  let elementosFinalizados = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
  let filhos = document.getElementsByClassName('elemento');
  let numeroElementos = filhos.length;
  let elimina = [];
  let conta = 0;

  if (elementosFinalizados.lastElementChild != null) {
    for (let i = numeroElementos-1; i >= 0 ; i -= 1) {
      if (filhos[i].className === 'elemento item-selecionado completed') {
        lista.removeChild(filhos[i])
      }
    }
  }
});