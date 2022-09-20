function solve (n, k) {

    let sum = 0;
    let arr = [1];

    for (let index = 1; index < n; index++) {
        
        let startIndex;
        arr.length - k < 0 ? startIndex = 0 : startIndex = arr.length - k;

        let currArr = arr.slice(startIndex, startIndex + k + 1);
        
        sum = currArr.reduce((total, current) => total + current);
        arr.push(sum);
    }
    return arr;
}

console.log(solve(6, 3));
console.log(solve(8, 2));