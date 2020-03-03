window.onload = function() {
  let buttonAdd = document.getElementsByClassName("adicionando-tarefa")[0];
  let buttonClear = document.getElementsByClassName("removendo-tarefas")[0];
  let buttonFinalizados = document.getElementsByClassName("remove-finalizados")[0];
  let lista = document.getElementsByClassName("lista-ordenada")[0];
  let input1 = document.getElementsByClassName("tarefa")[0];
  
  
  
  function listed () {
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.innerHTML = input1.value;
    item1.classList.add("li-criada");
    backgroundGrey(item1);
    riskingOrNot(item1);
    input1.value = "";
  }
  buttonAdd.addEventListener("click", listed)

  function backgroundGrey(element) {
    element.addEventListener("click", function(){
      element.style.backgroundColor = "rgb(128,128,128)";
    });
  }
  function riskingOrNot(element){
    element.addEventListener("dblclick", function() {
      if (element.classList.contains("completed")){
        element.classList.remove("completed");
        element.classList.add("textDecoration");
      } else { 
        element.classList.add("completed");
      }
    })
  }

  buttonClear.addEventListener("click", function() {
    while (lista.lastElementChild){
      lista.removeChild(lista.lastElementChild);
    }
  })

  buttonFinalizados.addEventListener("click", function(){
    console.log(document.getElementsByClassName("completed").length)
    for (let i = 0; i < document.getElementsByClassName("completed").length; i++) {
      lista.removeChild(document.getElementsByClassName("completed")[i]);
     }
  })

}