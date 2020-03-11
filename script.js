const lista = document.getElementById('lista-tarefas');

function selecionaItem(item) {
  item.classList.toggle('cinza');
}

function marcaCompletado(item) {
  item.classList.toggle('completed');
}

//  Função que irá carregar os dados do registro (Storage) e inserir a interação (eventos de clique)
window.onload = function () {
  lista.innerHTML = localStorage.getItem('dadosLista');
  for (let i = 0; i < lista.childElementCount; i += 1) {
    const item = lista.childNodes[i];
    item.addEventListener('click', function () { selecionaItem(item); });
    item.addEventListener('dblclick', function () { marcaCompletado(item); });
    }
};

function insereItem() {
  //  Abaixo, recurso que impede que a função atribuida seja executada junto com os comandos desta
  const textoCaixa = document.getElementById('texto-tarefa').value;
  if (textoCaixa) {
    const item = document.createElement('li');
    item.innerText = textoCaixa;
    item.onclick = 'mudaCorFundo()';
    item.addEventListener('click', function () { selecionaItem(item); });
    item.addEventListener('dblclick', function () { marcaCompletado(item); });
    lista.appendChild(item);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Digite algo para adicionar');
  }
  document.getElementById('texto-tarefa').focus();
}

function armazenaItens() {
  localStorage.setItem('dadosLista', lista.innerHTML);
}

function apagaItem() {
  const itenSelecionados = document.getElementsByClassName('cinza');
  while (itenSelecionados.length > 0) {
    itenSelecionados[0].remove();
  }
}

function apagaFinalizados() {
  const listaCompleta = document.getElementsByClassName('completed');
  while (listaCompleta.length > 0) {
    listaCompleta[0].remove();
  }
}

function apagaLS() {
  localStorage.clear();
}

function apagaTudo() {
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }
}

function movUp() {
  const noSelecionado = document.getElementsByClassName('cinza')[0];
  if (noSelecionado !== document.getElementById('lista-tarefas').firstChild) {
    const irmaoCima = noSelecionado.previousSibling;
    const provisorio = noSelecionado.textContent;
    noSelecionado.textContent = irmaoCima.textContent;
    noSelecionado.classList.remove('cinza');
    irmaoCima.textContent = provisorio;
    irmaoCima.classList = 'cinza';
  } else {
    alert('Impossível subir mais...');
  }
}

function movDown() {
  const noSelecionado = document.getElementsByClassName('cinza')[0];
  if (noSelecionado !== document.getElementById('lista-tarefas').lastChild) {
    const irmaoBaixo = noSelecionado.nextSibling;
    const provisorio = noSelecionado.textContent;
    noSelecionado.textContent = irmaoBaixo.textContent;
    noSelecionado.classList.remove('cinza');
    irmaoBaixo.textContent = provisorio;
    irmaoBaixo.classList = 'cinza';
  } else {
    alert('Impossível descer mais...');
  }
}
