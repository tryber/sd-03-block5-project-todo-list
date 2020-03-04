window.onload = function () {
  reloadList();
  addClickUpBtn(returnById('mover-cima'));
  function addClickUpBtn(element) {
    element.addEventListener('click', function () {
      moveUp(returnById('select'));
    });
  }
  addClickDownBtn(returnById('mover-baixo'));
  function addClickDownBtn(element) {
    element.addEventListener('click', function () {
      moveDown(returnById('select'));
    });
  }
  function moveUp(element) {
    if (element) {
      let elementFather = element.parentNode;
      elementFather.insertBefore(element, element.previousElementSibling);
    };
  }
  function moveDown(element) {
    if (element) {
      let elementFather = element.parentNode;
      if (element == elementFather.lastChild) {
        elementFather.insertBefore(element, elementFather.firstElementChild);
      } else {
        elementFather.insertBefore(element.nextElementSibling, element);
      };
    };
  }
  function reduceSize(string) {
    if (string.length > 30) {
      return string.substring(0,30) + '...';
    } else {
      return string;
    };
  }
  function showSaveTasks(task,status,number) {
    let textTask = addTextTask(createItem('td'), reduceSize(task));
    let lineTaskStatus = addTextTask(createItem('td'), status);
    let indiceTask = addTextTask(createItem('td'), number);
    let row=createItem('tr');
    let elementFather = returnById('feedbackSave');
    addElementInHTML(indiceTask,row);
    addElementInHTML(textTask,row);
    addElementInHTML(lineTaskStatus,row);
    addElementInHTML(row,elementFather);
    returnById('feedback').style.visibility='visible';
  }
  function removeTaskSaves() {
    if (returnById('list-void')) {
      deleteElement(returnById('list-void'));
    } else {
      let tasks = returnByTagName('tr');
      let sizeTasks = tasks.length;
      let position;
      for(position = 0; position < sizeTasks; position++) {
        deleteElement(tasks[0]);
      };
    };
  }
  function saveList() {
    let list = returnByTagName('li');
    let position;
    if (list.length == 0) {
      disableAllMainBtn();
      let elementFather = returnById('feedback');
      let informacao = createItem('span');
      informacao.innerHTML='Lista Vazia';
      informacao.id='list-void';
      addElementInHTML(informacao,elementFather);
      returnById('feedback').style.visibility='visible';
      filterBrightnesslight(returnById('feedback'));
    } else {
      for (position = 0; position < list.length; position++) {
        if (list[position].className == 'completed') {
          showSaveTasks(list[position].textContent, 'SIM',(position+1));
        } else {
          showSaveTasks(list[position].textContent, 'NÃO',(position+1));
        };
      };
      disableAllMainBtn();
      filterBrightnesslight(returnById('feedback'));
    };
  }
  function sendLocalStorage() {
    localStorage.clear();
    let list = returnByTagName('li');
    let position;
    for (position = 0; position < list.length; position++) {
      if (list[position].textContent != '') {
        localStorage.setItem('item'+ position, list[position].textContent);
      }
      if (list[position].className == 'completed') {
        localStorage.setItem('completed' + position, 1);
      } else {
        localStorage.setItem('completed' + position, 0);
      };
    };
  }
  function reloadList() {
    let position;
    for (position = 0; position < localStorage.length/2; position++) {
      let text = localStorage[ 'item' + position] ;
      let elementFather = returnById('lista-tarefas');
      let task = addTextTask(createItem('li'), text);
      if (localStorage['completed' + position] == '1') {
        markCompleted(task);
      };
      addElementInHTML(task, elementFather);
    };
  }
  addClickSaveBtn(returnById('salvar-tarefas'));
  function addClickSaveBtn(btn) {
    btn.addEventListener('click' , function () {
      saveList();
      filterBrightnessDark(returnByClassName('container')[0]);
    });
  }
  addClickDeleteCompletesBtn(returnById('btn-delete-completes'));
  function addClickDeleteCompletesBtn(btn) {
    btn.addEventListener('click', function () {
      deleteCompleted();
    });
  }
  addClickDeleteBtn(returnById('btn-delete-ALL'));
  function addClickDeleteBtn(btn) {
    btn.addEventListener('click', function () {
      deleteAllItem();
    });
  }
  addClickDeleteItemBtn(returnById('btn-delete-item'));
  function addClickDeleteItemBtn(btn) {
    btn.addEventListener('click', function () {
      if (returnById('select')) {
        deleteElement(returnById('select'));
      }
    });
  }
  function filterBrightnessDark(element){
    element.style.filter= 'brightness(40%)';
  }
  function filterBrightnesslight(element){
    element.style.filter= 'brightness(100%)';
  }
  function deleteAllItem() {
    let list = returnByTagName('li');
    let sizeList = list.length;
    let position;
    for (position = 0; position < sizeList; position++) {
      deleteElement(list[0]);
    };
  }
  function deleteCompleted() {
    let list = returnByClassName('completed');
    let sizeList = list.length;
    let i;
    for (i = 0; i<sizeList; i++) {
      deleteElement(list[0]);
    };
  }
  function returnByClassName(name) {
    return  document.getElementsByClassName(name);
  }
  function returnByTagName(name) {
    return document.getElementsByTagName(name);
  }
  function deleteElement(element) {
    element.parentNode.removeChild(element);
  }
  function addClickMarkCompleted(element) {
    element.addEventListener('dblclick', function () {
      markCompleted(this);
    })
  }
  function markCompleted(element) {
    if (element.className != 'completed') {
      element.className = 'completed';
    } else {
      element.className = '';
    };
  }
  function removeIdSelect(element) {
    element.style.background = '';
    element.removeAttribute('id');
  }
  function addClickLiSelect(element) {
    element.addEventListener('click', function () {
      if (returnById('select')) {
        removeIdSelect(returnById('select'));
        this.id = 'select';
        this.style.background = 'rgb(128,128,128)';
      } else {
        this.id = 'select';
        this.style.background = 'rgb(128,128,128)';
      }
    });
  }
  function disableAllMainBtn() {
    for (let indice of returnByClassName('btn-main')) {
      disableElement(indice);
    }
  }
  addClickCancelBtn(returnById('btn-cancel'));
  function addClickCancelBtn(element){
    element.addEventListener('click', function () {
      feedbackBtn();
      alert('Operação de salvar a tela cancelada');
    });
  }
  function feedbackBtn(){
    returnById('feedback').style.visibility='hidden';
    disableAllMainBtn();
    removeTaskSaves();
    filterBrightnesslight(returnByClassName('container')[0]);
  }
  addClickConfirmBtn(returnById('btn-confirm'));
  function addClickConfirmBtn(element) {
    element.addEventListener('click', function () {
      sendLocalStorage();
      feedbackBtn();
      alert('Lista Salva');
    });
  }
  function addTask() {
    let elementFather = returnById('lista-tarefas');
    let textInput = returnById('texto-tarefa').value;
    let taskLi = addTextTask(createItem('li'), textInput);
    addElementInHTML(taskLi, elementFather);
    returnById('texto-tarefa').value = '';
  }
  addClickInputBtn(returnById('criar-tarefa'));
  function addClickInputBtn(element) {
    element.addEventListener('click', function () {
      if (returnById('texto-tarefa').value) {
        addTask();
      }
    });
  }
  addKeyupTextInput(returnById('texto-tarefa'));
  function addKeyupTextInput(element) {
    element.addEventListener('keydown', function (){
      if (event.keyCode == 13){
        if (returnById('texto-tarefa').value) {
          addTask();
        }
      }
    });
  }
  function addElementInHTML(elementChild , elementFather) {
    elementFather.appendChild(elementChild);
  }
  function addTextTask(element, txt) {
    element.innerHTML = txt;
    addClickLiSelect(element);
    addClickMarkCompleted(element);
    return element;
  }
  function createItem(tag) {
    return document.createElement(tag);
  }
  function returnById(id) {
    return document.getElementById(id);
  }
  function disableElement(element) {
    if (element.disabled==false){
      element.disabled= true;
    } else {
      element.disabled= false;
    }
  };
}
