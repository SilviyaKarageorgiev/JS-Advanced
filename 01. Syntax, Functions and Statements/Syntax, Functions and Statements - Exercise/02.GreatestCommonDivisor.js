function solve(num1, num2) {

    let commonDevisor;
    let biggerNum;
    
    if  (num1 > num2){
        biggerNum = num1;
    } else {
        biggerNum = num2;
    }

    for (let index = biggerNum; index > 0; index--) {
        
        if(num1 % index === 0 && num2 % index === 0) {
            commonDevisor = index;
            break;
        }
    }

    return commonDevisor;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));
