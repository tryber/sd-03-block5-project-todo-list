// Grab objects
const grabButton = document.getElementById("criar-tarefa");
const grabInput = document.getElementById("texto-tarefa");
const grabList = document.getElementById("lista-tarefas");

// Event listener
grabButton.addEventListener("click", addTodo);

// Functions
function addTodo() {
  let createLi = document.createElement("li");
  createLi.innerText = grabInput.value;
  grabList.appendChild(createLi);
  grabInput.value = "";
}
