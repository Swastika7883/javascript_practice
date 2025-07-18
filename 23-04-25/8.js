//8. Use the filter method to create a new array with only the even numbers.

let num =[23,44,21,31,53,57,76,2,8]

let evenNum = num.filter((val)=>{
    return val%2===0;
})

console.log(evenNum);