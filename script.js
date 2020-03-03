/* Criando um botão que pega o valor da caixa de texto, atriubiu ao valor de uma lista recem criada.*/
let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let caixaTexto = document.querySelector('#texto-tarefa');
let addLista = document.querySelector('#lista-tarefas');
let allLista = document.querySelectorAll('li');

botaoCriarTarefa.addEventListener('click', addTarefa);

function addTarefa() {
  let textoInput = caixaTexto.value;
  criarLista = document.createElement('li');
  criarLista.innerHTML = textoInput;
  criarLista.classList.add('no-color');
  addLista.appendChild(criarLista);
  limpaCaixa();
  criarLista.addEventListener('click', function() {
    criarLista.classList.remove('no-color');
    criarLista.classList.add('bgcolor');
  });
}

function limpaCaixa() {
  caixaTexto.value = '';
}
