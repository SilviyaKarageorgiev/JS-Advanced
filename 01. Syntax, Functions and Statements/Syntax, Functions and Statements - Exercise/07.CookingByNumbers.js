function solve(numAsString, operation1, operation2, operation3, operation4, operation5) {

    let number = Number(numAsString);

    let array = [operation1, operation2, operation3, operation4, operation5];

    for (let i = 0; i < array.length; i++) {
        
        let currOperation = array[i];
        
        if(currOperation === 'chop'){
            number /= 2;
        }
        else if(currOperation === 'dice'){
            number = Math.sqrt(number);
        }
        else if(currOperation === 'spice'){
            number++;
        }
        else if(currOperation === 'bake'){
            number *= 3;
        }
        else if(currOperation === 'fillet'){
            number *= 0.8;
        }

        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');