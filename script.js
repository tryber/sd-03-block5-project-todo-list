function procreator(){
let oil = document.createElement("li");
document.querySelector("#lista-tarefas").appendChild(oil);
}
window.onload = () => {
document.getElementById("texto-tarefa").addEventListener("change",event => {
    procreator();
    document.getElementById("lista-tarefas").lastChild.innerText = event.target.value
  event.target.value=""})

/*Element.prototype.insertChildAtIndex = function(child, index) {
    if (!index) index = 0
    if (index >= this.children.length) {
      this.appendChild(child)
    } else {
      this.insertBefore(child, this.children[index])
    }
  }*/
}