function addLi(){
    let value_del = document.getElementById('texto-tarefa')
    let txtval = document.getElementById('texto-tarefa').value
    let tamanho = document.getElementById('texto-tarefa').value.length
    let listNode = document.getElementById('lista-tarefas')
    let liNode = document.createElement("LI")
    let txtNode = document.createTextNode(txtval)
    
    if (tamanho > 0) {
        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
        value_del.value = ""
    } else {
        window.alert('Adicione uma terefa corretamente')
    }
} 

//function excluirTudo(){
//    let excluir = document.getElementById('Limpar-Lista')
//    let tarefas = document.getElementById('tarefas-ordenadas').getElementsByTagName("ol")[0]
//    let rmtarefa = tarefas.getElementsByTagName("li")[0]
//    let rmtarefavalue = tarefas.getElementsByTagName("li").length
//    excluir.addEventListener('click', function (){
//        while (rmtarefavalue > 0)
//            tarefas.removeChild(rmtarefa)
//    })
//}
