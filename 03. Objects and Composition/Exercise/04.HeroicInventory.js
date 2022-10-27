function solve(array) {
    const data = [];

    for (const str of array) {
        const currHero = {};
        currHero.name = str.split(' / ')[0];
        currHero.level = Number(str.split(' / ')[1]);
        currHero.items = [];
        if (str.split(' / ')[2] !== undefined) {
            const items = str.split(' / ')[2].split(', ');
            currHero.items = items;
        }
        data.push(currHero);
    }

    const myJSON = JSON.stringify(data);
    return myJSON;
}

function solve2(input) {
    let data = [];

    for (const hero of input) {
        let obj = {};

        let [name, level, items] = hero.split(' / ');
        obj.name = name;
        obj.level = Number(level);
        items !== undefined ? obj.items = items.split(', ') : obj.items = [];

        data.push(obj);
    }

    let dataJSON = JSON.stringify(data);
    return dataJSON;
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));
