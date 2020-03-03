function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  li.setAttribute("id", "completed");
  let ol = document.getElementById('lista-tarefas');
  li.textContent = itensLista;
  ol.appendChild(li);
  li.addEventListener("click", function () {
    li.style.backgroundColor = "rgb(128, 128, 128)";
  })
  li.addEventListener("dblclick", function () {
    document.getElementById('completed').style.textDecoration = "line-through";
  })
  li.removeEventListener("dblclick", function () {
    document.getElementById('completed').style.textDecoration = "line-through";
  })
}
