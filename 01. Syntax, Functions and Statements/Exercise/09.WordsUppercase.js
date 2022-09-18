function solve(text){

    return text.match(/\w+/g).join(", ").toUpperCase();
}

console.log(solve('Hi, how are you?'));
console.log(solve('hello'));
