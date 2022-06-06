function sum(number:number): number {
    let number1 = 0;
    let number2 = 1;
    let temp;
    let result = number1+number2;

    let count = 2;
    while (count<number){
       temp=number1+number2;
       number1=number2;
       number2=temp;
       result+=temp;
       count++;
    }
    return result;
}
console.log(sum(10));
