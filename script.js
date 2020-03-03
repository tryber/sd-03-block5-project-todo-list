
document.getElementById("criar-tarefa").addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = document.getElementById("texto-tarefa").value
  li.addEventListener("dblclick", () => { (li.classList[0] == "completed") ? li.classList.remove("completed") : li.classList.add("completed"); })
  li.addEventListener("click", () => { li.style.backgroundColor = "rgb(128,128,128)" })
  li.style.cursor = "pointer"
  document.getElementById("texto-tarefa").value = ''
  document.getElementById("lista-tarefas").appendChild(li)
})

document.getElementById("apaga-tudo").addEventListener("click", () => {
  document.querySelectorAll("li").forEach( function (e) {e.remove()})
})

document.getElementById("remover-finalizados").addEventListener("click", () => {
  document.querySelectorAll("li").forEach( function (e) { if (e.classList[0] == "completed") { e.remove() }})
})
