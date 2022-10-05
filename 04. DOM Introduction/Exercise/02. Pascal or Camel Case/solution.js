function solve() {

  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let textResult = '';

  if (namingConvention == 'Camel Case') {

    let arr = text.split(' ');

    for (let index = 0; index < arr.length; index++) {

      let currWord = '';
        currWord = arr[index].toLowerCase();
      if (index != 0) {
        currWord = currWord[0].toUpperCase() + currWord.substring(1);
      }
        textResult += currWord;
    }

  } else if (namingConvention == 'Pascal Case') {
    
    let arr = text.split(' ');

    for (let index = 0; index < arr.length; index++) {

      let currWord = '';
        currWord = arr[index].toLowerCase();
        currWord = currWord[0].toUpperCase() + currWord.substring(1);
        textResult += currWord;
    }

  } else {
    textResult = 'Error!';
  }

  result.innerText = textResult;
}