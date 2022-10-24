function solve(num1, num2) {

  let maxNum = Math.max(num1, num2);

  for (let i = maxNum; i > 0; i--) {

    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

console.log(solve(15, 5));
console.log(solve(2154, 458));
