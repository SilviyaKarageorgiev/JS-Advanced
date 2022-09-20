function solve(array, delimiter){

    let result = array.join(delimiter);
    return result;
}

console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
));

console.log(solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
));