window.onload = function() {
  let buttonAdd = document.getElementsByClassName("adicionando-tarefa")[0];
  let buttonClear = document.getElementsByClassName("removendo-tarefas")[0];
  let buttonFinalizados = document.getElementsByClassName("remove-finalizados")[0];
  let buttonSalve = document.getElementsByClassName("salva-lista")[0];
  let buttonRemove = document.getElementsByClassName("removendo-selecionado")[0]
  let buttonDown = document.getElementsByClassName("move-baixo")[0];
  let buttonUp = document.getElementsByClassName("move-cima")[0];
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
      element.classList.add("selecionado");
    });
  }
  function riskingOrNot(element){
    element.addEventListener("dblclick", function() {
      if (element.classList.contains("completed")){
        element.classList.remove("completed");
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
    document.querySelectorAll(".completed").forEach(function(element){
      element.remove();
    })
  })

  buttonSalve.addEventListener("click", function() {
    localStorage.setItem("Lista de Tarefas", lista.innerHTML);    
  })

  if(window.localStorage.getItem("Lista de Tarefas")){
    lista.innerHTML = window.localStorage.getItem("Lista de Tarefas");
  }

  function deleteSelected() {
    document.querySelectorAll(".selecionado").forEach(function(element){
      element.remove()
    })
  }
  buttonRemove.addEventListener("click", deleteSelected);



  function moveUp() {
    selecionado = document.querySelectorAll(".selecionado");
    for(let i = 0; i < selecionado.length; i++) {
      lista.insertBefore(selecionado[i], selecionado[i].previousSibling);
    }
  }
  buttonUp.addEventListener("click", moveUp);

  function moveDown() {
    let selecionado = document.querySelectorAll(".selecionado");
    for (let i = 0; i < selecionado.length; i++){
      console.log(selecionado[i]);
      console.log(lista.lastChild);
      if (selecionado[i] === lista.lastChild) {
        selecionado[i] = lista.insertBefore(selecionado[i], document.querySelectorAll("li")[0]);
      } else {
        lista.insertBefore(selecionado[i], selecionado[i].nextSibling.nextSibling);
      }
    }
  }
  buttonDown.addEventListener("click", moveDown);

  
}