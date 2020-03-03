window.onload = function() {
  let button = document.getElementsByClassName("adicionando-tarefa")[0];
  let lista = document.getElementsByClassName("lista-ordenada")[0];
  let input1 = document.getElementsByClassName("tarefa")[0];
  
  function listed () {
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.innerHTML = input1.value;
    input1.value = "";
  }
  button.addEventListener("click", listed)



}