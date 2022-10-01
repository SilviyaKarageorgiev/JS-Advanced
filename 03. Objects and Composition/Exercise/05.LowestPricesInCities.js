function solve(input) {
    const obj = {};

    for (const text of input) {
        const productInfo = text.split(' | ');
        const townName = productInfo[0];
        const productName = productInfo[1];
        const price = Number(productInfo[2]);

        if (!obj.hasOwnProperty(productName)) {
            obj[productName] = { price, townName };
        } else {
            if (price < obj[productName].price) {
                obj[productName] = { price, townName };
            }
        }
    }

    for(let product in obj) {
        console.log(`${product} -> ${obj[product].price} (${obj[product].townName})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);