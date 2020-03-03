function clique(event) {
  event.target.classList.add('cinza');
}

function doisCliques(event) {
  event.target.classList.toggle('completed');
}
function addTarefa() {
  const newTarefa = document.getElementById('texto-tarefa').value;
  const bloco = document.getElementById('lista-tarefas');
  const nota = document.createElement('li');
  const texto = document.createTextNode(newTarefa);
  nota.appendChild(texto);
  bloco.appendChild(nota);
  nota.addEventListener('click', clique);
  nota.addEventListener('dblclick', doisCliques);
  document.getElementById('texto-tarefa').value = '';
}

function limpar() {
  const lista = document.querySelector('ol');
  lista.innerHTML = '';
    }

function limpaSelecao() {
  const lista = document.querySelector('ol');
  const item = document.querySelectorAll('.completed');
  for (let i = 0; i < item.length; i += 1) {
      lista.removeChild(item[i]);
    }
}
