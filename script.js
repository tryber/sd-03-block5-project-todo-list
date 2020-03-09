const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const apagarSalvas = document.getElementById('apagar-tarefa-salva');
const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', function adicionarTarefa() {
  const li = document.createElement('li');
  li.innerHTML = input.value;
  lista.appendChild(li);
  li.addEventListener('click', function backgroundColor(event) {
    event.target.classList.toggle('selected');
  });
  li.addEventListener('dblclick', function tarefaRiscada(event) {
    event.target.classList.toggle('completed');
  });
  input.value = '';
});

const botaoApagar = document.querySelector('#apaga-tudo');
botaoApagar.addEventListener('click', function apagarTudo() {
  lista.innerHTML = '';
});

const botaoApagarRiscado = document.querySelector('#remover-finalizados');
botaoApagarRiscado.addEventListener('click', function ApagarRiscado() {
  const tarefaConcluida = document.querySelectorAll('li');
  for (let i = 0; i < tarefaConcluida.length; i += 1) {
    if (tarefaConcluida[i].classList.contains('completed') === true) {
      tarefaConcluida[i].remove();
    }
  }
});

salvarTarefas.addEventListener('click', function salvarTarefasLista() {
  const listaSalvarTarefas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('listaSalva', listaSalvarTarefas);
});
if (localStorage.getItem('listaSalva')) {
  const listaSalva = localStorage.getItem('listaSalva');
  const listaSalvarTarefas = document.getElementById('lista-tarefas');
  listaSalvarTarefas.innerHTML = listaSalva;
}

apagarSalvas.addEventListener('click', function apagarTarefasSalvas() {
  const listaSalvarTarefas = document.getElementById('lista-tarefas');
  localStorage.removeItem('listaSalva', listaSalvarTarefas);
});
