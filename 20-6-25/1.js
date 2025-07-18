//1.Given an array of numbers [1, 2, 3, 4, 5, 6], use the filter() method to create a new array with only the even numbers.

let array = [1,2,3,4,5,6];

let even_nums = array.filter((num)=>{
    return num%2===0;
});

console.log(even_nums);
 