function funBackground(event) {
  event.target.classList.toggle('selecionada');
}
function funRiscado(event) {
  event.target.classList.toggle('completed');
}
const botaoCriar = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
function funAdicionar() {
  const tagli = document.createElement('li');
  tagli.innerHTML = input.value;
  lista.appendChild(tagli);
  tagli.addEventListener('click', funBackground);
  tagli.addEventListener('dblclick', funRiscado);
  input.value = '';
}
botaoCriar.addEventListener('click', funAdicionar);

function funApagar() {
  lista.innerHTML = '';
}
const botaoApagar = document.querySelector('#apaga-tudo');
botaoApagar.addEventListener('click', funApagar);

function funApagaRiscado() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].classList.contains('completed') === true) {
      lis[i].remove();
    }
  }
}
const botaoApagarRiscado = document.querySelector('#remover-finalizados');
botaoApagarRiscado.addEventListener('click', funApagaRiscado);
