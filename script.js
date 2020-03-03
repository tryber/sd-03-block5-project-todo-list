var criartarefa,apagatudo,remfinal,salvtarefa,remselec;

criartarefa = document.getElementById("criar-tarefa");
apagatudo = document.getElementById("apaga-tudo");
remfinali = document.getElementById("remover-finalizados");
salvtarefa = document.getElementById("salvar-tarefas");
remselec = document.getElementById("remover-selecionado");

criartarefa.addEventListener("click", criarItem);

function criarItem()
{
    alert("Item adicionado");
}

apagatudo.addEventListener("click", apagaTudo);

function apagaTudo()
{
    alert("Apagar Lista");
}

remfinali.addEventListener("click", removConcluido);

function removConcluido()
{
    alert("Remover Concluido");
}

salvtarefa.addEventListener("click", saveLista);

function saveLista()
{
    alert("Salvar Lista");
}

remselec.addEventListener("click", removSelec);

function removSelec()
{
    alert("Remover Selecionado");
}
