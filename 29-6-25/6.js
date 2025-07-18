//6. Remove Duplicates: Write a function that takes an array as input and returns an array with duplicates removed.

const arr=[2,2,2,2,3,4,4,4,6,7]

function noDuplicates(arr){
    return [...new Set(arr)]
}

const arr2 = noDuplicates(arr);

console.log(arr2);
