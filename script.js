// Grab objects
const grabButton = document.getElementById('criar-tarefa');
const grabInput = document.getElementById('texto-tarefa');
const grabList = document.getElementById('lista-tarefas');

// Event listener
grabButton.addEventListener('click', addTodo);

// Functions
// Add to list function
function addTodo() {
	let createLi = document.createElement('li');
	createLi.innerText = grabInput.value;
	grabList.appendChild(createLi);
	grabInput.value = '';
	// If clicked, color grey
	for (let i = 0; i < grabList.children.length; i++) {
		grabList.children[i].addEventListener('click', function(e) {
			grabList.children[i].style.backgroundColor = 'rgb(128,128,128)';
		});
	}
}
