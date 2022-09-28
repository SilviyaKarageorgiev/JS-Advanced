function solve(input){
    0;
    let array = input.map(Number);
    let sumArray = array.reduce((total, current) => total + current);
    let sumInverse = array.reduce((total, current) => total + 1/current, 0);
    let concatElements = array.join('');

    console.log(sumArray);
    console.log(sumInverse);
    console.log(concatElements);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);