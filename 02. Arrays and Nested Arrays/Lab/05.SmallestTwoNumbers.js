function solve(input){

    let smallest = [];

    smallest = input.sort((a, b) => a - b)
                    .slice(0, 2)
                    .join(' ');

    console.log(smallest);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);