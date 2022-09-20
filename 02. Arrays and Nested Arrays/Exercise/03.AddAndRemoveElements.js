function solve(array){

    let result = [];
    let number = 1;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if(command === 'add'){
            result.push(number);            
        } else if(command === 'remove'){
            result.pop();
        }
        number++;
    }

    return result.length === 0 ? console.log('Empty') : result.forEach(x => console.log(x));
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);
