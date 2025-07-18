//3.Given an array of numbers [1, 2, 3, 4, 5], use the reduce() method to calculate the factorial of all numbers in the array.

let nums = [1,2,3,4,5]

let factorial = nums.reduce((prev, curr)=>{
    return prev*curr;
});

console.log(factorial);

