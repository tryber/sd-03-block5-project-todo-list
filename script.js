const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
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
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].classList.contains('completed') === true) {
      lis[i].remove();
    }
  }
});
