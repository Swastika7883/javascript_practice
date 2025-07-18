//7. What is the purpose of the map() method in JavaScript, and how does it differ from forEach()?

//map() returns a new array , forEach() opperates with the array but does not return a new array

const nums = [1, 2, 3];
let sq = nums.map((val)=>{
    return(val*val)
}); 
console.log(sq);


let Sq= nums.forEach((val)=>{
    return (val*val)
});

console.log(Sq);