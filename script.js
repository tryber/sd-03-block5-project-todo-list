const listaTarefa = document.getElementById("lista-tarefas");
const tarefa = document.getElementById("texto-tarefa");
const limpar = document.getElementById('apaga-tudo')

function addTarefa() {
  const lista = document.createElement("li");
  lista.className = "cursor"
  listaTarefa.appendChild(lista, tarefa);
  lista.innerText = tarefa.value;
  tarefa.value = "";
}

function limpaLita(){
  for (let i = 0; i<listaTarefa.childNodes.length; i += 0){
    listaTarefa.removeChild(listaTarefa.childNodes[i])
  }
}

function bgGray(){
  const lista = document.createElement("li");
  for (let i = 0; i < lista.length; i += 1){
    lista[i].classList.remove('rover')
  }

}

function mudaSelected(c) {

  for (let i = 0; i < coresArr.length; i += 1) {
    coresArr[i].classList.remove("selected");
  }

  const name = "selected";
  const arr = coresArr[c].className.split(" ");
  if (arr.indexOf(name) === -1) {
    coresArr[c].className += " " + name;
  }
  //pegar o valor da cor
  const color = document.querySelector(".selected");
  const style = getComputedStyle(color);
  const backgroundColor = style.backgroundColor;
  let corAtual = backgroundColor;
  //talve deletar entre esses coment
}
