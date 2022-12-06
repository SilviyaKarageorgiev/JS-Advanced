class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || !Number.isInteger(horsepower)
            || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredMileage) {

        let wantedCar = this.availableCars.find(c => c.model == model);

        if (wantedCar == undefined) {
            throw new Error(`${model} was not found!`);
        }

        let diff = wantedCar.mileage - desiredMileage;

        if (diff > 0 && diff <= 40000) {
            wantedCar.price -= wantedCar.price * 0.05;
        } else if (diff > 40000) {
            wantedCar.price -= wantedCar.price * 0.10;
        }

        const index = this.availableCars.findIndex(c => c.model === model);
        this.availableCars.splice(index, 1);

        this.soldCars.push({ model, horsepower: wantedCar.horsepower, price: wantedCar.price });
        this.totalIncome += wantedCar.price;
        return `${model} was sold for ${(wantedCar.price).toFixed(2)}$`;
    }

    currentCar() {

        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        let report = ['-Available cars:'];
        this.availableCars.forEach(c => report.push(`---${c.model} - ${c.horsepower} HP - ${(c.mileage).toFixed(2)} km - ${(c.price).toFixed(2)}$`));
        return report.join('\n');
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error('Invalid criteria!');
        }

        if (criteria === "horsepower") {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else if (criteria === "model") {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`];
        result.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${(c.price).toFixed(2)}$`))

        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



