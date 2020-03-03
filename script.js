

document.getElementById("criar-tarefa").addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = document.getElementById("texto-tarefa").value
  li.addEventListener("dblclick", () => { (li.style.textDecoration == "line-through") ? li.style.textDecoration = "none" : li.style.textDecoration = "line-through"; })

  li.addEventListener("click", () => { li.style.backgroundColor = "rgb(128,128,128)" })
  document.getElementById("texto-tarefa").value = ''
  document.getElementById("lista-tarefas").appendChild(li)
})

document.getElementById("apaga-tudo").addEventListener("click", () => {
  document.querySelectorAll("li").forEach( function (e) {e.remove()})
})
