//5. Find Index of Element: Write a function that takes an array and an element as input
//  and returns the index of the element if found, and -1 otherwise.


function findIndex(arr, ele){
    return arr.indexOf(ele);

}

const arr =[3,5,88,2,11,3]
const e = 11;

console.log(findIndex(arr, e));