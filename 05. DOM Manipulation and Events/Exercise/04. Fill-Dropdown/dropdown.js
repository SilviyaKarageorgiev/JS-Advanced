function addItem() {
    
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let menu = document.getElementById('menu');
    let optionItem = document.createElement('option');
    
    menu.appendChild(optionItem);
    optionItem.textContent = `${newItemText.value} ${newItemValue.value}`;
    newItemText.value = '';
    newItemValue.value = '';
}