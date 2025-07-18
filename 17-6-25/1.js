//1. What is the purpose of the filter() method in JavaScript, and how does it work?

//The filter() method creates a new array with all elements that pass the condition by the provided callback function.
let marks = [77,67,44,82,34,43,99,93];

let TopMarks = marks.filter((val)=>{
    return val>80;

})

console.log(TopMarks);
