function solve(array){

    let ordered = array.sort((a, b) => {
        if(a.length === b.length){
            return a.localeCompare(b);
        } else {
        return a.length - b.length
        }
    });

    return ordered.forEach(x => console.log(x));
}

solve(['alpha', 
'beta', 
'gamma']
);

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

solve(['test', 
'Deny', 
'omen', 
'Default']
);