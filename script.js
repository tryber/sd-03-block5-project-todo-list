let lista = document.querySelector("#lista-tarefas");
let btnCriar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');

btnCriar.addEventListener("click", addLista);
//btnCriar.addEventListener("click", limparTexto);


function addLista(){
  let texto = document.querySelector('#texto-tarefa');
  if (texto.value == 0){
    texto.style.borderColor = "#fb7f7f"
  } else {
    texto.style.borderColor = "initial";

    let novoItem = document.createElement('li')
    novoItem.innerText = texto.value

    document.querySelector("#lista-tarefas").appendChild(novoItem)

    texto.value = null;

    novoItem.addEventListener("click", function() {
      novoItem.style.backgroundColor = "rgb(128,128,128)"
    })

    novoItem.addEventListener("dblclick", function() {

    novoItem.className = "completed"

    })
    
    btnApagaTudo.addEventListener("click", apagaTudo)

function apagaTudo () {
  document.querySelector("#lista-tarefas").removeChild(novoItem)
}

  }
};

/*function limparTexto() {
  document.querySelector('#texto-tarefa').value=' '
};*/