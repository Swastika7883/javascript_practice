//9. Find Second Largest Number: Write a function that takes an array of numbers as input and returns the second largest number.

function secondLargest(arr){
    let L = -Infinity,  sL= -Infinity; 
    for(let i =0 ; i< arr.length; i++){
        if(arr[i]>L){
            sL=L;
            L= arr[i];
        }
        else if(arr[i]>sL && arr[i]<L){
            sL=arr[i];
        }


    }
    return sL;
}

let arr=[55,4,6,33,99,88,55,89,63]

console.log(secondLargest(arr));