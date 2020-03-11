function swapper() {
  if (event.target.classList.length === 0) {
    event.target.classList.add('Um');
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  } else if (event.target.classList.length === 1) {
    event.target.classList.add('completed');
  } else if (event.target.classList.length === 2) {
    event.target.classList.add('reseter');
  } else if (event.target.classList.length === 3) {
    event.target.classList.remove('Um');
    event.target.classList.remove('completed');
    event.target.classList.remove('reseter');
  }
}
function destroyer() {
  const des = document.getElementById('lista-tarefas');
  des.innerHTML = '';
}
function completer() {
  const dos = document.getElementById('lista-tarefas');
  for (let i = dos.children.length - 1; i >= 0; i-=1) {
    if (dos.children[i].classList.contains('completed')) {
      dos.removeChild(dos.children[i]);
    }
  }
}
function procreator() {
  const oil = document.createElement('li');
  oil.addEventListener('click', swapper);
  document.querySelector('#lista-tarefas').appendChild(oil);
}
window.onload = () => {
  document.getElementById('texto-tarefa').addEventListener('change', function() {
    procreator();
    document.getElementById('lista-tarefas').lastChild.innerText = event.target.value;
    event.target.value = '';
  });
  document.getElementById('apaga-tudo').addEventListener('click', destroyer);
  document.getElementById('remover-finalizados').addEventListener('click', completer);
};
