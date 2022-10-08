function addItem() {
    
    let content = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');
    liElement.textContent = content;

    let ulElements = document.getElementById('items');
    ulElements.appendChild(liElement);

    document.getElementById('newItemText').value = '';
}