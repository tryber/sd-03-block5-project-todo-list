let criartarefa = document.getElementById("criar-tarefa");
console.log(criartarefa);
let listaordenada = document.getElementById("lista-tarefas");
console.log(listaordenada);
// let inputTextoTarefa = document.getElementById("texto-tarefa");
// console.log(inputTextoTarefa);

function adicionarItem() {
  let lista = document.createElement("li")
  //console.log(teste);
  
  lista.innerHTML = document.getElementById("texto-tarefa").value;
  //let valorInput = document.getElementById("texto-tarefa").value;
  //console.log(valorInput);
  listaordenada.appendChild(lista);
  document.getElementById("texto-tarefa").value = "";
}

criartarefa.addEventListener("click", adicionarItem);