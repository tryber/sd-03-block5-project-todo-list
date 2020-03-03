
var botaoAdd = document.querySelector("#criar-tarefa");
var inputAdd = document.querySelector("#texto-tarefa");
var listaOL = document.querySelector("#lista-tarefas");
var inputValue = inputAdd.value;

botaoAdd.addEventListener('click', addTarefa);

function addTarefa(){
    var createLI = document.createElement("li"); //cria nova <li>
    var createTextNode = document.createTextNode(inputAdd.value); //cria node de texto e adiciona o value do input nele
    createLI.appendChild(createTextNode); // pega o <li> criado e adiciona o texto node nele
    listaOL.appendChild(createLI);// diciona a nova <li> que esta pronta agora como filha do <ol> do html
    //abaixo limpa texto e da focus
    inputAdd.value = '';
    inputAdd.focus();
    console.log(inputAdd.value);
    console.log('banana');
}
console.log('espalharrama...'); 



function myFunction() {
    var x = document.createElement("LI");
    var t = document.createTextNode("Coffee");
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
  }
  