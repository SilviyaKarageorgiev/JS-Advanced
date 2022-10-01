function solve(array) {
    const result = {};

    for (let index = 0; index < array.length; index += 2) {
        const product = array[index];
        const value = Number(array[index + 1]);        
        result[product] = value;
    }

    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));