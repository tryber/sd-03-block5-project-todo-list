let lista = document.querySelector("#lista-tarefas");
let btnCriar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');
let btnRemoverFinalizados = document.querySelector('#remover-finalizados');
let btnRemoverSelecionados = document.querySelector('#remover-selecionado');

btnCriar.addEventListener("click", addLista);

function addLista(){

    let novoItem = document.createElement('li')
    novoItem.innerText = texto.value

    lista.appendChild(novoItem)

    texto.value = null;
    
    function riscar(){
          novoItem.addEventListener("dblclick", function() {
            novoItem.classList.toggle ("completed")  
      })
    }
    riscar();

    function selecionado(){
      novoItem.addEventListener("click", function() {
        novoItem.classList.toggle ("selected")  
      })
    }
    selecionado();

    function apagarFinalizados() {
      btnRemoverFinalizados.addEventListener("click", function() {
        let completed = document.querySelector(".completed");
        lista.removeChild(completed)
      })
    }
    apagarFinalizados();

    function apagarSelecionados() {
      btnRemoverSelecionados.addEventListener("click", function() {
        let selected = document.querySelector(".selected");
        lista.removeChild(selected)
      })
    }
    apagarSelecionados();

    function apagarTudo(){
      btnApagaTudo.addEventListener("click", function() {
              lista.removeChild(novoItem)
            })
          }
      apagarTudo();

};