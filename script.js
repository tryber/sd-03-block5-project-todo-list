window.onload = function(){
  
  let textoTarefa = document.getElementById("texto-tarefa");
  let criarTarefas = document.getElementById("criar-tarefa");
  let listaTarefa = document.getElementById("lista-tarefas");
  let ol = document.createElement("li");
  
  
  //incluindo li na ol

  function listagem (){
    let ol = document.createElement("li");
    listaTarefa.appendChild (ol);
    ol.textContent = textoTarefa.value;   
    document.getElementById("texto-tarefa").value = "";
  }
  criarTarefas.addEventListener("click",listagem)

  /*
  function mouseColor(){
    document.getElementsByTagName("li");
    ol.style.backgroundColor = "rgb (128,128,128)";  
  }
  //ol.addEventListener("click",mouseColor);
  
  mouseColor(listed) */

  function apagarLista(){
    while(listaTarefa.firstChild)
    listaTarefa.removeChild(listaTarefa.lastChild);

  };
  let apagaTudo = document.getElementById("apaga-tudo");
  apagaTudo.addEventListener("click",apagarLista);


  ol.addEventListener("click", function bg(){
  ol.style.backgroundColor = 'rgb(128, 128, 128)';
});

  ol.addEventListener("dblclick", function riscaLinha(){
     if (ol.style.textDecoration == "line-through"){
       ol.style.textDecoration = 'none';
     }
     else {
       ol.style.textDecoration = 'line-through';
     }
  })


}


