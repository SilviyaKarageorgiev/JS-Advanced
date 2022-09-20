function solve(input){

    let arr = [];

    for(let num of input){

        if(num < 0){
            arr.unshift(num);
        } else {
            arr.push(num);
        }
    }

    //arr.forEach(x => console.log(x));
    console.log(arr.join('\n'));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);