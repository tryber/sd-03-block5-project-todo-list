// verifica se existe lista salva e seta na página
if (localStorage.getItem('listaSalva')) {
  const listaSalva = localStorage.getItem('listaSalva');
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = listaSalva;
}


//  elementos
const inputText = document.querySelector('#texto-tarefa');
const listaOrd = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const botaoApagarTudo = document.querySelector('#apaga-tudo');
const botaoRemoverFin = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
const moverCima = document.querySelector('#mover-cima');
const moverBaixo = document.querySelector('#mover-baixo');
const botaoRemoverSel = document.querySelector('#remover-selecionado');
let itemDeLista = null;

//  funções

function removerSelecionado() {
  const selecionados = document.querySelectorAll('.checked');
  for (let i = 0; i < selecionados.length; i += 1) {
    selecionados[i].remove();
  }
}

function alterarClasseCheck(event) {
  if (document.getElementsByClassName('checked')[0] != null) {
    document.getElementsByClassName('checked')[0].classList.remove('checked');
  }
  event.target.classList.add('checked');
}

function alterarClasseComplete(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function criarEventListenerLi(li) {
  li.addEventListener('click', alterarClasseCheck);
  li.addEventListener('dblclick', alterarClasseComplete);
}

function limpaCaixaTexto() {
  inputText.value = '';
}

function adicionarTarefa() {
  const textoDigitado = inputText.value;
  itemDeLista = document.createElement('li');
  itemDeLista.innerHTML = (textoDigitado);
  listaOrd.appendChild(itemDeLista);
  limpaCaixaTexto();
  criarEventListenerLi(itemDeLista);
}

function salvarTarefas() {
  const lista = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('listaSalva', lista);
}


function apagarLista() {
  while (listaOrd.hasChildNodes()) {
    listaOrd.removeChild(listaOrd.firstChild);
  }
  localStorage.removeItem('listaSalva');
}

function apagarFinalizados() {
  const lista = document.querySelectorAll('li');
  for (let i = lista.length - 1; i >= 0; i -= 1) {
    if (lista[i].classList.contains('completed')) {
      lista[i].remove();
    }
  }
}


function moverParaCima() {
  const ElSelecionado = document.getElementsByClassName('checked')[0];
  const ElSuperior = ElSelecionado.previousElementSibling;
  const lista = document.getElementById('lista-tarefas');
  if (ElSuperior != null) {
    lista.insertBefore(ElSelecionado, ElSuperior);
  } else {
    alert('Você chegou no topo da lista');
  }
}

function moverParaBaixo() {
  const ElSelecionado = document.getElementsByClassName('checked')[0];
  const ElInferior = ElSelecionado.nextElementSibling;
  const lista = document.getElementById('lista-tarefas');
  if (ElInferior != null) {
    lista.insertBefore(ElInferior, ElSelecionado);
  } else {
    alert('Você chegou no fim da lista');
  }
}

//  eventListeners

botaoCriarTarefa.addEventListener('click', adicionarTarefa);
botaoApagarTudo.addEventListener('click', apagarLista);
botaoRemoverFin.addEventListener('click', apagarFinalizados);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
moverCima.addEventListener('click', moverParaCima);
moverBaixo.addEventListener('click', moverParaBaixo);
botaoRemoverSel.addEventListener('click', removerSelecionado);
