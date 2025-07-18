// practice

function sum(num1, num2){
    console.log (num1+ num2);
}

function mul(num1 , num2){
    console.log(num1*num2);
}

function calculator(num1, num2, callback){
    callback(num1,num2);
}

calculator(2,3, mul);