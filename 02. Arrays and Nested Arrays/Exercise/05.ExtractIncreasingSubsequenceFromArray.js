function solve(array){

    let current = Number.MIN_SAFE_INTEGER;
    let newArr = [];

    for(var i = 0; i < array.length; i++) {

        if(array[i] >= current){
            current = array[i];
            newArr.push(current);
        }
    }

    return newArr;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));

console.log(solve([1, 
        2, 
        3,
        4]
        ));

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));