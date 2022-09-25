function solve(cityName, population, treasury){
    var city = {
        name: cityName,
        population: population,
        treasury: treasury
    };
    return city;
}

console.log(solve('Tortuga',
7000,
15000
));

console.log(solve('Santo Domingo',
12000,
23500
));
