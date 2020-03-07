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

let listaOrdenada = document.querySelector('ol')
let eraseBtn = document.querySelector('#apaga-tudo');
eraseBtn.addEventListener('click', function() {
  listaOrdenada.innerHTML = '';
});
