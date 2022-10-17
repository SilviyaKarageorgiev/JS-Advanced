function solve(face, suit) {

    let result = '';

    switch (face) {
        case '2': result = '2'; break;
        case '3': result = '3'; break;
        case '4': result = '4'; break;
        case '5': result = '5'; break;
        case '6': result = '6'; break;
        case '7': result = '7'; break;
        case '8': result = '8'; break;
        case '9': result = '9'; break;
        case '10': result = '10'; break;
        case 'J': result = 'J'; break;
        case 'Q': result = 'Q'; break;
        case 'K': result = 'K'; break;
        case 'A': result = 'A'; break;
        default: throw new Error('Error');
    }

    switch (suit) {
        case 'S': result += '\u2660'; break;
        case 'H': result += '\u2665'; break;
        case 'D': result += '\u2666'; break;
        case 'C': result += '\u2663'; break;
        default: throw new Error('Error');
    }

    return result;
}

console.log(solve('A', 'S'));
console.log(solve('10', 'H'));
console.log(solve('1', 'C'));