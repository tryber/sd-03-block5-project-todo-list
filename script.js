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
            li.classList.add("completed")
            li.addEventListener("click", function () {li.style.backgroundColor = "rgb(128,128,128)"})
            li.style.cursor="pointer"
            li.appendChild(t);
            document.getElementById("lista-tarefas").appendChild(li);
        }
        document.getElementById("texto-tarefa").value = ""
    }
    botao.addEventListener("click", addText)
}
