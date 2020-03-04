function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  li.setAttribute("class", "completed completed2");
  let ol = document.getElementById('lista-tarefas');
  li.textContent = itensLista;
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = "";

  //cor background li
  li.addEventListener("click", function () {
    li.style.backgroundColor = "rgb(128, 128, 128)";
    event.target.classList.toggle('completed2');
  })

  //style text-decoration
  li.addEventListener("dblclick", function () {
    li.style.textDecoration = "line-through";
    event.target.classList.toggle('completed');
  })
}