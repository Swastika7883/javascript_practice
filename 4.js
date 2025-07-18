//4. Use a for...in loop to iterate over an object's properties and log each property name and value to the console.

let obj1={
    name: "swastika",
    age:20,
    gender:"female"
}

for(let i in obj1){
    console.log(i, obj1[i]);
}