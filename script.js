const lista_Tarefas = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
const criar_Tarefa = document.getElementById('criar-tarefa');
const apagar_Tudo = document.getElementById('apaga-tudo');
const remover_Finalizados = document.getElementById('remover-finalizados');

function selecionar_tarefa() {
  const tarefa_Clicada = event.srcElement;
  if (tarefa_Clicada.className === 'elemento item-selecionado completed') {
  } 
  else
   {
      tarefa_Clicada.className = 'elemento item-selecionado';
   }
}

function tarefa_Riscada() {
  const tarefa_Clicada = event.srcElement;
  if (tarefa_Clicada.className === 'elemento item-selecionado completed') {
    tarefa_Clicada.className = 'elemento item-selecionado';
  }
  else if (tarefa_Clicada.className === 'elemento item-selecionado')
  {
    tarefa_Clicada.className += ' completed';
  }
  else if (tarefa_Clicada.className === 'elemento')
  {
    tarefa_Clicada.className += ' completed';
  }
}

criar_Tarefa.addEventListener('click', function organizar_Tarefa() {
  const tarefa = document.getElementsByClassName('tarefa')[0];
  const lista = document.createElement('li');
  if (tarefa.value === '') {
    
  }
  else
  {
    lista.addEventListener('click', selecionar_tarefa);
    lista.addEventListener('dblclick', tarefa_Riscada);
    lista.innerHTML = tarefa.value;
    lista.className = 'elemento';
    lista_Tarefas.appendChild(lista);
    tarefa.value = '';
  }
});

apagar_Tudo.addEventListener('click', function () {
  lista_Tarefas.innerHTML = '';
});


remover_Finalizados.addEventListener('click', function () {
  const lista_Terminada = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
  const filho = document.getElementsByClassName('elemento');
  const quantidade_Lista = filho.length;

  if (lista_Terminada.lastElementChild != null) {
    for (let index = quantidade_Lista - 1; index >= 0; index -= 1) {
      if (filho[index].className === 'elemento item-selecionado completed') {
        lista_Tarefas.removeChild(filho[index]);
      }
    }
  }
});


criar_Tarefa.addEventListener('mouseover', function () {
  const maozinha = document.getElementsByClassName('button');
  maozinha[0].style.cursor = 'pointer';
  maozinha[1].style.cursor = 'pointer';
  maozinha[2].style.cursor = 'pointer';
});


apagar_Tudo.addEventListener('mouseover', function () {
  const maozinha = document.getElementsByClassName('button');
  maozinha[0].style.cursor = 'pointer';
  maozinha[1].style.cursor = 'pointer';
  maozinha[2].style.cursor = 'pointer';
});

remover_Finalizados.addEventListener('mouseover', function () {
  const maozinha = document.getElementsByClassName('button');
  maozinha[0].style.cursor = 'pointer';
  maozinha[1].style.cursor = 'pointer';
  maozinha[2].style.cursor = 'pointer';
});