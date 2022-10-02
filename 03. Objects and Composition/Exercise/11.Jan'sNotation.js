function solve(input) {

    const list = [];

    for (const element of input) {

        if (Number.isInteger(element)) {
            list.push(element);

        } else {
            const operator = element;
            let second = list.pop();
            let first = list.pop();

            if (first == undefined || second == undefined) {
                console.log('Error: not enough operands!');
                break;
            }

            if (operator == '+') {
                list.push(first + second);

            } else if (operator == '-') {
                list.push(first - second);

            } else if (operator == '*') {
                list.push(first * second);

            } else if (operator == '/') {
                list.push(first / second);

            }

        }
    }

    if (list.length > 1) {
        console.log('Error: too many operands!');
    } else if(list.length == 1) {
        console.log(list[0]);
    } 
}

solve([3, 4, '+']);

solve([5, 3, 4, '*', '-']);

solve([7, 33, 8, '-']);

solve([15, '/']);