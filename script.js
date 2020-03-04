let criartarefa = document.getElementById("criar-tarefa");
console.log(criartarefa);
let listaordenada = document.getElementById("lista-tarefas");
console.log(listaordenada);
// let inputTextoTarefa = document.getElementById("texto-tarefa");
// console.log(inputTextoTarefa);

function adicionarItem() {
  let lista = document.createElement("li");
  lista.innerHTML = document.getElementById("texto-tarefa").value;
  listaordenada.appendChild(lista);
  document.getElementById("texto-tarefa").value = "";

  // alterar cor de fundo da lista ao clicar no item da lista
  function alterarcordefundodalista() {
    lista.style.backgroundColor = "rgb(128,128,128)";
  }
  lista.addEventListener("click", alterarcordefundodalista)
}

criartarefa.addEventListener("click", adicionarItem);
