window.onload=function(){
    let textoTarefa = document.getElementById('texto-tarefa');
    let criarTarefa = document.getElementById('criar-tarefa');
    let apagaTudo = document.getElementById('apaga-tudo');
    let Removerfinalizados = document.getElementById('remover-finalizados');
    n = 0;
    m = 0;

    criarTarefa.addEventListener('click',function(){
        let addLi = document.createElement('li');
        addLi.innerText = textoTarefa.value;
        addLi.className = 'lista-tarefas';
        document.getElementById('lista-tarefas').appendChild(addLi);
        var itemLista = document.getElementsByClassName('lista-tarefas');
        n ++;
        mouseClick();
    })

    for(let x=0;x< itemLista.length;x++) {
        itemLista[x].addEventListener('click', function () {
            let selected = document.getElementsByClassName('selected');
            if(selected.length==1){
                selected[0].classList.remove('selected');
                itemLista[x].classList.add('selected');
            }
            else{
                itemLista[x].classList.add('selected');
            }
        })
    }

    for (let y = 0; y < itemLista.length; y++) {
        itemLista[y].addEventListener('dblclick', function () {
            if(itemLista[y].getElementsByClassName != 'completed'){
                itemLista[y].classList.add('completed');
                m++;
            }
        })
    }

    apagaTudo.addEventListener('click',function(){
        for(let i=n;i>0;i--){
            let ultimoElemento = document.getElementById('lista-tarefas').lastElementChild;
            document.getElementById('lista-tarefas').removeChild(ultimoElemento);
        }
        n = 0;
        m = 0;
    })

    Removerfinalizados.addEventListener('click',function(){
        for(let j=m;j>0;j--){
            let elementoFinalizado = document.getElementsByClassName('completed').lastElementChild;
            document.getElementsByClassName('completed').removeChild(elementoFinalizado);
        }
        n = n-m;
        m = 0;
    })


}