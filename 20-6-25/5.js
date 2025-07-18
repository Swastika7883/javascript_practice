//5. Create a JavaScript Array of object with some key values after that print the objects and 
// then add another key value all of the objects and print the objects with new key value again

let array =[{name:"Ravi", age:12, gender:"M"},
    {name:"Komal", age:16, gender:"F"},{name:"Amit", age:20, gender:"M"}
]

console.log(array)

let value ={name:"abc", age:13, gender:"F"};

array.push(value);

console.log(array);
