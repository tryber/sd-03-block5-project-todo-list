
const createLine = (text) => {
  let li = document.createElement("li")
  li.textContent = text
  li.addEventListener("dblclick", () => { (li.classList[0] == "completed") ? li.classList.remove("completed") : li.classList.add("completed"); })
  li.addEventListener("click", () => { li.style.backgroundColor = "rgb(128,128,128)" })
  li.style.cursor = "pointer"
  document.getElementById("lista-tarefas").appendChild(li)
}

document.getElementById("criar-tarefa").addEventListener("click", () => {
  createLine(document.getElementById("texto-tarefa").value)
  document.getElementById("texto-tarefa").value = ''
})

document.getElementById("apaga-tudo").addEventListener("click", () => {
  document.querySelectorAll("li").forEach(function (e) { e.remove() })
})

document.getElementById("remover-finalizados").addEventListener("click", () => {
  document.querySelectorAll("li").forEach(function (e) { if (e.classList[0] == "completed") { e.remove() } })
})

document.getElementById("salvar-tarefas").addEventListener("click", () => {
  localStorage.setItem("Lista de Tarefas", document.getElementById("lista-tarefas"))
})

if (window.localStorage.getItem("Lista de Tarefas") != null) {
  console.log(window.localStorage.getItem("Lista de Tarefas"))
}
