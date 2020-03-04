const criartarefa = document.getElementById('criar-tarefa');
// console.log(criartarefa);
const listaordenada = document.getElementById('lista-tarefas');
// console.log(listaordenada);
// let inputTextoTarefa = document.getElementById("texto-tarefa");
// console.log(inputTextoTarefa);

function adicionarItem() {
  const lista = document.createElement('li');
  lista.innerHTML = document.getElementById('texto-tarefa').value;
  listaordenada.appendChild(lista);
  document.getElementById('texto-tarefa').value = '';

  // alterar cor de fundo da lista ao clicar no item da lista
  function alterarcordefundodalista() {
    lista.style.backgroundColor = 'rgb(128,128,128)';
  }
  lista.addEventListener('click', alterarcordefundodalista);


  // dublo clique no item risca a tarefa
  function riscartarefa() {
    if (lista.classList == 'completed') {
      lista.classList.remove('completed');
    } else {
      lista.classList.add('completed');
    }
  }

  lista.addEventListener('dblclick', riscartarefa);

}

criartarefa.addEventListener('click', adicionarItem);
