window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const todoList = document.getElementById('todo-list');
    const todoListInput = document.getElementById('todo-text-input');

    const items = [];

    form.addEventListener('submit', e => {
        e.preventDefault();
        const itemObj = {
            text: todoListInput.value,
        };

        items.push(itemObj);
        displayItems(items);
    });

    
    function displayItems(items) {
        for (let item of items) {
            const newItem = document.createElement('li');
            newItem.innerText = item.text;
            todoList.appendChild(newItem);
        }
    }

});
