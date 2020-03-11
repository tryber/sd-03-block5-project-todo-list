const botoes = document.querySelectorAll('.botao-model');
const caixaDeTexto = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const tarefas = document.querySelector('ol').childNodes;
let listSize = 0;
window.onload = function () {
  function finalização() {
    if (this.className == 'item') {
      this.className = 'item completed';
    } else {
      this.className = 'item';
    }
  }
  function removerFinalizados() {
    const finalizados = document.querySelectorAll('.completed');
    console.log(finalizados);
    for(let i = 0; i < finalizados.length; i += 1) {
      finalizados[i].remove();
    }
    listSize = listSize - finalizados.length;
  }
  botoes[0].addEventListener('click', function () {
    listSize += 1;
    const tarefa = document.createElement('li');
    tarefa.className = 'item';
    listaDeTarefas.appendChild(tarefa);
    tarefa.innerHTML = caixaDeTexto.value;
    caixaDeTexto.value = '';
    const elementos = document.querySelectorAll('li');
    for (let i = 0; i < elementos.length; i += 1) {
      elementos[i].addEventListener('dblclick', finalização);
    }
  });

  for (let i = 0; i < botoes.length; i += 1) {
    botoes[i].addEventListener('mouseover', function () {
      botoes[i].style.cursor = 'pointer';
    });
  }
  botoes[0].addEventListener('click', function () {
    const elementos = document.querySelectorAll('.item');
    for (let i = 0; i < elementos.length; i += 1) {
      elementos[i].addEventListener('click', function () {
        elementos[i].style.backgroundColor = 'grey';
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
  botoes[2].addEventListener('click', removerFinalizados);
}
