


document.getElementById("criar-tarefa").addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = document.getElementById("texto-tarefa").value
  document.getElementById("texto-tarefa").value = ''
  document.getElementById("lista-tarefas").appendChild(li)
})

document.getElementById("apaga-tudo").addEventListener("click", () => {
  document.querySelectorAll("li").forEach( function (e) {e.remove()})
})
