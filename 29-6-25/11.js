//10. Rotate Array: Write a function that takes an array and a number as
//  input and returns the array rotated by the specified number of positions.

function rotate(arr, num){
    num = num % arr.length;
    return (arr.slice(num).concat(arr.slice(0, num)));
}

const arr=[1,2,3,4,45,5]
let n=3;

console.log(rotate(arr, n))