function adicionarItem(event) {
  let itensLista = document.getElementById('texto-tarefa').value;
  let tagLi = document.createElement('li');
  tagLi.setAttribute("class", "completed corTag");
  let tagOl = document.getElementById('lista-tarefas');
  tagLi.textContent = itensLista;
  tagOl.appendChild(tagLi);
  document.getElementById('texto-tarefa').value = "";
  //style text-decoration e cor background
}
document.getElementsByClassName("completed").addEventListener("dblclick", function (event) {
  event.target.classList.toggle('completed');
});

document.getElementsByClassName("corTag").addEventListener("click", function () {
  event.target.classList.toggle('corTag');
});