//7. Calculate Factorial: Write a function that takes a number as input and returns its factorial.

function factorial(num){
    let nums =1;
    for(let i=1; i<=num; i++){
        nums= nums*i;
    }
    return nums;
}

const fact = factorial(6)

console.log(fact);