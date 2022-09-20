function solve(array, number){

    for (let i = 0; i < number; i++) {

        let current = array.pop();
        array.unshift(current);
    }

    return array.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));