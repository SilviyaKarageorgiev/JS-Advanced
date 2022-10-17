function solve(arr, startIndex, endIndex) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if(startIndex < 0){
        startIndex = 0;
    }

    if(endIndex > arr.length - 1){
        endIndex = arr.length - 1;
    }

    let array = arr.slice(Number(startIndex), Number(endIndex + 1))
        .map(Number);

    let result = array.reduce((total, curr) => total + curr, 0);
    return result;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));