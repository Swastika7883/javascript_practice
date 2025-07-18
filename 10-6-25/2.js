// 1. Use logical operators to find whether the age of a person lies between 10 and 20

let age = 14;

if(age>10 && age<=20){
    console.log("age lies between 10 and 20")
}else{
    console.log("it does not lie btw 10 and 20")
}

//2. Demonstrate the use of switch case statements in JavaScript

let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Error: Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}


//3. Find whether a number is divisible by both 2 and 3
let num =66;
function checkDivisibility(num){
    if(num%2==0 && num%3 == 0){
        console.log("its divisible by both")
    }else{
        console.log("not divisible");
    }

}

//4. Find whether a number is divisible by either 2 or 3

function checkDivisibility(num){
    if(num%2==0 || num%3 == 0){
        console.log("its divisible by 2 or 3")
    }else{
        console.log("not divisible by any of them");
    }

}


//5.Print "You can Drive" or "You Cannot Drive" using ternary operator
let Age = 13;
let check = (Age>=18)? "you can drive":"you can not drive";

console.log(check);
