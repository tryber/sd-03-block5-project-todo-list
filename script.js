function addTarefa() {
  let newTarefa = document.getElementById('texto-tarefa').value;
  const bloco = document.getElementById("lista-tarefas");
  const nota = document.createElement('li');
  const texto = document.createTextNode(newTarefa);
  nota.appendChild(texto);
  bloco.appendChild(nota);
  nota.addEventListener('click', clique);
  nota.addEventListener('dblclick', doisCliques);
}

function clique(event) {
    event.target.classList.add('cinza');
}

function doisCliques(event) {
    event.target.classList.toggle('completed');
}

function limpar() {
  let lista = document.querySelector('ol');
    lista.innerHTML = '';
  }

function limpaSelecao() {
  let lista = document.querySelector('ol');
  let item = document.querySelectorAll('.completed');
    for (let i = 0; i < item.length; i+= 1){
        lista.removeChild(item[i])
        }
    }
