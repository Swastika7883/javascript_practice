//call() = Calls a function immediately with a given this value and arguments (passed one by one).

let obj ={
    name : "Arjun",
    age:"10"
}

function greeting(city1, city2 , city3){
    console.log("hello", this.name, "i have lived in ",city1, city2 , city3);
}

greeting.call(obj, "delhi","Up","Pune");