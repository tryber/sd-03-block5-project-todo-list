const botoes = document.querySelectorAll('.botao-model');
const caixaDeTexto = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const tarefas = document.querySelector('ol').childNodes;
let listSize = 0;
function finalização() {
  if (this.className == 'item') {
    this.className = 'item completed';
  } else {
    this.className = 'item';
  }
}
botoes[0].addEventListener('click', function () {
  listSize += 1;
  const tarefa = document.createElement('li');
  tarefa.className = 'item';
  listaDeTarefas.appendChild(tarefa);
  tarefa.innerHTML = caixaDeTexto.value;
  caixaDeTexto.value = '';
  for (let i = 0; i < listSize; i += 1) {
    const elementos = document.querySelectorAll('li');
    elementos[i].addEventListener('dblclick', finalização);
  }
});

for (let i = 0; i < botoes.length; i += 1) {
  botoes[i].addEventListener('mouseover', function () {
    botoes[i].style.cursor = 'pointer';
  });
}
botoes[0].addEventListener('click', function () {
  for (let i = 1; i <= listSize; i += 1) {
    tarefas[i].addEventListener('click', function () {
      tarefas[i].style.backgroundColor = 'grey';
    });
  }
});
botoes[1].addEventListener('click', function () {
  for (let i = 0; i < listSize; i += 1) {
    const lista = document.querySelectorAll('li');
    lista[0].remove();
  }
  listSize = 0;
});
