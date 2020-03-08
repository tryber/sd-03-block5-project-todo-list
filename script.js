const lista = document.getElementById('lista-tarefas');

function armazenaItens() {
  const tamLista = lista.childElementCount;
  for (let i = 0; i < tamLista; i += 1) {
    localStorage.setItem(`I${i}`, lista.childNodes[i].textContent);
  }
}

function selecionaItem(item) {
  item.classList.toggle('cinza');
}

function marcaCompletado(item) {
  item.classList.toggle('completed');
}

//  Função que irá carregar os dados do registro (Storage), mas só caso existam...
window.onload = function () {
  if (localStorage.getItem('I0')) {
    for (let i = 0; i < localStorage.length; i += 1) {
      const item = document.createElement('li');
      item.innerText = localStorage.getItem(`I${i}`);
      item.onclick = 'mudaCorFundo()';
      item.addEventListener('click', function () { selecionaItem(item); });
      item.addEventListener('dblclick', function () { marcaCompletado(item); });
      lista.appendChild(item);
    }
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
  }
  else {
    alert('Digite algo para adicionar');
  }
  document.getElementById('texto-tarefa').focus();
}

function apagaItem() {
  const itenSelecionados = document.getElementsByClassName('cinza');
  while (itenSelecionados.length > 0) {
    itenSelecionados[0].remove();
  }
}

function apagaFinalizados() {
  const listaCompleta = document.getElementsByClassName('completed');
  const elementos = listaCompleta.length;
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
  }
  else {
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
  }
  else {
    alert('Impossível descer mais...');
  }
}
