//7.Write a JavaScript function to calculate the sum of all elements in an array.

let arr =[1,2,3,4,5]


 function sums(arr){
    let sum =0;
    for(let i =0; i<arr.length; i++){
        sum+=arr[i];

    }
    console.log(sum);
 }

sums(arr);
