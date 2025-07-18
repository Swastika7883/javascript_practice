//3. Can you explain the difference between map() and flatMap(), and when would you use each?

// map = it returns a new array 
//flatMap = maps each element and then flattens the result one level deep.


const arr = [1, 2, 3];
let doubleMap = arr.map(x => [x * 2]);       
let doubleFlat = arr.flatMap(x => [x * 2]);   

console.log(doubleMap);

console.log(doubleFlat);