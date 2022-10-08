function addItem() {
    
    let content = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');
    liElement.textContent = content;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    let ulElements = document.getElementById('items');
    ulElements.appendChild(liElement);

    document.getElementById('newItemText').value = '';
}

function onDelete(event) {
    event.target.parentElement.remove();
}

