function solve(array) {
    const data = [];

    for (const str of array) {
        const currHero = {};
        currHero.name = str.split(' / ')[0];
        currHero.level = Number(str.split(' / ')[1]);
        currHero.items = undefined;
        if (str.split(' / ')[2] !== undefined) {
            const items = str.split(' / ')[2].split(', ');
            currHero.items = items;
        }
        data.push(currHero);
    }

    const myJSON = JSON.stringify(data);
    return myJSON;
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));