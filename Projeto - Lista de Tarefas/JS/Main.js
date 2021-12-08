let inputNewTask = document.querySelector('.input-quest');
let inputButtonTask = document.querySelector('.input-button');
let taskList = document.querySelector('.tasks-list');
let editWindow = document.querySelector('#edit-window');
let backgroundWindow = document.querySelector('#background-window');
let closeWindowButton = document.querySelector('.close-window');
let updateTaskButton = document.querySelector('.update-task');
let tastkEditID = document.querySelector('#edit-title');
let inputNameEdit = document.querySelector('.input-name-edit');

inputNewTask.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let userTask = {
            nome: inputNewTask.value,
            id: generatorID()
        }

        if (inputNewTask.value === '') {
            window.alert('[ERRO] - Task not found');
        } else {
            additionTask(userTask);
            createTagList(userTask);
        }
    }
});

closeWindowButton.addEventListener('click', (e) =>  {
    windowEditChoice();
})

updateTaskButton.addEventListener('click', (e) => {
    e.preventDefault();

    let userTaskID = tastkEditID.innerHTML.replace('#', '');

    let userTask = {
        nome: inputNameEdit.value,
        id: userTaskID
    }

    let currentTask = document.getElementById('' + userTaskID + '');

    if (currentTask) {
        let itemList = createTagList(userTask);
        taskList.replaceChild(itemList, currentTask);
        windowEditChoice();
    } else {
        window.alert('[ERRO 404] - Element not found');
    }
})

inputButtonTask.addEventListener('click', (e) => {
    let userTask = {
        nome: inputNewTask.value,
        id: generatorID()
    }

    if (inputNewTask.value === '') {
        window.alert('[ERRO] - Task not found');
    } else {
        additionTask(userTask);
        createTagList(userTask);
    }
})

function generatorID() {
    return Math.floor(Math.random() * 3000);
};

function additionTask(userTask) {
    let itemList = createTagList(userTask);
    taskList.appendChild(itemList);

    inputNewTask.value = '';
}

function createTagList(userTask) {
    let completeList = document.createElement('ul');
    completeList.classList.add('tasks-list');

    let itemList = document.createElement('li');
    itemList.classList.add('tasks-items-two');
    itemList.id = userTask.id


    let spanItem = document.createElement('span');
    spanItem.classList.add('task-text');
    spanItem.innerHTML = userTask.nome;

    let divItem = document.createElement('div');
    divItem.classList.add('edit-task-div');

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit-task-button-two');
    buttonEdit.innerHTML =  '<i class="fa fa-pencil"></i> ';
    buttonEdit.setAttribute('onclick', 'editTask('+ userTask.id +')');

    divItem.appendChild(buttonEdit);

    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('edit-task-button-two');
    buttonDelete.innerHTML = ' <i class="fa fa-trash"></i> ';
    buttonDelete.setAttribute('onclick', 'deleteTask('+ userTask.id +')');

    divItem.appendChild(buttonDelete);

    itemList.appendChild(spanItem);
    itemList.appendChild(divItem);

    return itemList;
}

const editTask = (userTaskID) => {
    let itemList = document.getElementById(userTaskID);

    if (itemList) {
        tastkEditID.innerHTML = '#' + userTaskID;
        inputNameEdit.value = itemList.innerText;
        windowEditChoice();
    } else {
        window.alert('[ERRO 404] - Element not found');
    }
}

const deleteTask = (userTaskID) => {
    let confirmationChoose = window.confirm(`Do you want to delete this task??`);

    if (confirmationChoose) {
        let itemList = document.getElementById(userTaskID);

        if (itemList) {
            taskList.removeChild(itemList);
        } else {
            window.alert('[ERRO 404] - Element not found');
        }
    }
}

const windowEditChoice = () => {
    editWindow.classList.toggle('open');
    backgroundWindow.classList.toggle('open');
}