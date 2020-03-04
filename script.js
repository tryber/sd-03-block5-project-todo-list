let lista = document.querySelector("#lista-tarefas");
let btnCriar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');
let btnRemoverFinalizados = document.querySelector('#remover-finalizados');
let btnRemoverSelecionados = document.querySelector('#remover-selecionado');
let btnMoverCima = document.querySelector('#mover-cima');

btnCriar.addEventListener("click", addLista);

function addLista(){

    let novoItem = document.createElement('li')
    novoItem.innerText = texto.value

    lista.appendChild(novoItem)

    texto.value = null;
    
    function riscar(){
          novoItem.addEventListener("dblclick", () => {
            novoItem.classList.toggle ("completed")  
      })
    }
    riscar();

    function selecionado(){
      novoItem.addEventListener("click", () => {
        novoItem.classList.toggle ("selected")  
      })
    }
    selecionado();

    function moverCima() {
      btnMoverCima.addEventListener("click", () => {let sp2 = document.querySelector(".selected");
      let elPai = sp2.parentNode
      elPai.insertBefore(sp2, novoItem)
      })
    }
    moverCima();

    function apagarTudo(){
      btnApagaTudo.addEventListener("click", () => {
              lista.removeChild(novoItem)
            })
          }
      apagarTudo();

};

    btnRemoverFinalizados.addEventListener("click", () => {
      document.querySelectorAll('.completed').forEach( (completed) => {
          completed.remove()
      })

  })

  btnRemoverSelecionados.addEventListener("click", () => {
    document.querySelectorAll('.selected').forEach( (selected) => {
        selected.remove()
    })

})