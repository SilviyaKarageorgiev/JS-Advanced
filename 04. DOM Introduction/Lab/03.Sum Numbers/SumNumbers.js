function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) + Number(num2);

    if(Number.isNaN(sum)){
        alert('Please enter numbers!')
    }

    let result = document.getElementById('sum').value = sum;
}
