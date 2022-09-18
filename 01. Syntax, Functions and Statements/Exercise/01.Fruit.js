function solve(fruit, weight, price){

    let weightKg = weight / 1000;
    let total = weightKg * price;

    console.log(`I need $${total.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);