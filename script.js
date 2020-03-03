window.onload = function() {
  let button = document.getElementsByClassName("adicionando-tarefa")[0];
  let lista = document.getElementsByClassName("lista-ordenada")[0];
  let input1 = document.getElementsByClassName("tarefa")[0];
  
  
  
  function listed () {
    let item1 = document.createElement("li");
    lista.appendChild(item1);
    item1.innerHTML = input1.value;
    item1.classList.add("li-criada");
    item1.addEventListener("click", function(){
      item1.style.backgroundColor = "rgb(128,128,128)";
    });
    input1.value = "";
  }
  button.addEventListener("click", listed)

  


  // let liPage = document.querySelectorAll(".li-criada");
  // for (let i = 0; i < 5; i++){
  //   console.log(i)
  //   liPage[i].addEventListener("click", function() {
  //     liPage[i].style.backgroundColor = rgb(128,128,128);
  //   });
  // }

}