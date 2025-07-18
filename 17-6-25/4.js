//4. How do you use filter() to remove null or undefined values from an array?

const arr = [1, null, 2, undefined, 3,5,7];
const clean = arr.filter(val => val != null); 

console.log(clean);
