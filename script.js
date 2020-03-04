function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  li.setAttribute("class", "completed");
  let ol = document.getElementById('lista-tarefas');
  li.textContent = itensLista;
  ol.appendChild(li);

  //cor background li
  document.querySelector(".completed").addEventListener("click", function () {
    li.style.backgroundColor = "rgb(128, 128, 128)";
  })
  //style text-decoration
  li.addEventListener("dblclick", function () {
    li.style.textDecoration = "line-through";
  })
}
