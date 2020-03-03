function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  let ol = document.getElementById('lista-tarefas');
  li.textContent = itensLista;
  ol.appendChild(li);
}

function limparInput() {
  document.getElementById('texto-tarefa').value = '';
}

// const btn = document.querySelector(".btn");
// btn.addEventListener("onclick", function () {
//   document.querySelector(".btn").style.cursor = "pointer";
// });