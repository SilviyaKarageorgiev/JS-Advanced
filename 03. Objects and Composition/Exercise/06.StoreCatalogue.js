function solve(input) {
    const data = {};

    for (const item of input) {
        const [product, price] = item.split(' : ');

        const letter = product[0];

        if (!data.hasOwnProperty(letter)) {
            data[letter] = {};
        }
        data[letter][product] = price;
    }

    const sortedLetters = Object.keys(data).sort((a, b) => a.localeCompare(b));

    for (const letter of sortedLetters) {
        console.log(letter);
        const sortedProducts = Object.keys(data[letter]).sort((a, b) => a.localeCompare(b));

        for (const product of sortedProducts) {
            console.log(`  ${product}: ${data[letter][product]}`);
        }
    }

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

// solve(['Banana : 2',
//     'Rubic's Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']);