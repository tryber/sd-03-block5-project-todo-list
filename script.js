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
            li.addEventListener("click", function () {li.style.backgroundColor = "rgb(128,128,128)"})
            li.addEventListener("dblclick", function () {li.classList.contains("completed")?li.classList.remove("completed"):li.classList.add("completed")})
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
        if(ap.innerHTML==""){
            window.alert("OPS, não tem nada para ser apagado")
        }else{
            ap.innerHTML=''
        }
        //while (ap.firstChild) {
        //    ap.removeChild(ap.firstChild)
        //  }
    }
    apaga.addEventListener("click",apagaTd)

    let rmFianlizados= document.getElementById("remover-finalizados")
    function finalizados(){
        let finali= document.querySelectorAll(".completed")
        finali.forEach(item => {
            item.parentNode.removeChild(item)
        });
    }
    rmFianlizados.addEventListener("click", finalizados)

    let salvarFile=document.getElementById("salvar-tarefas")
    function salvar(){
        alert("salvo")
    }
    salvarFile.addEventListener("click", salvar)
}
