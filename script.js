let array = [''];

const otherTasks = document.querySelector('.other-tasks');
let task = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.button-add');
const sort = document.querySelector('.sort');

addTaskButton.addEventListener('click', addHandler);

sort.addEventListener('click', sortButtonChange);

function renderList() {
    otherTasks.innerHTML = '';
    array.forEach((item, index) => {
        otherTasks.append(createTaskElement(item, index));
    });
}

renderList();

function sortButtonChange(event) {
    event.target.classList.toggle('sort-up');

    if (event.target.classList.contains('sort-up')) {
        sortHandlerAscending();
    } else {
        sortHandlerDescending();
    }
};

function sortHandlerAscending() {
    array.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    })
    renderList();
}

function sortHandlerDescending() {
    array.sort((a, b) => {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    })
    renderList();
}

function addHandler() {
    if(!array.some(t => !t)){
        array.push('');
        renderList();
    }
    else{
        alert('Please enter some text');
    }
}

function createTaskElement(arrayEl, index) {
    let block = document.createElement('div');
    block.classList.add('task-block');
    let input = document.createElement('input');
    input.classList.add('task-input');

    let xButton = document.createElement('button');
    xButton.classList.add('x-button');
    xButton.addEventListener('click', xButtonHandler);

    input.value = arrayEl;
    input.id = index;

    input.addEventListener('input', ((event) => {
        let index = event.target.id;
        let value = event.target.value;
        array[index] = value;
    }));

    function xButtonHandler(event) {
        let taskToDelete = event.target.previousElementSibling;
        let parent = event.target.parentElement;

        array = array.filter(item => item != taskToDelete.value)

        if (array.length >= 1) {
            parent.remove();
        }
        else if (array.length = 0) {
            // console.log(array);
            // taskToDelete.value = null;
        }
    };

    block.append(input, xButton);
    return block
}

//array = array.filter((item, index) => item != array[index]);
//array = array.filter((item, index) => { item[index] != input.value[input.id] });