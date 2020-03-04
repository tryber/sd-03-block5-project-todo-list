window.onload = function() {
    reloadList();
    addClickInputBtn(returnById('new-task-btn'));
    addClickDeleteBtn(returnById('btn-delete-ALL'));
    addClickDeleteItemBtn(returnById('btn-delete-item'));
    addClickDeleteCompletesBtn(returnById('btn-delete-completes'));
    addClickSaveBtn(returnById('btn-save'));
    addClickDownBtn(returnById('btn-down'));
    addClickUpBtn(returnById('btn-up'));
    addClickConfirmBtn(returnById('btn-confirm'));
    addClickCancelBtn(returnById('btn-cancel'));
    addKeyupTextInput(returnById('new-task-input'));
    
    function addClickUpBtn(element) {
        element.addEventListener('click', function() {
            moveUp(returnById('select'));
        })
    }

    function addClickDownBtn(element) {
        element.addEventListener('click', function() {
            moveDown(returnById('select'));
        })
    }

    function moveUp(element) {
        if(element) {
            let moveUpV = element.parentNode;
            moveUpV.insertBefore(element, element.previousElementSibling);
        }
    }

    function moveDown(element) {
        if(element) {
            let moveDownv = element.parentNode;
            if(element == moveDownv.lastChild) {
                moveDownv.insertBefore(element, moveDownv.firstElementChild); 
            } else {
                moveDownv.insertBefore(element.nextElementSibling, element); 
            }
        }
    }
    
    function reduceSize(string) {
        if(string.length > 30) {
            return string.substring(0,30) + "...";
        } else {
            return string;
        }
    }
    
    function showSavedTasks(task,status,number) {
        let textTask = addTextTask(createItem("td"), reduceSize(task));
        let lineTaskStatus = addTextTask(createItem("td"), status);
        let indiceTask = addTextTask(createItem("td"), number);
        let row=createItem("tr");
        let elementFather = returnById('feedbackSave');
        addElementInHTML(indiceTask,row);
        addElementInHTML(textTask,row);
        addElementInHTML(lineTaskStatus,row);
        addElementInHTML(row,elementFather);
        returnById('feedback').style.visibility="visible";
    }
    
    function removeTaskSaves() {
        if(returnById('list-void')) {
            deleteE(returnById('list-void'));
        } else {
            let task = returnByTagName('tr');
            let size = task.length;
            let pos;
            for(pos = 0; pos < size; pos += 1) {
                deleteE(task[0]);
            }
        }
    }
    
    function saveList() {
        let list = returnByTagName('li');
        let position;
        if(list.length == 0) {
            disableAllMainBtn();
            let save = returnById('feedback');
            let intel = createItem("span");
            intel.innerHTML = "Lista Vazia";
            intel.id = "list-void";
            addElementInHTML(intel,save);
            returnById('feedback').style.visibility = "visible";
            filterBrightnesslight(returnById('feedback'));
        } else {
            for (position = 0; position < list.length; position ++) {
                if (list[position].className == "completed") {
                    showSavedTasks(list[position].textContent, "SIM",(position+1));
                } else {
                    showSavedTasks(list[position].textContent, "NÃO",(position+1));
                }
            }
            disableAllMainBtn();
            filterBrightnesslight(returnById('feedback'));
        }
    }
    
    function sendLocalStorage() {
        localStorage.clear();
        let list = returnByTagName('li');
        let position;
        for (position = 0; position < list.length; position++) {
            if(list[position].textContent != "") {
                localStorage.setItem('item'+ position, list[position].textContent);
            }
            if (list[position].className == "completed") {
                localStorage.setItem('completed' + position, 1);
            } else {
                localStorage.setItem('completed' + position, 0);
            }
        }
    }
    
    function reloadList() {
        let position;
        for(position = 0; position < localStorage.length/2; position++) {
            let text = localStorage[ "item" + position] ;
            let elementFather = returnById('ol-list');
            let task = addTextTask(createItem("li"), text);
            if (localStorage['completed' + position] == "1") {
                markCompleted(task);
            }
            addElementInHTML(task, elementFather);
        }
    }
    
    function addClickSaveBtn(btn) {
        btn.addEventListener('click' , function () {
            saveList();
            filterBrightnessDark(returnByClassName('container')[0]);
        })
    }
    
    function addClickDeleteCompletesBtn(btn) {
        btn.addEventListener('click', function() {
            deleteCompleted();
        })
    }
    
    function addClickDeleteBtn(btn) {
        btn.addEventListener('click', function() {
            deleteAllItem();
        })
    }
    
    function addClickDeleteItemBtn(btn) {
        btn.addEventListener('click', function() {
            if(returnById('select')) {
                deleteElement(returnById('select'));
            }
        })
    }
    
    function filterBrightnessDark(element){
        element.style.filter= "brightness(40%)";
    }

    function filterBrightnesslight(element){
        element.style.filter= "brightness(100%)";
    }
    
    function deleteAllItem() {
        let list = returnByTagName('li');
        let sizeList = list.length;
        let position;
        for(position = 0; position < sizeList; position++) {
            deleteElement(list[0]);
        }
    }
    
    function deleteCompleted() {
        let list = returnByClassName('completed');
        let sizeList = list.length;
        let i;
        for(i = 0; i<sizeList; i++) {
            deleteElement(list[0]);
        }  
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
        element.addEventListener('dblclick', function() {
            markCompleted(this);
        })
    }
    
    function markCompleted(element) {
        if(element.className != "completed") {
            element.className = "completed";
        } else {
            element.className = "";
        }
    }
    
    function removeIdSelect(element) {
        element.style.background = "";
        element.removeAttribute("id");
    }
    
    function addClickLiSelect(element) {
        element.addEventListener('click', function() {
            if(returnById('select')) {
                removeIdSelect(returnById('select'));
                this.id = "select";
                this.style.background = "rgb(66,76,85)";
            } else {
                this.id = "select";
                this.style.background = "rgb(66,76,85)";
            }
        })
    }
    
    function disableAllMainBtn() {
        for(let indice of returnByClassName('btn-main')) {
            disableElement(indice);
        } 
    }
    
    function addClickCancelBtn(element){
        element.addEventListener('click', function() {
            feedbackBtn();
            alert('Operação de salvar a tela cancelada');
        })
    }
    
    function feedbackBtn(){
        returnById('feedback').style.visibility="hidden";
        disableAllMainBtn();
        removeTaskSaves();
        filterBrightnesslight(returnByClassName('container')[0]);
    }
    
    function addClickConfirmBtn(element) {
        element.addEventListener('click', function() {
            sendLocalStorage();
            feedbackBtn();
            alert('Lista Salva');
        })
    }
    
    function addTask() {
        let elementFather = returnById('ol-list');
        let textInput = returnById('new-task-input').value;
        let taskLi = addTextTask(createItem("li"), textInput);
        addElementInHTML(taskLi, elementFather);
        returnById('new-task-input').value = "";
    }
    
    function addClickInputBtn(element) {
        element.addEventListener('click', function() {
            if(returnById('new-task-input').value) {
                addTask();
            }
        })
    }      
    function addKeyupTextInput(element) {
        element.addEventListener('keydown', function(){
            if(event.keyCode == 13){
                if(returnById('new-task-input').value) {
                    addTask();
                }
            }
        })
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
        if(element.disabled==false){
            element.disabled= true;
        } else {
            element.disabled= false;
        }
    }
}
