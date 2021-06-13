'use strict';

const inputTaskElement = document.querySelector('.inputContainer > input');
const createBtn = document.querySelector('.inputContainer > button');

const taskList = document.getElementById('taskList');

const rexExpSpaces = /^\s*$/;

//добавляем валидацию, но другим способом
//используем деструктуризацию для определения значения, т.е. 
//({ target: {value}}) равноценно e.target.value
inputTaskElement.oninput = ({ target: {value}}) => {
    if (!rexExpSpaces.test(value)) {
        inputTaskElement.classList.add('valid');
        inputTaskElement.classList.remove('invalid');
    } else {
        inputTaskElement.classList.add('invalid');
        inputTaskElement.classList.remove('valid');
    }   
};

createBtn.addEventListener('click', createTaskHendler);

function createTaskHendler (e) {
    const {value} = inputTaskElement;
    inputTaskElement.classList.remove('valid');
    inputTaskElement.classList.remove('invalid');
    if (!rexExpSpaces.test(value)) {
        inputTaskElement.value = '';
        const taskListItem = createTaskItem(value);
        
        taskList.append(taskListItem);
    }
}

function createTaskItem (value) {
    const taskItem = document.createElement('li')
    
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.onclick = e => {
        delBtn.parentElement.remove();
    }
    taskItem.append(delBtn);

    taskItem.append(value);

    return taskItem;
}
