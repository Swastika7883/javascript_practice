//14.Filter out numbers less than 3 from the array [1, 2, 3, 4, 5] and then double the remaining numbers.

let array =[1,2,3,4,5]

let filArray = array.filter((val)=>{
    return val>=3;

})

let doubleArray = filArray.map((val)=>{
    return val*2;
})

console.log(doubleArray);