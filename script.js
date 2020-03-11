const botoes = document.querySelectorAll('.botao-model');
const caixaDeTexto = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
let listSize = 0;
function finalização() {
  if (this.className === 'item') {
    this.className = 'item completed';
  } else {
    this.className = 'item';
  }
}
function removerFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    finalizados[i].remove();
  }
  listSize -= finalizados.length;
}
function desmarcarAnterior() {
  const elementos = document.querySelectorAll('li');
  for (let i = 0; i < elementos.length; i += 1) {
    elementos[i].style.backgroundColor = 'transparent';
    elementos[i].id = '';
  }
}
function removerSelecionado() {
  const elementos = document.querySelectorAll('.item');
  for (let i = 0; i < elementos.length; i += 1) {
    if (elementos[i].style.backgroundColor === 'grey') {
      elementos[i].remove();
    }
  }
  listSize -= 1;
}
function moverParaCima() {
  const selecionado = document.getElementById('selected');
  const anterior = selecionado.previousElementSibling;
  const auxiliar = document.createElement('li');
  auxiliar.className = `${selecionado.className}`;
  auxiliar.style.backgroundColor = `${selecionado.style.backgroundColor}`;
  auxiliar.innerHTML = selecionado.innerHTML;
  selecionado.className = `${anterior.className}`;
  selecionado.style.backgroundColor = `${anterior.style.backgroundColor}`;
  selecionado.innerHTML = anterior.innerHTML;
  anterior.className = `${auxiliar.className}`;
  anterior.id = 'selected';
  anterior.style.backgroundColor = `${auxiliar.style.backgroundColor}`;
  anterior.innerHTML = auxiliar.innerHTML;
}
function moverParaBaixo() {
  const selecionado = document.getElementById('selected');
  const posterior = selecionado.nextElementSibling;
  const auxiliar = document.createElement('li');
  auxiliar.className = `${selecionado.className}`;
  auxiliar.style.backgroundColor = `${selecionado.style.backgroundColor}`;
  auxiliar.innerHTML = selecionado.innerHTML;
  selecionado.className = `${posterior.className}`;
  selecionado.style.backgroundColor = `${posterior.style.backgroundColor}`;
  selecionado.innerHTML = posterior.innerHTML;
  selecionado.id = '';
  posterior.className = `${auxiliar.className}`;
  posterior.id = 'selected';
  posterior.style.backgroundColor = `${auxiliar.style.backgroundColor}`;
  posterior.innerHTML = auxiliar.innerHTML;
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
      desmarcarAnterior();
      elementos[i].style.backgroundColor = 'grey';
      elementos[i].id = 'selected';
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
botoes[4].addEventListener('click', removerSelecionado);
botoes[5].addEventListener('click', moverParaCima);
botoes[6].addEventListener('click', moverParaBaixo);
