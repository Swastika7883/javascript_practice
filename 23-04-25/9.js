//9. Write a function that takes an object as input and returns a specific property value.

let employee={
    name: "emp1",
    id: 101,
    salary : 20000,
    age : 33,
    role : "Developer"
}

function emp(obj, prop){
    return obj[prop];
}

let sal = emp(employee, "salary");
console.log(sal);