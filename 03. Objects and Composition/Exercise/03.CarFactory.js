function solve(wantedCar) {
    const engine = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }];

    const carriage = [
        { type: 'hatchback', color: wantedCar.color },
        { type: 'coupe', color: wantedCar.color }];

    const wheelSize = [];
    wheelSize.length = 4;
    wheelSize.fill(wantedCar.wheelsize % 2 !== 0 ? wantedCar.wheelsize : wantedCar.wheelsize - 1);

    const car = {};
    car.model = wantedCar.model;
    car.engine = engine.find(x => x.power >= wantedCar.power);
    car.carriage = carriage.find(x => x.type === wantedCar.carriage);
    car.wheels = wheelSize;

    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
