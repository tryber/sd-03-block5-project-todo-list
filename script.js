function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  li.setAttribute("class", "completed");
  let ol = document.getElementById('lista-tarefas');
  li.textContent = itensLista;
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = "";
  //cor background li
  li.addEventListener("click", function () {
    li.style.backgroundColor = "rgb(128, 128, 128)";
  })
  //style text-decoration
  li.addEventListener("dblclick", function () {
    li.style.textDecoration = "line-through";
  })
}
function apagarTudo() {
  let elemento = document.getElementById('lista-tarefas').childNodes;
  document.getElementById('lista-tarefas').remove();
}