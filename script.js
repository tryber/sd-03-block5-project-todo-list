window.onload=function(){
    let textoTarefa = document.getElementById('texto-tarefa');
    let criarTarefa = document.getElementById('criar-tarefa');
    let apagaTudo = document.getElementById('apaga-tudo');
    let Removerfinalizados = document.getElementById('remover-finalizados');
    let listaTarefas = document.getElementById('lista-tarefas');
    let salvarTarefas = document.getElementById('salvar-tarefas');
    let moverCima = document.getElementById('mover-cima');
    let moverBaixo = document.getElementById('mover-baixo');
    let removerSelecionado = document.getElementById('remover-selecionado');

    criarTarefa.addEventListener('click',function(){
        let addLi = document.createElement('li');
        addLi.innerText = textoTarefa.value;
        addLi.className = `list`;
        document.getElementById('lista-tarefas').appendChild(addLi);
        document.getElementById('texto-tarefa').value= '';

        addLi.addEventListener('click', function () {
            let selected = document.getElementsByClassName('selected');
            if(selected.length==1){
                selected[0].classList.remove('selected');
                addLi.classList.add('selected');
            }
            else{
                addLi.classList.add('selected');
            }
        })

        addLi.addEventListener('dblclick', function () {
            if(!addLi.classList.contains('completed')){
                addLi.classList.add('completed');
            }
            else{
                addLi.classList.remove('completed');
            }
        })
    })

    apagaTudo.addEventListener('click',function(){
            document.querySelectorAll('.list').forEach(e => e.remove());
    })

    Removerfinalizados.addEventListener('click',function(){
        document.querySelectorAll('.completed').forEach(e => e.remove());
    })

    salvarTarefas.addEventListener('click',function(){
        localStorage.setItem('salvar', listaTarefas.innerHTML);
    })

    if(localStorage.getItem('salvar')){
        listaTarefas.innerHTML = localStorage.getItem('salvar');
        let li = document.getElementsByTagName('li');
        console.log(li);
        for(let i=0; i<li.length-1;i++){
            li[i].addEventListener('click', function () {
                let selected = document.getElementsByClassName('selected');
                if(selected.length==1){
                    selected[0].classList.remove('selected');
                    li[i].classList.add('selected');
                }
                else{
                    li[i].classList.add('selected');
                }
            })
    
            li[i].addEventListener('dblclick', function () {
                if(!li[i].classList.contains('completed')){
                    li[i].classList.add('completed');
                }
                else{
                    li[i].classList.remove('completed');
                }
            }) 
        }
    }

    moverCima.addEventListener('click',function(){
        let father = document.querySelector('#lista-tarefas');
        let up = document.getElementsByClassName('selected')[0];
        father.insertBefore(up,up.previousSibling);
    })

    moverBaixo.addEventListener('click',function(){
        let father = document.querySelector('#lista-tarefas');
        let down = document.getElementsByClassName('selected')[0];
        father.insertBefore(down,down.nextSibling.nextSibling);
    })
    removerSelecionado.addEventListener('click',function(){
        document.querySelectorAll('.selected').forEach(e => e.remove());
    })
}