function armazenaLimpa () {
  const tarefa = document.getElementsByClassName('tarefa')[0];
  let lista = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
  let elementos = document.createElement('li');
  elementos.innerHTML = tarefa.value;
  lista.appendChild(elementos);
  tarefa.value = '';
}
