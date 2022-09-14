function stringLengthAndAverage(str1, str2, str3){
    let count = 0;
    count = str1.length + str2.length + str3.length;

    console.log(count);
    console.log(Math.floor(count / 3));
}

stringLengthAndAverage('chocolate', 'ice cream', 'cake');
stringLengthAndAverage('pasta', '5', '22.3');