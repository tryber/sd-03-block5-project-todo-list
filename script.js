let criartarefa = document.getElementById("criar-tarefa");
console.log(criartarefa);
let listaordenada = document.getElementById("lista-tarefas");
console.log(listaordenada);
// let inputTextoTarefa = document.getElementById("texto-tarefa");
// console.log(inputTextoTarefa);

function adicionarItem() {
  let lista = document.createElement("li") 
  //console.log(teste);
  let valorInput = document.getElementById("texto-tarefa").value;
  console.log(valorInput);
  if (document.getElementById("texto-tarefa").value == '') {
    console.log("Input está vazio")
  } else {
    listaordenada.appendChild(lista);
    lista.innerHTML = valorInput;
  } 
}

function limparinput(){
  ;
}


criartarefa.addEventListener("click",adicionarItem);
criartarefa.addEventListener("click",limparinput);