function solve(year, month, day){

    let myDate = new Date(year, month - 1, day - 1);
    
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
    
}

solve(2016, 9, 30);
solve(2016, 10, 1);

function solve2(year, month, day){
    
    let format = `${year}/${month}/${day}`;
    let myDate = new Date(format);
    myDate.setDate(myDate.getDate() - 1);
    
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
    
}

solve2(2016, 9, 30);
solve2(2016, 10, 1);