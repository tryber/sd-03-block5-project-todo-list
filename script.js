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
            li.classList.add("incompleted")
            li.addEventListener("click", function () {li.style.backgroundColor = "rgb(128,128,128)"})
            li.addEventListener("dbclick", function () {li.classList[0]=="completed"?li.classList.remove("completed"):li.classList.add("completed")})
            li.style.cursor="pointer"
            li.appendChild(t);
            document.getElementById("lista-tarefas").appendChild(li);
        }
        document.getElementById("texto-tarefa").value = ""
    }
    botao.addEventListener("click", addText)

    let apaga=document.getElementById("apaga-tudo")
    let ap= document.getElementById("lista-tarefas")
    function apagaTd(){
        ap.parentNode.removeChild(ap)
        let apos = document.createElement("ol");
        apos.classList.add("lista-tarefas")
        document.getElementsByClassName("apos")[0].appendChild(apos)
    }
    apaga.addEventListener("click",apagaTd)
}
