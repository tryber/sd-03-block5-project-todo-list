window.onload = function(){
  
  let textoTarefa = document.getElementById("texto-tarefa");
  let criarTarefas = document.getElementById("criar-tarefa");
  let listaTarefa = document.getElementById("lista-tarefas");
  
  //novoItem.addEventListener("click", function(){});
  
  function listed (){
    let item1 = document.createElement("li");
    listaTarefa.appendChild (item1);
    item1.textContent = textoTarefa.value;   
  }
  criarTarefas.addEventListener("click",listed)
  
  document.getElementById("texto-tarefa").value = "";



  let apagarLista = document.getElementsByClassName("apagar-tudo");
  
 // apagarLista.addEventListener("click",function(){
   // });



}
