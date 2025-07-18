//10. How do you use map() to transform an array of objects into a new array with different properties?

const arr = [
    {name :"Rahul", age :"44"},{name: "Sneha", age:"21"}
]

const user = arr.map((val)=>{
    return{
    name: val.name,
    isAdult: val.age>=18,
    
    }
    
});

console.log(user);

