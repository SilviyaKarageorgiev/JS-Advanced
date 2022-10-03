function editElement(element, match, replacer) {
    
    const text = element.textContent;
    const result = text.split(match).join(replacer);
    element.textContent = result;
}

const element = document.querySelector('#e1');
editElement(element, '%insert name here%', 'There');