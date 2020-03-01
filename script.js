let lista = document.querySelector("#lista-tarefas");
let btnCriar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');

btnCriar.addEventListener("click", addLista);
btnCriar.addEventListener("click", limparTexto);

function addLista(){
  let texto = document.querySelector('#texto-tarefa');
  if (texto.value == 0){
    texto.style.borderColor = "#fb7f7f"
  } else {
    texto.style.borderColor = "initial";

    let novoItem = document.createElement('li')
    novoItem.innerHTML = texto.value

    document.querySelector("#lista-tarefas").appendChild(novoItem)

  }
};

function limparTexto() {
  document.querySelector('#texto-tarefa').value=' '
};