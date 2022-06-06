function sum(number) {
    var number1 = 0;
    var number2 = 1;
    var temp;
    var result = number1 + number2;
    var count = 2;
    while (count < number) {
        temp = number1 + number2;
        number1 = number2;
        number2 = temp;
        result += temp;
        count++;
    }
    return result;
}
console.log(sum(10));
