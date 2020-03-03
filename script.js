function addTarefa(){
    let newTarefa = document.getElementById("texto-tarefa").value;
    var bloco = document.getElementById("lista-tarefas");
    var nota = document.createElement('li');
    var texto = document.createTextNode(newTarefa);
    nota.appendChild(texto);
    bloco.appendChild(nota);
    document.getElementById("texto-tarefa").value = "";
}

const botao = document.querySelectorAll('.element');
for (let i = 0; i < botao.length; i+=1){
  botao[i].addEventListener('mouseover',() => {
    botao[i].style.cursor = 'pointer';})
};