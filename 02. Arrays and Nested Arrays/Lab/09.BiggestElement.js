function solve(matrix){

    let biggest = Number.MIN_SAFE_INTEGER;

    for(let row = 0; row < matrix.length; row++){
        
        for(let col = 0; col < matrix[row].length; col++){
            let current = matrix[row][col];

            if(current > biggest){
            biggest = current;
            }
        }
    }

    return biggest;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));
   console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]   
   ));