let input = document.getElementById('input');
let listContainer = document.getElementById('list')
function addTask() {
    if (input.value === '') {
        alert('you must write your task')
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;

        li.addEventListener('click', function () {
            li.classList.toggle('checked');
        });

        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveTask();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTask();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
