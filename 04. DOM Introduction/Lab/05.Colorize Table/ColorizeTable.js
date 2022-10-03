function colorize() {
    let elements = document.querySelectorAll('tr');
    let array = Array.from(elements);

    for(let i = 1; i <array.length; i+=2) {
        array[i].style.background = 'teal';
    }

}
