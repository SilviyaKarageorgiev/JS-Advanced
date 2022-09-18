function solve(number) {

    let numAsString = number.toString();

    let firstDigit = numAsString[0];
    let sum = Number(firstDigit);
    let isSame = true;

    for (let index = 1; index < numAsString.length; index++) {
        
        if(numAsString[index] !== firstDigit){

            isSame = false;
        }
        sum += Number(numAsString[index]);
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);