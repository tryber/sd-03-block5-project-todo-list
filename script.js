
var botaoAdd = document.querySelector("#criar-tarefa");
var inputAdd = document.querySelector("#texto-tarefa");
var listaOL = document.querySelector("#lista-tarefas");
var limpaTudo = document.querySelector("#apaga-tudo");
var limpaFinalizados = document.querySelector("#remover-finalizados");
var inputValue = inputAdd.value;
var indiceLista =1;
var listaItens = listaOL.childNodes;
var tamanhoLista = listaOL.childElementCount;
var riscado = false;
var selecionado = 0;
//listaItens.addEventListener('click', addCinza);

limpaFinalizados.addEventListener('click', removerFinalizados);
limpaTudo.addEventListener('click', limparLista);

function removerFinalizados(){
    console.log('remove finalizados');
    // for(i=tamanhoLista; i==0; i--){
    //     console.log('sad');
    //     listaOL.remove.childNodes;

    }

function limparLista(){
    console.log(listaOL.childElementCount);
    for(i=listaOL.childElementCount; i>0; i--){
        console.log('sad');
        listaOL.removeChild(listaOL.lastElementChild);

    }
}

botaoAdd.addEventListener('click', addTarefa);
inputAdd.addEventListener('keyup', function addTarefaEnter(event){
    if(event.keyCode === 13){
        event.preventDefault();


        botaoAdd.click();
        console.log("MAMUTE");
 
    }
})

function addTarefa(){
    var createLI = document.createElement("li"); //cria nova <li>
    var createTextNode = document.createTextNode(inputAdd.value); //cria node de texto e adiciona o value do input nele
    createLI.appendChild(createTextNode); // pega o <li> criado e adiciona o texto node nele
    listaOL.appendChild(createLI);// diciona a nova <li> que esta pronta agora como filha do <ol> do html
    indiceLista = indiceLista;
    listaItens[indiceLista].addEventListener('click', addCinza.bind(this, indiceLista));
    listaItens[indiceLista].addEventListener('dblclick', addOverline.bind(this, indiceLista));
    listaItens[indiceLista].parametro = indiceLista;
    indiceLista++;

        //abaixo limpa texto e da focus
        inputAdd.value = '';
        inputAdd.focus();
        console.log(inputAdd.value);
}
    function addCinza(indice){
        console.log(indice);
        listaItens[indice].style.background = 'rgb(128,128,128)';
        console.log("cinza");
    }
    function addOverline(indice){
        if(riscado === false){
            console.log(indice);
            listaItens[indice].style.textDecoration = 'line-through';
            console.log("overline");
            riscado = true;
        }else{
            console.log(indice);
            listaItens[indice].style.textDecoration = 'none';
            console.log("overline");
            riscado = false;
        }
        
    }


    

  window.onload = function() {
    inputAdd.focus();

  };

  


//   var input = document.getElementById("myInput");
// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });