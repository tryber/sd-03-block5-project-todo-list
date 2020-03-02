let lista = document.querySelector("#lista-tarefas");
let btnCriar = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');

btnCriar.addEventListener("click", addLista);

function addLista(){

    let novoItem = document.createElement('li')
    novoItem.innerText = texto.value

    lista.appendChild(novoItem)

    texto.value = null;

    function apagarTudo(){
      btnApagaTudo.addEventListener("click", function() {
              lista.removeChild(novoItem)
            })
          }
      apagarTudo();

      function selecionarItem(){
        novoItem.addEventListener("click", function() {
          if (novoItem.className == 0){
          novoItem.className = "selected"  
        
        } else { 
          novoItem.className = null
      }
    })
  }
  selecionarItem();

    function riscar(){
          novoItem.addEventListener("dblclick", function() {
            if (novoItem.className == 0){
            novoItem.className = "completed"  
          
          } else { 
            novoItem.className = null
        }
      })
    }
    riscar();
};



