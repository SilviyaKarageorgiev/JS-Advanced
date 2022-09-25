function solve(cityName, population, treasury){
    return city = {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };
}

console.log(solve('Tortuga',
7000,
15000
));
city.collectTaxes();
console.log(city.treasury);1
city.applyGrowth(5);
console.log(city.population);
