window.onload= function(){
    let botao=document.getElementById("criar-tarefa")
    let texto= document.getElementById("texto-tarefa")
    function addText(){  
        if (texto.value === '') {
          window.alert("OPS, adicione uma tarefa");
        }else{
            let li = document.createElement("li");
            let inputValue = texto.value;
            let t = document.createTextNode(inputValue);
            li.appendChild(t);
            document.getElementById("lista-tarefas").appendChild(li);
        }
    }
    botao.addEventListener("click", addText)
}
