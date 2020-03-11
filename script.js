var criartarefa;

criartarefa = document.getElementById("criar-tarefa");

criartarefa.addEventListener("click", criarItem);

// input id = "texto-tarefa" lista id="lista-tarefas"

var inputText = document.getElementById("texto-tarefa");
var toDoList = document.getElementById("lista-tarefas");

function criarItem() {
   var itemText = inputText.value;
   inputText.value = '';
   NewItem(itemText, false);
}

// função criar tarefa
function NewItem(itemText, completed) {
    var toDoItem = document.createElement('li');
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);
    
    if(completed){
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

// função concluir item da lista
function toggleToDoItemState() {
    if(this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

var clearFinaly = document.getElementById("remover-finalizados");
clearFinaly.addEventListener("click", clearCompletedItems);

// função remover finalizados
function clearCompletedItems(){
    var completedItems = toDoList.getElementsByClassName("completed");
    
    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

var clearAll = document.getElementById("apaga-tudo");
clearAll.addEventListener("click", emptyList);

// função Limpar tudo 
function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

// Matriz
var myLists = [];
myLists.push("something to store");
myLists.push("something else to store");
alert(myLists[0]);

// Converter todos os itens em Objetos
var toDoInfo = {
    "task": "thing I need to do",
    "completed": false
};

var bottaosalvar = document.getElementById("salvar-tarefas");
bottaosalvar.addEventListener("click", saveList);

// função salvar Lista
function saveList() {
    var toDos = [];

    for(var i = 0; i < toDoList.children.length; i++ ){
        var toDo = toDoList.children.item(i);
        
        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

// Carregar Lista
function loadList() {
    if(localStorage.getItem("toDos") != null){
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for(var i = 0; i< toDos.length; i++){
            var toDo = toDos[i];
            NewItem(toDo.task, toDo.completed);
        }
    }
}

loadList();
