//10. Rotate Array: Write a function that takes an array and a number as 
// input and returns the array rotated by the specified number of positions.
function rotate(arr, num){
    let v =[];
    num = num % arr.length;
    let diff = arr.length - num; 

    for(let i = diff; i<arr.length; i++){
        v.push(arr[i]);
    }
    for(let i =0; i<diff ; i++){
        v.push(arr[i]);
    }
    arr = v;
    return arr;
}

let arr =[1,2,3,4,5,6]
let n =3;
console.log(rotate(arr, n));