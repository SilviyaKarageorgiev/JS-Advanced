function solve(array, first, second){

    let result = [];
    let startIndex;
    let secondIndex;

    for (let element of array) {
        
        if(element === first){
            startIndex = array.indexOf(element);
        } else if(element === second){
            secondIndex = array.indexOf(element);
        }
    }

    result = array.slice(startIndex, secondIndex + 1);

    return result;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));